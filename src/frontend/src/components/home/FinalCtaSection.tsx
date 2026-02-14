import { Phone, Mail } from 'lucide-react';

export default function FinalCtaSection() {
  const handlePrimaryClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      // Already on homepage, scroll to contact section (this section)
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage contact section
      window.location.href = '/#contact';
    }
  };

  const handleSecondaryClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden scroll-mt-16 md:scroll-mt-20">
      {/* Decorative accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary-foreground mb-6">
            Ready to Resolve Your Legal Matter?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a solution. Our experienced legal team is ready to provide the guidance and representation you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handlePrimaryClick}
              className="group bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Schedule Free Consultation
            </button>
            
            <button
              onClick={handleSecondaryClick}
              className="group bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary-foreground flex items-center gap-2"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Contact Us Today
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 text-sm">
              Available for consultations across South Africa • Flexible meeting options • No obligation initial consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
