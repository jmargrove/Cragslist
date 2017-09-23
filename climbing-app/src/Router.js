import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



import DashboardContainer from './containers/DashboardContainer';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/routes/:name" component={WallChild}/>
      <Route exact path="/" component={DashboardContainer}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/me" component={User}/>
      <Route path="/rating" component={Rating}/>
    </Switch>
  </Router>
)

const Rating = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const SignIn = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const User = () => (
  <div>
    <h2>User page</h2>
  </div>
)

const WallChild = ({match}) => (
  <div>
    <h2>{match.params.name}</h2>
  </div>
)

export default Routes;
