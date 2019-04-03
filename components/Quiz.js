import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white, green, red  } from '../utils/colors'

import { connect } from 'react-redux'
import { incrementCardIndex, saveCardAnswer} from '../actions'



class Quiz extends Component {

  constructor(props) {
    super(props);
    // console.log("props", props)
    const {deck} = this.props
    this.state = deck
  }
  
  showAnswer = () => {

    const {deck} = this.props

    this.props.navigation.navigate(
      'Answer',
      { 
        onSelect: this.onSelect,
        'answer': deck.questions[deck.indexOfActualQuestion].answer
      }
    )
  }

  submitAnswer = (answer) => {

    const title = this.state.title
    // const indexUpdated = ++this.state.indexOfActualQuestion

    this.props.submitDispatchAnswer(
      title
      // indexUpdated
    )
  }
  componentWillReceiveProps(props) {
    console.log(props)
  }


  render() {
    const { deck }  = this.props
    console.log("render deck", deck)
    console.log("---------------------------------------")
    
    return (
      <View style={styles.container}> 
        <Text>{deck.indexOfActualQuestion}/{deck.questions.length} Question</Text>
        <Text>{deck.questions[deck.indexOfActualQuestion].question}</Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosShowBtn : styles.AndroidShowBtn
          }
          onPress={this.showAnswer}
        >
          <Text style={styles.btnShowText}>Flip Card</Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosCorrectBtn : styles.AndroidCorrectBtn
          }
          onPress={() => this.submitAnswer("Yes")}
        >
          <Text style={styles.btnText}>Corret</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosIncorrectBtn : styles.AndroidIncorrectBtn
          }
          onPress={() => this.submitAnswer("No")}
        >
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    // dispatching actions returned by action creators
    submitDispatchAnswer: (title) => {dispatch(incrementCardIndex(
      title
    ))}
  }
}

function mapStateToProps (state,{navigation}) {
  
  const deck  = state.decks[navigation.state.params.deck.title]
  console.log("map deck", deck)

  return {
    deck: deck
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
  iosCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  iosIncorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidIncorrectBtn: {
    backgroundColor: red,
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
    fontSize: 15,
    textAlign: "center"
  },
  
})



export default connect(mapStateToProps,mapDispatchToProps)(Quiz);