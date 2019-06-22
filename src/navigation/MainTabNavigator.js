import React from "react";
import { Platform } from "react-native";
import { golfGreen } from "../constants/Colours";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Colours from "../constants/Colours";
import { Icon } from "react-native-elements";

import DashboardScreen from "../Dashboard/DashboardScreen";
import ResultsScreen from "../Results/ResultsScreen";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: golfGreen
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  },
  title: "Golf Classic!"
};

const TournamentsStack = createStackNavigator(
  { DashboardScreen },
  {
    defaultNavigationOptions,
    navigationOptions: {
      tabBarLabel: "Tournaments"
      // tabBarIcon: ({ focused, tintColor }) => {
      //   return <Icon name="golf" />;
      // }
    }
  }
);

const ResultsStack = createStackNavigator(
  { ResultsScreen },
  {
    defaultNavigationOptions,
    navigationOptions: {
      tabBarLabel: "Results"
    }
  }
);

export default createBottomTabNavigator({ TournamentsStack, ResultsStack });
