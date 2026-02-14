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

export default function HomePage() {
    return (
        <>
            <main className="min-h-screen">
                <HeroSection />
                <TrustIntroSection />
                <AboutApproachSection />
                <ServicesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <PartnersSection />
                <FaqSection />
                <FinalCtaSection />
            </main>
            <Footer />
        </>
    );
}
