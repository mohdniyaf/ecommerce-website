import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../CONTEXT/Store';

const SignupForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth(); 

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
      const response = await axios.post('http://localhost:3000/api/users/login', user);
      console.log('Form submitted successfully:', response);
      if (response.data) {
        const data = response.data;
        console.log("data from server", response.data);
        storeTokenInLS(data.token);
        setUser({ email: "", password: "" });
        navigate('/');
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
      <div className="title">Signup Form</div>
      <form onSubmit={handleSubmit}>
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
            type="password"
            required
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="field">
          <button type="submit">Login</button>
        </div>
        <div className="signup-link">
          <a onClick={() => navigate('/register')}>Create an account</a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
