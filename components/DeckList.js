import React, { Component } from 'react'
import { 
  View, 
  StyleSheet, 
  Text,
  Platform, 
  FlatList, 
  TouchableOpacity } from 'react-native'
import { lightPurp, purple, white } from '../utils/colors'
import { getDecks, cleanStorage } from '../utils/api'

import { connect } from 'react-redux'
import { receiveDecks, removeDecks } from '../actions'


class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [{  
        title: "no",
        questions: []
      }]
    };
  }

  componentDidMount () {
    // cleanStorage();
    getDecks().then(result => {
      this.props.dispatch(receiveDecks(result))
    });
  }


  cleanStorage = () => {
    cleanStorage();
    this.props.dispatch(removeDecks())
  };

  render() {
    
    const { data } = this.props;

    return (
      <View style={styles.container}>

        <FlatList

          data={data}
          renderItem={({item}) =>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'Deck',
            { keyID : item.title }
            )}
            >
            
            <View style={styles.item}> 
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.titleText}>{item.questions.length} Cards</Text>
            </View>
          </TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
        />
      
        <TouchableOpacity
          style={
            Platform.OS === "ios" ? styles.iosCleanBtn : styles.AndroidCleanBtn
          }
          onPress={this.cleanStorage}
        >
          <Text style={styles.cleanBtnText}>Clean</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


function mapStateToProps ({decks}) {
  return {
    data: decks ? Object.values(decks) : []
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    alignItems: "center",
    backgroundColor: lightPurp,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 15,
    width: 200
  },
  AndroidCleanBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  cleanBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  titleText :{
    fontSize: 25,
    fontFamily: 'serif'
  }
})


export default connect(
  mapStateToProps
)(DeckList) 
