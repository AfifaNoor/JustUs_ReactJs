import React, { useState } from 'react';
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

    useeffect (()=>{

      const fetchUsers =()=>{
        try{
          const response =
        }
      }
    })
  };

  return (
    <div className='login-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='logo'>
          <h1> JustUs </h1>
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
        <button className='btn-login'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
