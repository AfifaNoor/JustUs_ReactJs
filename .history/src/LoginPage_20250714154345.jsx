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
      placeholder='UserName'
      required

      />
      <input 
      className='form-input' 
      type='password'
      placeholder='Password'
      required
        
      />
      <div>
        <button className='btn-login'> Login</button>
      </div>

      </form>
    </div>
  )
}

export default LoginPage
