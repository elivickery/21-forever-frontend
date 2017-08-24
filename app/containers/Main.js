import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { Container, Title, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {

  render() {
  return (
    <Container style={styles.container}>
        <Image
          source={require('././logo.png')}
        />
        <Button block info style={styles.hasmargin} onPress={() => Actions.login()}>
          <Text>Log In</Text>
        </Button>
        <Button block info style={styles.hasmargin} onPress={() => Actions.register()}>
          <Text>Register</Text>
        </Button>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  }

});

