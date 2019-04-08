import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { purple, white, green, red  } from '../utils/colors'

import { connect } from 'react-redux'
import { incrementCardIndex, saveCardAnswer} from '../actions'
import { incrementIndex, saveUserAnswer } from '../utils/api'


class Quiz extends Component {

  constructor(props) {
    super(props);
  }
  
  showAnswer = () => {

    const {deck} = this.props

    this.props.navigation.navigate(
      'Answer',
      { 
        'answer': deck.questions[deck.indexOfCurrentQuestion].answer
      }
    )
  }
  

  submitAnswer = (answer) => {

    const { deck }  = this.props

    saveUserAnswer({key: deck.title, indexOfCurrentQuestion: deck.indexOfCurrentQuestion, userAnswer: answer})
    this.props.submitDispatchAnswer(deck.title, deck.indexOfCurrentQuestion, answer )
    incrementIndex({key: deck.title, index:1})
    this.props.submitDispatchIndex(deck.title, 1)

  }

  checkScore = () => {
    let score = 0
    const { deck }  = this.props
    for(ind in deck.questions){
      deck.questions[ind].answer == deck.questions[ind].answered ? score+=1: score
    }
    return score
  }

  render() {
    const { deck, isEnded }  = this.props

    if(isEnded){  
      this.props.navigation.navigate('Score', 
      {
        'score': this.checkScore(),
        'title': deck.title,
        'questionsNum' : deck.questions.length
      })

    }

    return ( 
      <View style={styles.container}> 
        {!isEnded &&(
          <View>
            <View style={styles.textView}>
              <Text style={styles.texts}>{(deck.indexOfCurrentQuestion)+1} of {deck.questions.length} Questions</Text>
              <Text style={styles.texts}>{deck.questions[deck.indexOfCurrentQuestion].question}</Text>
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.AndroidShowBtn}
                onPress={this.showAnswer}
                >
                <Text style={styles.btnShowText}>Flip Card</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.AndroidCorrectBtn}
                onPress={() => this.submitAnswer("Yes")}
                >
                <Text style={styles.btnText}>Corret</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.AndroidIncorrectBtn}
                onPress={() => this.submitAnswer("No")}
                >
                <Text style={styles.btnText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>  

        )}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  
    submitDispatchIndex: (title, indexUpdated) => dispatch(incrementCardIndex(
      title, 
      indexUpdated
    )),
    submitDispatchAnswer: (title, currentIndex, answered) => dispatch(saveCardAnswer(
      title, 
      currentIndex, 
      answered
    ))
  
})

function mapStateToProps (state,{navigation}) {
  
  const deck  = state.decks[navigation.state.params.deck.title]

  let isEnded = deck.questions.length === deck.indexOfCurrentQuestion ? true : false

  return {
    deck: deck,
    isEnded : isEnded
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center"
  },
  AndroidShowBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  AndroidCorrectBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  AndroidIncorrectBtn: {
    backgroundColor: red,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  btnShowText: {
    color: white,
    fontSize: 15,
    textAlign: "center"
  },
  btnText: {
    color: white,
    fontSize: 20,
    textAlign: "center"
  },
  btnView: {
    flex: 1,
    justifyContent: 'space-around'
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  texts:{
    fontSize: 20,
    fontFamily: 'serif'
  }
  
})



export default connect(mapStateToProps,mapDispatchToProps)(Quiz);