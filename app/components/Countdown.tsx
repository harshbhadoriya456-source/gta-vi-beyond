"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-11-19T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
  <div className="h-full flex flex-col justify-between">
    <div>
      <p className="uppercase tracking-[0.3em] text-pink-300 text-sm">
        GTA VI RELEASE
      </p>

      <h2 className="mt-2 text-4xl md:text-5xl font-black text-white">
        Release Countdown
      </h2>

      <p className="mt-2 text-zinc-300">
        November 19, 2026
      </p>
    </div>

    <div className="mt-10 grid grid-cols-4 gap-6">
      <div>
        <p className="text-6xl font-black text-pink-400 drop-shadow-lg">
          {timeLeft.days}
        </p>
        <p className="uppercase text-zinc-300 tracking-wider">
          Days
        </p>
      </div>

      <div>
        <p className="text-6xl font-black text-purple-300 drop-shadow-lg">
          {timeLeft.hours}
        </p>
        <p className="uppercase text-zinc-300 tracking-wider">
          Hours
        </p>
      </div>

      <div>
        <p className="text-6xl font-black text-pink-400 drop-shadow-lg">
          {timeLeft.minutes}
        </p>
        <p className="uppercase text-zinc-300 tracking-wider">
          Minutes
        </p>
      </div>

      <div>
        <p className="text-6xl font-black text-purple-300 drop-shadow-lg">
          {timeLeft.seconds}
        </p>
        <p className="uppercase text-zinc-300 tracking-wider">
          Seconds
        </p>
      </div>
    </div>
  </div>
);
}