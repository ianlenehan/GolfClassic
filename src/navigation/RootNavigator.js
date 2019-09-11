import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MainTabNavigator from "./MainTabNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { golfGreen } from "../constants/Colours";
import DashboardScreen from "../Dashboard/DashboardScreen";
import NewTournamentScreen from "../Tournaments/NewTournamentScreen";
import TournamentDashboardScreen from "../Tournaments/TournamentDashboardScreen";
import FindTournamentScreen from "../Tournaments/FindTournamentScreen";
import PlayersScreen from "../Players/PlayersScreen";
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
  }
};

const TournamentTabNavigator = createBottomTabNavigator(
  {
    Stats: TournamentDashboardScreen,
    Players: PlayersScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Stats") {
          iconName = "ios-stats";
        } else if (routeName === "Players") {
          iconName = "ios-contacts";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      ...defaultNavigationOptions
    }),
    tabBarOptions: {
      activeTintColor: golfGreen,
      inactiveTintColor: "gray"
    }
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
  },
  {
    initialRouteName: "Dashboard"
  }
);

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStackNavigator
    },
    EmojiPicker: EmojiPickerScreen,
    FindTournament: FindTournamentScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStackNavigator;
