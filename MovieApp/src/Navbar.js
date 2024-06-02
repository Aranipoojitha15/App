import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you have a CSS file for styling
import logo from './2.jpg';

const Navbar = ({ likedMoviesCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-links">
        <Link to="/movie">Movies</Link>
        <div className="cart-link">
          <Link to="/cart">Liked Movies ({likedMoviesCount})</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;