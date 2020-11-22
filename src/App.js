import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPanel from './components/userPage'
import Message from './components/message'
import {Route, Switch} from 'react-router-dom'
import Main from './components/mainPage'
import NotFound from './components/notFound'
import * as Data from './API/data'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const result = Data.getCurrentUser()
    setCurrentUser(result)
  }, [currentUser])

  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Main currentUser={currentUser}/>
        </Route>
        <Route path='/profile'>
            <UserPanel currentUser={currentUser}/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
