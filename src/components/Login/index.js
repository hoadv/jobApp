import React, { Component } from 'react';
import Auth from '../../services/auth.service'
import Avatar from '../../../public/assets/images/img_avatar2.png';
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remember: true,
      username: undefined,
      password: undefined
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    Auth.login(this.state.username, this.state.password, (status) => {
      if (!status) {
         return this.setState({ error: true })
      }

    const { location } = this.props

    if (location.state && location.state.nextPathname) {
      this.props.router.replace(location.state.nextPathname)
    } else {
      this.props.router.replace('/')
    }
    });
  }
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="imgcontainer">
            <img src={Avatar} alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <div className="form-group">
              <label><b>Username</b></label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
                value={this.state.username}
                onChange={this.handleInputChange} />
            </div>
            <label><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChange} />
            <button type="submit">Login</button>
          </div>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;