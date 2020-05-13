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
  verifyUser
} from './services/api-helper'
import Header from './Components/Header';

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
      }
    };
  }

  async componentDidMount() {
    this.getUsers();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  getUsers = async () => {
    const users = await readAllUsers();
    this.setState({
      users
    })
  }

  newUser = async (e) => {
    e.preventDefault();
    const user = await createUser(this.state.teacherForm);
    this.setState(prevState => ({
      users: [...prevState.users, user],
      userForm: {
        name: "",
        photo: ""
      }
    }))
  }

  editUser = async () => {
    const { userForm } = this.state
    await updateUser(userForm.id, userForm);
    this.setState(prevState => (
      {
        users: prevState.users.map(user => {
          return user.id === userForm.id ? userForm : user
        }),
      }
    ))
  }

  deleteUser = async (id) => {
    await destroyUser(id);
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id)
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      teacherForm: {
        ...prevState.userForm,
        [name]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const users = await readAllUsers();
    const user = users.find(el => el.id === parseInt(id));
    this.setState({
      userForm: user
    });
  }

  resetForm = () => {
    this.setState({
      userForm: {
        name: "",
        photo: ""
      }
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));

  }

  render() {
    return (
      <div className="App">
         <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="./Components/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="./Components/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
      </div>
    )
  }
}
