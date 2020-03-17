import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/signup/signup.component';
import './App.css';

const App = () => (
  <Switch>
    <Route
      exact
      path="/signup"
      component={SignUp}
    />
  </Switch>
);

export default App;
