import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import Animation from 'lottie-react-native'
import { Actions } from 'react-native-router-flux'
import GoalImg from '../../assets/favourite_app_icon.json'

export default class Splashpage extends Component {
   constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

 componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 370
            }}
            loop={true}
            source={GoalImg}
            speed={0.7}
            progress={0}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});
