import React, { useContext, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import useAppContext from "../hooks/useAppContext";
import {
  H1,
  H3,
  Body,
  Button,
  Card,
  Container,
  Spacer,
  HR,
  Colors
} from "../common";
import StatCard from "./StatCard";
import { golfGreen, greenMineral, greySolitude } from "../constants/Colours";

const setPlayersInState = players => {};

function TournamentDashboardScreen({ navigation }) {
  const { tournament } = navigation.state.params;
  const { setAppState } = useAppContext();
  useEffect(() => {
    setAppState("players", navigation.state.params.tournament.players);
  }, [navigation.state.params.tournament.players]);

  console.log({ tournament });
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
      <StatCard title="Current Champion" />
      <StatCard title="Red Flag Holder" />
      <StatCard title="Golden Flag Totals" />
      <StatCard title="Golden Flag Averages" />
      <StatCard title="Red Flag Totals" />
      <StatCard title="Red Flag Averages" />
    </Container>
  );
}

export default TournamentDashboardScreen;

TournamentDashboardScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity>
      <Icon
        name="plus"
        color="white"
        containerStyle={{ marginRight: 25 }}
        onPress={() => navigation.navigate("NewRound")}
      />
    </TouchableOpacity>
  )
});
