import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LogInComponent extends React.Component {

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
      <div>
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
      </div>
    )
  }
}

export default LogInComponent;
