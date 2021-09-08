import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
    const [event_, setEvent_] = useState(null);
    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_end%20asc&limit=10&pretty=false&timezone=UTC')
        .then(response=>response.json())
        .then(result=>{
          /*console.log(result.records[0].record.id);*/
          console.log(result.records[0].record.fields);
          const event_ = result.records[0].record.fields;
          setEvent_(event_)
        }) //Fin fetch et then
        // setEvent_({ title: "Titre de l'évènement", date_start: "04/12/1992", description: "L'application qui permet de rechercher en direct les prochains évènements parisiens. L'application qui permet de rechercher en direct les prochains évènements parisiens." })
    }, []) // fin useEffect

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
                    {event_ && <Card dataEvent={event_} />}
                </div>
            </main>
        </div>
    );
};

export default Home;
