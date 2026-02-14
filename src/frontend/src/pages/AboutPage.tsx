import { Users, Target, Award, Heart, Scale, Shield, Briefcase, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/router';

export default function AboutPage() {
  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our legal practices, ensuring transparency and honesty in every client interaction.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Our commitment to excellence drives us to deliver superior legal services and achieve the best possible outcomes for our clients.'
    },
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'Your needs are at the heart of everything we do. We listen, understand, and tailor our approach to your unique situation.'
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'We maintain the highest standards of professionalism, combining legal expertise with respectful and responsive service.'
    }
  ];

  const teamMembers = [
    {
      name: 'Ayanda Mdluli',
      role: 'Founder & Senior Attorney',
      description: 'With over 15 years of experience in South African law, Ayanda leads our firm with a passion for justice and client advocacy.'
    },
    {
      name: 'Thabo Nkosi',
      role: 'Corporate Law Specialist',
      description: 'Specializing in corporate and commercial law, Thabo brings strategic insight to complex business legal matters.'
    },
    {
      name: 'Nomsa Dlamini',
      role: 'Family Law Attorney',
      description: 'Nomsa provides compassionate and effective representation in family law matters, prioritizing the well-being of families.'
    },
    {
      name: 'Sipho Khumalo',
      role: 'Litigation Attorney',
      description: 'A skilled litigator with a track record of successful courtroom outcomes across various practice areas.'
    }
  ];

  const distinctiveFeatures = [
    {
      title: 'Local Expertise',
      description: 'Deep understanding of South African legal landscape and local court systems.'
    },
    {
      title: 'Personalized Service',
      description: 'Every client receives individual attention and customized legal strategies.'
    },
    {
      title: 'Proven Track Record',
      description: 'Years of successful case outcomes and satisfied clients across diverse practice areas.'
    },
    {
      title: 'Accessible Communication',
      description: 'We keep you informed every step of the way with clear, jargon-free explanations.'
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About Ayanda Mdluli Attorneys
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Dedicated to providing exceptional legal services with integrity, professionalism, and a commitment to achieving the best outcomes for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Ayanda Mdluli Attorneys is a leading law firm based in Johannesburg, South Africa, dedicated to providing comprehensive legal services to individuals, families, and businesses. Founded on the principles of integrity, excellence, and client-centered service, we have built a reputation for delivering outstanding legal representation across a wide range of practice areas.
                  </p>
                  <p>
                    Our team of experienced attorneys combines deep legal knowledge with a practical understanding of the challenges our clients face. We believe that effective legal representation goes beyond knowing the law—it requires understanding our clients' unique circumstances, goals, and concerns.
                  </p>
                  <p>
                    Whether you're navigating a complex corporate transaction, resolving a family matter, or seeking justice in litigation, Ayanda Mdluli Attorneys is committed to standing by your side and fighting for your rights with professionalism and dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-background rounded-lg p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and respected law firm in South Africa, recognized for our unwavering commitment to justice, excellence in legal practice, and positive impact on the communities we serve.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional legal services that protect our clients' rights, advance their interests, and deliver favorable outcomes. We strive to make quality legal representation accessible while maintaining the highest standards of professionalism and ethical practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                  What Makes Us Distinct
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choosing the right legal representation is crucial. Here's why clients trust Ayanda Mdluli Attorneys.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {distinctiveFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} aria-hidden="true" />
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our practice and define our commitment to our clients.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg text-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                  Meet Our Team
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our experienced attorneys are dedicated to providing you with the highest quality legal representation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium text-sm mb-3">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-8 md:p-12 border border-border text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let us put our experience and dedication to work for you. Schedule a consultation today to discuss your legal needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleContactUs}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    Schedule a Consultation
                  </button>
                  <button
                    onClick={handleViewServices}
                    className="inline-flex items-center justify-center gap-2 bg-background hover:bg-muted border-2 border-primary text-primary font-medium px-8 py-4 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
