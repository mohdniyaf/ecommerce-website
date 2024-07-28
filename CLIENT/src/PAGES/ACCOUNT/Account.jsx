import React, { useState } from 'react';
import './Account.css';
import ProfileInfo from './ProfileInformation/ProfileIn';
import Manageadd from './Manageaddress/Manageadd';
import Logout from '../LOGOUT/Logout';
import OrderInfo from './my order/myorder'
const Account = () => {
  
  const [activeSection, setActiveSection] = useState('profile');

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileInfo/>;
      case 'manage':
        return <Manageadd/>;
      case 'cart':
        return <OrderInfo/> ;
      case 'wallet':
        return <div>My Wallet</div>;
      case 'logout':
        return <Logout/>
      default:
        return <ProfileInfo/>;
    }
  };

  return (
    <div className="account-page">
      <div className="sidebar">
        <ul>
          <li className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}>Profile Information</li>
          <li className={activeSection === 'manage' ? 'active' : ''} onClick={() => setActiveSection('manage')}>Manage Address</li>
          <li className={activeSection === 'cart' ? 'active' : ''} onClick={() => setActiveSection('cart')}>My order</li>
          <li className={activeSection === 'wallet' ? 'active' : ''} onClick={() => setActiveSection('wallet')}>My Wallet</li>
          <li className={activeSection === 'logout' ? 'active' : ''} onClick={() => setActiveSection('logout')}>Logout</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      
    </div>
    
  );
}

export default Account;
