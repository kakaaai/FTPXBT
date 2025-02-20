import { useEffect, useRef, useCallback } from 'react';

interface UseIntervalOptions {
  immediate?: boolean;
  leading?: boolean;
  trailing?: boolean;
}

export function useInterval(
  callback: () => void,
  delay: number | null,
  options: UseIntervalOptions = {}
) {
  const { immediate = false, leading = false, trailing = true } = options;
  
  // Store callback in ref to avoid re-creating interval
  const savedCallback = useRef(callback);
  // Store whether the leading call has been made
  const leadingCallMade = useRef(false);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Clear the interval when component unmounts or delay changes
  const clear = useCallback(() => {
    leadingCallMade.current = false;
  }, []);

  useEffect(() => {
    // Don't schedule if no delay is specified
    if (delay === null) return;

    // Reset leading call flag when delay changes
    leadingCallMade.current = false;

    // Handle immediate execution
    if (immediate && !leadingCallMade.current) {
      savedCallback.current();
      leadingCallMade.current = true;
    }

    // Handle leading execution
    if (leading && !leadingCallMade.current) {
      savedCallback.current();
      leadingCallMade.current = true;
    }

    // Set up the interval
    let id: NodeJS.Timeout | null = null;
    if (trailing || !leadingCallMade.current) {
      id = setInterval(() => {
        savedCallback.current();
      }, delay);
    }

    // Clean up on unmount
    return () => {
      if (id !== null) {
        clearInterval(id);
      }
    };
  }, [delay, immediate, leading, trailing, clear]);

  return clear;
}

// Example usage:
/*
function TokenPrice() {
  const [price, setPrice] = useState(0);
  
  // Update price every 5 seconds
  useInterval(
    async () => {
      const newPrice = await fetchTokenPrice();
      setPrice(newPrice);
    },
    5000,
    { immediate: true } // Fetch immediately on mount
  );

  return <div>Current Price: ${price}</div>;
}

function CountdownTimer({ startTime }: { startTime: number }) {
  const [timeLeft, setTimeLeft] = useState(startTime);
  
  // Update every second
  useInterval(
    () => {
      setTimeLeft(time => Math.max(0, time - 1));
    },
    timeLeft > 0 ? 1000 : null // Stop when reaches 0
  );

  return <div>Time Left: {timeLeft}s</div>;
}

function PollingComponent() {
  const [data, setData] = useState(null);
  const [isPolling, setIsPolling] = useState(true);
  
  useInterval(
    () => {
      // Fetch data
    },
    isPolling ? 3000 : null // Can be disabled
  );

  return (
    <div>
      <button onClick={() => setIsPolling(!isPolling)}>
        {isPolling ? 'Stop' : 'Start'} Polling
      </button>
    </div>
  );
}
*/