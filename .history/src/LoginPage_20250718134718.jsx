import React, { useState, useEffect } from 'react';
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // ✅ Fetch user data from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://mediatracker-dp6t.onrender.com/api/login");
        setUsers(response.data); // response.data should be an array of user objects
      } catch (error) {
        alert("Error fetching user data.");
        console.error("Fetch Error:", error);
      }
    };
    fetchUsers();
  }, []);

const handleSubmit = (e) => {
    e.preventDefault();

    // const hardcoreName = "Afira";
    // const hardcorePassword = "afira1234";

    // if (name === hardcoreName && password === hardcorePassword) {
    //   alert("Login Successful!");
    //   setTimeout(() => {
    //     navigate("/home");
    //   }, 1000);
    // } else {
    //   alert("Invalid Credentials");
    // }
  };

  return (
    <div className='login-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='logo'>
          <h1>JustUs</h1>
        </div>

        <input 
          className='form-input' 
          type='text'
          placeholder='Username'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          className='form-input' 
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='btn-login'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;