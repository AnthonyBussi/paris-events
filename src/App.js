import Home from './views/Home';
import Search from './views/Search';
// import Favorites from './views/Favorites';
import Event from './views/Event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

function App() {
    return (    
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} exact />
                    <Route path='/rechercher' element={ <Search/> } />
                    <Route path='/evenement/:id' element={ <Event/> } />
                    <Route path="/rechercher/evenement/:id" element={ <Event/> } />
                    {/* <Route path='/favoris' element={ <Favorites/> } /> */}
                </Routes>
            </BrowserRouter>  
    );
}

export default App;
