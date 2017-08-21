import React, { PropTypes, Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import axios from 'axios'

export default class Days extends Component {


  buttonPressComplete(){
    axios.patch(URL, {
      'status': "achieved"
    })
    .then((response) => {
      console.log(response);
  });
//   fetch('https://mywebsite.com/endpoint/', {
//   method: 'PATCH',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     status: "achieved",
//   })
// })
  }

  buttonPressInComplete(){
    axios.patch(URL, {
      'status': "failed"
    })
    .then((response) => {
      console.log(response);
  });
  }

  render () {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
        <Text style={styles.day}>
          {this.props.day}/21 Days
        </Text>
        <Button
          onPress={this.buttonPressComplete}
          title="Completed"
        />
        <Button
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
  }
})