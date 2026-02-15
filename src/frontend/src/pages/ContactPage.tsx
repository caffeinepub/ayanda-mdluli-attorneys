import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import ServiceSelectorAccordion from '../components/contact/ServiceSelectorAccordion';
import RevealOnScroll from '../components/common/RevealOnScroll';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your legal matter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        description: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section with Background Image */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/pexels-sora-shimazaki-5668882.jpg)',
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                Book Now
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90">
                Schedule your consultation today. Our experienced legal team is ready to assist you with your legal matters.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form Card */}
                <RevealOnScroll variant="noticeable" delay={0}>
                  <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading">
                        Consultation Request Form
                      </CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-10 h-10 text-accent" />
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                            Thank You!
                          </h3>
                          <p className="text-muted-foreground">
                            Your consultation request has been submitted successfully. We'll contact you soon.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className={errors.fullName ? 'border-destructive' : ''}
                            />
                            {errors.fullName && (
                              <p className="text-sm text-destructive">{errors.fullName}</p>
                            )}
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@example.com"
                                className={errors.email ? 'border-destructive' : ''}
                              />
                              {errors.email && (
                                <p className="text-sm text-destructive">{errors.email}</p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+27 12 345 6789"
                                className={errors.phone ? 'border-destructive' : ''}
                              />
                              {errors.phone && (
                                <p className="text-sm text-destructive">{errors.phone}</p>
                              )}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="service">Legal Service Needed *</Label>
                            <ServiceSelectorAccordion
                              value={formData.service}
                              onChange={handleServiceChange}
                            />
                            {errors.service && (
                              <p className="text-sm text-destructive">{errors.service}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="description">
                              Describe Your Legal Matter *
                            </Label>
                            <Textarea
                              id="description"
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              placeholder="Please provide details about your legal matter..."
                              rows={6}
                              className={errors.description ? 'border-destructive' : ''}
                            />
                            {errors.description && (
                              <p className="text-sm text-destructive">{errors.description}</p>
                            )}
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full hover-lift"
                            size="lg"
                          >
                            {isSubmitting ? 'Submitting...' : 'Book Consultation'}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </RevealOnScroll>

                {/* Contact Info Card */}
                <RevealOnScroll variant="subtle" delay={100}>
                  <div className="space-y-6">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-heading">
                          Contact Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Phone</p>
                            <a
                              href="tel:+27123456789"
                              className="text-muted-foreground hover:text-accent transition-colors hover-underline"
                            >
                              +27 (0) 12 345 6789
                            </a>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Email</p>
                            <a
                              href="mailto:info@lawfirm.co.za"
                              className="text-muted-foreground hover:text-accent transition-colors hover-underline"
                            >
                              info@lawfirm.co.za
                            </a>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Location</p>
                            <p className="text-muted-foreground">
                              Johannesburg, South Africa
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl font-heading">
                          Office Hours
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="font-medium">8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-medium">9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
