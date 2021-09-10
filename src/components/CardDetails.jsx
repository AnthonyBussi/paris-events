import React from 'react';
import './CardDetails.css';
import Cross from '../assets/close.svg';
import Heart from '../assets/heart.svg';


function CardDetails({ dataEvent, onCloseModal }) {
    return (
        <div className="modal">
            <div onClick={ onCloseModal } className="cross"><img src={Cross} alt="" /></div>
            <p className="modal-title">{ dataEvent.title }</p>
            <img src={ dataEvent.cover_url } alt={ dataEvent.cover_alt } className="modal-img" />
            <div className="modal-desc" dangerouslySetInnerHTML={{ __html: dataEvent.description }}></div>
            <p className="modal-date" dangerouslySetInnerHTML={{ __html: dataEvent.date_description }}></p>
            <p className="modal-price">{ dataEvent.price_detail }</p>
            <p className="modal-adress"><span>{ dataEvent.address_name }</span><span>{ dataEvent.address_street } { dataEvent.address_zipcode } { dataEvent.address_city }</span></p>
            <p className="modal-access">Pour s'y rendre : { dataEvent.transport }</p>
            <p className="modal-contact">{ dataEvent.contact_phone } - { dataEvent.contact_mail } - <a href={ dataEvent.contact_facebook }>Page Facebook</a></p>
            <img src={Heart} alt="Icone de favoris" className="fav-button" />
        </div>
    )
}
export default CardDetails;