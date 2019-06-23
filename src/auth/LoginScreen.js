import React, { useState } from "react";
import { Text, View } from "react-native";
import { auth } from "react-native-firebase";
import {
  Container,
  Card,
  H1,
  Body,
  Input,
  Button,
  Spacer,
  Colors
} from "../common";
import { TouchableOpacity } from "react-native-gesture-handler";

function LoginScreen() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [authType, setAuthType] = useState("login");
  const [validationError, setValidationError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // const authService = firebase.auth();

  const handleEmailAddressChange = ({ nativeEvent }) => {
    setEmailAddress(nativeEvent.text);
  };

  const handlePasswordChange = ({ nativeEvent }) => {
    setPassword(nativeEvent.text);
  };

  const handlePasswordConfirmationChange = ({ nativeEvent }) => {
    setPasswordConfirmation(nativeEvent.text);
  };

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(emailAddress, password);
    } catch (error) {
      setErrorMessage(
        "FORE! The email address or password you entered is incorrect."
      );
    }
  };

  const handleSignup = () => {
    if (password !== passwordConfirmation) {
      return setErrorMessage(
        "FORE! Password and Password Confirmation must be the same."
      );
    }
    try {
      auth().createUserWithEmailAndPassword(emailAddress, password);
    } catch (error) {
      setErrorMessage(
        "FORE! There was an error signing you up! Please try again."
      );
      console.log(error);
    }
  };

  return (
    <Container solid>
      <Spacer size={6} />
      <H1 white style={{ textAlign: "center" }}>
        Golf Classic!
      </H1>
      <Spacer size={3} />
      <Card flex={1} clear>
        <Input
          white
          label={"Email Address"}
          placeholder="fore@example.com"
          onChange={handleEmailAddressChange}
          value={emailAddress}
          error={validationError}
        />
        <Spacer size={2} />
        <Input
          white
          secureTextEntry
          label={"Password"}
          placeholder="s0m3thingS3cur3!"
          onChange={handlePasswordChange}
          value={password}
        />
        <Spacer size={2} />
        {authType === "signup" ? (
          <React.Fragment>
            <Input
              white
              secureTextEntry
              label={"Password Confirmation"}
              placeholder="Same as the password..."
              onChange={handlePasswordConfirmationChange}
              value={passwordConfirmation}
            />
            <Spacer size={2} />
            <TouchableOpacity onPress={() => setAuthType("login")}>
              <Body white style={{ textAlign: "center" }}>
                Already have an account? Click here to login.
              </Body>
            </TouchableOpacity>
          </React.Fragment>
        ) : (
          <TouchableOpacity onPress={() => setAuthType("signup")}>
            <Body white style={{ textAlign: "center" }}>
              No Account? Click here to create one?
            </Body>
          </TouchableOpacity>
        )}
        {errorMessage && (
          <View
            style={{
              backgroundColor: Colors.greyWhiteSmoke,
              padding: 5,
              borderRadius: 5,
              marginTop: 10
            }}
          >
            <Text style={{ color: "red", textAlign: "center" }}>
              {errorMessage}
            </Text>
          </View>
        )}
      </Card>
      <Card clear>
        {authType === "signup" ? (
          <Button onPress={handleSignup}>SIGN UP</Button>
        ) : (
          <Button onPress={handleLogin}>LOGIN</Button>
        )}
      </Card>
    </Container>
  );
}

export default LoginScreen;
