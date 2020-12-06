import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPanel from './components/userPage'
import Message from './components/message'
import {Route, Switch} from 'react-router-dom'
import Main from './components/mainPage'
import NotFound from './components/notFound'
import * as Data from './API/data'
import axios from 'axios';
import Login from './components/login';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/:id'>
          <Main/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
