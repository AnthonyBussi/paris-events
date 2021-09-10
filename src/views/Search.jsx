import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardDetails from '../components/CardDetails';
import './Search.css';

function Search() {

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [event_, setEvent_] = useState(null);
    const [event_id, setEvent_id] = useState(null);
    const [displayModal, setDisplayModal] = useState(false);

    const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=12&search=";


    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }


    useEffect(() => {
        fetch(URL + searchTerm)
            .then(response => response.json())
            .then(result => {
                setDatas(result.records)
                const event_id_ = result.records[0].record.id;
                const event_ = result.records[0].record.fields;
                setEvent_id(event_id_);
                setEvent_(event_);
            })
    }, [searchTerm]); // fin useEffect

    const openModal = () => {
        setDisplayModal(true);
    }

    const closeModal = () => {
        setDisplayModal(false);
    }

    // console.log(datas);

    return (
        <div className="list-event page">
            <Navbar />
            <main>
                <h1 className="search-title">Evenements à venir</h1>
                <div className="search-container">
                    <form>
                        <input type="text"
                            name="search-searchbar"
                            id="search-searchbar"
                            placeholder="Rechercher un évènement"
                            onInput={handleSearchTerm}
                        />
                        <button type="button" name="search-btn" className="search-btn">Rechercher</button>
                    </form>
                    <div className="search-result-container">
                        {datas && datas.map((event) => (
                            <Card key={event.record.id} id={event.record.id} dataEvent={event.record.fields} onOpenModal={openModal} />
                        ))}

                        {displayModal && <CardDetails dataEvent={event_id, event_} onCloseModal={closeModal} />}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Search;