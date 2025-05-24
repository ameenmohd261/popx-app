import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="mobile-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;