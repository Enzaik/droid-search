import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'recompose'
import './App.css';

import { withFirebase } from './firebase';
import { withAuthentication } from './session'
import Home from './pages/Home/Home'

import AppBar from './components/AppBar/AppBar'

function App() {

  useEffect(() => {
    console.log(localStorage);

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={AppBar} />
        <Route path='/home' component={Home} />
      </BrowserRouter>
    </div>
  );
}

const MyApp = compose (
  withFirebase,
)(App)

export default MyApp;
