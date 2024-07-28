import React, { useState } from 'react';
import './Reg.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', user);
      console.log('Form submitted successfully:', response);

      if (response.data) {
        console.log("data from server", response.data);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="title">Create an Account</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            required
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <label>Fullname</label>
        </div>
        <div className="field">
          <input
            type="email"
            required
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input
            type="tel"
            required
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <label>Phone Number</label>
        </div>
        <div className="field">
          <input
            type="password"
            required
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="field">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Reg;
