import React from 'react';
import Navbar from '../components/Navbar';
import './List.css';

class List extends React.Component {
    loadEvent() {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_start%20asc&limit=1&pretty=false&timezone=UTC').then(response => response.json()).then(result => {
            console.log(result.records);
        })
    }
    render() {
        return (
            <div className="list-event page">
                <Navbar />
                <main>
                    <h1>Evenements à venir</h1>
                    {/* <button onClick={()=>{this.loadEvent()}}>Charger les évènements</button> */}
                    <div id="search">
                        <input type="text" id="request" placeholder="Recherchez une activité" />
                        <button type="submit" id="searchButton" onClick={() => { this.loadEvent() }}>Rechercher</button>
                    </div>
                </main>
            </div>
        );
    }
};

export default List;
