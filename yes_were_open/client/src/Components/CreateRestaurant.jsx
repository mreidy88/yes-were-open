import React, { Component } from "react";
// import Layout from './Components/Layout';
import { createRestaurants } from "../services/api-helper";

export default class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {
        name: "",
        imageurl: "",
        socialMedia: "",
        sub_category: "",
      },
      created: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      restaurant: {
        ...prevState.restaurant,
        [name]: value,
      },
    }));
  };

  // onCreateRestaurant = async (event) => {
  //   const restaurant = await createRestaurants(this.state.restaurant)
  //   event.preventDefault();
  // }

  render() {
    const { restaurant, created } = this.state;
    return (
      <div className="create-restaurant-form">
        <form
          className="create-form-restaurant"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.handleRestaurantCreate(this.state.restaurant);
          }}
        >
          <div className="all-item-info">
            <input
              className="input-name-restaurant"
              placeholder="Name"
              value={restaurant.name}
              name="name"
              required
              autoFocus
              onChange={this.handleChange}
            />
            {/* <textarea
              className="textarea-description-restaurant"
              rows={2}
              placeholder="Description"
              value={restaurant.description}
              name="description"
              required
              onChange={this.handleChange}
            /> */}
            <input
              className="input-image-link-restaurant"
              placeholder="Image Link"
              value={restaurant.imageurl}
              name="imageurl"
              onChange={this.handleChange}
            />
            {/* <input
              className="input-menu-link-restaurant"
              placeholder="Menu Link"
              value={restaurant.menuLink}
              name="menuLink"
              onChange={this.handleChange}
            /> */}
            <input
              className="input-social-link-restaurant"
              placeholder="Social Media link"
              value={restaurant.socialMedia}
              name="socialMedia"
              onChange={this.handleChange}
            />
            <input
              className="category"
              placeholder="category"
              value={restaurant.sub_category}
              name="sub_category"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="submit-button-item">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
