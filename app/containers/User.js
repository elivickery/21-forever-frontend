import React, { PropTypes, Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Days from './Days'
import axios from 'axios'
import { ListItem, Icon, Container, Title, Item, Input, Content, Button, Footer, Text, List, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      achieved: [{}],
      day: 0,
      current: [{}]
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

  }


  //link new goal button when new submit goal form is established.
  render () {
    console.log(this.state.achieved[0])
    return (
      <Container style={styles.container}>
        <Title>My Progress</Title>

          {this.state.current ? <Days title={this.state.current.title} day={this.state.day} accessToken={this.props.accessToken}/> : <Button block info style={styles.hasmargin}><Text>Add A Goal</Text></Button>}
          {this.state.achieved[0].title ? <Text style={styles.centeredgoals}> Achieved Goals </Text> : null}

          {this.state.achieved[0].title ?
          <List dataArray={this.state.achieved}
            renderRow={(item) =>
              <ListItem>
                <Text>
                <Icon medium class={item.category_id} ios='ios-trophy' android='md-trophy'/>
                {item.title}</Text>
              </ListItem>
            }>
          </List>
          : null }
          <Fab
            active={this.state.active}
            position="bottomRight"
            onPress={() => Actions.popup()}
            style={styles.actionButton}
            >
            <Icon large ios='ios-flame' android="md-flame" />
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
