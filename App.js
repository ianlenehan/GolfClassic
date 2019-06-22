import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import RootNavigator from "./src/navigation/RootNavigator";

export default createAppContainer(RootNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008763"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
