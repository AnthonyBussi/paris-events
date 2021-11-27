import React, { useState } from 'react';
import Card from '../components/Card';
// import CardDetails from '../components/CardDetails';
import './Search.css';


const Search = () => {
    const [allData, setAllData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);


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
        });
    }

    return (
        <main className="list-event page">
             <div className="container">
                 <h1 className="search-title">Evenements à venir</h1>
                 <section className="search-container">
                     <form onSubmit={ displayResult }>
                         <input type="text"
                             name="search-searchbar"
                             id="search-searchbar"
                             placeholder="Rechercher un évènement"
                             onInput={ handleSearchTerm}
                         />
                         <button type="submit" name="search-btn" className="search-btn">Rechercher</button>
                     </form>
                     <div className="search-result-container">
                         {allData && allData.map((event) => (
                             <Card key={event.record.id} dataEvent={event.record.fields} eventId={ event.record.id } />
                         ))}
                     </div>
                 </section>
             </div>
         </main>
    )





}


export default Search;