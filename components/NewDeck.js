
import React, { Component } from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Platform } from 'react-native'
import { purple, white } from '../utils/colors'


class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'title' };
  }

  create = () => {
    console.log("submit")
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Title</Text>
          <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
         <TouchableOpacity
            style={
              Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
            }
            onPress={this.create}
          >
          <Text style={styles.createBtnText}>Create</Text>
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
  },
  iosSubmitBtn: {
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

export default NewDeck;