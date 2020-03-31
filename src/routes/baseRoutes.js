/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UnauthenticatedRoutes } from './allRoutes';

const BaseRoute = () => (
  <Switch>
    { UnauthenticatedRoutes.default.map(({ exact, path, component }, index) => (
      <Route key={index} exact={exact} path={path} component={component} />
    )) }
  </Switch>
);
export default BaseRoute;
