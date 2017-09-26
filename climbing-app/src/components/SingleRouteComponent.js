import React from 'react';
import { connect } from 'react-redux';

import { listWalls } from '../actions';

import RaisedButton from 'material-ui/RaisedButton';
import {
  Link
} from 'react-router-dom';


class SingleRouteComponent extends React.Component {

  constructor(props) {
    super(props);
    this.fetchWalls();
    this.state = {walls: ''};
  }

  submitCompletion = (data) => {
    fetch('http://Karina-MacBookPro.local:3000/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.auth.token}`
      },
      body: JSON.stringify(data)
    })
  }

  fetchWalls () {
    fetch('http://Karina-MacBookPro.local:3000/routes')
    .then(walls => walls.json())
    .then(walls => {
      console.log(walls);
      return walls;
    })
    .then(fetchedWalls => {
      this.props.listWalls(fetchedWalls);
      let wall = fetchedWalls.find(wall => {
        return wall.name === this.props.match.params.name;
      })
      this.setState({walls: wall});
    })
  }

  handleSubmit = (e) => {

    console.log(this.state.walls.name);
    this.submitCompletion({
      name: this.state.walls.name
    })
    //give points to user
  }

  render () {
    console.log(this.props.wall);
    return (
      <div>
        <div className="RouteView">
          <img src={this.state.walls.path} alt={this.state.walls.name} />
          <h1>
            {this.state.walls.name}
          </h1>
          <h2>
            {this.state.walls.difficulty}
          </h2>
        </div>
        <div className="ButtonCompletion">
          <RaisedButton label="I have completed this route" fullWidth={true} primary={true} onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  wall: state.data.walls
  .find(wall => {
    console.log(wall.name, ownProps.match.params.name);
    return ownProps.match.params.name;
  }),
  auth: state.auth
  // tabNum: state.tabNum
})

const mapDispatchToProps = (dispatch) => ({
  listWalls: (walls) => dispatch(listWalls(walls)),
  // tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})


export default connect(mapStateToProps, mapDispatchToProps)(SingleRouteComponent);
