import React from 'react';

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
      console.log(walls);
      console.log(walls.sort(this.Sort));
      return walls;
    })
    .then(fetchedWalls => {
      this.setState({walls: fetchedWalls});
      console.log(this.state);
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

export default DashboardComponent;
