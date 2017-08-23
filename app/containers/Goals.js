import React, { Component } from 'react';
import { Picker, StyleSheet, AlertIOS } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

export default class Goal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            new_goal: '',
            category: 'Health'
        }
        this.createGoal = this.createGoal.bind(this)
    }
    createGoal(){
    axios.post('https://make-it-happen-api.herokuapp.com/api/goals', {
        category: this.state.category,
        title: this.state.new_goal,
        access_token: this.props.accessToken
    })
    .then(() => {
        Actions.user()
    })
    .catch(function (error) {
        console.log(error.response);
    });
    }
    render() {
        return (
        <Container>
        <Picker selectedValue={this.state.category} onValueChange={ (itemValue, itemIndex) => this.setState({ category: itemValue }) }>
            <Picker.Item label="Health" value="Health" />
            <Picker.Item label="Productivity" value="Productivity" />
            <Picker.Item label="Finances" value="Finances" />
            <Picker.Item label="Personal Growth" value="Personal Growth" />
            <Picker.Item label="Fitness" value="Fitness" />
        </Picker>
        <Item>
            <Input
                placeholder="Your Goal..."
                placeholderTextColor='#949799'
                returnKeyType="next"
                keyboardType="ascii-capable"
                autoCapitalize="none"
                autoCorrect={true}
                onChangeText={(new_goal) => this.setState({new_goal})}
            />
        </Item>
        <Button block info style={styles.hasmargin} onPress{this.createGoal()}>
            <Text>Create Goal</Text>
        </Button>
        </Container>
        )
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
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  }
});

