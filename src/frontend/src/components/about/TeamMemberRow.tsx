interface TeamMemberRowProps {
  name: string;
  role: string;
  description: string;
  isReversed?: boolean;
}

export default function TeamMemberRow({
  name,
  role,
  description,
  isReversed = false
}: TeamMemberRowProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Empty Placeholder Container */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg border-2 border-border shadow-md bg-muted/30">
          {/* Empty styled placeholder */}
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
