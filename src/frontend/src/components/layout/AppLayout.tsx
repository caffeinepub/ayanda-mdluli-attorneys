import { ReactNode, useEffect } from 'react';
import HomeNavbar from '../home/HomeNavbar';
import { useRouter } from '../../router/router';
import PageTransition from '../common/PageTransition';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { currentPath } = useRouter();

  useEffect(() => {
    // Scroll restoration: scroll to top on route change unless hash is present
    const handleScrollRestoration = () => {
      const hash = window.location.hash;
      
      if (hash && currentPath === '/') {
        // Homepage with hash: scroll to section
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // No hash or not homepage: scroll to top
        window.scrollTo(0, 0);
      }
    };

    handleScrollRestoration();

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && currentPath === '/') {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  return (
    <>
      <HomeNavbar />
      <div className="pt-16 md:pt-20">
        <PageTransition key={currentPath}>
          {children}
        </PageTransition>
      </div>
    </>
  );
}
