import { 
    Scale, 
    Heart, 
    Shield, 
    Gavel, 
    FileText, 
    Home, 
    Stethoscope, 
    Car, 
    Calculator, 
    Building, 
    PenTool 
} from 'lucide-react';
import { navigate } from '../../router/router';

const services = [
    { name: 'Labour Law', icon: Scale },
    { name: 'Family & Divorce Law', icon: Heart },
    { name: 'Criminal Defense', icon: Shield },
    { name: 'Civil Litigation', icon: Gavel },
    { name: 'Commercial & Contract Law', icon: FileText },
    { name: 'Estates, Trusts & Wills', icon: Home },
    { name: 'Medical Negligence', icon: Stethoscope },
    { name: 'Road Accident Fund Claims', icon: Car },
    { name: 'Taxation matters', icon: Calculator },
    { name: 'Company Secretary Services', icon: Building },
    { name: 'Drafting Of Contracts', icon: PenTool },
];

export default function ServicesSection() {
    const handleExploreMore = () => {
        navigate('/services');
    };

    const handleContactUs = () => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            window.history.pushState(null, '', '/#contact');
        } else {
            navigate('/#contact');
        }
    };

    return (
        <section id="services" className="bg-muted/30 border-b border-border scroll-mt-16 md:scroll-mt-20">
            <div className="container-custom section-padding">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-primary mb-6">
                            Comprehensive Legal Services, Tailored to Your Needs.
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Delivering professional legal representation across a wide range of legal matters
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.name}
                                    className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-xl font-semibold text-primary">
                                                {service.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <button
                            onClick={handleExploreMore}
                            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                            explore more services
                        </button>
                        <button
                            onClick={handleContactUs}
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
