import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import AppBar from './components/AppBar/AppBar'

function App() {
  return (
    <div className="App">
           <BrowserRouter>
          <Route path='/' component={AppBar} />
        </BrowserRouter>
    </div> 
  );
}

export default App;
