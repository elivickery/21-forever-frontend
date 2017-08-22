import React, { PropTypes, Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Title } from 'native-base'
import axios from 'axios'

export default class Days extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: this.props.accessToken
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
        completed: true,
        failed: false
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
        <Button
          style={[styles.base, this.state.completed && styles.completed]}
          onPress={this.buttonPressComplete}
          title="Completed"
        />
        <Button
          style={[styles.base, this.state.failed && styles.failed]}
          onPress={this.buttonPressInComplete}
          title="Not Completed"
        />
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
  }
})
