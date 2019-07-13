import React from 'react';
import { NavLink } from 'react-router-dom'

import '../assets/css/navbar.scss';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo">Logo</a>
        <ul>
          <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          <NavLink activeClassName="selected" to="/about">About</NavLink>
          <NavLink exact activeClassName="selected" to="/blog">Blog</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
