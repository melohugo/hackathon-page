'use client';

import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // September is index 8 (0-indexed)
    const targetDate = new Date(2026, 8, 11, 8, 0, 0).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
      return true;
    };

    // Calculate immediately
    calculateTimeLeft();

    const timer = setInterval(() => {
      const isRunning = calculateTimeLeft();
      if (!isRunning) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-label">FALTAM</div>
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className="time-label">DIAS</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="time-label">HORAS</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="time-label">MIN</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="time-label">SEG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
