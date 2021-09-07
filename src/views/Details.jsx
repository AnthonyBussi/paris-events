import React from 'react';

class Details extends React.Component {
    loadEvent() {
        fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=3&sort=date_start').then(response => response.json()).then(result => {
            console.log(result.records);
        })
    }
    render() {
        return (
            <div className="event page">
                <h1>Détail</h1>
                <p>Détail d'un évènement</p>
                <button onClick={() => { this.loadEvent() }}>Charger les évènements</button>
            </div>

        );
    }

};

export default Details;
