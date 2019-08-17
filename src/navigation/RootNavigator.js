import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import { golfGreen } from "../constants/Colours";
import DashboardScreen from "../Dashboard/DashboardScreen";
import NewTournamentScreen from "../Tournaments/NewTournamentScreen";
import TournamentDashboardScreen from "../Tournaments/TournamentDashboardScreen";
import ResultsScreen from "../Results/ResultsScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import EmojiPickerScreen from "../EmojiPicker/EmojiPickerScreen";

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

const TournamentTabNavigator = createBottomTabNavigator(
  {
    TournamentDashboard: TournamentDashboardScreen
  },
  {
    defaultNavigationOptions
  }
);

const MainStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    NewTournament: NewTournamentScreen,
    TournamentDash: TournamentTabNavigator,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions
  }
);

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStackNavigator
    },
    EmojiPicker: {
      screen: EmojiPickerScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStackNavigator;
