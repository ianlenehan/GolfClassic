import React from "react";
import { createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import { golfGreen } from "../constants/Colours";
import DashboardScreen from "../Dashboard/DashboardScreen";
import NewTournamentScreen from "../Tournaments/NewTournamentScreen";
import ResultsScreen from "../Results/ResultsScreen";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: golfGreen,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  },
  title: "Golf Classic!"
};

const RootStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    NewTournament: NewTournamentScreen
  },
  {
    defaultNavigationOptions
  }
);

export default RootStackNavigator;
