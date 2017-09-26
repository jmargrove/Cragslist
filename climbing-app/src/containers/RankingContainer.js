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
    if (this.state.users.length < 1) {
      return(
        <div>
          <h1>Climbers are not here yet</h1>
            <img src='https://s-media-cache-ak0.pinimg.com/originals/28/a9/ab/28a9abd1cf9a544539cd546957d037fd.jpg'
            alt=''
          />
        </div>
      )
    } else {
      return (
        <div className="Ranking">
          <RankingListComponent allUsers={this.state.users} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  // tabNum: state.tabNum
})

const mapDispatchToProps = (dispatch) => ({
  listUsers: (users) => dispatch(listUsers(users)),
  // tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})

export default  connect(mapStateToProps, mapDispatchToProps)(RankingComponent);
