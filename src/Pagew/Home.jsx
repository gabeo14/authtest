import React, { Component } from 'react'
import Auth from '../Auth/auth.js'

class Home extends Component {
  state = {
    profile: {}
  }
  login = () => {
    this.props.auth.login()
  }

  logout = () => {
    this.props.auth.logout()
  }

  componentDidMount() {
    //see if the user is logged in,
    //if logged in, then display the user's name
    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.login}>login</button>
        <button onClick={this.logout}>logout</button>
        <>
          {this.state.profile.given_name}
          <img src={this.state.profile.picture} alt="user profile" />
          id: {this.state.profile.sub}
        </>
      </div>
    )
  }
}

export default Home
