import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import WidgetListContainer from './components/containers/widget-list-container';

const browserHistory = createBrowserHistory();

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="users">
          <Route component={SearchLayoutContainer}>
            <Route component={UserListContainer} />
          </Route>
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

        <Route path="widgets">
          <Route component={SearchLayoutContainer}>
            <Route component={WidgetListContainer} />
          </Route>
        </Route>

    </Route>
  </Router>
);
