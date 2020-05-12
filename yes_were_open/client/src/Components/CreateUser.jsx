import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateUser(props) {
  return (
    <div className="create-form" >
      <h2>Create a new user</h2>
      <form onSubmit={props.newUser}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.userForm.photo}
          onChange={props.handleFormChange} />
          <p>User's name:</p>
        <input
          type="text"
          name="name"
          value={props.userForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateUser);