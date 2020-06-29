import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={Landing} />
    <Route exact path="/main" component ={Main} />
    <Route exact path="/contact" component ={Contact} />
      </div>
    </Router>
  );
}

export default App;
