import React from 'react';
import Navbar from '../components/Navbar';

import './Favorites.css';

const Favorites = () => {

    return (
        <div className="favorites page">
            <Navbar />
            <main>
                <h1 className="fav-title">Elements sauvegardés</h1>
                <p>Aucun évènement n'a été sauvegardés</p>

            </main>
        </div>
    );
};

export default Favorites;
