import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  isAtTop: boolean;
  isAtBottom: boolean;
}

export function useScrollPosition(threshold = 50): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const direction =
        Math.abs(currentScrollY - lastScrollY) < threshold
          ? 'none'
          : currentScrollY > lastScrollY
          ? 'down'
          : 'up';

      const isAtTop = currentScrollY < threshold;
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - threshold;

      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction,
        isAtTop,
        isAtBottom,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial position
    updateScrollPosition();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrollPosition;
}

// Example usage:
/*
function MyComponent() {
  const { y, direction, isAtTop, isAtBottom } = useScrollPosition();

  return (
    <header className={`header ${!isAtTop ? 'header--scrolled' : ''}`}>
      {/* Header content *//*}
    </header>
  );
}
*/