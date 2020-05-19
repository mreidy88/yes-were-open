import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './RestaurantEdit.css';
import { getRestaurant, updateRestaurant } from '../services/api-helper';
import logo from '../images/yes_were_open.png';

export default class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        name: '',
        description: '',
        imgURL: '',
      },
      updated: false,
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const restaurant = await getRestaurant(id);
    this.setState({
        restaurant: {
        name: restaurant.name,
        description: restaurant.description,
        imgURL: restaurant.imgURL,
      },
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        restaurant: {
        ...this.state.restaurant,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = this.props.match.params;
    const updated = await updateRestaurant(id, this.state.restaurant);
    this.setState({ updated });
  };

  render() {
    const { restaurant, updated } = this.state;

    if (updated) {
      return <Redirect to={`/items/detail/${this.props.match.params.id}`} />;
    }

    return (
        <div className="edit-restaurant-container">
          <div className="edit-restaurant-edit">
            <div className="image-container-edit">
              <img
                className="edit-restaurant-image"
                src={restaurant.imgURL || logo}
                alt={restaurant.name}
              />
              <form onSubmit={this.handleSubmit}>
                <input
                  className="edit-input-restaurant-link"
                  placeholder="Restaurant URL"
                  value={restaurant.imgURL}
                  name="imgURL"
                  required
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <form className="edit-form" onSubmit={this.handleSubmit}>
              <input
                className="input-name"
                placeholder="Name"
                value={restaurant.name}
                name="name"
                required
                autoFocus
                onChange={this.handleChange}
              />
              <textarea
                className="textarea-description-edit"
                rows={1}
                cols={1}
                placeholder="Description"
                value={restaurant.description}
                name="description"
                required
                onChange={this.handleChange}
              />

              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>
        </div>
    );
  }
}
