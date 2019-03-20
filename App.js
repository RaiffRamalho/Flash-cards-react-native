import React from 'react'
import { View, StatusBar } from 'react-native'
import TabsNav from './components/TabsNav'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { purple } from './utils/colors'
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
