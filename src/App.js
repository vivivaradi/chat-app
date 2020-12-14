import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './components/mainPage'
import NotFound from './components/notFound'
import Login from './components/login';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/users/:id'>
          <Main/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
