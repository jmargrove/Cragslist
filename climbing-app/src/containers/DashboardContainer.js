import React from 'react';
import { connect } from 'react-redux';

import { listWalls } from '../actions';

import WallListComponent from '../components/WallListComponent';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.fetchWalls();
    this.state = {walls: ''};
  }

  Sort (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  fetchWalls () {
    fetch('http://localhost:3000/routes')
    .then(walls => walls.json())
    .then(walls => {
      return walls;
    })
    .then(fetchedWalls => {
      this.setState({walls: fetchedWalls});
      console.log("local state", this.state);
    })
  }

  render () {
    return (
      <div className="Dashboard">
        <WallListComponent allWalls={this.state.walls} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  walls: state.walls
})

const mapDispatchToProps = (dispatch) => ({
  listWalls: (walls) => dispatch(listWalls(walls))
})

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export default DashboardContainer;
