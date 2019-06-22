import React from "react";
import { createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import { golfGreen } from "../constants/Colours";
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

const RootStackNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    defaultNavigationOptions
  }
);

export default RootStackNavigator;
