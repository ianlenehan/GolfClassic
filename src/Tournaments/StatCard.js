import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import { Colors, Card } from "../common";

// const _renderNameAndImage = () => {
//   if (this.props.data) {
//     const { data } = this.props
//     if (this.props.singlePlayer) {
//       return this._renderSinglePlayer(data)
//     } else if (data.players && data.players.length === 1) {
//       return this._renderSinglePlayer(data.players[0])
//     } else if (this.props.data.players) {
//       const nickNames = data.players.map((player) => {
//         return player.nick_name
//       })

//       return (
//         <View style={{ alignItems: 'center' }}>
//           <Text style={styles.subtitle}>{this.props.subtitle || ''}</Text>
//           {this._renderMostImage()}
//           <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 5 }}>
//             <Text style={styles.nickName}>{nickNames.join(', ')}</Text>
//             {this._subtitle()}
//           </View>

//           {this._renderStats()}
//         </View>
//       )
//     }
//   }
//   return <ActivityIndicator/>
// }

function StatCard(props) {
  const [showingStats, setShowingStats] = useState(false);

  const onPress = () => {
    if (props.allData) {
      setShowingStats(!showingStats);
    }
  };

  return (
    <Card>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Text style={styles.cardTitle}>{props.title.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
}

export default StatCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 32,
    fontFamily: "Dosis-Regular",
    fontWeight: "500",
    color: Colors.golfGreen,
    textAlign: "center"
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginTop: 3
  },
  nickName: {
    fontSize: 24,
    fontFamily: "gamja-flower"
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold"
  }
});
