import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/rechercher'>
                        Liste des évènements
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/favoris'>
                        Favoris
                    </NavLink>
                </li>
            </ul>


        </nav>
    );
};

export default Navbar;