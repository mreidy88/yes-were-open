import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home.jsx";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
  getAllRestaurants,
} from "./services/api-helper";
import Header from "./Components/Header";
import SignOut from "./Components/SignOut";
// import Layout from "./Components/Layout";
import Footer from "./Components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: "",
      },
      restaurants: [],
    };
  }
  componentDidMount() {
    this.confirmUser();
    this.readAllRestaurants();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({ currentUser: null });
    removeToken();
    this.props.history.push("/");
  };

  readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants });
  };

  setUser = (user) =>
    this.setState({
      user: {
        ...user,
        id: user.id || user._id,
      },
    });

  clearUser = () => this.setState({ currentUser: null });

  render() {
    const { handleRegister, clearUser, handleLogin} = this;
    const { currentUser } = this.state;
    return (
      <div className="App">
        {/* <Layout /> */}
        <Header currentUser={currentUser}/>
        <Route
          exact
          path="/Login"
          render={(props) => (
            <Login currentUser={currentUser} handleLogin={handleLogin} history={props.history} />
          )}
        />
        <Route
          exact
          path="/Register"
          render={(props) => (
            <Register currentUser={currentUser} handleRegister={handleRegister} history={props.history} />
          )}
        />
        <Route
          exact
          path="/Sign-out"
          render={(props) => (
            <SignOut
              currentUser={currentUser}
              clearUser={clearUser}
              history={props.history}
            />
          )}
        />
        {/* </Header> */}

        <Route
          exact
          path="/Home"
          render={(props) => <Home currentUser={currentUser} history={props.history} />}
        />

        <Footer />
      </div>
    );
  }
}
