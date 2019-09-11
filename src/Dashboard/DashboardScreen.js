import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { firestore } from "react-native-firebase";
import {
  H1,
  H3,
  Body,
  Button,
  Card,
  Container,
  Spacer,
  HR,
  Emoji
} from "../common";
import { golfGreen } from "../constants/Colours";
import useAppContext from "../hooks/useAppContext";

const DashboardScreen = ({ navigation: { navigate } }) => {
  const { currentUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    const db = firestore();
    let tournamentsRef = db.collection("tournament_player");
    const query = tournamentsRef.where("userId", "==", currentUser.id);

    try {
      let querySnap = await query.get();
      let fetchedTournaments = [];

      for (let i = 0; i < querySnap.docs.length; i++) {
        let tournament = await db
          .collection("tournaments")
          .doc(querySnap.docs[i].data().tournamentId)
          .get();
        fetchedTournaments.push({ ...tournament.data(), id: tournament.id });
      }
      setTournaments(fetchedTournaments);
    } catch (error) {
      console.log("Error fetching tournaments", error);
    }
  };

  const getPlayers = players => {
    return Object.keys(players)
      .map(playerId => {
        return players[playerId].nickName;
      })
      .join(", ");
  };
  // console.log({ tournaments });
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
          <Emoji symbol={currentUser.emoji} size="large" />
        </View>
        <HR />
        <Spacer />
        <View>
          <View style={styles.stat}>
            <Body bold>Last Round Played</Body>
            <Body>{currentUser.lastRoundDate || "N/A"}</Body>
          </View>
          <View style={styles.stat}>
            <Body bold>Last Round Score</Body>
            <Body>{currentUser.lastRoundScore || "N/A"}</Body>
          </View>
          <View style={styles.stat}>
            <Body bold>Highest Score</Body>
            <Body>{currentUser.highestScore || "N/A"}</Body>
          </View>
          <View style={styles.stat}>
            <Body bold>Lowest Score</Body>
            <Body>{currentUser.lowestScoore || "N/A"}</Body>
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
                  <Body white>{getPlayers(tournament.players)}</Body>
                  <Body white>
                    Last Competition: {tournament.lastCompetitionDate || "N/A"}
                  </Body>
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
          NEW TOURNAMENT
        </Button>

        <Button
          white
          onPress={() =>
            navigate("FindTournament", { refetch: fetchTournaments })
          }
        >
          JOIN TOURNAMENT
        </Button>
      </Card>
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
