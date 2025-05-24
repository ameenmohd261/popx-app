import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccountPage.css';

function CreateAccountPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value === 'yes'
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and create an account here
    // For now, just navigate to account settings
    navigate('/account-settings');
  };

  return (
    <div className="create-account-page">
      <h1 className="heading">Create your<br />PopX account</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName} 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            placeholder="123456789xx"
            value={formData.phone} 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="example@gmail.com"
            value={formData.email} 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Marry@doe123"
            value={formData.password} 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="company">Company Name</label>
          <input 
            type="text" 
            id="company" 
            name="company"
            placeholder="marry doe"
            value={formData.company} 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <label>Are you an Agency?</label>
          <div className="radio-group">
            <div className="radio-option">
              <input 
                type="radio" 
                id="agency-yes" 
                name="isAgency" 
                value="yes"
                checked={formData.isAgency === true}
                onChange={handleChange}
                required 
              />
              <label htmlFor="agency-yes">Yes</label>
            </div>
            <div className="radio-option">
              <input 
                type="radio" 
                id="agency-no" 
                name="isAgency" 
                value="no"
                checked={formData.isAgency === false}
                onChange={handleChange}
              />
              <label htmlFor="agency-no">No</label>
            </div>
          </div>
        </div>
        
        <button type="submit" className="button-primary create-button">
          Create Account
        </button>
      </form>
      
      <p className="mandatory-note">*All details mandatory to fill</p>
    </div>
  );
}

export default CreateAccountPage;