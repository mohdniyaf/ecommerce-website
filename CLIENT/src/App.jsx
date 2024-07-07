import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './COMPONENTS/NAVBAR/Navbar'
import Home from './PAGES/HOME/Home';
import About from './PAGES/ABOUT/About';
import Shop from './PAGES/SHOP/Shop';
import Contact from './PAGES/CONTACT/Contact';
import Signup from './PAGES/SIGNUP/Signup';
import Reg from './PAGES/Reg/Reg';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Reg />} />



        </Routes>
    </Router>
  );
}

export default App;
