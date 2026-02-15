import { ReactNode, useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  variant?: 'subtle' | 'noticeable';
  delay?: number;
}

export default function RevealOnScroll({ 
  children, 
  variant = 'subtle',
  delay = 0 
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation, show immediately
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = window.setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  const variantClasses = {
    subtle: isVisible ? 'reveal-subtle-in' : 'opacity-0',
    noticeable: isVisible ? 'reveal-noticeable-in' : 'opacity-0 translate-y-8',
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${variantClasses[variant]}`}
    >
      {children}
    </div>
  );
}
