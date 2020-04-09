import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../img/loudboi.png';

const Navbar = () => {
  return (
    <header className='site-header-container'>
      <div className='navbar-bar'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} className='navbar-brand--logo' alt='logo' />
          <span> DopeTho </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
