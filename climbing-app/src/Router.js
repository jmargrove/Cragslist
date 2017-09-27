import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';


import DashboardContainer from './containers/DashboardContainer';
import SignInComponent from './containers/SignInComponent';
import NavigationComponent from './components/NavigationComponent';
import AppBarComponent from './components/AppBarComponent';
import WallEditorContainer from './containers/WallEditorContainer';
import SingleRouteComponent from './components/SingleRouteComponent';
// import LogInComponent from './components/LogInComponent';
import CreateUserComponent from './components/CreateUserComponent';
import RankingContainer from './containers/RankingContainer';
import ProfileComponent from './components/ProfileComponent';
import UserLoginContainer from './containers/UserLoginContainer';
// {console.log("hey route");}
// const state = store.getState();

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    auth.token !== null ? (
      <Component {...props} {...rest}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/routes/:name" component={SingleRouteComponent}/>
            <Route exact path="/" component={DashboardContainer}/>
            <PrivateRoute auth={this.props.auth} path="/user" component={ProfileComponent}/>
            <Route path="/login" component={UserLoginContainer}/>
            <PrivateRoute auth={this.props.auth} path="/me" component={User}/>
            <Route path="/ranking" component={RankingContainer}/>
            <Route path="/routes" component={WallEditorContainer}/>
            <Route path="/sign-in" component={UserLoginContainer}/>
            <Route path="/create-user" component={CreateUserComponent}/>
            <Route path="/:username" component={ProfileComponent}/>
          </Switch>
          <NavigationComponent />
        </div>
      </Router>
    )
  }
}

const Rating = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const User = () => (
  <div>
    <h2>User page</h2>
  </div>
)
//
// const WallChild = ({match}) => (
//   <div>
//     <h2>{match.params.name}</h2>
//   </div>
// )

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Routes);
