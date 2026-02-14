import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigate } from '../../router/router';
import { Button } from '../ui/button';

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Update URL hash
      window.history.pushState(null, '', `/#${sectionId}`);
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { label: 'Home', onClick: handleHomeClick },
    { label: 'About', onClick: () => handleSectionNavigation('about') },
    { label: 'Services', onClick: () => handleSectionNavigation('services') },
    { label: 'How It Works', onClick: () => handleSectionNavigation('how-it-works') },
    { label: 'Testimonials', onClick: () => handleSectionNavigation('testimonials') },
    { label: 'Partners', onClick: () => handleSectionNavigation('partners') },
    { label: 'FAQs', onClick: () => handleSectionNavigation('faq-section') },
  ];

  const handleContactClick = () => {
    setIsMenuOpen(false);
    handleSectionNavigation('contact');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md'
          : 'bg-background'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={handleHomeClick}
            className="font-heading text-xl md:text-2xl font-bold text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            aria-label="Go to homepage"
          >
            Legal Services SA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="text-foreground hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={handleContactClick}
              className="ml-2"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset rounded"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={handleContactClick}
                className="w-full"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
