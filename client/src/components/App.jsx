import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import UsersPage from './UsersPage.jsx';
import NotFound from './NotFound.jsx';

const PrimaryLayout = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books/:user" component={UsersPage} /> 
      <Route path="*" component={NotFound} /> 
    </Switch>
  </div>
)

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;
