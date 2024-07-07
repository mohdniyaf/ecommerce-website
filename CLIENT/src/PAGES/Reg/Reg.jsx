import React, { useState } from 'react';
import './Reg.css'
import axios from 'axios'

const Reg = () => {
  
  const [user,setUser] =useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })
  
  const handleChange=(e)=>{
    const {name ,value}=e.target;
    setUser((prevuser)=>({
      ...prevuser,
      [name]:value
    }));
    console.log(user)
  }
  
 const handleSubmit=async(e)=>{
  e.preventDefault();
    try {
      const response=await axios.post('http://localhost:3000/auth/users/register',user);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
 }

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
        <div className="field">
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  );
};

export default Reg;