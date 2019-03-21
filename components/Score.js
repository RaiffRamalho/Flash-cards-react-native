import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'


class Score extends Component {

  render() {
    return (
      <View style={styles.container}> 
        <Text>Score</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center"
  },iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidSubmitBtn: {
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

export default Score;