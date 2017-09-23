import React from 'react';

class WallListComponent extends React.Component {

  renderWallLable = () => {
    console.log(this.props.allWalls);
    if (this.props.allWalls) {
      var results = this.props.allWalls.map(wall => {
        return (
          <div className="WallLable" key={wall._id}>
            <div className="ImgPreview">
              <img className="ImgPrev" alt={wall.name} src={wall.path}/>
            </div>
            {wall.name}
          </div>
        )
      });
      return results;
    }
  }

  render () {
    return (
      <div>
        {this.renderWallLable()}
      </div>
    )
  }

}

export default WallListComponent;
