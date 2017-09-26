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
    this.fetchUsers();
    this.state = {users: ''};
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

  fetchUsers () {
    fetch('http://Karina-MacBookPro.local:3000/ranking')
    .then(users => users.json())
    .then(users => {
      console.log(users);
      return users;
    })
    .then(fetchedUsers => {
      this.props.listUsers(fetchedUsers);
      let user = fetchedUsers.find(user => {
        return user.name === this.props.match.params.name;
      })
      this.setState({users: user});
    })
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

const mapStateToProps = (state, ownProps) => ({
  user: state.users
  .find(user => {
    console.log(user.username, ownProps.match.params.name);
    return ownProps.match.params.name;
  }),
  // tabNum: state.tabNum
})

const mapDispatchToProps = (dispatch) => ({
  listUsers: (users) => dispatch(listUsers(users)),
  // tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
