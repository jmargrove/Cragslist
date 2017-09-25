import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Link
} from 'react-router-dom';

class WallListComponent extends React.Component {

  renderWallLable = () => {
    console.log(this.props.allWalls);
    if (this.props.allWalls) {
      var results = this.props.allWalls.map(wall => {
        return (
          <div className="WallLable" key={wall._id}>
            <Link to={`/routes/${wall.name}`}>
          <Card>
            <CardMedia
              overlay={<CardTitle title={wall.name} subtitle={wall.difficulty} />}
            >
              <img src={wall.path} alt="" />
            </CardMedia>
          </Card>
        </Link>
        </div>
        )
      });
      return results;
    }
  }

  render () {
    return (
      <div className="WallList">
        {this.renderWallLable()}
      </div>
    )
  }

}

export default WallListComponent;











// {/* <div className="WallLable" key={wall._id}>
// //   <div className="ImgPreview">
// //     <img className="ImgPrev" alt={wall.name} src={wall.path}/>
// //   </div>
// //   <div className="NameLable">
// //     {wall.name}
// //   </div>
// //   <div className="DifficultyLabel">
// //     {wall.difficulty}
// //   </div>
// // </div> */}
