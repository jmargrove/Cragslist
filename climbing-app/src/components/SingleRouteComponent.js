import React from 'react';
import { connect } from 'react-redux';

import { listWalls } from '../actions';


class SingleRouteComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.fetchWalls();
  // }
  constructor(props) {
    super(props);
    this.fetchWalls();
    this.state = {walls: ''};
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
  //
  // getAWall () {
  //   let wallName = this.props.match.params.name;
  //   if (wallName === ) {
  //
  //   }
  // }
  render () {
    console.log(this.props.wall);
    return (
      <div>
        <div className="RouteView">
          <img src={this.state.walls.path} />
        </div>
        <h1>hey {this.state.walls.name}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  wall: state.walls
  .find(wall => {
    console.log(wall.name, ownProps.match.params.name);
    return ownProps.match.params.name;
  }),
  // tabNum: state.tabNum
})

const mapDispatchToProps = (dispatch) => ({
  listWalls: (walls) => dispatch(listWalls(walls)),
  // tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})


export default connect(mapStateToProps, mapDispatchToProps)(SingleRouteComponent);
