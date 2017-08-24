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
        <Button block style={styles.hasmargin} onPress={() => Actions.login()}>
          <Text style={styles.buttontext}>LOG IN</Text>
        </Button>
        <Button block style={styles.hasmargin} onPress={() => Actions.register()}>
          <Text style={styles.buttontext}>REGISTER</Text>
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
    backgroundColor: '#fff'
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: '#ffdf45'
  },
  buttontext: {
    color: '#000000'
  }

});

