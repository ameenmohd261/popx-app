import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate the user here
    // For now, just navigate to account settings
    navigate('/account-settings');
  };

  return (
    <div className="signin-page">
      <div className="signin-content">
        <h1 className="heading">Signin to your<br />PopX account</h1>
        <p className="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="button-primary login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;