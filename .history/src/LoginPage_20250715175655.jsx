import React, { useState } from 'react';
import "./LoginPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const hardcoreName = "Afira";
    const hardcorePassword = "afira1234";

    if (name === hardcoreName && password === hardcorePassword) {
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 3000,
      });
    }
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

      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default LoginPage;
