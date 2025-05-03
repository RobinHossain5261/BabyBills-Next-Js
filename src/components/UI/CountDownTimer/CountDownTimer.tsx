"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import king from "@/assets/images/king.png";

const CountdownTimer = () => {
  const targetDate = "30-12-2026";
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const [day, month, year] = targetDate.split("-");
    const target = new Date(`${year}-${month}-${day}T00:00:00Z`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setIsExpired(true);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className={`relative z-2 ${isExpired ? "opacity-50" : ""}`}>
      <div className="countdown flex flex-wrap items-center gap-2 mt-2 md:mt-3">
        {options.map((item, index) => (
          <div
            key={index}
            className="w-max sm:w-20 flex gap-1 justify-center items-center bg-p1 text-w1 px-[6px] py-1 sm:px-3 sm:py-2 rounded-lg"
          >
            <h3 className="text-lg font-medium">{item.value}</h3>
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
