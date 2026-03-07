import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "An absolutely magical experience! Our guide was incredibly knowledgeable about Sri Lankan history and culture. The itinerary was perfectly balanced between adventure and relaxation. Can't wait to come back!",
    tourType: "Cultural Heritage Tour",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Marcus Weber",
    location: "Berlin, Germany",
    rating: 5,
    text: "Crystal Ceylon Tours made our honeymoon unforgettable. From the stunning tea plantations in Ella to the beautiful beaches of Mirissa, every detail was perfectly arranged. Highly recommended!",
    tourType: "Honeymoon Package",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 5,
    text: "The wildlife safari at Yala was the highlight of our trip! We saw leopards, elephants, and so many exotic birds. The accommodations were top-notch and the food was incredible.",
    tourType: "Wildlife Safari Tour",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Jean-Pierre Dubois",
    location: "Paris, France",
    rating: 5,
    text: "Une expérience extraordinaire! The team went above and beyond to customize our tour. Sigiriya at sunrise was breathtaking. Thank you for making our family vacation so special!",
    tourType: "Custom Family Tour",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Perfect organization from start to finish. The Ayurveda retreat was exactly what I needed. Professional, authentic, and truly rejuvenating. Will definitely book again!",
    tourType: "Ayurveda & Wellness",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];

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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary">Travelers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what travelers from around the world 
            have to say about their unforgettable experiences with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-background rounded-3xl shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 bg-accent rounded-full p-4">
              <Quote className="h-6 w-6 text-accent-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar */}
                <div className="shrink-0">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  <StarRating rating={currentTestimonial.rating} />
                  
                  <p className="text-foreground text-lg md:text-xl leading-relaxed mt-4 mb-6 italic">
                    "{currentTestimonial.text}"
                  </p>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {currentTestimonial.location}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {currentTestimonial.tourType}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:-mx-6">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="pointer-events-auto rounded-full bg-background shadow-lg hover:bg-secondary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="pointer-events-auto rounded-full bg-background shadow-lg hover:bg-secondary"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary">4.9</div>
            <div className="flex justify-center mt-1">
              <StarRating rating={5} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">Google Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary">500+</div>
            <div className="text-sm text-foreground font-medium">Happy Clients</div>
            <div className="text-xs text-muted-foreground mt-1">This Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary">98%</div>
            <div className="text-sm text-foreground font-medium">Would Recommend</div>
            <div className="text-xs text-muted-foreground mt-1">To Friends</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary">24/7</div>
            <div className="text-sm text-foreground font-medium">Support</div>
            <div className="text-xs text-muted-foreground mt-1">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
