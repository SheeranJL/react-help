import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.scss';

//import compontents//
import NavLink from '../reusables/nav-button/nav-button.js'

const Navigation = () => {

  return (
    <div className='navigation-options-container'>
      <NavLink linkTo='/'>Welcome</NavLink>
      <NavLink linkTo='/what'>What is React?</NavLink>
      <NavLink linkTo='/setup'>Setting up React</NavLink>
      <NavLink linkTo='/components'>Components</NavLink>
      <NavLink linkTo='/state'>State</NavLink>
      <NavLink linkTo='/context'>Context</NavLink>
      <NavLink linkTo='/hooks'>Hooks</NavLink>
      <NavLink linkTo='/context'>Context</NavLink>
      <NavLink linkTo='/redux'>Redux</NavLink>
    </div>
  )
}

export default Navigation;
