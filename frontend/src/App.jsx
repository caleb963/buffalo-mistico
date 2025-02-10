import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';

function App(){
    return(
      <Router>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        </Router>
    );
}

export default App;