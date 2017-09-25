import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Link
} from 'react-router-dom';



class SignInComponent extends React.Component {

  render () {
    return (
      <div>
        <h1>We have SignInComponent</h1>
        <Link to={`/me`}>
          <RaisedButton label="My profile" primary={true}  />
        </Link> <br />
        <RaisedButton label="Create profile" primary={true}  />
      </div>
    )
  }
}

export default SignInComponent;
