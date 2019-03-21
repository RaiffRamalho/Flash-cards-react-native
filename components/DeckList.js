import React, { Component } from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList, 
  TouchableOpacity } from 'react-native'
import { lightPurp } from '../utils/colors'


class DeckList extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { title: 'Deck 1',
              cards:  3
            },
            { title: 'Deck 2 ',
              cards:  2
            },
            { title: 'Deck 3',
              cards:  5
            },
          ]}
          renderItem={({item}) =>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate(
              'Deck',
              item
            )}
            >
            <View style={styles.item}> 
              <Text>{item.title}</Text>
              <Text>{item.cards} Cards</Text>
            </View>
         
          </TouchableOpacity>}
          
        />
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
})

export default DeckList;