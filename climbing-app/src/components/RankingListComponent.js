import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {
  Link
} from 'react-router-dom';

class RankingListComponent extends React.Component {

  renderUserLable = () => {
    console.log(this.props.allUsers);
    if (this.props.allUsers) {
      var results = this.props.allUsers.map(user => {
        return (
          <div className="UserLable" key={user._id}>
            {/* <Link to={`/routes/${user.name}`}> */}
          <Card>
            <CardMedia
              overlay={<CardTitle title={`${user.username} - ${user.points} points`} subtitle={user.category} />}
            >
              <img src={user.avatar} alt={user.name} />
            </CardMedia>
          </Card>
        {/* </Link> */}
        </div>
        )
      });
      return results;
    }
  }

  render () {

    return (
      <div className="UserList">
        {this.renderUserLable()}
      </div>
    )
  }
}

export default RankingListComponent;
