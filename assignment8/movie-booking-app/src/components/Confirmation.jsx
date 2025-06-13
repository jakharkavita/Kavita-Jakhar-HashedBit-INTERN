import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/layout.css"; // import CSS

export default function Confirmation() {
  const { state } = useLocation();
  const { name, email, mobile, bookingId } = state || {};

  return (
    <div className="center-layout">
      <div className="confirmation-container">
        <h2>🎉Booking Confirmed🎉</h2>
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
      </div>
    </div>
  );
}
