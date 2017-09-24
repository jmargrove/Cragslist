import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import { connect } from 'react-redux';
import { tabSwitch } from '../actions';

import {
  Link
} from 'react-router-dom';

const addIcon = <FontIcon className="material-icons">add</FontIcon>;
const userIcon = <FontIcon className="material-icons">perm_identity</FontIcon>;
const ratingIcon = <FontIcon className="material-icons">language</FontIcon>;

class Navigation1Component extends React.Component {
  state = {
      selectedIndex: 0,
    };

    select = (index) => {
      this.setState({selectedIndex: index});
      this.props.tabSwitch(index);
    }
  render () {
    return (
      <div className="Navigation">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <Link to={`/routes`}>
            <BottomNavigationItem
              icon={addIcon}
              onClick={() => this.select(0)}
            />
          </Link>
          <Link to={`/`}>
            <BottomNavigationItem
              icon={ratingIcon}
              onClick={() => this.select(1)}
            />
          </Link>
          <Link to={`/sign-in`}>
            <BottomNavigationItem
              icon={userIcon}
              onClick={() => this.select(2)}
            />
          </Link>
          </BottomNavigation>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tabNum: state.tabNum
})

const mapDispatchToProps = (dispatch) => ({
  tabSwitch: (tabNum) => dispatch(tabSwitch(tabNum))
})

const NavigationComponent = connect(mapStateToProps, mapDispatchToProps)(Navigation1Component);

export default NavigationComponent;
