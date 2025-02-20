import { useState, useEffect, useRef } from 'react';

interface DebounceOptions {
  delay?: number;
  maxWait?: number;
  leading?: boolean;
  trailing?: boolean;
}

export function useDebounce<T>(
  value: T,
  options: DebounceOptions = {}
): T {
  const {
    delay = 500,
    maxWait,
    leading = false,
    trailing = true,
  } = options;

  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<number>(0);
  const effectiveValueRef = useRef<T>(value);
  const leadingRef = useRef<boolean>(true);

  useEffect(() => {
    const now = Date.now();

    const executeChange = () => {
      setDebouncedValue(effectiveValueRef.current);
      lastCallRef.current = now;
    };

    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Handle leading edge
    if (leading && leadingRef.current) {
      executeChange();
      leadingRef.current = false;
    }

    // Set up the new timeout
    if (trailing) {
      timeoutRef.current = setTimeout(() => {
        executeChange();
        if (maxTimeoutRef.current) {
          clearTimeout(maxTimeoutRef.current);
          maxTimeoutRef.current = null;
        }
        leadingRef.current = true;
      }, delay);
    }

    // Handle maxWait
    if (maxWait && !maxTimeoutRef.current) {
      maxTimeoutRef.current = setTimeout(() => {
        executeChange();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        leadingRef.current = true;
      }, maxWait);
    }

    effectiveValueRef.current = value;

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
      }
    };
  }, [value, delay, maxWait, leading, trailing]);

  return debouncedValue;
}

// Debounced callback version
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  options: DebounceOptions = {}
): [T, () => void] {
  const {
    delay = 500,
    maxWait,
    leading = false,
    trailing = true,
  } = options;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<number>(0);
  const leadingRef = useRef<boolean>(true);
  const callbackRef = useRef<T>(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const cancel = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
      maxTimeoutRef.current = null;
    }
    leadingRef.current = true;
  };

  const debouncedCallback = (...args: Parameters<T>) => {
    const now = Date.now();

    const executeCallback = () => {
      callbackRef.current(...args);
      lastCallRef.current = now;
    };

    // Clear existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Handle leading edge
    if (leading && leadingRef.current) {
      executeCallback();
      leadingRef.current = false;
    }

    // Set up new timeout
    if (trailing) {
      timeoutRef.current = setTimeout(() => {
        executeCallback();
        if (maxTimeoutRef.current) {
          clearTimeout(maxTimeoutRef.current);
          maxTimeoutRef.current = null;
        }
        leadingRef.current = true;
      }, delay);
    }

    // Handle maxWait
    if (maxWait && !maxTimeoutRef.current) {
      maxTimeoutRef.current = setTimeout(() => {
        executeCallback();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        leadingRef.current = true;
      }, maxWait);
    }
  };

  return [debouncedCallback as T, cancel];
}

// Example usage:
/*
function SearchInput() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, { delay: 300 });

  useEffect(() => {
    // API call with debouncedSearch
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}

function SaveButton() {
  const [save, cancel] = useDebouncedCallback(
    () => {
      // Save data
    },
    { delay: 1000, maxWait: 5000 }
  );

  return (
    <button onClick={save}>
      Save Changes
    </button>
  );
}
*/