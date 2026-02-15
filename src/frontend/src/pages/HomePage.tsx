import HeroSection from '../components/home/HeroSection';
import TrustIntroSection from '../components/home/TrustIntroSection';
import AboutApproachSection from '../components/home/AboutApproachSection';
import ServicesSection from '../components/home/ServicesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';
import FaqSection from '../components/home/FaqSection';
import FinalCtaSection from '../components/home/FinalCtaSection';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/common/RevealOnScroll';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero renders immediately without scroll reveal to prevent flash */}
        <HeroSection />
        
        <RevealOnScroll variant="noticeable" delay={100}>
          <TrustIntroSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="subtle" delay={150}>
          <AboutApproachSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="noticeable" delay={200}>
          <ServicesSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="subtle" delay={100}>
          <HowItWorksSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="noticeable" delay={150}>
          <TestimonialsSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="subtle" delay={100}>
          <PartnersSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="noticeable" delay={150}>
          <FaqSection />
        </RevealOnScroll>
        
        <RevealOnScroll variant="subtle" delay={100}>
          <FinalCtaSection />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
