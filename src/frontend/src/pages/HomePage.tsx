import HeroSection from '../components/home/HeroSection';
import TrustIntroSection from '../components/home/TrustIntroSection';
import AboutApproachSection from '../components/home/AboutApproachSection';

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <TrustIntroSection />
            <AboutApproachSection />
        </main>
    );
}
