import { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { router } from './router/router';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Register routes
router.register('/', () => <HomePage />);
router.register('/contact', () => <ContactPage />);
router.register('/services', () => <ServicesPage />);
router.register('/about', () => <AboutPage />);
router.setNotFound(() => <NotFoundPage />);

function App() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      setTick(tick => tick + 1);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ErrorBoundary>
      <AppLayout>
        {router.resolve()}
      </AppLayout>
    </ErrorBoundary>
  );
}

export default App;
