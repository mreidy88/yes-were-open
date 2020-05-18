import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Router, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
// import { Home } from './Components/Home';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/api-helper';
import Header from './Components/Shared/Header';
import { getAllRestaurants } from './services/api-helper'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      restaurants: []
    };
    
  }
  componentDidMount() {
    this.confirmUser();
    this.readAllRestaurants();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  setUser = (user) =>
    this.setState({
      user: {
        ...user,
        id: user.id || user._id,
      },
    });

  handleLogout = () => {
    localStorage.clear();
    this.setState({ currentUser: null })
    removeToken();
    this.props.history.push('/');
  }

  readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants })
  }




  render() {
    return (
      <div className="App">
                <Register setUser={setUser} history={props.history} />
              )}
            />
            <Route
              exact
              path="/Login"
              render={(props) => (
                <Login setUser={setUser} history={props.history} />
              )}
            />
      </div>
    )
  }
}
