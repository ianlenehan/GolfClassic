import React, { Component } from "react";
import firebase from "react-native-firebase";
import { createAppContainer } from "react-navigation";
import RootNavigator from "./src/navigation/RootNavigator";
import LoginScreen from "./src/auth/LoginScreen";
import AppContext from "./src/utils/AppContext";
import { Loading } from "./src/common";

const MainApp = createAppContainer(RootNavigator);

class App extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      loading: true,
      appState: {
        players: null,
        authUser: null,
        currentUser: null,
        emoji: null,
        setAppState: (key, value) => {
          this.setState({
            appState: {
              ...this.state.appState,
              [key]: value
            }
          });
        }
      }
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(async authUser => {
      let appState = {
        ...this.state.appState,
        authUser: null,
        currentUser: null
      };
      if (authUser) {
        const currentUserSnap = await firebase
          .firestore()
          .collection("users")
          .doc(authUser._user.uid)
          .get();

        appState = {
          ...this.state.appState,
          authUser,
          currentUser: { id: currentUserSnap.id, ...currentUserSnap.data() }
        };
      }
      return this.setState({
        appState,
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
    if (!this.state.appState.authUser) {
      return <LoginScreen />;
    }
    const {
      currentUser,
      authUser,
      players,
      emoji,
      setAppState
    } = this.state.appState;
    return (
      <AppContext.Provider
        value={{ authUser, currentUser, players, setAppState, emoji }}
      >
        <MainApp />
      </AppContext.Provider>
    );
  }
}

export default App;
