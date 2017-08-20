import React, { PropTypes, Component } from 'react'
import { View, Text, List, Button, FlatList, StyleSheet } from 'react-native'
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

    // Add this code once url for days is established.
    // axios.get("https://make-it-happen-api.herokuapp.com/api/last_day")
    // .then((response)=> {
    //   this.setState({
    //     days: response.data
    //   })
    // })
        // .catch(function (error) {
        //   console.log(error);
        // });

  }



  render () {
    return (
      <View>
        <Button
        title="Edit Profile"
        />
        <Text>
          MainPage
        </Text>
          <Days />
        <Text style={styles.centeredgoals}>
          Achieved Goals
        </Text>
          <FlatList
            data={this.state.goals}
            renderItem={({ item }) =>
              <Text style={styles.row}>{item.title}</Text>
            }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centeredgoals: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent:'center',
    marginBottom: 10
  },
  row: {
    backgroundColor: '#f4f4f4',
    fontSize: 15,
    color: '#696969'
  }
})
