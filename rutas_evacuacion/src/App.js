import './App.css';
import MapView from './components/MapView';
import MapView2 from './components/MapView2';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';




function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/map" element ={ <MapView />}/>
        <Route path="/map2" element ={ <MapView2 />}/>
       
        <Route path="/" element ={<Login />}/>
      </Routes>
    </Router>
    
    );
}

export default App;
