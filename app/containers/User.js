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
      achieved: [],
      day: 0,
      currentGoal: {},
      currentGif: 'https://media.giphy.com/media/3o85xtLX7zCyeeWGLC/giphy.gif'
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
        currentGoal: response.data.current_goal,
        currentGif: response.data.gifs_sample
      })

    })
    .catch(function (error) {

    });

  }


  //link new goal button when new submit goal form is established.
  render () {

    let userInterface;

    let achievedGoals;


    if(this.state.achieved[0]) {
      achievedGoals = (
        <Content style={styles.topmargin}>
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
        <Button block info style={styles.hasmargin} onPress={()=>{Actions.goals({accessToken: this.props.accessToken})}} ><Text style={styles.buttontext}>ADD A NEW GOAL</Text></Button>)
    }

    return (
      <Container style={styles.container}>

          <Content>
          {userInterface}
          {achievedGoals}
          </Content>
        <Fab
            active={this.state.active}
            direction="down"
            style={{ backgroundColor: '#6A5ACD' }}
            position="topRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="menu" />
              <Button
                style={{ backgroundColor: '#ffdf45' }}
                onPress={() => Actions.profile({accessToken: this.props.accessToken})}>
                <Icon name="person" style={{color: 'black'}}/>
              </Button>
              <Button
                style={{ backgroundColor: 'grey' }}
                onPress={() => Actions.main()}>
                <Icon name="ios-log-out" />
              </Button>
          </Fab>
        <Fab
          active={this.state.active}
          position="bottomRight"
          onPress={() => Actions.popup({gif: this.state.currentGif})}
          style={styles.fireButton}
          >
          <Icon large ios='ios-flame' android="md-flame" style={{color: 'black'}}/>
        </Fab>
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
    backgroundColor: '#ffdf45'
  },
  buttontext: {
    color: '#000000'
  },
  fireButton: {
    backgroundColor: "#ffdf45"
  },
  topmargin: {
    marginTop: 20
  }
})
