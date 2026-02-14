import { Badge } from '@/components/ui/badge';

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

                    {/* Partners Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="bg-background rounded-lg p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group flex flex-col items-center justify-center text-center min-h-[160px]"
                                role="article"
                                aria-label={`Partner: ${partner.name}`}
                            >
                                {/* Partner Name */}
                                <div className="mb-3">
                                    <p className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                                        {partner.name}
                                    </p>
                                </div>

                                {/* Category Badge */}
                                <Badge 
                                    variant="outline" 
                                    className="border-accent/30 text-accent bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300"
                                >
                                    {partner.category}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
