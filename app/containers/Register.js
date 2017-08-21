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

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'Enter your username',
      email: 'Enter your email',
      password: 'Enter your password'
    }

    this.registerUser = this.registerUser.bind(this)
  }


  registerUser(){
    this.props.createUser(this.state.username, this.state.email, this.state.password)
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Register</Text>
      <TextInput
          placeholder="username"
          placeholderTextColor='#949799'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
        />
      <TextInput
          placeholder="email"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
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
        <Button title="Go" onPress={this.registerUser}>
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
    padding: 3,
    margin: 10
  }
});
