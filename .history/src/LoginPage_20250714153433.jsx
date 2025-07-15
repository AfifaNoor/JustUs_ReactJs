import React from 'react';

const LoginPage = () => {
  return (
    <div>
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
        <button>Login</button>
      </div>

      </form>
    </div>
  )
}

export default LoginPage
