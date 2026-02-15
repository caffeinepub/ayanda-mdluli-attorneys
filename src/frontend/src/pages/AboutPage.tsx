import { Users, Target, Heart, Scale, Shield, Briefcase, CheckCircle, Lock, Lightbulb, UserCheck } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/router';
import TeamMemberRow from '../components/about/TeamMemberRow';
import DividerFeatureList from '../components/about/DividerFeatureList';
import RevealOnScroll from '../components/common/RevealOnScroll';

export default function AboutPage() {
  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  const values = [
    {
      icon: Lightbulb,
      title: 'Diligence',
      description: 'We approach every case with meticulous attention to detail and thorough preparation, ensuring no aspect of your legal matter is overlooked.'
    },
    {
      icon: Heart,
      title: 'Empathy & Compassion',
      description: 'We understand that legal challenges can be emotionally difficult, and we provide compassionate support while advocating fiercely for your rights.'
    },
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our legal practices, ensuring transparency and honesty in every client interaction.'
    },
    {
      icon: Briefcase,
      title: 'Dedication & Professionalism',
      description: 'Our unwavering commitment to excellence and professional conduct ensures you receive the highest quality legal representation at all times.'
    },
    {
      icon: Lock,
      title: 'Confidentiality',
      description: 'We safeguard your privacy with the utmost care, maintaining strict confidentiality in all communications and legal matters.'
    },
    {
      icon: UserCheck,
      title: 'Client-Centered',
      description: 'Your needs are at the heart of everything we do. We listen, understand, and tailor our approach to your unique situation.'
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

        {/* Who We Are Section */}
        <RevealOnScroll variant="subtle">
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    Who We Are
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Ayanda Mdluli Attorneys is founded on an unwavering commitment to delivering exceptional legal services tailored to the unique needs of every client. We uphold the highest standards of confidentiality, integrity, and professionalism — ensuring that our clients receive the respect and dignity they deserve.
                    </p>
                    <p>
                      Our team of experienced attorneys combines deep legal knowledge with a practical understanding of the challenges our clients face. We believe that effective legal representation goes beyond knowing the law—it requires understanding our clients' unique circumstances, goals, and concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Vision & Mission Section (Combined) */}
        <RevealOnScroll variant="noticeable">
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="bg-background rounded-lg p-8 md:p-10 border border-border shadow-sm">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Target className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-primary">
                          Our Vision
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        To be the most trusted and respected law firm in South Africa, recognized for our unwavering commitment to justice, excellence in legal practice, and positive impact on the communities we serve.
                      </p>
                    </div>

                    <div className="h-px bg-border" />

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-primary">
                          Our Mission
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        To provide accessible, high-quality legal services that protect our clients' rights and interests. We are dedicated to delivering personalized legal solutions with integrity, professionalism, and a commitment to achieving the best possible outcomes for every client we serve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Core Values Section */}
        <RevealOnScroll variant="subtle">
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    Our Core Values
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The principles that guide every decision we make and every action we take on behalf of our clients
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-background border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-md hover-lift"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-heading font-bold text-primary mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* What Makes Us Distinct Section */}
        <RevealOnScroll variant="noticeable">
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    What Makes Us Distinct
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our unique approach to legal representation sets us apart in the South African legal landscape
                  </p>
                </div>
                
                <div className="bg-background rounded-lg p-8 md:p-10 border border-border shadow-sm">
                  <DividerFeatureList features={distinctiveFeatures} />
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Meet Our Team Section */}
        <RevealOnScroll variant="subtle">
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    Meet Our Team
                  </h2>
                  <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our experienced team of legal professionals is dedicated to providing exceptional representation and personalized service to every client.
                  </p>
                </div>
                
                <div className="space-y-16">
                  {teamMembers.map((member, index) => (
                    <TeamMemberRow
                      key={index}
                      name={member.name}
                      role={member.role}
                      description={member.description}
                      isReversed={index % 2 !== 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                Contact us today to schedule a consultation and discover how we can help you achieve your legal goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContactUs}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-md text-base transition-all duration-300 hover-lift focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Contact Us
                </button>
                <button
                  onClick={handleViewServices}
                  className="bg-background hover:bg-background/90 text-primary font-semibold px-8 py-4 rounded-md text-base transition-all duration-300 hover-lift focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
