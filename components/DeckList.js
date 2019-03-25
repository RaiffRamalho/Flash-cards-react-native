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

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    };
  }

  componentDidMount () {
    getDecks().then(result => {
      console.log("result", result)
      let newData = result ? Object.values(result) : []
      this.setState({data: newData})
    });
  }

  componentWillUpdate(){
    console.log("will update")
    getDecks().then(result => {
      console.log("result", result)
      let newData = result ? Object.values(result) : []
      this.setState({data: newData})
    });
  }

  cleanStorage = () => {
    cleanStorage();
  };

  render() {
    
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
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

export default DeckList;