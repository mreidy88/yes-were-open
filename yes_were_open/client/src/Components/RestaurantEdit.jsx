import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import Layout from './Components/Layout';
import "./RestaurantEdit.css";
import { getRestaurant, updateRestaurant } from "../services/api-helper";
// import logo from "../images/yes_were_open.png";

export default class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        name: "",
        imageurl: "",
        socialMedia: "",
        sub_category: "",
      },
      updated: false,
    };
  }

  componentDidMount() {
    if (this.props.restaurant) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurant !== this.props.restaurant) {
      this.setFormData();
    }
  }

  setFormData = () => {
    const { restaurant } = this.props;
    this.setState({
      restaurant: {
        name: restaurant.name,
        imageurl: restaurant.imageurl,
        socialMedia: restaurant.socialMedia,
        sub_category: restaurant.sub_category,
      },
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      restaurant: {
        ...prevState.restaurant,
        [name]: value,
      },
    }));
  };



  render() {
    const { restaurant, updated } = this.state;

    if (updated) {
      return (
        <Redirect to={`/restaurants/detail/${this.props.match.params.id}`} />
      );
    }

    return (
      // <Layout user={user}>
      <div className="edit-restaurant-container">
        <div className="edit-restaurant-edit">
          <div className="image-container-edit">
            <img
              className="edit-restaurant-image"
            //   src={restaurant.imageurl || logo}
              alt={restaurant.name}
            />
            <form className="edit-form" onSubmit={(event) => {
              event.preventDefault();
              this.props.handleRestaurantEdit(this.props.restaurant.id, this.state.restaurant)
            }}>
              <input
                className="edit-input-restaurant-link"
                placeholder="Restaurant URL"
                value={restaurant.imageurl}
                name="imageurl"
                required
                onChange={this.handleChange}
              />
              <input
                className="input-name"
                placeholder="Name"
                value={restaurant.name}
                name="name"
                required
                autoFocus
                onChange={this.handleChange}
              />
              <input
                className="input-socialMedia"
                placeholder="Social Media"
                value={restaurant.socialMedia}
                name="socialMedia"
                required
                autoFocus
                onChange={this.handleChange}
              />
              {/* <textarea
                className="textarea-description-edit"
                rows={1}
                cols={1}
                placeholder="Description"
                value={restaurant.description}
                name="description"
                required
                onChange={this.handleChange}
              /> */}
              {/* <input
                  className="edit-input-menuLink"
                  placeholder="Menu Link"
                  value={restaurant.menuLink}
                  name="menuLink"
                  required
                  onChange={this.handleChange}
                /> */}
              <input
                className="edit-input-restaurant-sub_category"
                placeholder="sub_category"
                value={restaurant.sub_category}
                name="sub_category"
                required
                onChange={this.handleChange}
              />
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      // </Layout>
    );
  }
}
