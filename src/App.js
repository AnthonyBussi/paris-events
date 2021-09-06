import Navbar from './components/Navbar';
import Home from './views/Home';
import List from './views/List';
import Favorites from './views/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (    
    <Router>
      <Navbar />
      <Route path='/' component={Home} exact />
      <Route path='/list' component={List} />
      <Route path='/favorites' component={Favorites} />
    </Router>
  );
}

export default App;
