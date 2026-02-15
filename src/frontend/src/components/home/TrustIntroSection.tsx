import { Award, Users, Scale, TrendingUp } from 'lucide-react';
import NumberTicker from '@/components/common/NumberTicker';

const trustIndicators = [
    {
        icon: Award,
        value: 10,
        suffix: '+',
        label: 'years of experience'
    },
    {
        icon: Users,
        value: 1000,
        suffix: '+',
        label: 'clients served'
    },
    {
        icon: Scale,
        value: 100,
        suffix: '+',
        label: 'cases solved'
    },
    {
        icon: TrendingUp,
        value: 1000000,
        prefix: 'R',
        suffix: '+',
        label: 'settlements'
    }
];

export default function TrustIntroSection() {
    return (
        <section className="bg-muted border-b border-border">
            <div className="container-custom py-16 md:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-primary mb-4">
                        Proven legal experience. Measurable Results
                    </h2>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {trustIndicators.map((indicator, index) => {
                        const Icon = indicator.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                        <NumberTicker
                                            value={indicator.value}
                                            prefix={indicator.prefix}
                                            suffix={indicator.suffix}
                                            duration={2000}
                                        />
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground font-medium">
                                        {indicator.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
