import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Restaurants from './Restaurants';
import CreateRestaurant from './CreateRestaurant';

import { getAllRestaurants } from '../services/api-helper';

export default class Home extends Component {
    state = {
        restaurants: []
    }

    componentDidMount() {
        this.readAllRestaurants();
    }

    CreateRestaurant = async () => {
      const restaurant = await CreateRestaurant();
      this.setState({ restaurant })
    }

    readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants })
    }
    render() {
        return (
            <div>
            <Header>
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
            <Restaurants
            restaurants={this.state.restaurants}
          />
        )} />
          <Route path='/CreateRestaurant' render={() => (
            <CreateRestaurant
            CreateRestaurant={this.state.restaurant}
          />
        )} />
        </Header>
            </div>
        )
    }
}

