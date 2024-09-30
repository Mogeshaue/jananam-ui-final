import React from 'react';
import axios from 'axios';  // Import axios for HTTP requests
import '../styles/header.css'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make the login request to your backend using Fetch API
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // If login is successful, redirect to the booking page
      if (response.ok) {
        navigate('/booking');
      } else {
        const data = await response.json();
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
 

  return (
    <header className="header">
      <div className="logo">
        <h3>JANANAM</h3>
      </div>
      <div className="login-button">
        <button onClick={handleLogin}>Login</button>
       
      </div>
    </header>
  );
};

export default Header;
