import React, { useState } from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
const SignupForm = () => {

  const [user,setUser] =useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
     const {name,value} =e.target;
     setUser((prevUser)=>({
      ...prevUser,
      [name]:value
     }))
     console.log(user);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:3000/auth/users/login',user);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  return (
    <div className="wrapper">
      <div className="title">Signup Form</div>
         <form onSubmit={handleSubmit}>
          <div className="field">
            <input type="email" required
             name="email"
             value={user.email}
             onChange={handleChange}
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required 
            name='password'
            value={user.password}
            onChange={handleChange}
             />
            <label>Password</label>
          </div>
          <div className="field">
           <input type="submit" value="Signup" />
          </div>
          <div className="signup-link">
          Already have an account? 
         <NavLink to="/register"> <a href="#">Login now</a>  </NavLink> 
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
