import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

import { connect } from 'react-redux'


class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      indexOfActualQuestion: 0,
      correct: false
    }
  }

  onSelect = data => {
    console.log(data)
    this.setState(data);
  };
  
  showAnswer = () => {

    const deck = this.props.navigation.state.params.deck

    this.props.navigation.navigate(
      'Answer',
      { 
        onSelect: this.onSelect,
        'answer': deck.questions[this.state.indexOfActualQuestion].answer
      }
    )
  }


  render() {
    const { deck } = this.props
    
    return (
      <View style={styles.container}> 
        <Text>{this.state.indexOfActualQuestion}/{deck.questions.length} Question</Text>
        <Text>{deck.questions[this.state.indexOfActualQuestion].question}</Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosShowBtn : styles.AndroidShowBtn
          }
          onPress={this.showAnswer}
        >
          <Text style={styles.btnShowText}>Flip Card</Text>
        </TouchableOpacity>
        <Text>{this.state.correct ? "Corect" : "Not Corect"}</Text>
        
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center"
  },iosShowBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 35,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidShowBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 35,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  btnShowText: {
    color: white,
    fontSize: 15,
    textAlign: "center"
  },
  
})

function mapStateToProps (state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck: deck ? deck : {}
  }
}

export default connect(mapStateToProps)(Quiz);