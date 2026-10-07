"use client";

import { useEffect, useState } from "react";

const eventStart = new Date("2026-10-10T09:00:00+02:00").getTime();
const eventEnd = new Date("2026-10-11T18:00:00+02:00").getTime();

function timeUntilStart(now: number) {
  const seconds = Math.max(0, Math.floor((eventStart - now) / 1000));

  return [
    Math.floor(seconds / 86400),
    Math.floor((seconds % 86400) / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ];
}

export default function EventCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (now !== null && now >= eventStart) {
    return (
      <div className="hero-countdown hero-countdown-status" role="status">
        {now < eventEnd ? "THE HACKATHON IS LIVE" : "THE HACKATHON HAS ENDED"}
      </div>
    );
  }

  const values = now === null ? null : timeUntilStart(now);
  const labels = ["DAYS", "HOURS", "MIN", "SEC"];

  return (
    <div className="hero-countdown" role="timer" aria-live="off">
      <span className="hero-countdown-label">
        STARTS 10 OCT
        <br />
        09:00 CEST
      </span>
      <div className="hero-countdown-units">
        {labels.map((label, index) => (
          <span className="hero-countdown-unit" key={label}>
            <strong>{values ? String(values[index]).padStart(2, "0") : "--"}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
