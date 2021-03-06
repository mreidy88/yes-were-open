import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

export default function Header(props) {
  return (
    <header>
      {/* <h1><Link to='/' onClick={props.resetForm}>Yes, We're Open!</Link></h1>
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/register</button>
        }
      </div> */}
      <Nav  currentUser={props.currentUser}/>
    </header>
  )
}