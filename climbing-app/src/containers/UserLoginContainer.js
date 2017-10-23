import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';

import {
  Link
} from 'react-router-dom';


class UserLoginComponent extends React.Component {

  state = {
    username: '',
    password: ''
  }

  fetchUserSession () {
    const encoded = btoa(`${this.state.username}:${this.state.password}`)
    console.log(encoded);
    fetch('http://Karina-MacBookPro.local:3000/sign-in', {
      headers: {
        'Authorization': `Basic ${encoded}`
      }
    })
    .then(user => user.json())
    .then(user => {
      this.props.addAuthorization(user);
    })
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // this.createAlbum('users');
    console.log("we log in", this.state);
    this.fetchUserSession()
  }

  render () {
    return (
      <div className="LogInMain">
        <div className="Buttons">
          {/* <div className="ButtonCancel">
            <Link to='/'>
            <RaisedButton label="Cancel" primary={true} />
          </Link>
          </div> */}
          <div className="Title">
            <h1>
              Log-in
            </h1>
          </div>
        </div>
        <div className="LogInfo">
          <TextField
            hintText="Username"
            floatingLabelText="Enter username"
            id="inputName"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Enter password"
            id="inputName"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
        </div>
        <div className="ButtonsLogIn">
          <Link to={`/${this.state.username}`}>
          <RaisedButton label="Log-in" primary={true} onClick={this.handleSubmit} />
        </Link><br/>
          <Link to='/create-user'>
            <RaisedButton label="No account yet" primary={true} />
          </Link>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  addAuthorization: (data) =>  dispatch({
    type: 'SET_AUTHORIZATION',
    data
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginComponent);
