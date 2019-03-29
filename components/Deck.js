import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

import { connect } from 'react-redux'



class Deck extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    };
  }

  render() {

    const {deck, cards} = this.props;
    console.log(cards)

    return (
      <View style={styles.container}>
          
        <Text>{deck.title}</Text>
        <Text>{cards ? cards.length : []} Cards</Text>
            
        <TouchableOpacity
            style={
              Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn
            }
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              {deck: deck}
            )}
          >
          <Text style={styles.btnText}>Quiz</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
            style={
              Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn
            }
            onPress={() => this.props.navigation.navigate(
              'NewCard',
              {keyID: deck.title}
            )}
          >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center"
  },iosBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  
})


function mapStateToProps (state, { navigation }) {
  const {decks, cards} = state
  const { keyID } = navigation.state.params
  // console.log(cards)
  // console.log(keyID)
  // console.log(cards[keyID])
  return {
    deck: Object.values(decks).filter((deck) => (
      deck.title === keyID
    ))[0],
    cards: cards[keyID]
  }
}

export default connect(mapStateToProps)(Deck);