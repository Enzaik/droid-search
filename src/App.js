import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'recompose'
import './App.css';

import { withFirebase } from './firebase'
import { withAuthentication } from './session'
import Home from './pages/Home/Home'
import Roms from './pages/Roms/Roms'

import AppBar from './components/AppBar/AppBar'

function App() {
  const [user, setUser] = useState(localStorage.email)
  const [pic, setPic] = useState(localStorage.photoURL)

  useEffect(() => {
    
    setUser(localStorage.email)
    setPic(localStorage.photoURL)

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' render={props => <AppBar user={user} pic={pic} />} />
        <Route path='/home' component={Home} />
        <Route path='/roms' component={Roms} />
      </BrowserRouter>
    </div>
  );
}

const MyApp = compose (
  withFirebase,
)(App)

export default MyApp;
