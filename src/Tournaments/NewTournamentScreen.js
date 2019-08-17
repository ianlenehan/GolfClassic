import React, { useState, useContext } from "react";
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
import AppContext from "../utils/AppContext";

function NewTournamentScreen({ navigation }) {
  const [invitees, setInvitees] = useState([]);
  const [emailAddress, setEmailAddress] = useState("");
  const [validationError, setValidationError] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AppContext);

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

  const handleSaveTournament = async () => {
    const inviteeList = [...invitees, currentUser];
    try {
      setLoading(true);
      const db = firestore();
      const tournamentRef = await db.collection("tournaments").add({
        title,
        invitees: inviteeList
      });
      const tournament = await tournamentRef.get();
      const { refetch } = navigation.state.params;
      refetch();
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.error("Error creating tournament");
    }
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

        <Button white loading={loading} onPress={handleSaveTournament}>
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
