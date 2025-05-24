import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="empty-space"></div>
      <div className="content-container">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="button-container">
          <Link to="/create-account" className="button-link">
            <button className="button-primary">Create Account</button>
          </Link>
          
          <Link to="/signin" className="button-link">
            <button className="button-secondary">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;