import React from 'react';

export default function CreateUser(props) {
  return (
    <div className="create-form" >
      <h2>Create a new user</h2>
      <form onSubmit={props.newUser}>
      <input
          type="text"
          name="name"
          value={props.userForm.name}
          onChange={props.handleFormChange} />
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.userForm.photo}
          onChange={props.handleFormChange} />
          <p>User's name:</p>

        <button>Submit</button>
      </form>
    </div >
  )
}

