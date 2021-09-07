import React from 'react';
import './Home.css';
import Card from '../components/Card';

const Home = () => {

    return (
        <div className="home">
            <h1>Bienvenue sur Paris Events</h1>
            <p>L'application qui permet de rechercher en direct les prochains évènements parisiens.</p>
            <p>Dernier évènement mis en ligne :</p>
            <Card />
        </div>
    );
};

export default Home;
