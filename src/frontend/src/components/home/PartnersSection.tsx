import PartnersMarquee from './PartnersMarquee';

const partners = [
    { id: 1, name: 'Partner Alpha', category: 'Legal Services' },
    { id: 2, name: 'Partner Beta', category: 'Financial Advisory' },
    { id: 3, name: 'Partner Gamma', category: 'Corporate Solutions' },
    { id: 4, name: 'Partner Delta', category: 'Compliance Services' },
    { id: 5, name: 'Partner Epsilon', category: 'Business Consulting' },
    { id: 6, name: 'Partner Zeta', category: 'Professional Services' },
];

export default function PartnersSection() {
    return (
        <section id="partners" className="bg-muted/30 border-b border-border scroll-mt-16 md:scroll-mt-20">
            <div className="container-custom section-padding">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-primary mb-6">
                            Trusted Partners & Affiliations
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Collaborating with leading organizations to deliver comprehensive legal solutions
                        </p>
                    </div>

                    {/* Partners Marquee */}
                    <PartnersMarquee partners={partners} />
                </div>
            </div>
        </section>
    );
}
