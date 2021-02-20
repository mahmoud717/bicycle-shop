import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from './dashboard';
import Home from './Home';
const App = () => {
    return (
      <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/"} component={Home} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
export default App;
