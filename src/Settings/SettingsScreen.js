import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  H1,
  H3,
  Body,
  Button,
  Card,
  Container,
  Spacer,
  Input,
  HR,
  Colors,
  Emoji
} from "../common";

function SettingsScreen({ navigation }) {
  return (
    <Container>
      <Card flex={1}>
        <H1>Settings</H1>
        <Spacer size={3} />
        <Input label="Full name" />
        <Spacer size={2} />
        <Input label="Nickname" />
        <TouchableOpacity onPress={() => navigation.navigate("EmojiPicker")}>
          <Emoji symbol="⛳️" size="large" />
          <Body>Choose your emoji</Body>
        </TouchableOpacity>
      </Card>
    </Container>
  );
}

export default SettingsScreen;
