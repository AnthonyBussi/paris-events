import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './Search.css';

function Search() {

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=12')
            .then(response => response.json())
            .then(result => setDatas(result.records))
    }, []); // fin useEffect

    console.log(datas);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    const showResult = () => {
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${searchTerm}`)
            .then((response) => response.json())
            .then((result) => {
                setSearchTerm(result.records);
                console.log(result.records);
            })
    }
    // console.log(searchTerm);

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
                        <button type="button" name="search-btn" className="search-btn" onClick={showResult}>Rechercher</button>
                    </form>
                    <div className="search-result-container">
                        { datas && datas.map((event) => (
                            <Card key={ event.record.id } id={ event.record.id } dataEvent={ event.record.fields } />
                        ))}

                    </div>
                </div>
            </main>
        </div>
    );
}

export default Search;