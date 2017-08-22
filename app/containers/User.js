import React, { PropTypes, Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Days from './Days'
import axios from 'axios'
import { ListItem, Icon, Container, Title, Item, Input, Content, Button, Footer, Text, List, Fab } from 'native-base';
import ProgressCircle from 'react-native-progress-circle'


export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      achieved: [],
      day: 0,
      currentGoal: {}
    }
  }

  componentWillMount(){
    // change fetch url to all goals
    axios.get("https://make-it-happen-api.herokuapp.com/api/goals/achieved", {
      params: {
        access_token: this.props.accessToken
      }
    })
    .then((response) => {
      this.setState({
        achieved: response.data.goals
      })
    })
    .catch(function (error) {

    });

    axios.get("https://make-it-happen-api.herokuapp.com/api/days/count", {
      params: {
        access_token: this.props.accessToken
      }
    })
    .then((response)=> {
      this.setState({
        day: response.data
      })
    })
    .catch(function (error) {

    });

     axios.get("https://make-it-happen-api.herokuapp.com/api/goals/current", {
      params: {
        access_token: this.props.accessToken
      }
    })
    .then((response)=> {

      this.setState({
        currentGoal: response.data[0]
      })

    })
    .catch(function (error) {

    });

  }


  //link new goal button when new submit goal form is established.
  render () {

    let userInterface;

    let achievedGoals;

    console.log(this.state.achieved)


    if(this.state.achieved[0]) {
      achievedGoals = (
        <Content>
          <Title>Achieved Goals</Title>
          <List dataArray={this.state.achieved}
              renderRow={(item) =>
                <ListItem>
                  <Text>
                  <Icon medium class={item.category_id} ios='ios-trophy' android='md-trophy'/>
                  {item.title}</Text>
                </ListItem>
              }>
            </List>
          </Content>
      )
    }

    if(this.state.currentGoal.title) {
      userInterface = (<Days title={this.state.currentGoal.title} day={this.state.day} accessToken={this.props.accessToken}/>)
    } else {
      userInterface = (
        <Button block info style={styles.hasmargin} onPress={()=>{Actions.goals({accessToken: this.props.accessToken})}} ><Text>Add A New Goal</Text></Button>)
    }

    return (
      <Container style={styles.container}>
        <ProgressCircle
            percent={(this.state.day/21*100)}
            radius={100}
            borderWidth={10}
            color="#00e0ff"
            backgroundColor="#3d5875"
            shadowColor="#999"
        >
        <Text style={{ fontSize: 40 }}>{this.state.day+'/21'}</Text>
        </ProgressCircle>
          {userInterface}
          {achievedGoals}
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
  centeredgoals: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent:'center',
    marginBottom: 10
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },
  actionButton: {
    backgroundColor: "#FFA500"
  }
})
