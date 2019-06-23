import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import {
  golfGreen,
  greenMineral,
  greySolitude,
  greyWhiteSmoke
} from "./constants/Colours";

export const Colors = {
  golfGreen: "#008763",
  greyWhiteSmoke: "#F8F8F8",
  greySolitude: "#E9ECEE",
  greenMineral: "#5a665c"
};

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
  const fontFamily = props.bold ? "Dosis-SemiBold" : "Dosis-Regular";
  return (
    <Text
      style={{
        fontFamily,
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
      {...props}
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
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export const Card = props => {
  return (
    <View
      style={{
        backgroundColor: props.clear ? "transparent" : "white",
        flex: null || props.flex,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        borderColor: props.clear ? "transparent" : greySolitude,
        borderWidth: 1,
        shadowColor: props.clear ? "transparent" : greenMineral,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 2,
        ...props.style
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
        borderBottomColor: props.white ? "white" : greySolitude,
        borderBottomWidth: 1,
        marginBottom: 10
      }}
    />
  );
};

export const Input = props => {
  return (
    <View>
      {props.label && (
        <Text
          style={{
            color: props.white ? "white" : greenMineral,
            opacity: 0.6,
            fontSize: 18,
            fontFamily: "Dosis-Regular"
          }}
        >
          {props.label}
        </Text>
      )}
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          {...props}
          placeholder={props.placeholder}
          autoCapitalize={props.autoCapitalize || "none"}
          style={{
            height: 50,
            flex: 1,
            borderColor: props.white ? "white" : "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            borderTopRightRadius: props.buttonText ? 0 : 5,
            borderBottomRightRadius: props.buttonText ? 0 : 5,
            borderColor: greySolitude,
            fontSize: 24,
            color: greenMineral,
            fontFamily: "Dosis-Regular",
            backgroundColor: props.white ? "white" : "transparent"
          }}
        />
        {props.buttonText && (
          <TouchableOpacity
            style={{
              padding: 10,
              height: 50,
              backgroundColor: golfGreen,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              display: "flex",
              justifyContent: "center"
            }}
            onPress={props.onButtonPress}
          >
            <Text
              style={{
                fontFamily: "Dosis-SemiBold",
                color: "white",
                fontSize: 18,
                textAlign: "center",
                ...props.textStyle
              }}
            >
              {props.buttonText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {props.error && (
        <Text style={{ fontSize: 14, color: "red" }}>{props.error}</Text>
      )}
    </View>
  );
};