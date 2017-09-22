import React from 'react';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.fetchWalls();
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
      return;
    })
  }

  render () {
    return (
      <div className="DashboardMain">
        <div className="WallList">
          <div className="WallLabel"></div>
        </div>
      </div>
    )
  }
}

export default DashboardComponent;
