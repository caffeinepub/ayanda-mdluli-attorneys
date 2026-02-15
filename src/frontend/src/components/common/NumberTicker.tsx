import { useEffect, useRef, useState } from 'react';
import { useNumberTicker } from '@/hooks/useNumberTicker';

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function NumberTicker({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = ''
}: NumberTickerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const currentValue = useNumberTicker({
    target: value,
    duration,
    isVisible
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  );
}
