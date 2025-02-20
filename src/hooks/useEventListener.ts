import { RefObject, useEffect, useRef } from 'react';

type EventMap = WindowEventMap & HTMLElementEventMap & DocumentEventMap;

type Target = Window | Document | HTMLElement | MediaQueryList | null;

interface UseEventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
}

export function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target: Window | undefined | null = window,
  options: UseEventListenerOptions = {}
): void;

export function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target: RefObject<HTMLElement> | null,
  options: UseEventListenerOptions = {}
): void;

export function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  targetOrRef: Target | RefObject<HTMLElement> | undefined | null = window,
  { capture = false, passive = true, once = false }: UseEventListenerOptions = {}
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!targetOrRef) return;

    const target = targetOrRef && 'current' in targetOrRef ? targetOrRef.current : targetOrRef;
    if (!target?.addEventListener) return;

    const eventListener: typeof handler = (event) => savedHandler.current(event);
    const options = { capture, passive, once };

    target.addEventListener(eventName, eventListener, options);
    return () => {
      target.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, targetOrRef, capture, passive, once]);
}

// Example usage:
/*
function ScrollTracker() {
  // Track window scroll
  useEventListener('scroll', (event) => {
    console.log(window.scrollY);
  });

  return null;
}

function ButtonWithHover({ buttonRef }: { buttonRef: RefObject<HTMLButtonElement> }) {
  // Track button hover
  useEventListener('mouseenter', () => {
    console.log('Button hovered');
  }, buttonRef);

  return <button ref={buttonRef}>Hover me</button>;
}

function MediaQueryWatcher() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Track system theme changes
  useEventListener('change', (event) => {
    const isDark = event.matches;
    // Update theme
  }, mediaQuery);

  return null;
}

function KeyboardShortcuts() {
  // Track keyboard shortcuts
  useEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      // Handle save
    }
  }, document, { passive: false });

  return null;
}

function TouchHandler({ elementRef }: { elementRef: RefObject<HTMLDivElement> }) {
  // Track touch events with options
  useEventListener('touchstart', (event) => {
    console.log('Touch started', event.touches[0]);
  }, elementRef, { passive: true });

  return <div ref={elementRef}>Touch area</div>;
}
*/