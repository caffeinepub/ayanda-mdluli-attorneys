import { ArrowRight } from 'lucide-react';
import { navigate } from '../../router/router';
import { useEffect, useState, useRef } from 'react';
import { usePreloadImages } from '../../hooks/usePreloadImages';

const BACKGROUND_IMAGES = [
  '/assets/Law-firms1.jpeg',
  '/assets/constitutional-court-1.jpg',
  '/assets/pexels-ekaterina-bolovtsova-6077123.jpg',
  '/assets/pexels-ekaterina-bolovtsova-6077448.jpg',
];

export default function HeroSection() {
  // Preload images before starting carousel
  const { firstImageReady, allImagesReady } = usePreloadImages(BACKGROUND_IMAGES);
  
  // For seamless infinite loop, we need to clone first and last slides
  const extendedImages = [
    BACKGROUND_IMAGES[BACKGROUND_IMAGES.length - 1], // Clone of last image
    ...BACKGROUND_IMAGES,
    BACKGROUND_IMAGES[0], // Clone of first image
  ];
  
  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide (index 1)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-advance carousel with seamless looping
  useEffect(() => {
    if (!allImagesReady) return;

    const advanceSlide = () => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    };

    timerRef.current = setTimeout(advanceSlide, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, allImagesReady]);

  // Handle seamless loop jump
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      // If we're at the cloned last slide (index 0), jump to real last slide
      if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(BACKGROUND_IMAGES.length);
      }
      // If we're at the cloned first slide (index length+1), jump to real first slide
      else if (currentIndex === extendedImages.length - 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        track.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [currentIndex, isTransitioning, extendedImages.length]);

  const handleScheduleConsultation = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    if (currentPath === '/contact') {
      const formElement = document.getElementById('consultation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/contact');
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <div
          ref={trackRef}
          className="relative w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          <div className="flex h-full" style={{ width: `${extendedImages.length * 100}%` }}>
            {extendedImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="flex-shrink-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: firstImageReady ? `url(${image})` : 'none',
                  width: `${100 / extendedImages.length}%`,
                  backgroundColor: !firstImageReady ? 'oklch(var(--primary))' : 'transparent',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      {/* Subtle accent decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-dark/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom section-padding relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <div className="text-white space-y-6 md:space-y-8 animate-fade-in max-w-4xl">
            <h1 className="text-balance">
              Trusted Legal Representation When It Matters Most
            </h1>
            
            <div className="space-y-4 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              <p>
                Professional, accessible legal representation across labour, commercial, family, criminal, and civil matters.
              </p>
              <p>
                We provide expert guidance and dedicated support to protect your rights and achieve the best possible outcomes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={handleScheduleConsultation}
                className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
