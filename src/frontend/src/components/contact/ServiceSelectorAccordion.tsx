import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceSelectorAccordionProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const SERVICES = [
  'Divorce & Family law',
  'Estate, Trust & Wills',
  'Road Accident Fund Claim',
  'Medical Negligence',
  'Commercial law & Contracts',
  'Drafting of contracts',
  'company secretary services',
  'labour law & Employment disputes',
  'Taxation matters',
  'Civil Litigation',
  'Criminal defense',
];

export default function ServiceSelectorAccordion({
  value,
  onChange,
  error,
}: ServiceSelectorAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (service: string) => {
    onChange(service);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2 text-left border rounded-md bg-background transition-colors',
          error ? 'border-destructive' : 'border-input hover:border-accent/50',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
        )}
      >
        <span className={cn(value ? 'text-foreground' : 'text-muted-foreground')}>
          {value || 'Select a service...'}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted-foreground transition-transform',
            isOpen && 'transform rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {SERVICES.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleSelect(service)}
              className={cn(
                'w-full px-3 py-2 text-left hover:bg-accent/10 transition-colors',
                value === service && 'bg-accent/20 font-medium'
              )}
            >
              {service}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
