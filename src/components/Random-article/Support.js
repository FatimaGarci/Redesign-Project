import React from 'react';
import classes from './Support.module.css';
import Logo from '../img/logo.png';
import Footer from '../Footer/Footer';
import Carousel from '../Random-article/Coursel/Coursel';
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
                        <li><Link to="/random">Current events</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>


                    </ul>
                </div>
            </div>


            <div className={classes.Main}>
               <Carousel className={classes.Cards} />
            </div>

        </div>
        <Footer />
    </div>
);


export default Main;




// function App() {
//     return (
//         <div className="MenuLeft">
//             <div className="Logo">
//                 <img src={Logo} alt="logo" className="LogoImg" />
//                 <h1>WikipediA</h1>
//                 <p>The Free Encyclopedia</p>
//             </div>
//             <div>
//                 <ul className="Links">
//                     <li><Link to="/main">Main Page</Link></li>
//                     <li><Link to="/random">Current events</Link></li>
//                     <li><Link to="/contact">Contact Us</Link></li>
//                     <li><Link to="/signup">Sign Up</Link></li>
//                 </ul>
//             </div>
//         </div>

//         <Carousel  >
//             <Carousel.Item>
//                 <img
//                     className="Politics"
//                     src="https://ak.picdn.net/shutterstock/videos/18737189/thumb/10.jpg"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://venturebeat.com/wp-content/uploads/2019/08/political_news.jpg?w=1200&strip=all"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://projectpulso.org/wp-content/uploads/2019/06/Latino_Fatalities_Banner.jpg"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//   );
// }

// export default App;