import { Users, Target, Heart, Scale, Shield, Briefcase, CheckCircle, Lock, Lightbulb, UserCheck } from 'lucide-react';
import Footer from '../components/Footer';
import { navigate } from '../router/router';
import TeamMemberRow from '../components/about/TeamMemberRow';
import DividerFeatureList from '../components/about/DividerFeatureList';
import RevealOnScroll from '../components/common/RevealOnScroll';
import { usePreloadImages } from '../hooks/usePreloadImages';

const ABOUT_HERO_IMAGE = '/assets/Aboutpage.png';

export default function AboutPage() {
  // Preload hero background image
  usePreloadImages([ABOUT_HERO_IMAGE]);

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
        {/* Hero Section with Background Image */}
        <section className="relative py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: `url(${ABOUT_HERO_IMAGE})` }}>
          {/* Content */}
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white drop-shadow-lg">
                About Ayanda Mdluli Attorneys
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/95 drop-shadow-md">
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
                      Our team of experienced attorneys combines deep legal knowledge with a practical understanding of the challenges our clients face. Whether you're navigating complex commercial transactions, resolving family disputes, or defending your rights in court, we provide strategic counsel and dedicated representation every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Vision & Mission Section */}
        <RevealOnScroll variant="noticeable" delay={100}>
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Vision */}
                  <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-primary">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading law firm in South Africa, recognized for our unwavering commitment to justice, client satisfaction, and ethical excellence. We strive to set the standard for legal representation that is both accessible and impactful.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-primary">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide comprehensive, client-focused legal services that protect rights, resolve disputes, and empower individuals and businesses to achieve their goals with confidence and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Core Values Section */}
        <RevealOnScroll variant="subtle" delay={150}>
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                    Our Core Values
                  </h2>
                  <div className="w-20 h-1 bg-accent mx-auto mb-6" />
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    These principles guide every decision we make and every case we handle.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {values.map((value) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={value.title}
                        className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed flex-1">
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
        <RevealOnScroll variant="noticeable" delay={200}>
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                    What Makes Us Distinct
                  </h2>
                  <div className="w-20 h-1 bg-accent mx-auto mb-6" />
                  <p className="text-lg text-muted-foreground">
                    Our unique approach sets us apart in the legal landscape.
                  </p>
                </div>

                <DividerFeatureList features={distinctiveFeatures} />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Meet Our Team Section */}
        <RevealOnScroll variant="subtle" delay={100}>
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                    Meet Our Team
                  </h2>
                  <div className="w-20 h-1 bg-accent mx-auto mb-6" />
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our experienced attorneys are dedicated to providing you with the highest level of legal representation.
                  </p>
                </div>

                <div className="space-y-12">
                  {teamMembers.map((member, index) => (
                    <TeamMemberRow
                      key={member.name}
                      name={member.name}
                      role={member.role}
                      description={member.description}
                      isReversed={index % 2 === 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* CTA Section */}
        <RevealOnScroll variant="noticeable" delay={150}>
          <section className="section-padding bg-primary text-primary-foreground">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                  Let our experienced team guide you through your legal matters with professionalism and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleContactUs}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Contact Us Today
                  </button>
                  <button
                    onClick={handleViewServices}
                    className="inline-flex items-center justify-center gap-2 bg-background hover:bg-background/90 text-foreground font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    View Our Services
                  </button>
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
