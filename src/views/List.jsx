import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './List.css';

// class List extends React.Component {
//     loadEvent() {
//         fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_start%20asc&limit=1&pretty=false&timezone=UTC').then(response => response.json()).then(result => {
//             console.log(result.records);
//         })
//     }
//     render() {
//         return (
//             <div className="list-event page">
//                 <Navbar />
//                 <main>
//                     <h1>Evenements à venir</h1>
//                     {/* <button onClick={()=>{this.loadEvent()}}>Charger les évènements</button> */}

//                     <div className="search">
//                         <input type="text"
//                                 name="search-bar"
//                                 id="search-bar"
//                                 placeholder="Rechercher un évènement" 
//                                 />
//                         <div className="search-results">
//                             <div className="search-result"></div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         );
//     }
// };

// export default List;


function List() {

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records')
            .then(response => response.json())
            .then(result => setDatas(result.records))
    }, []); // fin useEffect

    // console.log(datas);

    const handleSearchTerm = (e) => {
        // console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value);
    }

    console.log(searchTerm);

    return (
        <div className="list-event page">
            <Navbar />
            <main>
                <h1>Evenements à venir</h1>
                <div className="search-bar">
                    <input type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder="Rechercher un évènement"
                        onChange={handleSearchTerm}
                    />
                    <div className="search-results">
                        {/* {datas.filter((val) => {
                            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
                        }) */}
                        {datas
                        .map((val) => {
                            return (
                                <div className="search-result" key={val.id}>
                                    {val.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default List;