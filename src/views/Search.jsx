import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardDetails from '../components/CardDetails';
import './Search.css';


const Search = () => {
    const [allData, setAllData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const [event_, setEvent_] = useState(null);
    const [event_id, setEvent_id] = useState(null);

    
    const [displayModal, setDisplayModal] = useState(false);


    // On récupère la donnée saisie par l'utilisateur
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    const displayResult = (e) => {
        e.preventDefault();
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=12&search=${searchTerm}`)
        .then((result) => result.json())
        .then((response) => {
            setAllData(response.records);
            const event_id_ = response.records[0].record.id;
            const event_ = response.records[0].record.fields;
            setEvent_id(event_id_);
            setEvent_(event_);
        });
    }

    const openModal = () => {
        setDisplayModal(true);
    }

    const closeModal = () => {
        setDisplayModal(false);
    }

    return (
        <div className="list-event page">
             <Navbar />
             <main>
                 <h1 className="search-title">Evenements à venir</h1>
                 <section className="search-container">
                     <form onSubmit={displayResult}>
                         <input type="text"
                             name="search-searchbar"
                             id="search-searchbar"
                             placeholder="Rechercher un évènement"
                             onInput={handleSearchTerm}
                         />
                         <button type="submit" name="search-btn" className="search-btn">Rechercher</button>
                     </form>
                     <div className="search-result-container">
                         {allData && allData.map((event) => (
                             <Card key={event.record.id} id={event.record.id} dataEvent={event.record.fields} onOpenModal={openModal} />
                         ))}

                         {/* {displayModal && <CardDetails dataEvent={event_id, event_} onCloseModal={closeModal} />} */}
                     </div>
                 </section>
             </main>
         </div>
    )





}


export default Search;