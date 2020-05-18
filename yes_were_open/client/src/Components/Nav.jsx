import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';



const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/Login">
      Login
    </NavLink>
    <NavLink className="link" to="/Register">
      Register
    </NavLink>
  </>
);
const authenticatedOptions = (
  <>
    <NavLink className="link" to="/Restaurants">
      Restaurants
    </NavLink>
    <NavLink className="link" to="/CreateRestaurant">
      Add Restaurant
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="header">
        <div className="nav">
            </div>
          <div className="navLinks">
            <div className="navOptions">
              {user ? authenticatedOptions : unauthenticatedOptions}
            </div>
            <div className="userHello">
              {user && (
                <div className="userWelcome">Welcome {user.username}!</div>
              )}
            </div>
          </div>
        </div>
    </nav>
  );
};
export default Nav;