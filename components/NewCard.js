import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Picker } from 'react-native'
import { purple, white } from '../utils/colors'

import { connect } from 'react-redux'
import { saveCardToDeck} from '../actions'

import { addCardToDeck } from '../utils/api'



class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      question: '',
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
    )

    this.props.navigation.navigate(
      'Deck',
      { keyID: keyID }
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Text style={styles.texts}>Question</Text>
          <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder="New question here"
          />
        </View>

        <View style={styles.secondView}>
          <Text style={styles.texts}>Answer</Text>
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

        <View style={styles.thirdView}>
          <TouchableOpacity
            style={styles.AndroidCreateBtn}
            onPress={this.create}
            >
            <Text style={styles.createBtnText}>Create</Text>
          </TouchableOpacity>
        </View>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  AndroidCreateBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  createBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  texts :{
    fontSize: 20,
    fontFamily: 'serif'
  },
  firstView: {
    flex: 1,
    alignItems: "center"
  },
  secondView: {
    flex: 1
  },
  thirdView: {
    flex: 1
  }
  
})


export default connect()(NewCard);