import { useEffect, useState, useRef } from 'react';

interface UseAnimatedNumberOptions {
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
}

const defaultEasing = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function useAnimatedNumber(
  endValue: number,
  options: UseAnimatedNumberOptions = {}
): number {
  const { duration = 1000, delay = 0, easing = defaultEasing } = options;

  const [displayValue, setDisplayValue] = useState(0);
  const currentValueRef = useRef(displayValue);

  useEffect(() => {
    currentValueRef.current = displayValue;
  }, [displayValue]);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easing(progress);
      const nextValue =
        currentValueRef.current + (endValue - currentValueRef.current) * easedProgress;

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, delay, easing]);

  return Math.round(displayValue);
}
