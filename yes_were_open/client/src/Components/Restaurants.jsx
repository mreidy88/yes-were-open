import React, { Component } from "react";
// import Layout from './Components/Layout';
import { getAllRestaurants } from "../services/api-helper";
import { AZ, ZA } from "./Sort";

export default class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: "",
      filteredItems: null,
      selectValue: "name-ascending",
    };
  }

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ selectValue: value });
    // let input = event.target.value;
    // const { restaurants } = this.state;
    // switch (input) {
    //   case "name-ascending":
    //     this.setState({
    //       restaurants: AZ(restaurants),
    //     });
    //     break;
    //   case "name-descending":
    //     this.setState({
    //       restaurants: ZA(restaurants),
    //     });
    //     break;
    // }
  };

  handleSubmit = (event) => event.preventDefault();

  render() {
    const sortedRestaurants =
      this.state.selectValue === "name-ascending"
        ? AZ(this.props.restaurants)
        : ZA(this.props.restaurants);
    const restaurants = sortedRestaurants.map((restaurant) => (
      <div
        key={restaurant.id}
        onClick={() => {
          this.props.history.push(`/Restaurants/${restaurant.id}`);
        }}
      >
        <p>{restaurant.name}</p>
        <p>{restaurant.imageurl}</p>
        <p>{restaurant.socialMedia}</p>
        <p>{restaurant.sub_category}</p>
      </div>
    ));

    return (
      // <Layout user={this.props.user}>
      <div>
        <div className="restaurant list">
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
          {restaurants}
        </div>
      </div>
      // </Layout>
    );
  }
}

// https://www.w3schools.com/html/html_entities.asp to check if &nbsp is correct
