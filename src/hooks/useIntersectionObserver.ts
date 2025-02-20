import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
  initialIsIntersecting?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
  initialIsIntersecting = false,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const frozen = useRef(false);
  const elementRef = useRef<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const isElementIntersecting = entry.isIntersecting;
      
      if (freezeOnceVisible && isElementIntersecting) {
        frozen.current = true;
        observer.current?.disconnect();
      }

      setIsIntersecting(frozen.current ? true : isElementIntersecting);
      setEntry(entry);
    },
    [freezeOnceVisible]
  );

  const disconnect = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;

    disconnect();

    const options: IntersectionObserverInit = {
      threshold,
      root,
      rootMargin,
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.current.observe(currentElement);
    }

    return () => disconnect();
  }, [threshold, root, rootMargin, handleIntersect, disconnect]);

  return {
    ref: elementRef,
    isIntersecting,
    entry,
  };
}

// Example usage:
/*
function ScrollAnimation() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Fade in when 50% visible
    </div>
  );
}
*/
