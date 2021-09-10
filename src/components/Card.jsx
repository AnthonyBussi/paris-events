import React from 'react';
import './Card.css';
import Heart from '../assets/heart.svg';
import EventServices from '../services/EventServices';

function Card({ dataEvent, onOpenModal }) {
    return (
        <div className="card">
            <p className="event-title" dangerouslySetInnerHTML={{ __html: dataEvent.title }}></p>
            <img src={ dataEvent.cover.url } alt={ dataEvent.cover_alt } className="event-img" />
            <p className="event-category">{ dataEvent.category }</p>
            <p className="event-place">{EventServices.DateForm(dataEvent.date_start)}</p>
            <img src={Heart} alt="Icone de favoris" />
            <p className="event-details" onClick={ onOpenModal }>Voir en détails</p>
        </div>
    );
}


export default Card;