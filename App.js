import React from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'
import TabsNav from './components/TabsNav'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewCard from './components/NewCard'
import Answer from './components/Answer'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: TabsNav,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: 'Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }),
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: ({ navigation }) => ({
      title: 'NewCard',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }),
  },
  Answer: {
    screen: Answer,
    navigationOptions: ({ navigation }) => ({
      title: 'Answer',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }),
  },
}));

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator  />
      </View>
    );
  }
}
