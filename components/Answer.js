import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'


class Answer extends Component {

  render() {
    return (
      <View style={styles.container}> 
        <Text>The answer is: Answer</Text>
        <TouchableOpacity
            style={
              Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn
            }
            onPress={() => this.props.navigation.goBack()}
          >
          <Text style={styles.btnText}>Quiz</Text>
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
  btnText: {
    color: white,
    fontSize: 15,
    textAlign: "center"
  },
  
})

export default Answer;