import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollButtons}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
          >
            <Card className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Quote className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="mb-6 flex-1">
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
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="rounded-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="rounded-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
