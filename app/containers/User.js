import React, { PropTypes, Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Days from './Days'
import axios from 'axios'
import { Icon, Container, Title, Item, Input, Content, Button, Footer, Text, List, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      achieved: null,
      day: [],
      current: null
    }
  }

  componentDidMount(){
    // change fetch url to all goals
    axios.get("https://make-it-happen-api.herokuapp.com/api/goals/achieved", {
        access_token: this.props.accessToken
    })
    .then((response) => {
      this.setState({
        goals: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get("https://make-it-happen-api.herokuapp.com/api/days/count", {
        access_token: this.props.accessToken
    })
    .then((response)=> {
      this.setState({
        day: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    // only show popup every 3rd day
    // if(this.state.day % 3 === 0) {
    //   Actions.popup();
    // }

    // add when Day's controller's current method in backend is up.
    // axios.get("https://make-it-happen-api.herokuapp.com/api/days/count")
    // .then((response)=> {
    //   this.setState({
    //     current: response.data
    //   })
    // })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

  }


  //link new goal button when new submit goal form is established.
  render () {
    return (
      <Container style={styles.container}>
        <Title>My Progress</Title>
          {this.state.current ? <Days title={this.state.current.title} day={this.state.day} accessToken={this.props.accessToken}/> : <Button block info style={styles.hasmargin}><Text>Add A Goal</Text></Button>}
          {this.state.achieved ? <Text style={styles.centeredgoals}> Achieved Goals </Text> : null}

          <List dataArray={this.state.acheived}
            renderRow={(item) =>
              <ListItem>
                <Text>{item.title}</Text>
              </ListItem>
            }>
          </List>

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
