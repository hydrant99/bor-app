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
import SocialMediaBar from './components/SocialMediaBar';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">  {/* JF Note: App starts here, then compiles component .js file as they are called or html objects */}
      <Router>
        {/* Header for NavBar */}
        <header> 
        <div className="social-media-bar">
            <SocialMediaBar />
        </div>
        <NavBar />
       </header>

        {/* Main Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <div ><Footer /></div>
    
    </div>
  );
}

export default App;
