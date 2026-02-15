import { ArrowRight } from 'lucide-react';
import { navigate } from '../../router/router';

export default function HeroSection() {
    const handleScheduleConsultation = () => {
        const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
        if (currentPath === '/contact') {
            // Already on contact page, scroll to form
            const formElement = document.getElementById('consultation-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate('/contact');
        }
    };

    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/Law-firms1.jpeg)' }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            
            {/* Subtle accent decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-dark/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container-custom section-padding relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Text Content */}
                    <div className="text-white space-y-8 animate-fade-in max-w-4xl">
                        <h1 className="text-balance">
                            Trusted Legal Representation When It Matters Most
                        </h1>
                        
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Professional, accessible legal representation across labour, commercial, family, criminal, and civil matters.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <button
                                onClick={handleScheduleConsultation}
                                className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Schedule a Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
