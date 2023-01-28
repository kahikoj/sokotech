import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Services from './components/Services';
import Contacts from './components/Contacts';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/products" element={Products} />
        <Route path="/services" element={Services} />
        <Route path="/contacts" element={Contacts} />
        <Route path="/about" element={About} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
