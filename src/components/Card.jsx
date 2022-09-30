import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import Heart from '../assets/heart.svg';
import EventServices from '../services/EventServices';

const Card = ({ dataEvent, eventId }) => {

    // const {title, category, date_start} = dataEvent;
    console.log(dataEvent);

    return (
        <div className="card">
            <p className="event-title" dangerouslySetInnerHTML={{ __html: dataEvent.title }}></p>
            <img src={ dataEvent.cover_url } alt={ dataEvent.cover_alt } className="event-img" />
            <p className="event-category">{ dataEvent.category }</p>
            <p className="event-place">{EventServices.DateForm(dataEvent.date_start)}</p>
            {/* <img src={ Heart } alt="Icone de favoris" /> */}
            <Link to={`evenement/${eventId}`} className="event-detail-link">
                <p className="event-details">Voir en détails</p>
            </Link>
        </div>
    );
}


export default Card;