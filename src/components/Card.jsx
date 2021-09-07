import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            {/* <img src="" alt="" /> */}
            <p className="event-title">Nom de l'évènement</p>
            <p className="event-place">Date et heure</p>
            <p className="event-desc">Description de l'évènement</p>
        </div>
    );
};

export default Card;