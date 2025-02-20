import { useCallback, useEffect, useRef } from 'react';

interface ThrottleOptions {
  delay?: number;
  leading?: boolean;
  trailing?: boolean;
}

export default function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  options: ThrottleOptions = {}
): T {
  const { delay = 1000, leading = true, trailing = true } = options;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastRan = useRef<number>(0);
  const lastArgs = useRef<any[]>();

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return clearTimer;
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (lastRan.current === 0 && !leading) {
        lastRan.current = now;
      }

      const remaining = delay - (now - lastRan.current);

      if (remaining <= 0) {
        clearTimer();
        lastRan.current = now;
        return callback(...args);
      }

      if (trailing) {
        lastArgs.current = args;
        clearTimer();
        timeoutRef.current = setTimeout(() => {
          lastRan.current = Date.now();
          timeoutRef.current = null;
          callback(...(lastArgs.current as Parameters<T>));
        }, remaining);
      }
    },
    [callback, delay, leading, trailing]
  ) as T;
}
