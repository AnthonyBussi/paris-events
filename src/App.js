import Navbar from './components/Navbar';
import Home from './views/Home';
import List from './views/List';
import Favorites from './views/Favorites';
import Details from './views/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Route path='/' component={Home} exact />
            <Route path='/rechercher' component={List} />
            <Route path='/favoris' component={Favorites} />
        </Router>
    );
}

export default App;
