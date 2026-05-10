import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReviews } from "@/hooks/use-public-api";

// Mock testimonials removed to strictly ensure pure API data rendering

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { data: response, isLoading } = useReviews(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayReviews = (response?.items || []).slice(0, 5).map((rev: any) => ({
    id: rev.id,
    name: rev.name || rev.customerName || "Satisfied Traveler",
    location: rev.location || "Sri Lanka",
    rating: rev.rating || 5,
    text: rev.comment || rev.text || "",
    tourType: rev.tourType || rev.tourName || "Featured Tour",
    avatar: rev.avatar || rev.image || rev.customerImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  }));

  // Auto-rotate testimonials
  useEffect(() => {
    if (displayReviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [displayReviews.length]);

  const goToPrev = () => {
    if (displayReviews.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length);
  };

  const goToNext = () => {
    if (displayReviews.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
  };

  const currentTestimonial = displayReviews.length > 0 ? displayReviews[currentIndex] : null;

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-10 sm:mb-16 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-accent text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-foreground mb-2 sm:mb-3">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Travelers Say
              <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M2,10 Q50,0 98,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h2>
                              {/* <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto font-normal"> */}

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal px-2">
            Don't just take our word for it. Here's what travelers from around the world 
            have to say about their unforgettable experiences with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        {currentTestimonial ? (
          <div 
            className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative p-2 sm:p-4 bg-white/40 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
              <div className="relative bg-white rounded-[20px] sm:rounded-[24px] shadow-sm p-5 sm:p-8 md:p-14 border border-border/30">
                
                {/* Decorative Quotes Background */}
                <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none">
                  <Quote className="absolute -top-10 -right-10 w-64 h-64 rotate-12 text-primary/5" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-5 sm:gap-8 md:gap-12 items-center md:items-start group">
                    
                    {/* Avatar Side */}
                    <div className="shrink-0 relative">
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full scale-110 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />
                        <img
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl ring-1 ring-border/50"
                        />
                      </div>
                      {/* Floating Quote Badge */}
                      <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-accent p-2.5 md:p-3 rounded-full shadow-lg text-white ring-4 ring-white transition-transform duration-500 group-hover:scale-110">
                        <Quote className="h-4 w-4 md:h-5 md:w-5 fill-white" />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 text-center md:text-left pt-2">
                      <div className="flex justify-center md:justify-start mb-6">
                        <StarRating rating={currentTestimonial.rating} />
                      </div>
                      
                      <p className="text-foreground text-base sm:text-xl md:text-2xl leading-relaxed mb-5 sm:mb-8 font-display italic text-balance font-medium">
                        "{currentTestimonial.text}"
                      </p>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-t border-border/40 pt-4 sm:pt-6">
                        <div>
                          <h4 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider font-semibold">
                            {currentTestimonial.location}
                          </p>
                        </div>
                        <span className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-[11px] sm:text-xs font-bold rounded-full uppercase tracking-wider self-center md:self-end">
                          {currentTestimonial.tourType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:px-4 md:px-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrev}
                    className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border-white/50 shadow-[0_4px_14px_0_rgb(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,168,217,0.25)] hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300 md:-translate-x-1/2"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border-white/50 shadow-[0_4px_14px_0_rgb(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,168,217,0.25)] hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300 md:translate-x-1/2"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            {displayReviews.length > 1 && (
              <div className="flex justify-center gap-2.5 mt-8">
                {displayReviews.map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentIndex(index)}
                     className={`h-2.5 rounded-full transition-all duration-500 ${
                       index === currentIndex 
                         ? "w-10 bg-gradient-to-r from-primary to-accent shadow-sm" 
                         : "w-2.5 bg-border/80 hover:bg-primary/50"
                     }`}
                     aria-label={`Go to testimonial ${index + 1}`}
                   />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            Waiting for travelers to share their experiences...
          </div>
        )}

        {/* Modern Trust Indicators */}
        <div 
          className={`mt-14 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { value: "4.9", label: "Google Reviews", stars: true, subtext: "Based on 350+ reviews" },
            { value: "500+", label: "Happy Clients", stars: false, subtext: "Traveled this year" },
            { value: "98%", label: "Recommend Us", stars: false, subtext: "To family and friends" },
            { value: "24/7", label: "Premium Support", stars: false, subtext: "Always here for you" },
          ].map((stat, idx) => (
            <div key={idx} className="relative group p-4 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[24px] bg-white border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 text-center flex flex-col items-center justify-center hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />
              <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 sm:mb-3">
                {stat.value}
              </div>
              {stat.stars && (
                <div className="flex justify-center mb-3">
                  <StarRating rating={5} />
                </div>
              )}
              <div className="relative z-10 text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="relative z-10 text-xs text-muted-foreground font-light">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
