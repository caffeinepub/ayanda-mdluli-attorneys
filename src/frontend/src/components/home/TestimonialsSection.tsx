import TestimonialsCarousel from './TestimonialsCarousel';

const testimonials = [
    {
        id: 1,
        name: 'Jane Smith',
        role: 'Business Owner',
        quote: 'Professional service and excellent communication throughout the entire process. Highly recommend their expertise.',
    },
    {
        id: 2,
        name: 'Michael Johnson',
        role: 'Private Client',
        quote: 'The team provided clear guidance and support during a challenging time. Their dedication made all the difference.',
    },
    {
        id: 3,
        name: 'Sarah Williams',
        role: 'Corporate Executive',
        quote: 'Outstanding legal representation with attention to detail. They truly understand their clients\' needs.',
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-background border-b border-border scroll-mt-16 md:scroll-mt-20">
            <div className="container-custom section-padding">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-primary mb-6">
                            What Our Clients Say
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Trusted by clients across South Africa for professional legal representation
                        </p>
                    </div>

                    {/* Testimonials Carousel */}
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
}
