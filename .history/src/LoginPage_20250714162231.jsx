import React from 'react';
import "./LoginPage.css" 

const LoginPage = () => {
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
      required

      />
      <input 
      className='form-input' 
      type='password'
      placeholder='Password'
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
