export default function AboutApproachSection() {
    return (
        <section id="about" className="bg-background border-b border-border scroll-mt-16 md:scroll-mt-20">
            <div className="container-custom section-padding">
                {/* About / Firm Overview */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-primary mb-6">
                            About Ayanda Mdluli Attorneys
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                    </div>
                    
                    <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
                        <p className="text-lg leading-relaxed">
                            Ayanda Mdluli Attorneys is a full-service law firm dedicated to providing exceptional legal representation across South Africa. With over a decade of experience, we have built a reputation for delivering results-driven solutions while maintaining the highest standards of professional integrity and client care.
                        </p>
                        
                        <p className="text-lg leading-relaxed">
                            Our firm specializes in labour law, commercial litigation, family law, criminal defense, and civil matters. We understand that legal challenges can be overwhelming, which is why we prioritize clear communication, strategic thinking, and personalized attention for every client we serve.
                        </p>
                        
                        <p className="text-lg leading-relaxed">
                            Founded by Ayanda Mdluli, our practice combines deep legal expertise with a genuine commitment to justice and client advocacy. We believe that quality legal representation should be accessible, transparent, and focused on achieving the best possible outcomes for those we represent.
                        </p>
                    </div>
                </div>
                
                {/* Our Approach */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-primary mb-6">
                            Our Approach
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We combine strategic legal thinking with a client-centered philosophy to deliver exceptional results
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Approach Item 1 */}
                        <div className="bg-muted/50 rounded-lg p-8 border border-border hover:border-accent/30 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-accent">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        Client-Centered Focus
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        Your goals are our priority. We take the time to understand your unique situation, concerns, and objectives, ensuring our legal strategy aligns with your best interests at every stage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Approach Item 2 */}
                        <div className="bg-muted/50 rounded-lg p-8 border border-border hover:border-accent/30 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-accent">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        Strategic & Proactive
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We don't just react to legal challenges—we anticipate them. Our proactive approach identifies potential issues early and develops comprehensive strategies to protect your rights and interests.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Approach Item 3 */}
                        <div className="bg-muted/50 rounded-lg p-8 border border-border hover:border-accent/30 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-accent">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        Clear Communication
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        Legal matters shouldn't be confusing. We explain complex legal concepts in plain language, keep you informed throughout the process, and ensure you understand your options at every decision point.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Approach Item 4 */}
                        <div className="bg-muted/50 rounded-lg p-8 border border-border hover:border-accent/30 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-accent">4</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        Results-Driven Excellence
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We measure our success by the outcomes we achieve for our clients. Through meticulous preparation, skilled negotiation, and aggressive advocacy when needed, we fight for the best possible results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
