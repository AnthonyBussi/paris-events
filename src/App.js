import Home from './views/Home';
import Search from './views/Search';
import Favorites from './views/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (    
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/rechercher' component={ Search } />
      <Route path='/favoris' component={ Favorites } />
    </Router>
  );
}

export default App;
