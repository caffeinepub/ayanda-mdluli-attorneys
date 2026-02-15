import { servicesData } from './servicesData';
import Footer from '../components/Footer';
import { navigate } from '../router/router';
import RevealOnScroll from '../components/common/RevealOnScroll';

export default function ServicesPage() {
  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our Legal Services
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Our services cover a wide range of legal matters, including family law, civil law, commercial law, labour law, and much more. Trust us to deliver expert guidance and support in all your legal needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <RevealOnScroll variant="noticeable">
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                {/* Practice Areas Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                    Practice Areas
                  </h2>
                  <div className="w-20 h-1 bg-accent mx-auto mb-6" />
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Ayanda Mdluli Attorneys specializes in a number of Practice Areas. Our experienced attorneys are here to answer your legal questions and provide you with the best legal advice.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {servicesData.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.name}
                        className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover-lift group"
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                            <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed flex-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                  <div className="bg-muted/30 rounded-lg p-8 md:p-12 border border-border">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                      Ready to Get Started?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Schedule a consultation with our experienced legal team. We're here to help you navigate your legal matters with confidence.
                    </p>
                    <button
                      onClick={handleContactUs}
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover-lift focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                      Schedule a Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
