import React from 'react';

class List extends React.Component {
    loadEvent() {
        fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=3&sort=date_start').then(response => response.json()).then(result => {
            console.log(result.records);
        })
    }
    render() {
        return (
            <div className="event page">
                <h1>Evenements à venir</h1>
                {/* <button onClick={()=>{this.loadEvent()}}>Charger les évènements</button> */}
                <div id="search">
                    <input type="text" id="request" placeholder="Recherchez une activité" />
                    <button type="submit" id="searchButton" onClick={() => { this.loadEvent() }}>Rechercher</button>
                </div>
            </div>

        );
    }
};

export default List;
