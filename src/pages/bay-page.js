import React from 'react';
import '../styles-bay/concer-booking.css';
import BookingForm from '../components-bay/form';

const ConcertBooking = () => {
  return (
    <div className="concert-booking-container">
      <header className="header">
        <button className="logout-button">Logout</button>
        <div className="logo">LOGO</div>
      </header>
      <div className="main-content">
        <div className="left-section">
          <h1>JANANM</h1>
          <h2>TICKETS ARE NOW OPEN</h2>
          <img src="concert-image.jpg" alt="Concert" className="concert-image" />
        </div>
        <div className="right-section">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default ConcertBooking;
