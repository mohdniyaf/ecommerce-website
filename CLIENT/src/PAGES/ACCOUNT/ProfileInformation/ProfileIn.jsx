import React, { useEffect, useState } from 'react';
import './profileInfo.css';
import axios from 'axios';
import { useAuth } from '../../../CONTEXT/Store';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

  const { token } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/getuser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { _id, username, phone, email } = response.data;
        setUserInfo({
          id: _id,
          name: username,
          phone: phone,
          email: email,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [token]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    setEditMode(false);
    console.log(userInfo.id)
    if (!userInfo.id) {
      console.error('User ID is not defined');
      return; // Prevent making the request if ID is undefined
    }  
    try {
      await axios.put(`http://localhost:3000/api/users/updateuser/${userInfo.id}`, {
        username:userInfo.name,email:userInfo.email,phone:userInfo.phone}
        , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Error updating user data:', error);
    }
    console.log(userInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div className="profile-info">
      <div className="profile-info-header">
        <h2>Profile Information</h2>
      </div>
      <div className="profile-item">
        <FaUser className="profile-icon" />
        {editMode ? (
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="profile-input"
          />
        ) : (
          <div className="profile-text">{userInfo.name}</div>
        )}
      </div>
      <div className="profile-item">
        <FaPhone className="profile-icon" />
        {editMode ? (
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="profile-input"
          />
        ) : (
          <div className="profile-text">{userInfo.phone}</div>
        )}
      </div>
      <div className="profile-item">
        <FaEnvelope className="profile-icon" />
        {editMode ? (
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="profile-input"
          />
        ) : (
          <div className="profile-text">{userInfo.email}</div>
        )}
      </div>
      <a className="change_password" href="">
        Change password? Click here
      </a>
      <div className="profile-buttons">
        {editMode ? (
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
