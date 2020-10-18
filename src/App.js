import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserPanel from './components/userPanel'
import Message from './components/message'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/users' component={UserPanel}/>
        <Route path='/messages' component={Message}/>
      </Switch>
    </div>
  );
}

export default App;
