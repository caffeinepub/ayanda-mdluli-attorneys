import { Separator } from '@/components/ui/separator';

interface FeatureItem {
  title: string;
  description: string;
}

interface DividerFeatureListProps {
  features: FeatureItem[];
}

export default function DividerFeatureList({ features }: DividerFeatureListProps) {
  return (
    <div className="space-y-0">
      {features.map((feature, index) => (
        <div key={index}>
          <div className="py-6">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
          {index < features.length - 1 && (
            <Separator className="bg-border" />
          )}
        </div>
      ))}
    </div>
  );
}
