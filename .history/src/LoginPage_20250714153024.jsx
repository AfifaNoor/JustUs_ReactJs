import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <form className='form-container'>
      <input className='form-input' placeholder='UserName'/>
      <input className='form-input' placeholder='Password'/>
      <div>
        <button>Login</button>
      </div>

      </form>
    </div>
  )
}

export default LoginPage
