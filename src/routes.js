// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import HomeApp from './components/HomeApp';
import NotFound from './components/NotFound';
import Auth from './services/auth.service';
import Login from './components/Login';
import JobDetail from './components/Home/detail';

function requireAuth(nextState, replace) {
    if (!Auth.isLoggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomeApp} />
    <Route path="jobdetail/:id" component={JobDetail} />
    <Route path="/seeker" component={App} onEnter={requireAuth} />
    <Route path="/employeer" component={App} onEnter={requireAuth} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
