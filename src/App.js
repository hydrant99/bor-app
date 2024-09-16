import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         the box of rocks will return.
        </p>
        <a
          className="App-link"
          href="https://theboxofrocks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming Soon . . .  
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import SocialMediaBar from './components/SocialMediaBar' ;

function App() {
  return (
    <div className="App">
       <SocialMediaBar />
        <Router>
        <header>
        <a href= "https://theboxofrocks.com"><img src={logo} alt="Home" /></a>
      <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </div>



  );
}

export default App;
