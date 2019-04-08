import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
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

    const {deck} = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.textView}>          
          <Text style={styles.titleText}>{deck ? deck.title : ""}</Text>
          <Text style={styles.titleText}>{deck.questions ? deck.questions.length : []} Cards</Text>
        </View>

        <View style={styles.btn1View}>
          <TouchableOpacity
              style={styles.AndroidBtn}
              onPress={() => this.props.navigation.navigate(
                'Quiz',
                {deck: deck}
                )}
                >
            <Text style={styles.btnText}>Quiz</Text>
          </TouchableOpacity>
          <Text>
            
          </Text>
          <TouchableOpacity
              style={styles.AndroidBtn}
              onPress={() => this.props.navigation.navigate(
                'NewCard',
                {keyID: deck.title}
                )}
                >
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center"
  },
  AndroidBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  btn1View: {
    flex: 1
  },
  titleText :{
    fontSize: 25,
    fontFamily: 'serif'
  }
  
})


function mapStateToProps (state, { navigation }) {
  const {decks} = state
  const { keyID } = navigation.state.params

  return {
    deck: decks ? decks[keyID] : {}
  }
}

export default connect(mapStateToProps)(Deck);