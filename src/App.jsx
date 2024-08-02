import React, { useState, useEffect } from 'react';

const TimeInUTCPlus530 = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      
      // Calculate the UTC+5:30 time
      const offset = 330; // 5 hours and 30 minutes in minutes
      const utcTime = new Date(now.getTime() + offset * 60 * 1000);

      let hours = utcTime.getUTCHours();
      const minutes = utcTime.getUTCMinutes();
      const seconds = utcTime.getUTCSeconds();

      // Convert to 12-hour format
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      // Format time to 12-hour format with AM/PM
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

      setTime(formattedTime);
    };

    updateClock(); // Set initial time

    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div>
      <h1>Current Time (UTC+5:30):</h1>
      <p>{time}</p>
    </div>
  );
};

export default TimeInUTCPlus530;
