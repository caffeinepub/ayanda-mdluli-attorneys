import { useState, useEffect, useRef } from 'react';

interface UseNumberTickerOptions {
  target: number;
  duration?: number;
  isVisible: boolean;
}

export function useNumberTicker({ target, duration = 2000, isVisible }: UseNumberTickerOptions) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) {
      // Reset to 0 when not visible
      setCurrent(0);
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = undefined;
      return;
    }

    // Start animation when visible
    startTimeRef.current = undefined;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const nextValue = Math.floor(easeProgress * target);
      setCurrent(nextValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, isVisible]);

  return current;
}
