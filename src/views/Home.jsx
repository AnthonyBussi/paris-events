import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './Home.css';

function Home() {

    const [lastEvent, setLastEvent] = useState(null);
    // const [event_, setEvent_] = useState(null);
    // const [event_id, setEvent_id] = useState(null);
    // const [displayModal, setDisplayModal] = useState(false);

    // on récupère le dernier événement
    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_end%20asc&pretty=false&timezone=UTC')
            .then(response => response.json())
            .then(result => {
                setLastEvent(result.records[0].record);
                console.log(result.records[0].record);
            }) //Fin fetch et then
    }, []) // fin useEffect

    // const openModal = () => {
    //     setDisplayModal(true);
    // }

    // const closeModal = () => {
    //     setDisplayModal(false);
    // }

    return (
        <main className="home page">
            {/* <Navbar /> */}
            <div className="container">
                <div className="home-info">
                    <h1 className="home-title">Paris Events</h1>
                    <p>L'application qui permet de rechercher en direct les prochains évènements parisiens</p>
                </div>
                <div className="home-event">
                    <p>Evènement à la une</p>
                    {/* Si event_ existe, on affiche le composant event_ */}
                    {/* {event_ && <Card dataEvent={event_} onOpenModal={openModal} />}
                    {displayModal && <CardDetails dataEvent={event_id, event_} onCloseModal={closeModal} />} */}
                    {lastEvent && <Card dataEvent={ lastEvent.fields } eventId={ lastEvent.id }></Card>}
                </div>
            </div>
        </main>
    );
};

export default Home;