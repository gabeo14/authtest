import React, { Component } from 'react'

import { Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './Pagew/Home'
import Callback from './Pagew/Callback'

import Auth from './Auth/auth'
import history from './history'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history} component={App}>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props)
              return <Callback {...props} />
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
