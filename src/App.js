import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'recompose'
import './App.css';

import { withFirebase } from './firebase'
import Home from './pages/Home/Home'
import Roms from './pages/Roms/Roms'
import Kernels from './pages/Kernels/Kernels'

import AppBar from './components/AppBar/AppBar'
import { Switch } from '@material-ui/core';

function App() {
  const [user, setUser] = useState(localStorage.email)
  const [pic, setPic] = useState(localStorage.photoURL)
  const [searchText, setSearchText] = useState('');

  useEffect(() => {

    setUser(localStorage.email)
    setPic(localStorage.photoURL)

  }, [])
  const changeHandler = (e) => {
    setSearchText(e.target.value)
    console.log('changing', searchText);
    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' render={props => <AppBar user={user} pic={pic} onChange={changeHandler} value={searchText}/>} />
        <Route path='/home' component={Home} />
        <Route path='/roms' render={text=> <Roms text={text} />} />
        <Route path='/kernels' component={Kernels} />
      </BrowserRouter>
    </div>
  );
}

const MyApp = compose(
  withFirebase,
)(App)

export default MyApp;
