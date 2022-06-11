import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='topnav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/todos'>Todos</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </div>
  );
}

export default Nav;
