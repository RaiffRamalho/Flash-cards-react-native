import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { lightPurp, white } from '../utils/colors'

class Answer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const answer = this.props.navigation.state.params.answer

    return (
      <View style={styles.container}> 
        <Text style={styles.texts}>The answer is: {answer}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: 'center',

  },
  AndroidBtn: {
    backgroundColor: lightPurp,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  texts :{
    fontSize: 20,
    fontFamily: 'serif'
  }
  
})

export default Answer;