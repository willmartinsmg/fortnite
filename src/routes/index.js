import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Matchs from '~/pages/Matchs';
import FormMatch from '~/pages/FormMatch';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/matchs" component={Matchs} isPrivate />
      <Route path="/formmatch" component={FormMatch} isPrivate exact />
      <Route
        path="/formmatch/:year/:month/:match"
        component={FormMatch}
        isPrivate
      />
    </Switch>
  );
}
