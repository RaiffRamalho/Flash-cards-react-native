import React, { Component } from 'react'
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from "../utils/helpers"

import { incrementCardIndex} from '../actions'
import { incrementIndex } from '../utils/api'


class Score extends Component {

  backToBegin = () => {
    const {navigation} = this.props
    this.props.navigation.navigate(
      'DeckList'
    )
    const title = navigation.state.params.title
    
    // incrementIndex({key: title, index: -1})
    this.props.dispatch(incrementCardIndex(title, -1))

    clearLocalNotification()
      .then(setLocalNotification)
    
  }

  render() {
    const {score} = this.props.navigation.state.params
    const {questionsNum} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.texts}>Score : {score} from {questionsNum} </Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={ styles.AndroidBackBtn }
            onPress={this.backToBegin}
          >
          <Text style={styles.btnText}>Back to Deck List</Text>
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
  AndroidBackBtn: {
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
  btnView: {
    flex: 1
  },
  textView: {
    flex: 2
  },
  texts:{
    fontSize: 20,
    fontFamily: 'serif'
  }
  
})

export default connect()(Score);