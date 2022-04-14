import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.scss';

//components/pages//
import Navigation from './components/navigation/navigation.js';
import Welcome from './components/welcome/welcome.js';


const App = () => {

  return (
    <div className='main-app-container'>

      <div className='left-side-menu'>
        <p>React is easy!</p>
        <p>Navigation</p>
        <Navigation />
      </div>

      <div className='right-side-container'>
        <Routes>
          <Route path='/' element={<Welcome />} />
        </Routes>
      </div>


    </div>
  )

}


export default App;
