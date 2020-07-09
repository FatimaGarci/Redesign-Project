import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, [])
  return(
    <div style={{backgroundColor: "#f2f2f2"}}>
      <section className={classes.Links}>
        <div className={classes.LinksInner}>
        <ul>
            <li><Link to="/main">Main Page</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
          <ul>
            <li><a href="/">Commons</a></li>
            <li><a href="/">Wikidata</a></li>
            <li><a href="/">Wikispecies</a></li>
          </ul>
          <ul>
            <li><a href="/">MediaWiki</a></li>
            <li><a href="/">Wikinews</a></li>
            <li><a href="/">Wikiversity</a></li>
          </ul>
          <ul>
            <li><a href="/">Meta-Wiki</a></li>
            <li><a href="/">Wikiquote</a></li>
            <li><a href="/">Wikivoyage</a></li>
          </ul>
          <ul>
            <li><a href="/">Wikibooks</a></li>
            <li><a href="/">Wikisource</a></li>
            <li><a href="/">Wiktionary</a></li>
          </ul>
        </div>
      </section>

      <footer className={classes.Footer}>
      <p style={{width: "90%"}}>Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.</p>

        <div className={classes.FooterInner}>
          <ul>
            <li><a href="/">Sitemap</a></li>
                    <li><a href="/">Privacy policy</a></li>
                    <li><a href="/">About Wikipedia</a></li>
                    <li><a href="/">Disclaimers</a></li>
                    <li><a href="/">Contact Wikipedia</a></li>
                    <li><a href="/">Developers</a></li>
                    <li><a href="/">Statistics</a></li>
                    <li><a href="/">Cookie Statement</a></li>
                    <li><a href="/">Mobile View</a></li>
          </ul>
        </div>
      </footer>
      </div>)
};


export default Footer;