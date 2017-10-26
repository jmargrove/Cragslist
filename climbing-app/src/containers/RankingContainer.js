import React from 'react';
import {
  Link
} from 'react-router-dom';

import { connect } from 'react-redux';

import { listUsers } from '../actions';


import RankingListComponent from '../components/RankingListComponent';


class RankingComponent extends React.Component {

  constructor(props) {
    super(props);
    this.fetchUsers();
    this.state = {users: ''};
  }

  Sort (a, b) {
    return b.points - a.points;
  }

  fetchUsers () {
    fetch('http://Karina-MacBookPro.local:3000/ranking')
    .then(users => users.json())
    .then(users => {
      return users.sort(this.Sort);
    })
    .then(fetchedUsers => {
      this.setState({users: fetchedUsers});
      this.props.listUsers(fetchedUsers);
      console.log("local state", this.state);
    })
  }

  render () {
      return (
        <div className="Ranking">
          <h2>Ranking</h2>
          <RankingListComponent allUsers={this.state.users} />
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  users: state.data.users,
})

const mapDispatchToProps = (dispatch) => ({
  listUsers: (users) => dispatch(listUsers(users)),
})

export default  connect(mapStateToProps, mapDispatchToProps)(RankingComponent);
