import React from "react";
import {Link} from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar"> 
         <div className="navbar__logo">
            <Link to="/">Buffalo Mistico</Link>
         </div>
         <ul className="navbar__menu">
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