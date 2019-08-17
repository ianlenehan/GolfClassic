import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import {
  H1,
  H3,
  Body,
  Button,
  Card,
  Container,
  Spacer,
  HR,
  Colors
} from "../common";
import StatCard from "./StatCard";
import { golfGreen, greenMineral, greySolitude } from "../constants/Colours";

function TournamentDashboardScreen({ navigation }) {
  const { tournament } = navigation.state.params;
  return (
    <Container>
      <View
        style={{
          backgroundColor: golfGreen,
          height: 125,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <StatCard title="Current Champion" />
      <StatCard title="Red Flag Holder" />
      <StatCard title="Golden Flag Totals" />
      <StatCard title="Golden Flag Averages" />
      <StatCard title="Red Flag Totals" />
      <StatCard title="Red Flag Averages" />
      {/* <Card flex={1}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: "Dosis-Regular",
            fontWeight: "500",
            color: Colors.golfGreen,
            textAlign: "center"
          }}
        >
          CURRENT CHAMPION
        </Text>
      </Card> */}
    </Container>
  );
}

export default TournamentDashboardScreen;

// import React from 'react';

// import Colours from '../constants/Colours'

// export default class Card extends React.Component {
//   state = {
//     showStats: false,
//     data: { players: [] },
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ data: nextProps.data })
//   }

//   _renderStats() {
//     if (this.state.showStats) {
//       const { allData } = this.props
//       return allData.map((player, i) => {
//         return (
//           <View key={i} style={{ flexDirection: 'row' }}>
//             <Text style={{ textAlign: 'right', flex: 1 }}>{player.playerName}</Text>
//             <Text style={{ fontWeight: 'bold', textAlign: 'left', flex: 1, marginLeft: 10 }}>{player.total}</Text>
//           </View>
//         )
//       })
//     }
//   }

//   _subtitle() {
//     if (this.props.subtitle) {
//       return (
//         <View style={styles.circle}>
//           <Text style={styles.subtitle}>{this.props.subtitle}</Text>
//         </View>
//       )
//     }
//   }

//   _renderSinglePlayer(player) {
//     return (
//       <View style={{ alignItems: 'center' }}>
//         <Image
//           source={{uri: player.avatar_url}}
//           style={styles.image}
//         />
//         <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 5 }}>
//           <Text style={styles.nickName}>{player.nick_name}</Text>
//           {this._subtitle()}
//         </View>
//         {this._renderStats()}
//       </View>
//     )
//   }

//   _renderMostImage() {
//     if (this.props.title === 'Most Hats') {
//       return (
//         <Image
//           source={require('../assets/images/pink_hat.png')}
//           style={styles.image}
//         />
//       )
//     }

//     return (
//       <Image
//         source={{uri: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/129/trophy_1f3c6.png'}}
//         style={styles.image}
//       />
//     )
//   }

//   _renderNameAndImage() {
//     if (this.props.data) {
//       const { data } = this.props
//       if (this.props.singlePlayer) {
//         return this._renderSinglePlayer(data)
//       } else if (data.players && data.players.length === 1) {
//         return this._renderSinglePlayer(data.players[0])
//       } else if (this.props.data.players) {
//         const nickNames = data.players.map((player) => {
//           return player.nick_name
//         })

//         return (
//           <View style={{ alignItems: 'center' }}>
//             <Text style={styles.subtitle}>{this.props.subtitle || ''}</Text>
//             {this._renderMostImage()}
//             <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 5 }}>
//               <Text style={styles.nickName}>{nickNames.join(', ')}</Text>
//               {this._subtitle()}
//             </View>

//             {this._renderStats()}
//           </View>
//         )
//       }
//     }
//     return <ActivityIndicator/>
//   }

//   render() {
//     return (
//       <TouchableOpacity onPress={this.onPress}>
//         <View style={styles.container}>
//           <Text style={styles.cardTitle}>
//             {this.props.title}
//           </Text>
//           {this._renderNameAndImage()}
//         </View>
//       </TouchableOpacity>
//     )
//   }
// }
