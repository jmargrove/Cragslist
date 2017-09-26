import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {
  Link
} from 'react-router-dom';


class UserLoginComponent extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // this.createAlbum('users');
    console.log("we log in", this.state);
    this.createUser({
      username: this.state.username,
      password: this.state.password
    })
  }

  render () {
    return (
      <div className="LogInMain">
        <div className="ButtonCancel">
          <Link to='/'>
            <RaisedButton label="Cancel" primary={true} />
          </Link>
        </div>
        <h1>Log-in</h1>
        <TextField
          hintText="Username"
          floatingLabelText="Enter username"
          id="inputName"
          name="username"
          value={this.state.username}
          onChange={this.handleChanges}
        /><br />
        <TextField
          hintText="Password"
          floatingLabelText="Enter password"
          id="inputName"
          name="password"
          value={this.state.password}
          onChange={this.handleChanges}
        />
        <div className="ButtonsLogIn">
          <Link to='/create-user'>
            <RaisedButton label="No acccount yet" primary={true} />
          </Link>
          <Link to={`/${this.state.username}`}>
            <RaisedButton label="Log-in" primary={true} onClick={this.handleSubmit} />
          </Link>

        </div>
      </div>
    )
  }
}

export default UserLoginComponent;
