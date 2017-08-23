import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Title, Button } from 'native-base'
import axios from 'axios'
import ProgressCircle from 'react-native-progress-circle'

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

      <ProgressCircle
            percent={(this.props.day/21*100)}
            radius={95}
            borderWidth={12}
            color="#00e0ff"
            backgroundColor="#3d5875"
            shadowColor="#999"
        >
        <Text style={{ fontSize: 35 }}>{this.props.day-1+'/21\nDays'}</Text>
        </ProgressCircle>
        <Title>
          {this.props.title}
        </Title>

        <Button block info
          style={[styles.hasmargin, this.state.completed ? styles.completed : null]}
          onPress={this.buttonPressComplete}
        ><Text style={styles.whiteFont} >Completed</Text></Button>
        <Button block info
          style={[styles.hasmargin, this.state.failed ? styles.failed : null]}
          onPress={this.buttonPressInComplete}
        ><Text style={styles.whiteFont} >Not Completed</Text></Button>
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
    marginTop: 30
  },
  whiteFont: {
    color: 'white'
  }
})
