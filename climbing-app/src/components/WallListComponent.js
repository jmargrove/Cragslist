import React from 'react';

class WallListComponent extends React.Component {

  constructor (props) {
    super(props);

  }
  renderWallLable () {
    console.log(this.props.allWalls);
    return this.props.allWalls.map(wall => {
      console.log(wall);
      return <div className="WallLable">
        {wall.name}
      </div>
    })
  }

  render () {
    console.log(this.props.allWalls[2]);
    return (
      <div>{this.renderWallLable}</div>
    )
  }

}

export default WallListComponent;
