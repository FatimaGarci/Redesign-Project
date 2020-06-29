import React from 'react';
import classes from './Landing.module.css';
import Logo from '../img/logo.png';
import Video from '../img/background.mp4';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';


const Landing = () => (
    <div className={classes.All}>
        <section className={classes.Showcase}>
            <div className={classes.VideoContainer}>
                <video src={Video} autoPlay muted loop></video>
            </div>
            <div className={classes.Content}>

                <div className={classes.Logo}>
                    <img src={Logo} alt="logo" className={classes.LogoImg} />
                    <h1>WikipediA</h1>
                    <p>The Free Encyclopedia</p>
                    <Form.Control as="select">
                    <option>English</option>
                    <option>Português</option>
                    <option>Español</option>
                    <option>Русский</option>
                    <option>日本語</option>
                    <option>Français</option>
                    <option>中文</option>
                    <option>Deutsch</option>
                    <option>Italiano</option>
                    <option>Polski</option>
                    </Form.Control>
                </div>


            </div>
        </section>

        <section className={classes.Footer}>
        {/* <div className={classes.MenuLeft2}>
    <div className={classes.Logo2}>
<img src={Logo} alt="logo" className={classes.LogoImg2} />
<h1>WikipediA</h1>
<p>The Free Encyclopedia</p>
    </div>
<div>
<ul className={classes.Links2}>
        <li><a href="/">Main Page</a></li>
        <li><a href="/">Contents</a></li>
        <li><a href="/">Current Events</a></li>
        <li><a href="/">Random Article</a></li>
        <li><a href="/">About Wikipedia</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">Donate</a></li>
        <li><a href="/">Log In</a></li>
        
</ul>
</div>
</div> */}
<Footer />
        </section>
    </div>

);


export default Landing;