import React, { PropTypes, Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Days from './Days'
import axios from 'axios'
import { ListItem, Icon, Container, Title, Item, Input, Content, Button, Footer, Text, List, Fab } from 'native-base';
import Splashpage from './Splashpage'

export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentGoal: {}
    }
  }

  componentWillMount(){

     axios.get("https://make-it-happen-api.herokuapp.com/api/goals/current", {
      params: {
        access_token: this.props.accessToken
      }
    })
    .then((response)=> {

      this.setState({
        currentGoal: response.data.current_goal
      })

    })
    .catch(function (error) {

    });

  }


  //link new goal button when new submit goal form is established.
  render () {
    let userInterface;

    userInterface = (<Days title={this.state.currentGoal.title} day={22} accessToken={this.props.accessToken}/>)

    return (
      <Container style={styles.container}>
        <Text style={styles.xbutton} onPress={() => Actions.user()}>X</Text>
        <Title style={styles.goalTitle}>You Did It!</Title>
        <Splashpage/>
      </Container>

    )
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
    marginTop: 30,

  },
  fireButton: {
    backgroundColor: "#FFA500"
  },
  goalTitle: {
    fontSize: 40,
    marginTop: 0,
    textAlign: 'center',
  },
  xbutton: {
    alignSelf: 'flex-end',
    marginTop: -20,
    marginRight: 20,
    fontSize: 20
  }
})
