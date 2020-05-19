import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './Components/Layout';
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
        sub_category: '',
      },
      created: false,
    };
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createRestaurants(this.state.item, this.props.user.id);
    this.setState({ created });
  };

  render() {
    const { restaurant, created } = this.state;

    if (created) {
      return <Redirect to={'/Restaurants'} />;
    }

    return (
      <Layout user={user}>
        <div className="create-restaurant-form">
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
        </Layout>
    );
  }
}