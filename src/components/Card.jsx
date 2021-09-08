import React from 'react';
import './Card.css';

function Card({ toto }) {
    return (
        <div className="card">
            <p className="event-title"> {toto.title}</p>
            <p className="event-place"> {toto.date_start}</p>
            <p className="event-desc"> {toto.description}</p>
            <button>Mettre en Favoris</button>
            <button >Retirer en Favoris</button>
        </div>
    );
}



export default Card;