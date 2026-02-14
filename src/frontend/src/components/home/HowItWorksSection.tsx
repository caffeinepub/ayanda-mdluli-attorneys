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
                <div className="max-w-4xl mx-auto">
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

                    {/* Vertical Steps Layout */}
                    <div className="relative">
                        {/* Vertical connector line */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-border" aria-hidden="true" />

                        <ol className="relative space-y-8">
                            {steps.map((step, index) => (
                                <li key={step.number} className="relative flex items-start gap-6 group">
                                    {/* Step Number Circle */}
                                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                        <span className="text-lg font-bold text-accent">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 pt-2">
                                        <h3 className="text-xl md:text-2xl font-semibold text-primary">
                                            {step.title}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
