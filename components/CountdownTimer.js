import { useState, useEffect } from 'react';

export default function CountdownTimer({ date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(date) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 justify-center">
      {Object.keys(timeLeft).map(interval => (
        <div key={interval} className="text-center">
          <div className="text-4xl font-bold">{timeLeft[interval]}</div>
          <div className="text-sm uppercase">{interval}</div>
        </div>
      ))}
    </div>
  );
} 