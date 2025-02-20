import { RefObject, useEffect, useRef } from 'react';

// Types
interface UseEventListenerOptions {
  enabled?: boolean;
  capture?: boolean;
  passive?: boolean;
}

type EventMap = WindowEventMap & HTMLElementEventMap & DocumentEventMap;

// Hook
function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target: Window | null | undefined,
  options: UseEventListenerOptions
): void;

function useEventListener<K extends keyof EventMap, T extends HTMLElement = HTMLDivElement>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target: RefObject<T> | null,
  options: UseEventListenerOptions
): void;

function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target: any,
  options: UseEventListenerOptions
) {
  const { enabled = true, ...listenerOptions } = options || {};
  const savedHandler = useRef(handler);
  const targetRef = useRef(target || window);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const targetElement = targetRef.current?.current ?? targetRef.current;
    if (!targetElement?.addEventListener) return;

    const listener = (event: EventMap[K]) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, listenerOptions);

    return () => {
      targetElement.removeEventListener(eventName, listener, listenerOptions);
    };
  }, [eventName, enabled, listenerOptions]);
}

export default useEventListener;
