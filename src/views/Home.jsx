import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {

    return (
        <div className="home page">
            <Navbar />
            <main className="home-container">
                <div>
                    <h1>Paris Events</h1>
                    <p>L'application qui permet de rechercher en direct les prochains évènements parisiens.</p>
                    <p>Dernier évènement mis en ligne :</p>
                </div>
                <Card />
            </main>
        </div>
    );
};

export default Home;
