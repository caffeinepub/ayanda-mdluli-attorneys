import { useState } from 'react';
import { Users } from 'lucide-react';

interface TeamMemberRowProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
}

export default function TeamMemberRow({
  name,
  role,
  description,
  imageSrc,
  isReversed = false
}: TeamMemberRowProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg border-2 border-border shadow-md hover:shadow-lg transition-shadow duration-300">
          {imageError ? (
            <div className="w-full h-full bg-accent/10 flex items-center justify-center">
              <Users className="w-24 h-24 text-accent" strokeWidth={1.5} aria-hidden="true" />
            </div>
          ) : (
            <img
              src={imageSrc}
              alt={`${name} - ${role}`}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className={`w-full lg:w-1/2 flex flex-col justify-center text-center ${
        isReversed ? 'lg:text-right' : 'lg:text-left'
      }`}>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
          {name}
        </h3>
        <p className="text-accent font-semibold text-lg mb-4">
          {role}
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
