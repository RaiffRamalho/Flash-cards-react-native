
import React, { Component } from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Platform } from 'react-native'
import { purple, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'

import { connect } from 'react-redux'
import { addDeck } from '../actions'


class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: 'Title',
      questions: [],
      indexOfActualQuestion: 0,
    };
  }

  create = () => {

    const key = this.state.title;
    const deck = this.state;

    this.props.dispatch(addDeck({
      [key]: deck
    }))

    saveDeckTitle({ key: this.state.title })

    this.props.navigation.navigate(
      'Deck',
      {keyID: this.state.title}
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Title</Text>
        <TextInput
        style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(title) => this.setState({title})}
        value={this.state.title}
        />
        <Text></Text>        
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosCreateBtn : styles.AndroidCreateBtn
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
  iosCreateBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidCreateBtn: {
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

export default connect()(NewDeck);