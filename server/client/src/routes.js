/* eslint-disable global-require */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './modules/App/App';

const Main = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);

export default (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);
