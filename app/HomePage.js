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

import Login from '../login';
import Register from '../register';
import Home from '../home';
import Root from '../root';

const App = StackNavigator({
  Home: { screen: Root },
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
        <Text style={styles.welcome}>
          Make It Happen
        </Text>
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