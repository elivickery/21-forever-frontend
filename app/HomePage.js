import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  Router,
  Scene
} from 'react-native-router-flux';

import Login from './containers/Login';
import Register from './containers/Register';
import User from './containers/User';
import Main from './containers/Main';

export default class make_it_happen_frontend extends Component {

  render() {

    return (
      <Router>
        <Scene key="root">
        <Scene key="main"
          component={Main}
          title="Make It Happen"
          initial
        />
        <Scene
          key="login"
          component={Login}
          title="Login"
        />
        <Scene
          key="register"
          component={Register}
          title="Register"
        />
      </Scene>
    </Router>
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
