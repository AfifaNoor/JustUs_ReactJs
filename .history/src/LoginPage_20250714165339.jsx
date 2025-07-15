import React, { useState } from 'react';
import "./LoginPage.css" 

const LoginPage = () => {
    const[name,setName]=useState('');
    const[password, setPassword]= useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();

    
    const hardcoreName="Afira";  
    const hardcorePassword = 'afira1234'

    if email=
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
