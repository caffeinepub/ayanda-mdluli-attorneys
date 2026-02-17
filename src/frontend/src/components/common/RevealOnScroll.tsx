import { ReactNode, useEffect, useState } from 'react';

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

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation, show immediately
      setIsVisible(true);
      return;
    }

    // Trigger visibility on mount after optional delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  const variantClasses = {
    subtle: isVisible ? 'reveal-subtle-in' : 'opacity-0',
    noticeable: isVisible ? 'reveal-noticeable-in' : 'opacity-0 translate-y-8',
  };

  return (
    <div 
      className={`transition-all duration-700 ease-out ${variantClasses[variant]}`}
    >
      {children}
    </div>
  );
}
