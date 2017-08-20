import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AlertIOS
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: 'Enter your email',
      password: 'Enter your password',
      userId: null
    }

    this.authenticateUser = this.authenticateUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this._onPressSignUpButton = this._onPressSignUpButton.bind(this)
  }

  authenticateUser(email, password) {
    axios.post('https://make-it-happen-api.herokuapp.com/api/login', {
        email: email,
        password: password
    })
    .then((response) => {
      this.setState({
        userId: response.data.id
      })
    })
    .catch(function (error) {
      console.log(error);
    });
 }


  loginUser(){
    this.authenticateUser(this.state.email, this.state.password)
  }

  _onPressSignUpButton(){
    this.updateCurrentPage("SignUpPage")
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Log In</Text>
      <TextInput
          placeholder="email"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor='#949799'
          returnKeyType="go"
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={this.loginUser}
        />
        <Button title="Go" onPress={this.loginUser}>
        </Button>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width:200,
    padding: 20,
    margin: 10,
  }
});
