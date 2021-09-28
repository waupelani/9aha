import React, { useState, useEffect } from 'react';

const endTime = new Date('2021-09-29T03:00:00');

const Hour = () => {
  const [hour, setHour] = useState();
  const tick = () => {
    const divisor = 1000 * 60 * 60; // seconds in a hour
    setHour(Math.floor(((endTime - Date.now()) / divisor) % 24));
  };

  useEffect(() => {
    const timer = setInterval(() => tick());
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{hour}</>;
};

const Minute = () => {
  const [minute, setMinute] = useState();
  const tick = () => {
    const divisor = 1000 * 60; // seconds in a hour
    setMinute(Math.floor(((endTime - Date.now()) / divisor) % 60));
  };

  useEffect(() => {
    const timer = setInterval(() => tick());
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{minute}</>;
};

const Second = () => {
  const [second, setSecond] = useState();
  const tick = () => {
    const divisor = 1000; // seconds in a hour
    setSecond(Math.floor(((endTime - Date.now()) / divisor) % 60));
  };

  useEffect(() => {
    const timer = setInterval(() => tick());
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{second}</>;
};
const data = [
  {
    hours: <Hour />,
    minutes: <Minute />,
    seconds: <Second />,
  },
  {
    hours: 'Hour',
    minutes: 'Minutes',
    seconds: 'Seconds',
  },
];
export default {
  data,
};
