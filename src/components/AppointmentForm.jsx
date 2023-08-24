import moment from "moment-timezone";
import React, { useState } from 'react';

const TimeSlotScheduler = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [timeSlotsUTC, setTimeSlotsUTC] = useState([]);

  function getEndDateWithLastMorning(startDateTime) {
    // Clone the startDateTime to avoid modifying the original object
    const endDate = new Date(startDateTime);

    // Set the time to 11:59 AM
    endDate.setHours(11, 59, 0, 0);

    return endDate;
  }

  // Function to convert user's local date to UTC
  const convertToUTC = (userLocalDate, userTimeZone) => {
    return new Date(userLocalDate.toLocaleString('en-US', { timeZone: userTimeZone }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert selected date to UTC based on the user's time zone
    console.log('selectedDate', selectedDate)
    const startDateUTC = convertToUTC(new Date(selectedDate), selectedTimeZone);
    console.log('startDateUTC', startDateUTC)

    // Create time slots with a 30-minute interval (in UTC)
    const slotDurationMinutes = 30;
    // const endDateUTC = new Date(startDateUTC);
    const endDateUTC = convertToUTC(getEndDateWithLastMorning(startDateUTC), selectedTimeZone); // Replace this with your desired end date in the user's local time

    endDateUTC.setMinutes(endDateUTC.getMinutes() + slotDurationMinutes);

    const newTimeSlots = [];
    const timeSlotsUTC = [];
    while (startDateUTC <= endDateUTC) {
      console.log('startDateUTC', startDateUTC)
      newTimeSlots.push({
        timestamp: startDateUTC.getTime(),
        timeZone: selectedTimeZone,
      });
      const dateObj = new Date(startDateUTC);
      const utcISOString = dateObj.toISOString();
      timeSlotsUTC.push(utcISOString)

      startDateUTC.setMinutes(startDateUTC.getMinutes() + slotDurationMinutes);
    }

    setTimeSlots(newTimeSlots);
    setTimeSlotsUTC(timeSlotsUTC);
  };
  console.log('timeSlots', timeSlots)
  console.log('timeSlotsUTC', timeSlotsUTC)

  const convertToCAiroTimezone = (slot) => {
    // Step 1: Convert the timestamp to a Date object in UTC
    const utcDate = new Date(slot.timestamp);

    // Step 2: Convert the UTC Date object to Cairo time zone
    const cairoTimeZone = "Africa/Cairo";
    const cairoDate = moment(utcDate).tz(cairoTimeZone);

    // Step 3: Display the converted date to the user
    const formattedDateInCairo = cairoDate.format('dd YYYY-MM-DD hh:mm:ss a');

    console.log(formattedDateInCairo);

    return formattedDateInCairo
  }

  // Function to display the time slots on the user interface
  const renderTimeSlots = () => {
    return <table border="1">
      <thead>
        <th style={{ padding: 8 }}>NEW_WORK</th>
        <th style={{ padding: 8 }}>Convert Cairo</th>
      </thead>
      <tbody>
        {timeSlots.map((slot, index) => {
          const slotDateUTC = new Date(slot.timestamp);
          const consultantDate = moment(slotDateUTC).tz(slot.timeZone);
          const slotTime = consultantDate.format('dd YYYY-MM-DD hh:mm:ss a');

          return <tr>
            <td style={{ padding: 8 }}>{slotTime}</td>
            <td style={{ padding: 8 }}>{convertToCAiroTimezone(slot)}</td>
          </tr>
        })}
      </tbody>

    </table>
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="selectedDate">Select Date:</label>
        <input
          type="datetime-local"
          id="selectedDate"
          required
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label htmlFor="timeZone">Select Time Zone:</label>
        <select
          id="timeZone"
          required
          value={selectedTimeZone}
          onChange={(e) => setSelectedTimeZone(e.target.value)}
        >
          <option value="" disabled>Select Time Zone</option>
          {/* Populate this list with available time zones */}
          <option value="America/New_York">America/New_York</option>
        </select>

        <button type="submit">Create Time Slots</button>
      </form>

      <div>
        {timeSlots.length > 0 ? (
          <div>
            <h2>Time Slots:</h2>
            {renderTimeSlots()}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TimeSlotScheduler;
