import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import  Home  from './Components/Home.jsx';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
  getAllRestaurants
} from './services/api-helper';
import Header from './Components/Header';
import SignOut from './Components/SignOut';
import Layout from './Components/Layout';


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

  setUser = (user) =>
    this.setState({
      user: {
        ...user,
        id: user.id || user._id,
      },
    });

  clearUser = () => this.setState({ user: null });


  render() {
    const { setUser, clearUser } = this;
    const { user } = this.state;
    return (
      <Layout>
      <div className="App">
        <Header>
          <Route
            exact
            path="/Login"
            render={(props) => (
              <Login
              user={user}
              setUser={setUser}
              history={props.history}
              />
            )}
            />         
            <Route
            exact
            path="/Register"
            render={(props) => (
              <Register
              user={user}
              setUser={setUser}
              history={props.history}
              />
            )}
            />
            <Route
              exact
              path="/SignOut"
              render={(props) => (
                <SignOut
                  user={user}
                  clearUser={clearUser}
                  history={props.history}
                />
              )}
              />
            </Header>
          
            <Route
            exact
            path="/Home"
            render={(props) => (
              <Home user={user} history={props.history}/>
            )}
            />     
      </div>
      </Layout>
    )
  }
}
