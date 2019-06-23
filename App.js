import React, { Component } from "react";
import firebase from "react-native-firebase";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import RootNavigator from "./src/navigation/RootNavigator";
import LoginScreen from "./src/auth/LoginScreen";

const MainApp = createAppContainer(RootNavigator);

class App extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    if (!this.state.user) {
      return <LoginScreen />;
    }

    return <MainApp />;
  }
}

export default App;
