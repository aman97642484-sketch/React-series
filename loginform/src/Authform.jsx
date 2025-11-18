import React from 'react'
import { useState } from 'react'

function Authform() {
    const[isLogin, setIsLogin] =useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>login</button>
                <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin ? 
            <>
              <div className='form'>
               <h2>Login Form</h2>
               <input type="email" placeholder='Email' />
               <input type="password" placeholder='Password' />
               <a>Forgot Password?</a>
               <button>Login</button>
               <p>Not a Member? <a href='#' onClick={() => setIsLogin(false)}>Signup Now</a></p>
              </div>
            </>
             :
            <>
              <div className='form'>
               <h2>Sign Form</h2>
               <input type="email" placeholder='Email' />
               <input type="password" placeholder='Password' />
               <input type="password" placeholder='Confirm Password' />
               <button>Login</button>
              </div>
            </>}
        </div>
    </div>
  )
}

export default Authform