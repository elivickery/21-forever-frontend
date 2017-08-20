import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import Days from './Days'
import axios from 'axios'

export default class MainPage extends Component {
  constructor(){
    super()
    this.state = {
      goals: [],
      days: []
    }
  }


  componentDidMount(){
    // change fetch url to all goals
    axios.get("https://make-it-happen-api.herokuapp.com/api/categories/1/goals")
    .then((response) => {
      this.setState({
        goals: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });


    // axios.get("https://make-it-happen-api.herokuapp.com/api/last_day")
    // .then((response)=> {
    //   this.setState({
    //     days: response.data
    //   })
    // })
        // .catch(function (error) {
        //   console.log(error);
        // });
  // fetch("https://make-it-happen-api.herokuapp.com/api/categories/1/goals")
  // .then(response => response.json())
  // .then((response) => {
  //   console.log(response)
  //   this.setState({
  //     goals: response
  //   })
  // })
  // .catch(error =>
  //    this.setState({
  //     isLoading: false,
  //     message: 'Something bad happened ' + error
  //  }));


  // Change fetch url once Days controller is settled.
  // fetch("https://make-it-happen-api.herokuapp.com/api/last_day")
  // .then(response => response.json())
  // .then((response) => {
  //   console.log(response)
  //   this.setState({
  //     days: response
  //   })
  // })
  // .catch(error =>
  //    this.setState({
  //     isLoading: false,
  //     message: 'Something bad happened ' + error
  //  }));


  }



  render () {
    return (
      <View>
        <Text>
          MainPage
        </Text>
          <Days />
        <Text>
          Achieved Goals
        </Text>
        {this.state.goals.map}
      </View>
    )
  }
}
