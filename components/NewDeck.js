
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
      title: '',
      questions: [],
      indexOfCurrentQuestion: 0,
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
        {/* <View style={{flex:1}}>
        </View> */}
        <View style={styles.textView}>
          <Text style={styles.titleText}>Title</Text>
          <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder="New title here"
          />
        </View>
        <Text></Text>
        <View style={styles.btnView}>
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
    alignItems: "center"
  },
  btnView:{
    flex:2
  },
  textView:{
    flex:1, alignItems: "center"
  },
  AndroidCreateBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  createBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center",
  },
  titleText :{
    fontSize: 20,
    fontFamily: 'serif'
  }
})

export default connect()(NewDeck);