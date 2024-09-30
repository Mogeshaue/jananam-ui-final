import React, { useState } from 'react';
import axios from 'axios';
import '../styles-bay/form.css';

const BookingForm = ({ onBookNowClick }) => {
  const [formData, setFormData] = useState({
    contactNumber: '',
    gender: '',
    transportNeeded: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/createTicket', formData);
      console.log(response);
    } catch (error) {
      console.error('Error booking ticket:', error);
    }
    onBookNowClick();  // Show rules dialog on form submit
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h1>Book Tickets</h1>

      <div className="form-group">
        <label>Contact Number <span className="required">*</span></label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          maxLength="10"
          placeholder="Enter 10-digit number"
        />
      </div>

      <div className="form-group">
        <label>Gender <span className="required">*</span></label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group checkbox-container">
        <input
          type="checkbox"
          name="transportNeeded"
          checked={formData.transportNeeded}
          onChange={handleChange}
        />
        <label>Is transport needed?</label>
      </div>

      <p className="disclaimer">You can only book one ticket.</p>

      <button type="submit" className="submit-button">Book Now</button>
    </form>
  );
};

export default BookingForm;
