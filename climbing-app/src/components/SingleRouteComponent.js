import React from 'react';

class SingleRouteComponent extends React.Component {

  constructor(props) {
    super(props);
    this.fetchWalls();
  }

  fetchWalls () {
    fetch('http://Karina-MacBookPro.local:3000/routes')
    .then(walls => walls.json())
    .then(walls => {
      console.log("fetched walls", walls);
    })}
  render () {

    return (
      <h1>hey {this.props.match.params.name}</h1>
    )
  }
}

export default SingleRouteComponent;
