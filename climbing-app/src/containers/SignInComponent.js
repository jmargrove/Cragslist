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
        <Link to={`/sign-in`}>
          <RaisedButton label="My profile" primary={true}  />
        </Link> <br />
        <Link to={`/create-user`}>
          <RaisedButton label="Create profile" primary={true}  />
        </Link>
      </div>
    )
  }
}

export default SignInComponent;
