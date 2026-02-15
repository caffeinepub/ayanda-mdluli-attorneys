import { Badge } from '@/components/ui/badge';

interface Partner {
  id: number;
  name: string;
  category: string;
}

interface PartnersMarqueeProps {
  partners: Partner[];
}

export default function PartnersMarquee({ partners }: PartnersMarqueeProps) {
  // Duplicate partners array for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
      
      {/* Marquee container */}
      <div className="flex">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4 bg-background rounded-lg p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group flex flex-col items-center justify-center text-center min-h-[160px] w-[280px]"
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
  );
}
