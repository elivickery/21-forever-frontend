import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import {
  Router,
  Scene,
  Actions,
  Modal
} from 'react-native-router-flux';
import axios from 'axios';

import Login from './containers/Login';
import Register from './containers/Register';
import User from './containers/User';
import Main from './containers/Main';
import Popup from './containers/Popup'
import Goal from './containers/Goals'
import Profile from './containers/Profile';
import CompletionPage from './containers/CompletionPage'


export default class make_it_happen_frontend extends Component {

  constructor() {
    super()

    this.state = {
      accessToken: null,
      logged_in: false
    }


    this.authenticateUser = this.authenticateUser.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  authenticateUser(email, password) {
    axios.post('https://make-it-happen-api.herokuapp.com/api/login', {
        email: email,
        password: password
    })
    .then((response) => {
      if (response.data.found) {
        this.setState({
          accessToken: response.data.accessToken,
          logged_in: true
        });
        Actions.user({accessToken: this.state.accessToken});
      } else {
        this.setState({
          logged_in: false
        });
        Alert.alert(
          'Invalid input',
          'Invalid username and/or password ',
          [{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}]
        )
      }
    })
    .catch(function (error) {
      console.log(error.response);
    });
 }


  createUser(username, email, password) {

    axios.post('https://make-it-happen-api.herokuapp.com/api/users', {
        username: username,
        email: email,
        password: password
    })
    .then((response) => {
      this.setState({
        accessToken: response.data.accessToken,
        logged_in: true
      });
      Actions.user({accessToken: this.state.accessToken});
    })
    .catch(function (error) {
      console.log(error.response);
    });
 }

 updateUser(email, password, token) {

    axios.put('https://make-it-happen-api.herokuapp.com/api/users/update', {
        access_token: token,
        email: email,
        password: password
    })
    .then((response) => {
      this.setState({
        accessToken: response.data.accessToken,
        logged_in: true
      });
      Alert.alert(
        'Update Successful',
        '',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}]
      )
      Actions.user({accessToken: this.state.accessToken});
    })
    .catch(function (error) {
      console.log(error.response);
    });
 }


  render() {

    return (
      <Router>

      <Modal hideNavBar>

        <Scene key="root">
          <Scene key="main"
            component={Main}
            hideNavBar
            title="Make It Happen"
            initial={!this.state.logged_in}
            panHandlers={null}
          />
          <Scene
            key="user"
            component={User}
            hideNavBar
            title="My Goals"
            initial={this.state.logged_in}
            accessToken={this.state.accessToken}
            panHandlers={null}
          />
          <Scene
            key="profile"
            component={Profile}
            title="Update Profile"
            accessToken={this.state.accessToken}
            updateUser={this.updateUser}
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
            createUser={this.createUser}
          />
          <Scene
            key="goals"
            component={Goal}
            title="New Goal"
            hideNavBar
          />
          <Scene
            key="completionpage"
            component={CompletionPage}
            title="Completion Page"
            hideNavBar
            // initial
          />
      </Scene>
      <Scene
        key="popup"
        component={Popup}
        title="Keep Going!"
      />
    </Modal>

    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
