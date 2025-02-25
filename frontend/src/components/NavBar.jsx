import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar"> 
         <div className="navbar__logo">
            <img src="/assets/geo-bison.png" alt="Buffalo Mistico Logo" style={{ height:"80px"}} />
         </div>
         <ul className="navbar__menu">
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/bufalomistico/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                <a href="https://www.facebook.com/profile.php?id=100005140448023" target="_blank" rel="noopener noreferer"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@bufalo.mistico" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
                </li>
            </ul>
            <li className="navbar__item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/about-us">Nosotros</Link>
            </li>
         </ul>
        </nav>
    );
}

export default NavBar;