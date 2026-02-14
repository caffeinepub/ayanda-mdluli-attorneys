import { Phone, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { navigate } from '../router/router';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' }
  ];

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract the hash from the href (e.g., "/#about" -> "#about")
    const hash = href.substring(1); // Remove the leading "/"
    
    // Check if we're on the homepage
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      // On homepage: smooth scroll to section and update URL hash
      const targetId = hash.substring(1); // Remove the "#"
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', hash);
      }
    } else {
      // On other pages: navigate to homepage with hash
      navigate(href);
    }
  };

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+27123456789" 
                className="flex items-start gap-3 text-primary-foreground/90 hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>+27 (0) 12 345 6789</span>
              </a>
              <a 
                href="mailto:info@lawfirm.co.za" 
                className="flex items-start gap-3 text-primary-foreground/90 hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>info@lawfirm.co.za</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/90">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-accent">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a 
                  href="https://instagram.com/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a 
                  href="https://indeed.com/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Follow us on Indeed"
                >
                  <span className="text-xs font-bold" aria-hidden="true">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
              Quick Links
            </h3>
            <nav aria-label="Quick links">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleQuickLinkClick(e, link.href)}
                      className="text-primary-foreground/90 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* About & Hours */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
              Office Hours
            </h3>
            <div className="space-y-2 text-primary-foreground/90 text-sm">
              <p><strong className="text-primary-foreground">Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong className="text-primary-foreground">Saturday:</strong> 9:00 AM - 1:00 PM</p>
              <p><strong className="text-primary-foreground">Sunday:</strong> Closed</p>
            </div>
            <p className="mt-4 text-primary-foreground/80 text-sm leading-relaxed">
              Emergency consultations available by appointment. Contact us for urgent legal matters.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm text-center md:text-left">
              © 2026 Ayanda Mdluli Attorneys. All rights reserved
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a 
                href="#privacy" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-primary-foreground/40">•</span>
              <a 
                href="#terms" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
