import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';     
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();

  // Navbar ko Home page ke liye hide karne ke liye condition
  const hideNavbar = location.pathname === '/';

  return (
   
    <div className='h-screen outfit  bg-white'>

      {!hideNavbar && <Navbar />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<Product />} />
      </Routes>
      <Footer></Footer>
     

    </div>
  );
};

const App = () => {
  return (
    <div className="App h-screen w-screen bg-white">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

export default App;