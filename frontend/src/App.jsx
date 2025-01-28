import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';

function App(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboput-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        </Router>
    )
}