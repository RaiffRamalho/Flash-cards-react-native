import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform, TextInput, Picker } from 'react-native'
import { purple, white } from '../utils/colors'

import { connect } from 'react-redux'
import { saveCardToDeck} from '../actions'

import { getDecks, addCardToDeck } from '../utils/api'



class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      question: 'Question',
      answer: 'Yes',
      answered: 'Not yet'
    };
  }


  create = () => {
    
    const {question, answer, answered} = this.state
    const { keyID } = this.props.navigation.state.params

    this.props.dispatch(saveCardToDeck(
      keyID,
      { 
        question: question,
        answer: answer,
        answered, answered
      }
    ))

    addCardToDeck(
      { 
        key: keyID,
        card : {
          question: question,
          answer: answer,
          answered, answered
        }
      }
    ).then(getDecks().then(result => {
    }))

    this.props.navigation.navigate(
      'Deck',
      { keyID: keyID }
    )
  };

  render() {
    return (
      <View style={styles.container}> 
        <Text>Question</Text>
        <TextInput
        style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(question) => this.setState({question})}
        value={this.state.question}
        />
        <Text></Text>
        <Text>Answer</Text>
        <View>

          <Picker
            selectedValue={this.state.answer}
            style={{height: 60, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({answer: itemValue})
            }>
            <Picker.Item key="Yes" label="Yes" value="Yes" />
            <Picker.Item key="No" label="No" value="No" />
          </Picker>
        </View>
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
  },iosCreateBtn: {
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


export default connect()(NewCard);