import React from "react";
import { View, Text, Button } from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { Spacer } from "../common";

export default function EmojiPickerScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Spacer size={6} />
      <EmojiSelector onEmojiSelected={emoji => console.log(emoji)} />
    </View>
  );
}

// use context to record saved emoji!
