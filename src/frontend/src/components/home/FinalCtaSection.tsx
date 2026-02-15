import { Phone } from 'lucide-react';
import { navigate } from '../../router/router';

export default function FinalCtaSection() {
  const handlePrimaryClick = () => {
    navigate('/contact');
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden scroll-mt-16 md:scroll-mt-20">
      {/* Decorative accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary mb-6">
            Ready to Resolve Your Legal Matter?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a solution. Our experienced legal team is ready to provide the guidance and representation you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handlePrimaryClick}
              className="group bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover-lift flex items-center gap-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
