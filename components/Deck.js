import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'


class Deck extends Component {

  render() {
    return (
      <View style={styles.container}>
          
        <Text>Deck 1</Text>
        <Text>3 Cards</Text>
            
        <TouchableOpacity
            style={
              Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn
            }
            onPress={() => this.props.navigation.navigate(
              'Quiz',
            )}
          >
          <Text style={styles.btnText}>Quiz</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
            style={
              Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn
            }
            onPress={() => this.props.navigation.navigate(
              'NewCard',
            )}
          >
          <Text style={styles.btnText}>Add Card</Text>
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
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidBtn: {
    backgroundColor: purple,
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
    fontSize: 22,
    textAlign: "center"
  },
  
})

export default Deck;