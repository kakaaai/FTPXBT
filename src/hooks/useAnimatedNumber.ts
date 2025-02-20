import { useState, useEffect, useRef } from 'react';

interface UseAnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  easing?: (t: number) => number;
  formatter?: (value: number) => string;
  delay?: number;
}

// Easing functions
export const easings = {
  // Linear
  linear: (t: number) => t,
  
  // Quadratic
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  
  // Exponential
  easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  
  // Elastic
  easeOutElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

export function useAnimatedNumber({
  value,
  duration = 1000,
  decimals = 0,
  easing = easings.easeOutExpo,
  formatter = (val: number) => val.toFixed(decimals),
  delay = 0
}: UseAnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);
  const startValueRef = useRef(value);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const runtime = timestamp - startTimeRef.current;
      const relativeProgress = runtime / duration;
      const easedProgress = easing(Math.min(relativeProgress, 1));

      const currentValue = startValueRef.current + (value - startValueRef.current) * easedProgress;
      setDisplayValue(currentValue);

      if (runtime < duration) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    startValueRef.current = displayValue;
    
    if (delay) {
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration, easing, delay]);

  return formatter(displayValue);
}

// Example usage:
/*
function TokenSupply({ supply }: { supply: number }) {
  const animatedSupply = useAnimatedNumber({
    value: supply,
    duration: 2000,
    decimals: 2,
    easing: easings.easeOutExpo,
    formatter: (value) => `${value.toLocaleString()} tokens`
  });

  return <div>{animatedSupply}</div>;
}

function DonationCounter({ amount }: { amount: number }) {
  const animatedAmount = useAnimatedNumber({
    value: amount,
    duration: 1500,
    decimals: 2,
    easing: easings.easeOutElastic,
    formatter: (value) => `$${value.toLocaleString()}`
  });

  return <div>{animatedAmount}</div>;
}
*/