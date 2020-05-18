import React, { Component } from 'react';
import { loginUser } from '../services/api-helper';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      isError: false,
      errorMsg: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: '',
    });
  };

  onLogIn = (event) => {
    event.preventDefault();

    const { history, setUser } = this.props;

    loginUser(this.state)
      .then((res) => {
        setUser(res.user);
      })
      .then(() => history.push(`/restaurants`))
      .catch((error) => {
        console.error(error);
        this.setState({
          isError: true,
          errorMsg: 'Invalid Credentials',
          username: '',
          email: '',
          password: '',
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger' : '';
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Login</button>;
    }
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div className='Login'>
      <h3>Login</h3>
      <form onSubmit={this.onLogIn}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={this.handleChange}
        />
        <label>Email</label>
        <input
           required
           type="text"
           name="email"
           value={email}
           placeholder="Enter Email Address"
           onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        {this.renderError()}
      </form>
      </div>
    );
  }
}