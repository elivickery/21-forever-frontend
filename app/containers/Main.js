import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Make It Happen
      </Text>
      <Button title="Log In" onPress={() => Actions.login()}/>
      <Button title="Register" onPress={() => Actions.register()}/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
});

