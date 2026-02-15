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
    { label: 'FAQs', onClick: () => handleSectionNavigation('faq-section') },
  ];

  const handleContactClick = () => {
    setIsMenuOpen(false);
    navigate('/contact');
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
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition-opacity hover:opacity-80 mr-6 md:mr-8"
            aria-label="Ayanda Mdluli Attorneys - Go to homepage"
          >
            {/* Logo container with fixed height per breakpoint to prevent layout shift */}
            <div className="h-[45px] sm:h-[55px] lg:h-[70px] flex items-center">
              <img
                src="/assets/images/AyandaMdluliAttorneys-1.png"
                alt="Ayanda Mdluli Attorneys Official Logo"
                className="w-auto h-auto max-h-full object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="text-foreground hover:text-accent transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded px-2 py-1"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={handleContactClick}
              className="ml-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="text-left text-foreground hover:text-accent transition-colors font-medium px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={handleContactClick}
                  className="w-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
