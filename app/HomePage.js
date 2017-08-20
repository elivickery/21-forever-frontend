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

import Login from './containers/Login';
import Register from './containers/Register';
import User from './containers/User';
import Main from './containers/Main';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login"/>
      <Scene key="register" component={Register} title="Register"/>
      <Scene key="home" component={Home}/>
    </Scene>
  </Router>
);

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
        <Button title="Log In" onPress={this.></Button>

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
