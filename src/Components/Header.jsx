import React from 'react';
import '../styles/header.css'; 
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { instance, accounts } = useMsal(); // Get accounts from context
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginPopup().then(() => {
      navigate("/bay"); // Redirect to bay after login
    }).catch(e => {
      console.error(e); // Handle error
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      navigate("/"); // Redirect to home after logout
    }).catch(e => {
      console.error(e); // Handle error
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <h3>JANANAM</h3>
      </div>
      <div className="login-button">
        {accounts.length > 0 ? (
          <button onClick={handleLogout}>Logout</button> // Show Logout if user is logged in
        ) : (
          <button onClick={handleLogin}>Login</button> // Show Login if user is not logged in
        )}
      </div>
    </header>
  );
};

export default Header;
