import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How long does it take to resolve a legal matter?",
    answer: "The timeline varies depending on the complexity of your case. Simple matters like contract reviews may take a few days, while litigation can take several months. During your initial consultation, we'll provide a realistic timeline based on your specific situation and keep you informed throughout the process."
  },
  {
    question: "What are your fees and payment options?",
    answer: "We offer transparent, competitive pricing tailored to your needs. Our fee structure varies by service type—some matters are billed hourly, while others may be fixed-fee arrangements. We discuss all costs upfront during your consultation and offer flexible payment plans to ensure quality legal representation is accessible."
  },
  {
    question: "Do I need to come to your office for consultations?",
    answer: "We offer flexible consultation options to suit your schedule. While in-person meetings at our South African offices are available, we also provide secure video consultations and phone calls. This ensures you can access expert legal advice regardless of your location or time constraints."
  },
  {
    question: "What makes your firm different from other law practices?",
    answer: "Our client-centered approach sets us apart. We combine deep legal expertise with clear communication, ensuring you understand every step of your case. We're committed to accessibility, transparency, and achieving practical solutions that align with your goals. Our track record speaks to our dedication to excellence and client satisfaction."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  // Generate JSON-LD structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq-section" className="section-padding bg-muted/30 scroll-mt-16 md:scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our legal services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const itemId = `faq-item-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className={`bg-background rounded-lg border transition-all duration-300 ${
                  isOpen ? 'border-accent shadow-md' : 'border-border hover:border-accent/50'
                }`}
              >
                <button
                  id={itemId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg transition-colors"
                >
                  <span className={`font-heading font-semibold text-lg pr-4 transition-colors ${
                    isOpen ? 'text-accent' : 'text-foreground'
                  }`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-accent' : 'text-muted-foreground'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={itemId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-1">
                    <div className={`border-l-2 border-accent pl-4 transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
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
