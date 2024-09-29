import axios from 'axios';
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    contactNumber: '',
    gender: '',
    tickets: '',
    transportNeeded: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:8000/createTicket",formData)
    console.log(response);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <label>Contact Number</label>
        <input 
          type="text" 
          name="contactNumber" 
          value={formData.contactNumber} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
     
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          name="transportNeeded" 
          checked={formData.transportNeeded} 
          onChange={handleChange} 
        />
        <label>Is transport needed?</label>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default BookingForm;
