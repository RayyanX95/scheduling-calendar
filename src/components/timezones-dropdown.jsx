import React, { useState } from 'react';
import moment from 'moment-timezone';

const TARGET_TIMEZONES = [
  "Europe/Berlin",
  "Europe/London",
  "Europe/Amsterdam",
  "Africa/Cairo",
]

const TIMEZONES = TARGET_TIMEZONES.map((timezone) => ({
  name: timezone,
  offset: moment.tz(timezone).format('Z'),
}));

console.log('_TimeZones', TIMEZONES)

const TimezoneDropdown = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('');

  const handleChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div>
      <label>Select a timezone:</label>
      <select value={selectedTimezone} onChange={handleChange}>
        <option value="">Select a timezone...</option>
        {TIMEZONES.map((timezone) => (
          <option key={timezone.name} value={timezone.name}>
            {`${timezone.name} (GMT${timezone.offset})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneDropdown;
