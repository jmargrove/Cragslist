import React from 'react';
import AppBar from 'material-ui/AppBar';

import {Tabs, Tab} from 'material-ui/Tabs';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <Tabs>
    <Tab data-route="/ranking">
    </Tab>
    <Tab data-route="/home">
    </Tab>
  </Tabs>
);

export default AppBarExampleIcon;
