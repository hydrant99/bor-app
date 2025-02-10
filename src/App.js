import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Footer from './components/footer.js';
import { Helmet } from 'react-helmet';  // Import Helmet
import ReturnPolicy from "./components/returnPolicy.js";  // Import the Return Policy Page


function App() {
  return (
    <div className="App">  
      {/* JF Note: App starts here, then compiles component .js files as they are called or HTML objects */}
      <Helmet>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LQ0BQZHDFE"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQ0BQZHDFE');
          `}
        </script>
      </Helmet>

      <Router>
        {/* Header for NavBar */}
        <header>
          <NavBar />
        </header>

        {/* Main Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />  {/* New Route */}
          </Routes>
        </main>
          {/* Footer */}
      <Footer />
      </Router>

    
    </div>
  );
}

export default App;
