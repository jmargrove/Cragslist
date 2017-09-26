import React from 'react';

import { connect } from 'react-redux';

import { listUsers } from '../actions';

import RaisedButton from 'material-ui/RaisedButton';
import {
  Link
} from 'react-router-dom';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.auth && this.props.auth.token) {
      this.fetchUser();
    }
    this.state = {users: ''};
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate', this.props.auth.token);
    if(
      this.props.auth.token !== null
      && this.props.auth.token !== prevProps.auth.token
    ) {
       this.fetchUser();
     }
  }

  submitCompletion = (data) => {
    fetch('http://Karina-MacBookPro.local:3000/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  fetchUser () {
    const path = this.props.myProfile ? 'me' : `users/${this.props.user.username}`;
    fetch(`http://Karina-MacBookPro.local:3000/${path}`, {
      headers: {
        'Authorization': `Bearer ${this.props.auth.token}`
      }
    })
    .then(user => user.json())
    .then(user => {
      console.log(user);
      this.setState({users: user});
    });
  }
  render () {
    return (
      <div className="RouteView">
        <img src={this.state.users.avatar} alt={this.state.users.name} />
        <h1>
          {this.state.users.username}
        </h1>
        <h2>
          {this.state.users.category}
        </h2>
        <h2>
          {`${this.state.users.points} points`}
        </h2>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  console.log(ownProps);
  const username = ownProps.match && ownProps.match.params.name
    ? ownProps.match.params.name
    : state.auth.user !== null
      ? state.auth.user.username
      : null;

  return {
    myProfile: ownProps.match.params.name === undefined,
    user: state.data.users
    .find(user => {
      return username === user.username;
    }),
    auth: state.auth,
  };
}

const mapDispatchToProps = (dispatch) => ({
  listUsers: (users) => dispatch(listUsers(users)),
  // tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
