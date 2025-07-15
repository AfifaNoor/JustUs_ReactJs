import React, { useState } from 'react';
import "./LoginPage.css" ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const[name,setName]=useState('');
    const[password, setPassword]= useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();

    
    const hardcoreName="Afira";  
    const hardcorePassword = 'afira1234'

    if (name ===hardcoreName && password===hardcorePassword){
        toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Optional: Redirect after 2 seconds
      setTimeout(() => {
        navigate("/"); // Or wherever you want to navigate
      }, 2000);
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 3000,
      });
    
        
    }
    }
  return (
    <div className='login-container'>
      <form className='form-container'>

      <div className='logo'>
        <h1> JustUs </h1>
      </div>

      <input 
      className='form-input' 
      type='text'
      placeholder='Username'
      value={name}
      required

      />
      <input 
      className='form-input' 
      type='password'
      placeholder='Password'
      value={password}
      required
        
      />
      <button 
      className='btn-login'>
       Login</button>

      </form>
    </div>
  )
}

export default LoginPage
