import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardDetails from '../components/CardDetails';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {

    const [event_, setEvent_] = useState(null);
    const [event_id, setEvent_id] = useState(null);
    const [displayModal, setDisplayModal] = useState(false);

    // on récupère le dernier événement
    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_end%20asc&pretty=false&timezone=UTC')
            .then(response => response.json())
            .then(result => {
                const event_id_ = result.records[0].record.id;
                const event_ = result.records[0].record.fields;
                setEvent_id(event_id_);
                setEvent_(event_);
            }) //Fin fetch et then
    }, []) // fin useEffect

    const openModal = () => {
        setDisplayModal(true);
    }

    const closeModal = () => {
        setDisplayModal(false);
    }

    return (
        <div className="home page">
            <Navbar />
            <main className="home-container">
                <div className="home-info">
                    <h1 className="home-title">Paris Events</h1>
                    <p>L'application qui permet de rechercher en direct les prochains évènements parisiens</p>
                </div>
                <div className="home-event">
                    <p>Evènement à la une</p>
                    {/* Si event_ existe, on affiche le composant event_ */}
                    {event_ && <Card dataEvent={event_} onOpenModal={openModal} />}
                    {/* {displayModal && <CardDetails dataEvent={event_id, event_} onCloseModal={closeModal} />} */}
                </div>
            </main>
        </div>
    );
};

export default Home;