import React from 'react';
import './Card.css';

function Card({ dataEvent, onOpenModal }) {
    return (
        <div className="card" onClick={ onOpenModal }>
            <p className="event-title" dangerouslySetInnerHTML={{ __html: dataEvent.title }}></p>
            {/* <div className="event-img" style={{ backgroundImage: `url(${dataEvent.cover_url})`}}> </div> */}
            <img src={ dataEvent.cover.url } alt={ dataEvent.cover_alt } className="event-img" />
            <p className="event-category">{ dataEvent.category }</p>
            <p className="event-place">{ dataEvent.date_start }</p>
            {/* <p className="event-desc" dangerouslySetInnerHTML={{ __html: dataEvent.description }}></p> */}
            <button>Favoris</button>
        </div>
    );
}


export default Card;