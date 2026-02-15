import { Card, CardContent } from '@/components/ui/card';

const steps = [
    {
        number: 1,
        title: 'Tell Us Your Legal Issue',
    },
    {
        number: 2,
        title: 'Get to Know Your Legal Team',
    },
    {
        number: 3,
        title: 'Strategize & Execute',
    },
    {
        number: 4,
        title: 'Sit Back While We Fight for You',
    },
    {
        number: 5,
        title: 'Ongoing Support',
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="bg-background border-b border-border scroll-mt-16 md:scroll-mt-20">
            <div className="container-custom section-padding">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-primary mb-6">
                            Legal Support Every Step Of The Way
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            From your first consultation to Ongoing Support, we will guide you through every step with clarity and precision.
                        </p>
                    </div>

                    {/* Timeline Layout */}
                    <div className="grid gap-6 md:gap-8">
                        {steps.map((step) => (
                            <div key={step.number} className="flex items-center gap-4 md:gap-6">
                                {/* Step Number Circle - Outside the card */}
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                                    <span className="text-2xl md:text-3xl font-bold text-accent">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step Card */}
                                <Card 
                                    className="flex-1 border-2 border-accent hover:shadow-md transition-all duration-300"
                                >
                                    <CardContent className="p-6 md:p-8">
                                        <h3 className="text-xl md:text-2xl font-semibold text-primary">
                                            {step.title}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
