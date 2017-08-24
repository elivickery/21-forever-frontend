import React, { PropTypes, Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Content, Container, Title, Button } from 'native-base'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
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
      if(this.props.day === 21) {
        Actions.completionpage({accessToken: this.props.accessToken});
      }
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
    <Content>
        <Text style={styles.goalTitle}>
          {this.props.title}
        </Text>

      <ProgressCircle
            percent={((this.props.day-1)/21*100)}
            radius={95}
            borderWidth={12}
            color="#00e0ff"
            bgColor="#fff"
            shadowColor="#999"
        >
        <Text style={{ fontSize: 35 }}>{this.props.day-1+'/21\nDays'}</Text>
        </ProgressCircle>

          <Button block info
          style={[styles.hasmargin, this.state.completed ? styles.completed : null]}
          onPress={this.buttonPressComplete}
        ><Text style={styles.buttontext} >COMPLETED</Text></Button>
        <Button block info
          style={[styles.hasmargin, this.state.failed ? styles.failed : null]}
          onPress={this.buttonPressInComplete}
        ><Text style={styles.buttontext} >NOT COMPLETED</Text></Button>

      </Content>
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
    marginTop: 30,
    backgroundColor: '#ffdf45'
  },
  buttontext: {
    color: '#000000'
  },
  goalTitle: {
    fontSize: 40,
    marginTop: 80,
    marginBottom: 30,
    textAlign: 'center',
  }
})
