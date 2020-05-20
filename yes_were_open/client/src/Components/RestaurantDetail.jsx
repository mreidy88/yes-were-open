import React from "react";
import { Link } from "react-router-dom"

function RestaurantDetail({ restaurant, currentUser, handleRestaurantDelete }) {
  return (
    <div>
      {restaurant && (
        <>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.imageurl}</p>
          <p>{restaurant.socialMedia}</p>
          <p>{restaurant.sub_category}</p>
          <Link to={`/editRestaurant/${restaurant.id}`}><button>Edit</button></Link>
          <button onClick={()=>handleRestaurantDelete(restaurant.id)}>Delete</button>

        </>
      )}

    </div>
  );
}

export default RestaurantDetail;
