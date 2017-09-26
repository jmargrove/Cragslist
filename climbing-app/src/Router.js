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
import WallEditorContainer from './containers/WallEditorContainer';
import SingleRouteComponent from './components/SingleRouteComponent';
import LogInComponent from './components/LogInComponent';
import CreateUserComponent from './components/CreateUserComponent';
import RankingContainer from './containers/RankingContainer';
// {console.log("hey route");}
// const state = store.getState();


const Routes = () => (
  <Router>
    <div>
      <AppBarComponent />
      <Switch>
        <Route path="/routes/:name" component={SingleRouteComponent}/>
        <Route exact path="/" component={DashboardContainer}/>
        <Route path="/user" component={SignInComponent}/>
        <Route path="/me" component={User}/>
        <Route path="/ranking" component={RankingContainer}/>
        <Route path="/routes" component={WallEditorContainer}/>
        <Route path="/sign-in" component={LogInComponent}/>
        <Route path="/create-user" component={CreateUserComponent}/>
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
//
// const WallChild = ({match}) => (
//   <div>
//     <h2>{match.params.name}</h2>
//   </div>
// )

export default Routes;
