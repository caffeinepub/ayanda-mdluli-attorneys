import { ReactNode, useEffect } from 'react';
import HomeNavbar from '../home/HomeNavbar';
import { useRouter } from '../../router/router';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { currentPath } = useRouter();

  useEffect(() => {
    // Handle hash scrolling after navigation
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && currentPath === '/') {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, [currentPath]);

  return (
    <>
      <HomeNavbar />
      <div className="pt-16 md:pt-20">
        {children}
      </div>
    </>
  );
}
