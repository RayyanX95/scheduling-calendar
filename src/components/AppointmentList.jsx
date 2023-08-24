// src/components/AppointmentList.js
import React from "react";

const AppointmentList = ({ appointments, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <span>{appointment.title}</span>
            <span>{appointment.date.toLocaleString()}</span>
            <button onClick={() => onEdit(appointment)}>Edit</button>
            <button onClick={() => onDelete(appointment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
