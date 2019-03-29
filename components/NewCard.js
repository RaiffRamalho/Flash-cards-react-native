import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform, TextInput } from 'react-native'
import { purple, white } from '../utils/colors'

import { connect } from 'react-redux'
import { addCard} from '../actions/cards'

import { addCardToDeck } from '../utils/api'



class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      question: 'Question',
      answer: 'Answer'
    };
  }

  create = () => {
    
    const {question, answer} = this.state
    const { keyID } = this.props.navigation.state.params

    addCardToDeck({
      deckID: keyID,
      question: question,
      answer: answer,
    })

    this.props.dispatch(addCard({
      deckID: keyID,
      question: question,
      answer: answer,
    }))

    this.props.navigation.navigate(
      'Deck',
      {
        keyID: keyID
      }
    )
  };

  render() {
    return (
      <View style={styles.container}> 
        <Text>Question</Text>
        <TextInput
        style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(question) => this.setState({question})}
        value={this.state.question}
        />
        <Text></Text>
        <Text>Answer</Text>
        <TextInput
        style={{height: 100, width:300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(answer) => this.setState({answer})}
        value={this.state.answer}
        />
        <Text></Text>       
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosCreateBtn : styles.AndroidCreateBtn
          }
          onPress={this.create}
        >
          <Text style={styles.createBtnText}>Create</Text>
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
  },iosCreateBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidCreateBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  createBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  
})

function mapStateToProps (state, { navigation }) {
  // const {decks} = state;
  // const { keyID } = navigation.state.params
  return {
    // deck: Object.values(decks).filter((deck) => (
    //   deck.title === keyID
    // )),

  }
}

export default connect()(NewCard);