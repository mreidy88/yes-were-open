import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login'
import Register from './Components/Register'
import {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/api-helper';
import Header from './Components/Header';
import { getAllRestaurants } from './services/api-helper'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userForm: {
        name: "",
        photo: ""
      },
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
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Login
          handleLogin={this.handleLogin}
          handleLogin={this.handleLogin}
        />
        <Register
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
        />
      </div>
    )
  }
}
