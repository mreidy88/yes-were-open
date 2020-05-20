import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Layout from './Components/Layout';
import { createRestaurants } from '../services/api-helper';

export default class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {
        name: '',
        description: '',
        imgURL: '',
        menuLink: '',
        socialMedia: '',
        sub_category: '',
      },
      created: false,
    };
  }
  componentDidMount() {
    let { id } = this.props;
    const restaurant = createRestaurants(id);
    this.setState({
        restaurant: {
          name: restaurant.name,
          description: restaurant.description,
          imgURL: restaurant.imgURL,
          menuLink: restaurant.menuLink,
          sub_category: restaurant.sub_category
      },
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      restaurant: {
        ...this.state.item,
        [name]: value,
      },
    });
  };

  // onCreateRestaurant = async (event) => {
  //   const restaurant = await createRestaurants(this.state.restaurant)
  //   event.preventDefault();
  // }

  handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createRestaurants(this.state.restaurant, this.props.user.id);
    this.setState({ created });
  };

  render() {
    const { restaurant, created } = this.state;

    if (created) {
      return <Redirect to={'/Restaurants'} />;
    }

    return (
        <div className="create-restaurant-form" >
          <form className="create-form-restaurant" onSubmit={this.handleSubmit}>
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
              <textarea
                className="textarea-description-restaurant"
                rows={2}
                placeholder="Description"
                value={restaurant.description}
                name="description"
                required
                onChange={this.handleChange}
              />
              <input
                className="input-image-link-restaurant"
                placeholder="Image Link"
                value={restaurant.imgURL}
                name="imgURL"
                onChange={this.handleChange}
              />
               <input
                className="input-menu-link-restaurant"
                placeholder="Menu Link"
                value={restaurant.menuLink}
                name="menu link"
                onChange={this.handleChange}
              />
                             <input
                className="input-social-link-restaurant"
                placeholder="Social Media link"
                value={restaurant.socialMedia}
                name="social media"
                onChange={this.handleChange}
              />
                <input
                className="category"
                placeholder="category"
                value={restaurant.sub_category}
                name="category"
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