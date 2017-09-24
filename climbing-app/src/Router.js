import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



import DashboardContainer from './containers/DashboardContainer';
import SignInComponent from './containers/SignInComponent';
import NavigationComponent from './components/NavigationComponent';
import AppBarComponent from './components/AppBarComponent';
const Routes = () => (
  <Router>
    <div>
      <AppBarComponent />
      <Switch>
        <Route path="/routes/:name" component={WallChild}/>
        <Route exact path="/" component={DashboardContainer}/>
        <Route path="/sign-in" component={SignInComponent}/>
        <Route path="/me" component={User}/>
        <Route path="/rating" component={Rating}/>
      </Switch>
      <NavigationComponent />
    </div>
  </Router>
)

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

const WallChild = ({match}) => (
  <div>
    <h2>{match.params.name}</h2>
  </div>
)

export default Routes;
