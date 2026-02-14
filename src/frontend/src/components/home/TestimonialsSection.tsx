import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

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

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {testimonials.map((testimonial) => (
                            <Card 
                                key={testimonial.id}
                                className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group"
                            >
                                <CardContent className="p-6">
                                    {/* Quote Icon */}
                                    <div className="mb-4">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                            <Quote className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Quote Text */}
                                    <blockquote className="mb-6">
                                        <p className="text-muted-foreground leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="border-t border-border pt-4">
                                        <p className="font-semibold text-primary">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
