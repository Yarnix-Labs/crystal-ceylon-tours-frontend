import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mirissaImg from "@/assets/mirissa.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side - Image with Floating Card */}
          <div className="w-full lg:w-1/2 relative z-10">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[80px] -z-10" />
            
            <div className="relative group">
              {/* Main Image */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-border/50">
                <img 
                  src={mirissaImg} 
                  alt="Explore Sri Lanka with Crystal Ceylon Tours" 
                  className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Contact Card */}
              <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-10 bg-white/90 backdrop-blur-xl p-5 sm:p-6 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 flex items-center gap-4 sm:gap-6 hover:-translate-y-2 transition-transform duration-500 ease-out group-hover:shadow-[0_20px_40px_rgba(0,168,217,0.15)] z-20">
                {/* Icon Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 animate-ping opacity-20" />
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                </div>
                
                {/* Text Content */}
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                    Book Tour Now
                  </p>
                  <p className="text-lg sm:text-2xl font-display font-bold text-foreground">
                    +94 77 123 4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 lg:pl-10 mt-12 lg:mt-0">
            {/* Soft decorative subtitle */}
            <div className="mb-4">
              <span className="font-display italic text-3xl sm:text-4xl text-accent/80 font-medium">
                Get to know us
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              Explore Sri Lanka with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                Crystal Ceylon Tours
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M2,10 Q50,0 98,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light">
              We are passionate locals dedicated to curating unforgettable journeys across our island home. From ancient cultural triangles to pristine golden beaches, we seamlessly blend luxury comfort with authentic Sri Lankan adventures.
            </p>
            
            {/* Bullet Points */}
            <ul className="space-y-4 mb-10">
              {[
                "Customized itineraries tailored exactly to your dreams",
                "Expert local guides passionate about Sri Lankan history",
                "Premium accommodations and seamless transport included"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-accent/10 rounded-full p-1 text-accent">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-medium text-base sm:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-accent to-ocean-light hover:from-primary hover:to-primary text-white rounded-full px-8 py-6 sm:px-10 h-auto text-sm sm:text-base font-bold tracking-wider transition-all duration-500 shadow-xl shadow-accent/20 hover:shadow-primary/30 hover:-translate-y-1 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  BOOK WITH US NOW
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
