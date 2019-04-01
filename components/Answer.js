import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white, red, green } from '../utils/colors'


class Answer extends Component {

  submitAnswer = () => {
    this.props.navigation.goBack()
  };

  render() {
    return (
      <View style={styles.container}> 
        <Text>The answer is: Answer</Text>
        
        <Text></Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosCorrectBtn : styles.AndroidCorrectBtn
          }
          onPress={this.submitAnswer}
        >
          <Text style={styles.btnText}>Corret</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosIncorrectBtn : styles.AndroidIncorrectBtn
          }
          onPress={this.submitAnswer}
        >
          <Text style={styles.btnText}>Incorret</Text>
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
    height: 35,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 35,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
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

export default Answer;