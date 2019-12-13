import React, { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import { withFirebase } from './firebase'
import Home from './pages/Home/Home'

import AppBar from './components/AppBar/AppBar'

function App() {

useEffect(() => {
console.log('mounted app');

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

export default withFirebase(App);
