import React from 'react';
import '../styles-bay/rules-regulation.css';

const RulesDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="rules-dialog-overlay">
      <div className="rules-dialog">
        <h2>Rules and Regulations</h2>
        <ul>
          <li><strong>NO ENTRY</strong> without the original Ticket, ID card, and acknowledgment Message.</li>
          <li>Everyone should assemble in the ground by 5 PM.</li>
          <li><strong>ZERO TOLERANCE</strong> for students found intoxicated or consuming prohibited substances, as per the Institution policy.</li>
          <li>Everyone should maintain decorum, and if any contrary activities are found, appropriate action will be taken.</li>
          <li>Buses are available only to Gandhipuram at 8.00 PM.</li>
          <li>Once tickets are paid, they will not be refunded.</li>
          <li>Jananam tickets are only for the internal audience. External audience not allowed.</li>
          <li>No water bottles and bags inside the venue.</li>
        </ul>
        <div className="dialog-actions">
          <button onClick={onClose} className="back-button">Back</button>
          <button onClick={() => { alert("Ticket Confirmed!"); onClose(); }} className="confirm-button">
            Confirm and Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesDialog;
