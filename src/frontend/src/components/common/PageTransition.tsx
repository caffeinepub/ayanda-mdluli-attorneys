import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  variant?: 'fade' | 'fade-slide';
}

export default function PageTransition({ children, variant = 'fade-slide' }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation, show immediately
      setIsVisible(true);
      return;
    }

    // Small delay to ensure smooth transition on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [children]);

  const variantClasses = {
    fade: isVisible ? 'page-fade-in' : 'opacity-0',
    'fade-slide': isVisible ? 'page-fade-slide-in' : 'opacity-0 translate-y-4',
  };

  return (
    <div className={`transition-all duration-500 ease-out ${variantClasses[variant]}`}>
      {children}
    </div>
  );
}
