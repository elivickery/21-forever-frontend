import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';


export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.editUser = this.editUser.bind(this)
  }


  editUser(){
    this.props.updateUser(this.state.email, this.state.password, this.props.accessToken)
  }

  render() {
  return (
    <Container style={styles.container}>
        <Item>
          <Input
          placeholder="email"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email) => this.setState({email})}
          />
        </Item>
        <Item>
          <Input
            // keyboardType="default"
            placeholder="password"
            placeholderTextColor='#949799'
            returnKeyType="go"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(password) => this.setState({password})}
            ref={(input) => this.passwordInput = input}
            onSubmitEditing={this.editUser}
          />
         </Item>
        <Button block info style={styles.hasmargin} onPress={this.editUser}>
          <Text>Update</Text>
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
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width:200,
    padding: 3,
    margin: 10
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  }
});
