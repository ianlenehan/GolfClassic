import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  golfGreen,
  greenMineral,
  greySolitude,
  greyWhiteSmoke
} from "./constants/Colours";

export const H1 = props => {
  let color = greenMineral;
  if (props.white) color = "white";
  if (props.green) color = golfGreen;
  return (
    <Text
      style={{
        fontFamily: "Dosis-Light",
        fontSize: 42,
        color,
        ...props.style
      }}
    >
      {props.children}
    </Text>
  );
};

export const H3 = props => {
  let fontFamily = "Dosis-Regular";
  if (props.light) fontFamily = "Dosis-Light";
  if (props.bold) fontFamily = "Dosis-Bold";
  return (
    <React.Fragment>
      <Text
        style={{
          fontFamily,
          fontSize: 24,
          color: props.white ? "white" : greenMineral,
          ...props.style
        }}
      >
        {props.children}
      </Text>
      {props.underline && (
        <View
          style={{
            borderBottomColor: props.white ? "white" : greenMineral,
            borderBottomWidth: 1,
            marginBottom: 10
          }}
        />
      )}
    </React.Fragment>
  );
};

export const Body = props => {
  return (
    <Text
      style={{
        fontFamily: "Dosis-Regular",
        fontSize: 18,
        color: props.white ? "white" : greenMineral,
        ...props.style
      }}
    >
      {props.children}
    </Text>
  );
};

export const Container = props => {
  const backgroundColor = props.solid ? golfGreen : greyWhiteSmoke;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor,
        display: "flex",
        padding: 10,
        paddingBottom: 30,
        ...props.style
      }}
    >
      {props.children}
    </View>
  );
};

export const Button = props => {
  let primaryColor = golfGreen;
  let secondaryColor = "white";
  if (props.white) {
    primaryColor = "white";
    secondaryColor = golfGreen;
  }

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderColor: secondaryColor,
        backgroundColor: primaryColor,
        borderRadius: 5,
        borderWidth: 1,
        ...props.style
      }}
    >
      <Text
        style={{
          fontFamily: "Dosis-SemiBold",
          color: secondaryColor,
          fontSize: 18,
          textAlign: "center",
          ...props.textStyle
        }}
      >
        CREATE TOURNAMENT
      </Text>
    </TouchableOpacity>
  );
};

export const Card = props => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        padding: 10,
        borderColor: greySolitude,
        borderWidth: 1,
        shadowColor: greenMineral,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2
      }}
    >
      {props.children}
    </View>
  );
};

export const Spacer = props => {
  const size = props.size || 1;
  const height = size * 10;
  return <View style={{ height }} />;
};

export const HR = props => {
  return (
    <View
      style={{
        borderBottomColor: props.white ? "white" : greenMineral,
        borderBottomWidth: 1,
        marginBottom: 10
      }}
    />
  );
};
