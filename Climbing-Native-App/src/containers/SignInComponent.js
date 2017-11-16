// import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import { Link } from 'react-router-dom';
//


class SignInComponent extends React.Component {

  render () {
    return (
      <View style={styles.containers}>
        {/* <Link to={`/sign-in`}>
          <RaisedButton label="My profile" primary={true}  />
        </Link> <br />
        <Link to={`/create-user`}>
          <RaisedButton label="Create profile" primary={true}  />
        </Link> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignInComponent;
