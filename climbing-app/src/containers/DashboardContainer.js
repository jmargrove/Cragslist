import React from 'react';
import { connect } from 'react-redux';

import { listWalls } from '../actions';

import WallListComponent from '../components/WallListComponent';
import NavigationComponent from '../components/NavigationComponent';


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
    fetch('http://Karina-MacBookPro.local:3000/routes')
    .then(walls => walls.json())
    .then(walls => {
      return walls;
    })
    .then(fetchedWalls => {
      this.setState({walls: fetchedWalls});
      this.props.listWalls(fetchedWalls);
      console.log("local state", this.state);
    })
  }

  render () {
    if (this.state.walls.length < 1) {
      return (
        <div>
          <img src='https://cdn.ukc2.com/i/259558.jpg'
          alt=''
        />
          <h1>
            Route setting in process
          </h1>
        </div>
      )
    } else {
      return (
        <div>
          <div className="Dashboard">
            <WallListComponent allWalls={this.state.walls} />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  walls: state.walls,
  // tabNum: state.tabNum
})

const mapDispatchToProps = (dispatch) => ({
  listWalls: (walls) => dispatch(listWalls(walls)),
  // tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export default DashboardContainer;
