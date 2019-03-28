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
    getDecks().then(result => {
      let newData = result ? Object.values(result) : []
      
      this.props.dispatch(receiveDecks(newData))
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
          data={data.length > 0 ? data : this.state.data}
          renderItem={({item}) =>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'Deck',
            item
            )}
            >
            
            <View style={styles.item}> 
              <Text>{item.title}</Text>
              <Text>{item.questions.length} Cards</Text>
            </View>
          </TouchableOpacity>}
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


function mapStateToProps (state) {  
  console.log(state)
  return {
    data: Object.values(state)
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
    padding: 20
  },
  iosCleanBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidCleanBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  cleanBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
})


export default connect(
  mapStateToProps
)(DeckList) 
