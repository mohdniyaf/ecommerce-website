import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Account.css';

const Account = () => {
  return (
    <div className="account-page">
      <div className="sidebar">
        <ul>
          <li>
            <NavLink
              to="/account/profile"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Profile Information
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/manage"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Manage Address
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/order"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/wallet"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              My Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
