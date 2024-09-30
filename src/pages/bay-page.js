import React, { useState } from 'react';
import '../styles-bay/bay-page.css';
import BookingForm from '../components-bay/form';
import RulesDialog from '../components-bay/rules-regulation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/header.css'; 

const ConcertBooking = () => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  const handleBookNowClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };
  const handleLogout = async () => {
    try {
      // Make the logout request to your backend using Fetch API
      const response = await fetch('http://localhost:8000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // If logout is successful, redirect to the home page
      if (response.ok) {
        navigate('/');
      } else {
        const data = await response.json();
        console.error('Logout failed:', data);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  return (
    <div className="concert-booking-container">
      <header className="header">
        <img src="https://ticketer.iqubekct.ac.in/static/KI_LOGO.png" alt="Logo" className="logo" />
        <div className="login-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
      </header>
      <div className="main-content">
        <div className="left-section">
          <h1>Tickets are on Sale</h1>
          <h3>Jananam, a celebration synonymous with vitality, is poised to enchant audiences once again with the 
            dazzling performances of <strong>gifted artists</strong> from Kumaraguru Institutions.</h3>
          <p>This event will feature a rich variety of performing arts, showcasing the institution's talented individuals in dance, music, yoga, and comedy. The vibrant blend of these art forms promises an unforgettable experience, reflecting the diverse cultural heritage cultivated within Kumaraguru. From the lively rhythms of dance to the moving harmonies of music, attendees can expect a true celebration of creativity and talent.</p>
          <img src="https://ticketer.iqubekct.ac.in/static/seating.jpg" alt="Concert" className="concert-image" />
        </div>
        <div className="right-section">
          <BookingForm onBookNowClick={handleBookNowClick} />
        </div>
      </div>

      <RulesDialog isOpen={showDialog} onClose={handleDialogClose} />
    </div>
  );
};

export default ConcertBooking;
