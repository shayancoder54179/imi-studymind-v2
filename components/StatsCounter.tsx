"use client";

import { useEffect, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix: string;
  isVisible: boolean;
}

export default function StatsCounter({
  value,
  suffix,
  isVisible,
}: StatsCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplayValue(Math.floor(current));

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-primary-blue">
      {displayValue}
      {suffix}
    </span>
  );
}

