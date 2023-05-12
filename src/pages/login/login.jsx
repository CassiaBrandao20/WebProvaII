import React from 'react';
import './login.css'
import {useNavigate} from 'react-router-dom';


export default function Login(){
    const navigate = useNavigate()

    return(
        <div className="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
  
          <button onClick={() => navigate('/home')}>Login</button>
        </form>
      </div>
    )
}