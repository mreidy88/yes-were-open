import React, { Component } from 'react';
// import Layout from './Components/Layout';
import { getAllRestaurants } from '../services/api-helper';
import { AZ, ZA } from './Sort';

export default class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      filterValue: '',
      filteredItems: null,
      selectValue: 'Featured',
    };
  }

  componentDidMount() {
    const { user } = this.props;
    if (user) {
      this.fetchRestaurants();
    }
  }

  componentDidUpdate({ user }) {
    if (!user && this.props.user) {
      this.fetchRestaurants();
    }
  }

  fetchRestaurants = async () => {
    const restaurants = await getAllRestaurants(this.props.user.id);
    this.setState({ restaurants });
  };

  handleSearchChange = (event) => {
    const filter = () => {
      const filteredRestaurants = this.state.restaurants.filter((restaurant) => {
        return restaurant.name
          .toLowerCase()
          .includes(this.state.filterValue.toLowerCase());
      });
      this.setState({ filteredRestaurants });
    };
    this.setState({ filterValue: event.target.value }, filter);
  };

  handleSortChange = (event) => {
    this.setState({ selectValue: event.target.value });
    let input = event.target.value;
    const { restaurants } = this.state;
    switch (input) {
      case 'name-ascending':
        this.setState({
          items: AZ(restaurants),
        });
        break;
      case 'name-descending':
        this.setState({
          items: ZA(restaurants),
        });
        break;
    }
  };

  handleSubmit = (event) => event.preventDefault();

  render() {
    const restaurants = this.state.filteredRestaurants
      ? this.state.filteredRestaurants
      : this.state.restaurants;
    const RESTAURANTS = restaurants.map((restaurant, index) => (
      <RESTAURANTS
      restaurantId={restaurant._id}
        name={restaurant.name}
        imgURL={restaurant.imgURL}
        key={index}
      />
    ));

    return (
      // <Layout user={this.props.user}>
        <div>
        <form className="sort-container" onSubmit={this.handleSubmit}>
          <label className="sort-label" htmlFor="sort">
            Sort By:
          </label>
          <select
            className="sort"
            value={this.state.selectValue}
            onChange={this.handleSortChange}
          >
            <option className="option" value="name-ascending">
              &nbsp; Alphabetically, A-Z &nbsp;
            </option>
            <option value="name-descending">
              &nbsp; Alphabetically, Z-A &nbsp;
            </option>
          </select>
        </form>
        {this.state.restaurants && <div className="restaurants">{RESTAURANTS}</div>}
        </div>
      // </Layout>
    );
  }
}
