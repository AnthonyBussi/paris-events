import React from 'react';
import './CardDetails.css';


function CardDetails({ dataEvent, onCloseModal }) {
    return (
        <div className="modal">
            <div onClick={ onCloseModal } class="cross">X</div>
            <p className="modal-title">{ dataEvent.title }</p>
            <img src={ dataEvent.cover_url } alt={ dataEvent.cover_alt } className="modal-img" />
            <p className="modal-desc" dangerouslySetInnerHTML={{ __html: dataEvent.description }}></p>
            <p className="modal-date" dangerouslySetInnerHTML={{ __html: dataEvent.date_description }}></p>
            <p className="modal-price">{ dataEvent.price_detail }</p>
            <p className="modal-adress"><span>{ dataEvent.address_name }</span><span>{ dataEvent.address_street } { dataEvent.address_zipcode } { dataEvent.address_city }</span></p>
            <p className="modal-access">Pour s'y rendre : { dataEvent.transport }</p>
            <p className="modal-contact">{ dataEvent.contact_phone } - { dataEvent.contact_mail } - <a href={ dataEvent.contact_facebook }>Page Facebook</a></p>
            <button>Favoris</button>
        </div>
    )
}
export default CardDetails;