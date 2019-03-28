import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'


class Quiz extends Component {

  showAnswer = () => {
    console.log("submit")
    this.props.navigation.navigate(
      'Answer',
    )
  };

  

  render() {
    return (
      <View style={styles.container}> 
        <Text>2/3 Question</Text>
        <Text>Question 2</Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosShowBtn : styles.AndroidShowBtn
          }
          onPress={this.showAnswer}
        >
          <Text style={styles.btnShowText}>Show Answer</Text>
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

export default Quiz;