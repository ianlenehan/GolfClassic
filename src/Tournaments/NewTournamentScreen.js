import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { firestore } from "react-native-firebase";
import { Button, Container, Card, H1, Input, Spacer } from "../common";
import { greenMineral, greySolitude } from "../constants/Colours";
import Icon from "react-native-vector-icons/FontAwesome";
import { green } from "ansi-colors";

function NewTournamentScreen() {
  const [invitees, setInvitees] = useState(["ianlenehan@gmail.com"]);
  const [emailAddress, setEmailAddress] = useState("");
  const [validationError, setValidationError] = useState(null);
  const [title, setTitle] = useState("");

  const handleTitleChange = ({ nativeEvent }) => {
    setTitle(nativeEvent.text);
  };

  const handleEmailAddressChange = ({ nativeEvent }) => {
    setEmailAddress(nativeEvent.text);
  };

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const addInvitee = () => {
    if (validateEmail(emailAddress)) {
      setValidationError(null);
      setInvitees([...invitees, emailAddress]);
      setEmailAddress("");
    } else {
      setValidationError("Please provide a valid email address");
    }
  };

  const removeInvitee = invitee => {
    const newInvitees = invitees.filter(i => i !== invitee);
    setInvitees(newInvitees);
  };

  const handleSaveTournament = () => {
    const db = firestore();
    db.collection("tournaments")
      .add({
        title
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Container solid>
      <Card flex={1}>
        <H1>New Tournament</H1>
        <Spacer size={3} />
        <View style={styles.form}>
          <Input
            label={"Tournament Name"}
            placeholder="Hacker's Classic"
            onChange={handleTitleChange}
            value={title}
          />
          <Spacer size={2} />
          <Input
            label={"Invite Players"}
            placeholder="Enter email address..."
            onChange={handleEmailAddressChange}
            value={emailAddress}
            buttonText="ADD"
            onButtonPress={addInvitee}
            error={validationError}
          />
          <Spacer />
          {invitees.length > 0 &&
            invitees.map(invitee => {
              return (
                <View key={invitee} style={styles.invitee}>
                  <Text style={styles.inviteeText}>{invitee}</Text>
                  <TouchableOpacity onPress={() => removeInvitee(invitee)}>
                    <Icon style={styles.inviteeText} name="times" />
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>

        <Button white onPress={handleSaveTournament}>
          SAVE NEW TOURNAMENT
        </Button>
      </Card>
    </Container>
  );
}

NewTournamentScreen.navigationOptions = {
  title: "New Tournament"
};

export default NewTournamentScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  invitee: {
    backgroundColor: greySolitude,
    borderRadius: 15,
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  inviteeText: {
    color: greenMineral
  }
});
