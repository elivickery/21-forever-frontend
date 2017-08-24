import React, { PropTypes, Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Days from './Days'
import axios from 'axios'
import { ListItem, Icon, Container, Title, Item, Input, Content, Button, Footer, Text, List, Fab } from 'native-base';

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
    let achievedContent;

    achievedContent = (
        <Content>
          <Title>You Did It!</Title>
          <Button info onPress={()=>Actions.user({accessToken: this.props.accessToken})}><Text>Go Back</Text></Button>
          </Content>
      )

    userInterface = (<Days title={this.state.currentGoal.title} day={22} accessToken={this.props.accessToken}/>)

    return (
      <Container style={styles.container}>
          {userInterface}
          {achievedContent}
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
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },
  fireButton: {
    backgroundColor: "#FFA500"
  }
})
