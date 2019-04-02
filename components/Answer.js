import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { purple } from '../utils/colors'


class Answer extends Component {

  constructor(props) {
    super(props);
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {

    const answer = this.props.navigation.state.params.answer

    return (
      <View style={styles.container}> 
        <Text>The answer is: {answer}</Text>
        
        <Text></Text>
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosCorrectBtn : styles.AndroidCorrectBtn
          }
          onPress={this.goBack}
        >
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
  }
  
})

export default Answer;