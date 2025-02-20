import { useState, useEffect, useRef, useCallback } from 'react';

interface ThrottleOptions {
  limit: number;
  interval?: number;
  leading?: boolean;
  trailing?: boolean;
}

type Timer = ReturnType<typeof setTimeout>;

export function useThrottle<T>(
  value: T,
  { limit = 1, interval = 1000, leading = true, trailing = true }: ThrottleOptions
): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());
  const timeoutRef = useRef<Timer | undefined>(undefined);
  const valueRef = useRef<T>(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const now = Date.now();
    const remaining = interval - (now - lastRan.current);

    if (remaining <= 0) {
      if (leading || lastRan.current !== 0) {
        lastRan.current = now;
        setThrottledValue(valueRef.current);
      }
    } else if (trailing) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        lastRan.current = Date.now();
        setThrottledValue(valueRef.current);
      }, remaining);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, interval, leading, trailing]);

  return throttledValue;
}

export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  { limit = 1, interval = 1000, leading = true, trailing = true }: ThrottleOptions
): [(...args: Parameters<T>) => void, () => void] {
  const lastRan = useRef<number>(Date.now());
  const timeoutRef = useRef<Timer | undefined>(undefined);
  const argsRef = useRef<Parameters<T> | undefined>(undefined);
  const callbackRef = useRef<T>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const throttled = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const remaining = interval - (now - lastRan.current);

      argsRef.current = args;

      if (remaining <= 0) {
        if (leading || lastRan.current !== 0) {
          lastRan.current = now;
          callbackRef.current(...args);
        }
      } else if (trailing) {
        cancel();
        timeoutRef.current = setTimeout(() => {
          lastRan.current = Date.now();
          if (argsRef.current) {
            callbackRef.current(...argsRef.current);
          }
        }, remaining);
      }
    },
    [interval, leading, trailing, cancel]
  );

  useEffect(() => cancel, [cancel]);

  return [throttled, cancel];
}

// Example usage:
/*
// Throttle value updates
function TokenPrice() {
  const [price, setPrice] = useState(0);
  const throttledPrice = useThrottle(price, {
    limit: 1,
    interval: 1000, // Update at most once per second
  });

  return <div>Price: ${throttledPrice}</div>;
}

// Throttle function calls
function ScrollHandler() {
  const [handleScroll] = useThrottledCallback(
    (event: UIEvent) => {
      // Handle scroll event
      console.log('Scroll position:', window.scrollY);
    },
    {
      limit: 1,
      interval: 100, // Handle at most 10 times per second
    }
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return null;
}

// Rate limiting API calls
function DataFetcher() {
  const [fetchData, cancelFetch] = useThrottledCallback(
    async () => {
      const data = await fetch('/api/data');
      // Process data
    },
    {
      limit: 1,
      interval: 5000, // Call at most once every 5 seconds
      leading: true,
      trailing: false,
    }
  );

  return (
    <button onClick={fetchData}>
      Fetch Data
    </button>
  );
}
*/