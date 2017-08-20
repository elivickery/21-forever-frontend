import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
// import make_it_happen_frontend from '../'

import Login from './sessions/login';
import Register from './sessions/register';
import Home from './sessions/home';
import Root from './sessions/root';
import MainPage from './MainPage'

const App = StackNavigator({
  Home: { screen: Home },
  Root: { screen: Root },
  Login: { screen: Login },
  Register: { screen: Register },

});

export default class make_it_happen_frontend extends Component {

  static navigationOptions = {
      title: 'Welcome',
    };

  render() {
    return (
      <View style={styles.container}>
        <MainPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});