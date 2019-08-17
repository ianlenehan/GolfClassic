import React, { Component } from "react";
import firebase from "react-native-firebase";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import RootNavigator from "./src/navigation/RootNavigator";
import LoginScreen from "./src/auth/LoginScreen";
import AppContext from "./src/utils/AppContext";
import { Loading } from "./src/common";

const MainApp = createAppContainer(RootNavigator);

class App extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      authUser: null,
      currentUser: null,
      loading: true
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(async authUser => {
      const currentUserSnap = await firebase
        .firestore()
        .collection("users")
        .doc(authUser._user.uid)
        .get();

      this.setState({
        authUser,
        currentUser: currentUserSnap.data(),
        loading: false
      });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    if (this.state.loading) return <Loading size="large" />;
    if (!this.state.authUser) {
      return <LoginScreen />;
    }
    const { currentUser, authUser } = this.state;
    return (
      <AppContext.Provider value={{ authUser, currentUser }}>
        <MainApp />
      </AppContext.Provider>
    );
  }
}

export default App;
