import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './COMPONENTS/NAVBAR/Navbar';
import Home from './PAGES/HOME/Home';
import Signup from './PAGES/SIGNUP/Signup';
import Reg from './PAGES/Reg/Reg';
import Logout from './PAGES/LOGOUT/Logout';
import Cart from './PAGES/CART/Cart';
import Account from './PAGES/ACCOUNT/Account';
import ProfileInfo from './PAGES/ACCOUNT/ProfileInformation/ProfileIn';
import Manageadd from './PAGES/ACCOUNT/Manageaddress/Manageadd';
import OrderInfo from './PAGES/ACCOUNT/my order/myorder';
import Wallet from './PAGES/ACCOUNT/Wallet/wallet';
import ShopCategory from './PAGES/ShopCategory/shopCategory';
import Shop from './PAGES/SHOP/Shop';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproduct" element={<ShopCategory/>}  />
        <Route path="/:category" element={<ShopCategory />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/account" element={<Account />}>
          <Route path="profile" element={<ProfileInfo />} />
          <Route path="manage" element={<Manageadd />} />
          <Route path='order' element={<OrderInfo/>}/>
          <Route path="wallet" element={<Wallet/>} />
        </Route>

        <Route path="/product/:productId" element={<Shop />} />
        
      </Routes>
    </Router>
  );
}

export default App;
