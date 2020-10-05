import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NewsList } from './components/List';
import { CreateNews } from './components/CreateNews';

export default () => (
  <>
    <Switch>
      <Route path="/add" component={CreateNews} />
      <Route path="/" component={NewsList} />
      <Redirect to="/" />
    </Switch>
  </>
);