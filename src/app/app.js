import React, { Component } from 'react';
import './app.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app-container-component';
import AppMainContainer from './app-main-container-component';
import NotFoundPage from '../pages/not-found-page-component';

import routes from '../routes';

class App extends Component {
  render() {
    var key = 0;
    let homeIndexRouteComponent;
    const routeComponents = routes.map((route) => {
      if(route.isIndex && route.isHome) {
        homeIndexRouteComponent = <IndexRoute component={route.component} key={key++} />;
        return null;
      } else if(route.isIndex) {
        return <IndexRoute component={route.component} key={key++} />;
      } else {
        return <Route path={route.path} component={route.component} key={key++} />;
      }
    });
    return (
      <Router history={hashHistory}>
        <Route path='/' component={AppContainer}>
          {homeIndexRouteComponent}
        </Route>
        <Route path='/main' component={AppMainContainer}>
          {routeComponents}
        </Route>
        <Route path='*' component={NotFoundPage} />
      </Router>
    );
  }
}

export default App;
