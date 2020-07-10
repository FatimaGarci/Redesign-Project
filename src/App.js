import React from 'react';
import './App.css';
import Profile from './components/Profile/profile'
import Main from './components/Main/Main';
import signUp from './components/SignUp/signup'
import Speech from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import logIn from './components/LogIn/login';
import Random from '../src/components/Random-article/Support'
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={Speech} />
    <Route exact path="/main" component ={Main} />
    {/* <Route exact path="/random" component={Random}/> */}
    <Route exact path="/contact" component ={Contact} />
    <Route exact path="/login" component ={logIn} />
    <Route exact path="/signup" component ={signUp} />
    <Route exact path="/profile" component ={Profile} />
      </div>
    </Router>
  );
}

export default App;
