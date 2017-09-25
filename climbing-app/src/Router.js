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
// {console.log("hey route");}
// const state = store.getState();


const Routes = () => (
  <Router>
    <div>
      <AppBarComponent />
      <Switch>
        <Route path="/routes/:name" component={SingleRouteComponent}/>
        <Route exact path="/" component={DashboardContainer}/>
        <Route path="/sign-in" component={SignInComponent}/>
        <Route path="/me" component={User}/>
        <Route path="/rating" component={Rating}/>
        <Route path="/routes" component={WallEditorContainer}/>
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
