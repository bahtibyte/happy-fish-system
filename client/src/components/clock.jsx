import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York', // Set to Eastern Standard Time (EST)
  });

  return <div className="clock">{formattedTime} EST </div>;
}

export default Clock;