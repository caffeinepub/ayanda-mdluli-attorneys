import { navigate } from "@/router/router";
import { Button } from "@/components/ui/button";
import { Users, Target, MessageSquare, Award } from 'lucide-react';

export default function AboutApproachSection() {
    const handleLearnMore = () => {
        navigate('/about');
    };

    const approachItems = [
        {
            icon: Users,
            title: 'Client-Centered Focus',
            description: 'Your goals are our priority. We take the time to understand your unique situation, concerns, and objectives, ensuring our legal strategy aligns with your best interests at every stage.',
        },
        {
            icon: Target,
            title: 'Strategic & Proactive',
            description: 'We don\'t just react to legal challenges—we anticipate them. Our proactive approach identifies potential issues early and develops comprehensive strategies to protect your rights and interests.',
        },
        {
            icon: MessageSquare,
            title: 'Clear Communication',
            description: 'Legal matters shouldn\'t be confusing. We explain complex legal concepts in plain language, keep you informed throughout the process, and ensure you understand your options at every decision point.',
        },
        {
            icon: Award,
            title: 'Results-Driven Excellence',
            description: 'We measure our success by the outcomes we achieve for our clients. Through meticulous preparation, skilled negotiation, and aggressive advocacy when needed, we fight for the best possible results.',
        },
    ];

    return (
        <section id="about" className="bg-background border-b border-border scroll-mt-16 md:scroll-mt-20">
            <div className="container-custom section-padding">
                {/* About / Firm Overview */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-primary mb-6">
                            About Ayanda Mdluli Attorneys
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                    </div>
                    
                    <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
                        <p className="text-lg leading-relaxed">
                            Ayanda Mdluli Attorneys is a full-service law firm delivering strategic, results-driven legal representation across South Africa. With over a decade of experience, we provide tailored legal solutions grounded in integrity, professionalism, and a commitment to acting in the best interest of our clients.
                        </p>
                        
                        <p className="text-lg leading-relaxed">
                            Our firm handles labour, commercial, family, criminal, and civil matters with precision and care. We combine legal expertise with clear communication and personalized attention to ensure every client receives focused, effective representation.
                        </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex justify-center mt-10">
                        <Button
                            onClick={handleLearnMore}
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        >
                            Learn more about us
                        </Button>
                    </div>
                </div>
                
                {/* Our Approach */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-primary mb-6">
                            Our Approach
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We combine strategic legal thinking with a client-centered philosophy to deliver exceptional results
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {approachItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div 
                                    key={index}
                                    className="bg-white dark:bg-card rounded-lg p-8 border-2 border-accent transition-all duration-300 active:-translate-y-2 cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-primary mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-foreground/80 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
