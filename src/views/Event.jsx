import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Heart from '../assets/heart.svg';

import './Event.css';

const Event = () => {
    const { id } = useParams();
    console.log(id);

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`)
            .then(response => response.json())
            .then(response =>  setEventData(response.record.fields)
            ) //Fin fetch et then
    }, [id]) // fin useEffect

    

    return (
        <main className="event page">
            <div className="container">
                <div className="data">
                    <h1 className="event-title">{ eventData.title }</h1>
                    <img src={ eventData.cover_url } alt={ eventData.cover_alt } className="event-img" />
                    <div className="event-desc" dangerouslySetInnerHTML={{ __html: eventData.description }}></div>
                    <p className="event-subtitle">Date</p>
                    <p className="event-date" dangerouslySetInnerHTML={{ __html: eventData.date_description }}></p>
                    <p className="event-subtitle">Tarif</p>
                    <p className="event-price">{ eventData.price_detail }</p>
                    <p className="event-subtitle">Adresse</p>
                    <p className="event-adress"><span>{ eventData.address_name }</span><span>{ eventData.address_street } { eventData.address_zipcode } { eventData.address_city }</span></p>
                    <p className="event-subtitle">Pour s'y rendre</p>
                    <p className="event-access">{ eventData.transport }</p>
                    <p className="event-subtitle">Pour plus d'infos</p>
                    <p className="event-contact">{ eventData.contact_phone } - { eventData.contact_mail } - <a href={ eventData.contact_facebook }>Page Facebook</a></p>
                    <img src={Heart} alt="Icone de favoris" className="fav-button" />
                </div>
            </div>
        </main>
    );
};

export default Event;