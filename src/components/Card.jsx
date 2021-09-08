import React from 'react';
import './Card.css';

function Card({ dataEvent }) {
    return (
        <div className="card">
            <p className="event-title"> {dataEvent.title}</p>
            <img src={dataEvent.cover.url} alt="Illustration de l'évènement" className="event-img" />
            <p className="event-category"> {dataEvent.category}</p>
            <p className="event-place"> {dataEvent.date_start}</p>
            <p className="event-desc"> {dataEvent.description}</p>
            <button>Mettre en Favoris</button>
            <button >Retirer en Favoris</button>
        </div>
    );
}



export default Card;