import React from 'react';
import Navbar from '../components/Navbar';

const Favorites = () => {

    return (
        <div className="favorites page">
            <Navbar />
            <main>
                <h1>Elements sauvegardés</h1>
                <p>Aucun évènement n'a été sauvegardés</p>

            </main>
        </div>
    );
};

export default Favorites;
