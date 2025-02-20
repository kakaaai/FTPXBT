import { useState, useEffect, useCallback } from 'react';

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useMediaQuery(query: string): boolean {
  const getMatches = useCallback((query: string): boolean => {
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Add event listener
    mediaQuery.addEventListener('change', handler);

    // Check on mount (callback is not called until a change occurs)
    setMatches(mediaQuery.matches);

    // Remove event listener on cleanup
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query, getMatches]);

  return matches;
}

// Utility functions for common queries
export const useBreakpoint = (breakpoint: Breakpoint, type: 'min' | 'max' = 'min') => {
  const query = type === 'min' 
    ? `(min-width: ${breakpoints[breakpoint]})`
    : `(max-width: ${breakpoints[breakpoint]})`;
  return useMediaQuery(query);
};

export const useIsMobile = () => useBreakpoint('md', 'max');
export const useIsTablet = () => {
  const isMin = useBreakpoint('md', 'min');
  const isMax = useBreakpoint('lg', 'max');
  return isMin && isMax;
};
export const useIsDesktop = () => useBreakpoint('lg', 'min');

export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

// Example usage:
/*
function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const prefersDark = usePrefersDarkMode();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Custom breakpoint
  const isLargeScreen = useMediaQuery('(min-width: 1400px)');

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
      {prefersDark && <DarkTheme />}
      {prefersReducedMotion && <SimpleAnimation />}
    </div>
  );
}
*/