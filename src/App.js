import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import FormP from './components/SignUp/signup'
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import FormPage from './components/LogIn/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={Landing} />
    <Route exact path="/main" component ={Main} />
    <Route exact path="/contact" component ={Contact} />
    <Route exact path="/login" component ={FormPage} />
    <Route exact path="/signup" component ={FormP} />
      </div>
    </Router>
  );
}

export default App;
