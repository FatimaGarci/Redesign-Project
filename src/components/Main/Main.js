import React from 'react';
import classes from './Main.module.css';
import Logo from '../img/logo.png';
import Cards from './Cards/Cards';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Main = () => (
    <div>
    <div className={classes.All}>

<div className={classes.MenuLeft}>
    <div className={classes.Logo}>
<img src={Logo} alt="logo" className={classes.LogoImg} />
<h1>WikipediA</h1>
<p>The Free Encyclopedia</p>
    </div>
<div>
<ul className={classes.Links}>
        <li><Link to="/main">Main Page</Link></li>
        {/* <li><a href="/">Contents</a></li>
        <li><a href="/">Current Events</a></li>
        <li><a href="/">Random Article</a></li>
        <li><a href="/">About Wikipedia</a></li> */}
        <li><Link to="/contact">Contact Us</Link></li>
        <li><a href="/">Donate</a></li>
        <li><Link to="/signup">Sign Up</Link></li>
        
</ul>
</div>
</div>


<div className={classes.Main}>
<div className={classes.Welcome}>
    <p>Welcome to <a href="/">Wikipedia</a>!
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button style={{margin: "0"}} variant="outline-primary">Search</Button>
    </Form></p>
</div>
<Cards className={classes.Cards} />
</div>

    </div>
    <Footer />
    </div>
);


export default Main;