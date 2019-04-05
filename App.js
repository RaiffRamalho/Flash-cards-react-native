import React from 'react'
import { View, StatusBar } from 'react-native'
import TabsNav from './components/TabsNav'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewCard from './components/NewCard'
import Answer from './components/Answer'
import Score from './components/Score'
import { setLocalNotification, clearLocalNotification } from './utils/helpers'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'



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
  Score: {
    screen: Score,
    navigationOptions: ({ navigation }) => ({
      title: 'Score',
      headerLeft: null,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      
    }),
  },
}));

export default class App extends React.Component {

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
            <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
            <MainNavigator  />
        </View>
      </Provider>
    );
  }
}
