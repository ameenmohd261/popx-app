import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import './AccountSettingsPage.css';

function AccountSettingsPage() {
  const [profileImage, setProfileImage] = useState(null);
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="account-settings-page">
      <div className="header">
        <h1>Account Settings</h1>
      </div>
      
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-image">
            {profileImage ? (
              <img src={profileImage} alt="Profile" />
            ) : (
              <div className="no-image"></div>
            )}
            <label htmlFor="profile-upload" className="camera-icon">
              <FaCamera />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </div>
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Marry Doe</h2>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>
      
      <div className="profile-description">
        <p>
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elite, Sed Diam Nonumy Eirmod 
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default AccountSettingsPage;