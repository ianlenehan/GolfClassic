import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import { auth, firestore } from "react-native-firebase";
import { H1, H3, Body, Button, Card, Container, Spacer, HR } from "../common";
import { golfGreen, greenMineral, greySolitude } from "../constants/Colours";
import EmojiSelector from "react-native-emoji-selector";
import AppContext from "../utils/AppContext";

const tournaments = [{ id: 1, name: "Chairman's Classic" }];

const DashboardScreen = ({ navigation: { navigate } }) => {
  const { authUser, currentUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [tournaments, setTournaments] = useState([]);
  const handleSignOut = async () => {
    await auth().signOut();
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    const tournamentsSnap = await firestore()
      .collection("tournaments")
      .get();

    const tournaments = tournamentsSnap.docs.map(t => {
      return { id: t.id, ...t.data() };
    });
    setTournaments(tournaments);
  };

  const getPlayers = invitees => {
    return invitees
      .map(invitee => {
        return invitee.nickName ? invitee.nickName : invitee;
      })
      .join(", ");
  };

  return (
    <Container>
      <View
        style={{
          backgroundColor: golfGreen,
          height: 125,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <Card flex={2}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View>
            <H1 green>{currentUser.nickName.toUpperCase()}</H1>
            <Body>{currentUser.fullName}</Body>
          </View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/potato_1f954.png"
            }}
          />
        </View>
        <HR />
        <Spacer />
        <View>
          <View style={styles.stat}>
            <Body bold>Last Round Played</Body>
            <Body>10 Days Ago</Body>
          </View>
          <View style={styles.stat}>
            <Body bold>Last Round Score</Body>
            <Body>32 Points</Body>
          </View>
          <View style={styles.stat}>
            <Body bold>Highest Score</Body>
            <Body>32 Points</Body>
          </View>
          <View style={styles.stat}>
            <Body bold>Lowest Score</Body>
            <Body>21 Points</Body>
          </View>
        </View>
      </Card>
      <Spacer size={2} />
      <Card flex={3}>
        <H3 regular style={{ marginBottom: 10 }}>
          TOURNAMENTS
        </H3>
        <ScrollView>
          {tournaments &&
            tournaments.length > 0 &&
            tournaments.map(tournament => {
              return (
                <TouchableOpacity
                  key={tournament.id}
                  style={styles.tournament}
                  onPress={() => navigate("TournamentDash", { tournament })}
                >
                  <H3 white underline>
                    {tournament.title.toUpperCase()}
                  </H3>
                  <Body white>{getPlayers(tournament.invitees)}</Body>
                  <Body white>Last Competition: 10 Days Ago</Body>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        <Button
          white
          onPress={() =>
            navigate("NewTournament", { refetch: fetchTournaments })
          }
        >
          CREATE TOURNAMENT
        </Button>
      </Card>
      <Button onPress={handleSignOut}>SIGN OUT</Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  stats: {
    marginTop: 30
  },
  stat: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5
  },
  tournament: {
    width: "100%",
    backgroundColor: golfGreen,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5
  }
});

export default DashboardScreen;

DashboardScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity>
      <Icon
        name="settings"
        color="white"
        containerStyle={{ marginRight: 25 }}
        onPress={() => navigation.navigate("Settings")}
      />
    </TouchableOpacity>
  )
});
