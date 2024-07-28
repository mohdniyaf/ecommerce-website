import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './COMPONENTS/NAVBAR/Navbar';
import Home from './PAGES/HOME/Home';
import About from './PAGES/ABOUT/About';
import Shop from './PAGES/SHOP/Shop';
import Contact from './PAGES/CONTACT/Contact';
import Signup from './PAGES/SIGNUP/Signup';
import Reg from './PAGES/Reg/Reg';
import Logout from './PAGES/LOGOUT/Logout';
import Cart from './PAGES/CART/Cart';
import Account from './PAGES/ACCOUNT/Account';
import ProfileInfo from './PAGES/ACCOUNT/ProfileInformation/ProfileIn';
import Manageadd from './PAGES/ACCOUNT/Manageaddress/Manageadd';

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
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account />}>
          <Route path="profile" element={<ProfileInfo />} />
          <Route path="manage" element={<Manageadd />} />
          <Route path="wallet" element={<div>My Wallet</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
