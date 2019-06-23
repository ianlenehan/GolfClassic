import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { H1, H3, Body, Button, Card, Container, Spacer, HR } from "../common";
import { golfGreen, greenMineral, greySolitude } from "../constants/Colours";
import EmojiSelector from "react-native-emoji-selector";

const tournaments = [{ id: 1, name: "Chairman's Classic" }];

const DashboardScreen = ({ navigation: { navigate } }) => {
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
      <Card flex={1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View>
            <H1 green>SPUD</H1>
            <Body>Ian Lenehan</Body>
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
      <Card flex={1}>
        <H3 regular style={{ marginBottom: 10 }}>
          TOURNAMENTS
        </H3>
        <TouchableOpacity style={styles.tournament}>
          <H3 white underline>
            CHAIRMAN'S CLASSIC
          </H3>
          <Body white>Spud, Heff, Frosty, Turtle, Will</Body>
          <Body white>Last Competition: 10 Days Ago</Body>
        </TouchableOpacity>
        <View style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button white onPress={() => navigate("NewTournament")}>
            CREATE TOURNAMENT
          </Button>
        </View>
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
    borderRadius: 5
  }
});

export default DashboardScreen;
