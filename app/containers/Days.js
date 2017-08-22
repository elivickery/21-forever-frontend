import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Title, Button } from 'native-base'
import axios from 'axios'

export default class Days extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: this.props.accessToken,
      completed: false,
      failed: false
    }
    this.buttonPressComplete = this.buttonPressComplete.bind(this)
    this.buttonPressInComplete = this.buttonPressInComplete.bind(this)
  }

  //Sends and changes status. Check heroku logs.
  buttonPressComplete(){
    axios.put('https://make-it-happen-api.herokuapp.com/api/days/edit', {
      status: "achieved",
      access_token: this.props.accessToken
    })
    .then((response) => {
      console.log(response);
      this.setState({
        completed: true,
        failed: false
      });
      console.log(this);
  })
    .catch(function (error) {

    });
  }

  buttonPressInComplete(){
    axios.put('https://make-it-happen-api.herokuapp.com/api/days/edit', {
      status: "failed",
      access_token: this.props.accessToken
    })
    .then((response) => {
      console.log(response);
      this.setState({
        completed: false,
        failed: true
      });
  })
    .catch(function (error) {

    });
  }



  render () {
    return (
      <View>
        <Title>
          {this.props.title}
        </Title>
        <Text style={styles.day}>
          {this.props.day}/21 Days
        </Text>
        <Button block info active={true}
          style={styles.hasmargin, this.state.completed ? styles.completed : null}
          onPress={this.buttonPressComplete}
        ><Text>Completed</Text></Button>
        <Button block info
          style={styles.hasmargin, this.state.failed ? styles.failed : null}
          onPress={this.buttonPressInComplete}
        ><Text>Not Completed</Text></Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  day: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    justifyContent:'center',
    marginBottom: 10
  },
  failed: {
    backgroundColor: 'red'
  },
  completed: {
    backgroundColor: 'green'
  },
  base: {
    backgroundColor: 'blue'
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  }
})
