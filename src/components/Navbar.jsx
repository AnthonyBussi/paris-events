import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">        
        <Link to='/'>
          Accueil
        </Link>
        <Link to='/list'>
          Liste des évènements
        </Link>
        <Link to='/favorites'>
          Favoris
        </Link>
    </nav>
  );
};

export default Navbar;