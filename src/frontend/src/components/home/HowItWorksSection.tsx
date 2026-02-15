import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/reui/timeline';

const steps = [
  {
    id: 1,
    title: 'Tell Us Your Legal Issue',
    description: 'Share your legal concerns with our team during your initial consultation.',
  },
  {
    id: 2,
    title: 'Get to Know Your Legal Team',
    description: 'Meet the attorneys who will be handling your case and understand our approach.',
  },
  {
    id: 3,
    title: 'Strategize & Execute',
    description: 'We develop a tailored legal strategy and take action to protect your interests.',
  },
  {
    id: 4,
    title: 'Sit Back While We Fight for You',
    description: 'Our experienced team handles all legal proceedings while keeping you informed.',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    description: 'We provide continued guidance and support even after your case is resolved.',
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
          <div className="flex justify-center">
            <Timeline defaultValue={1} className="w-full max-w-3xl">
              {steps.map((step) => (
                <TimelineItem key={step.id} step={step.id}>
                  <TimelineHeader>
                    <TimelineSeparator />
                    <TimelineIndicator />
                    <TimelineTitle>{step.title}</TimelineTitle>
                  </TimelineHeader>
                  <TimelineContent>{step.description}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
