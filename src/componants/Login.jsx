import React from 'react';
import { useState } from 'react';
 import './Login.css';
 

const Login = () => {    
        
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');      
        
        const handleSubmit = (e) => {
          e.preventDefault();
          
          console.log('Login submitted with:', { username, password });
          
          setUsername('');
          setPassword('');
        };

  return (
    <div>
        <center>
        <h1>Login here</h1> 
        
      <div className='login'>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
        </center>
    </div>
  )
}

export default Login