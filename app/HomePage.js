import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';
import axios from 'axios';

import Login from './containers/Login';
import Register from './containers/Register';
import User from './containers/User';
import Main from './containers/Main';


export default class make_it_happen_frontend extends Component {

  constructor() {
    super()
    this.state = {
      userId: null
    }


    this.authenticateUser = this.authenticateUser.bind(this)
  }

  authenticateUser(email, password) {
    console.log('tracking authenticateUser');
    console.log(email)
    console.log(password)
    axios.post('https://make-it-happen-api.herokuapp.com/api/login', {
        email: email,
        password: password
    })
    .then((response) => {
      this.setState({
        userId: response.data.id
      })
      Actions.user();
    })
    .catch(function (error) {
      console.log(error);
    });
 }


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
            authenticateUser={this.authenticateUser}
          />
          <Scene
            key="register"
            component={Register}
            title="Register"
          />
          <Scene
            key="user"
            component={User}
            title="My Goals"
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
