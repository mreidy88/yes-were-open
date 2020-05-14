import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header'
import Login from './Login';
import Register from './Register'
import { getAllRestaurants } from '../services/api-helper';

export default class Home extends Component {
    state = {
        restaurants: []
    }

    componentDidMount() {
        this.readAllRestaurants();
    }

    readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants })
    }
    render() {
        return (
            <div>
            <Route path='/login' render={(props) => (
             <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path='/Restaurants' render={() => (
          <Show
            restaurants={this.state.restaurants}
          />
        )} />
            </div>
        )
    }
}
