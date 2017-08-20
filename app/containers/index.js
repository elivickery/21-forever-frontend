import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './Main'
import Login from './Login'
import Register from './Register'
import User from './User'

class MakeItHappenApp extends Component {
  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main"
            component={Main}
            title="Make It Happen"
            initial
          />
          <Scene key="login"
            component={Login}
            title="Login"
          />
          <Scene
            key="registration"
            component={Registration}
            title="Registration"
          />
        </Scene>
      </Router>
    )
  }
}

export default MakeItHappenApp;
