import React, { PropTypes, Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class Popup extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <View>
        <Image
          style={styles.container}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100
  }
});
