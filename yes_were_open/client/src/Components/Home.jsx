import React, { Component } from "react";
import { Route } from "react-router-dom";
import Restaurants from "./Restaurants";
import CreateRestaurant from "./CreateRestaurant";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantEdit from "./RestaurantEdit";

import {
  getAllRestaurants,
  createRestaurants,
  destroyRestaurant,
  updateRestaurant
} from "../services/api-helper";

export default class Home extends Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    this.readAllRestaurants();
  }

  CreateRestaurant = async () => {
    const restaurant = await CreateRestaurant();
    this.setState({ restaurant });
  };

  readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants });
  };

  handleRestaurantCreate = async (restaurantsData) => {
    const newRestaurant = await createRestaurants(
      restaurantsData,
      this.props.currentUser.id
    );
    this.setState((prevState) => ({
      restaurants: [...prevState.restaurants, newRestaurant],
    }));
    this.props.history.push("/Restaurants");
  };

  handleRestaurantDelete = async (id) => {
    await destroyRestaurant(id);
    this.setState((prevState) => ({
      restaurants: prevState.restaurants.filter(
        (restaurant) => restaurant.id !== id
      ),
    }));
    this.props.history.push("/Restaurants");
  };

  handleRestaurantEdit = async (id, data) => {
    const updatedRestaurant = await updateRestaurant(id, data);
    this.setState((prevState) => ({
      restaurants: prevState.restaurants.map((restaurant) =>
        restaurant.id === parseInt(id) ? updatedRestaurant : restaurant
      ),
    }));
    this.props.history.push(`/Restaurants/${id}`);
  };

  render() {
    return (
      <div className="header-margin">
        <Route
          exact
          path="/Restaurants"
          render={(props) => (
            <Restaurants {...props} restaurants={this.state.restaurants} />
          )}
        />
        <Route
          path="/CreateRestaurant"
          render={() => (
            <CreateRestaurant
              handleRestaurantCreate={this.handleRestaurantCreate}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <Route
          path="/Restaurants/:id"
          render={(props) => {
            const restaurantId = props.match.params.id;
            const restaurant = this.state.restaurants.find((restaurant) => {
              return restaurant.id === parseInt(restaurantId);
            });
            return (
              <RestaurantDetail
                restaurant={restaurant}
                currentUser={this.props.currentUser}
                handleRestaurantDelete={this.handleRestaurantDelete}
              />
            );
          }}
        />
        <Route
          path="/editRestaurant/:id"
          render={(props) => {
            const restaurantId = props.match.params.id;
            const restaurant = this.state.restaurants.find((restaurant) => {
              return restaurant.id === parseInt(restaurantId);
            });
            return (
              <RestaurantEdit
                restaurantId={restaurantId}
                restaurant={restaurant}
                currentUser={this.props.currentUser}
                handleRestaurantEdit={this.handleRestaurantEdit}
              />
            );
          }}
        />
      </div>
    );
  }
}
