import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroVideo from "@/assets/hero-video.mp4";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import customTravelers from "@/assets/custom-travelers.jpg";

const stats = [
  { value: 50, suffix: "+", label: "Tour Packages" },
  { value: 15, suffix: "K+", label: "Happy Travelers" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const AnimatedStat = ({ value, suffix, label, startCounting }: { 
  value: number; 
  suffix: string; 
  label: string;
  startCounting: boolean;
}) => {
  const count = useCountUp(value, 2000, startCounting);
  
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-display font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-white/80">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={statsRef}
      className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-10"
    >
      {stats.map((stat) => (
        <AnimatedStat 
          key={stat.label} 
          value={stat.value} 
          suffix={stat.suffix} 
          label={stat.label}
          startCounting={startCounting}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const phoneNumber = "+94771234567";
  const message = "Hello! I'm interested in booking a tour to Sri Lanka.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <MapPin className="h-3.5 w-3.5 text-primary-foreground" />
            <span className="text-xs text-primary-foreground font-medium">
              Sigiriya • Ella • Galle • Kandy • Mirissa
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-accent">Your Gateway to</span>
            <br />
            <span className="text-primary italic">Sri Lanka's Paradise</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Discover ancient temples, pristine beaches, lush tea plantations, and exotic wildlife 
            with personalized private tours crafted just for you.
          </p>

          {/* Search Box */}
          <div className="bg-background/95 backdrop-blur-md rounded-2xl sm:rounded-full p-3 shadow-xl max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              {/* Search Input */}
              <div className="flex-1 relative w-full sm:border-r border-border/50">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search destinations..."
                  className="pl-12 h-11 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                />
              </div>
              
              {/* Dropdowns container - hidden on mobile */}
              <div className="hidden sm:flex items-center">
                {/* All Regions Dropdown */}
                <div className="sm:border-r border-border/50">
                  <Select>
                    <SelectTrigger className="w-32 lg:w-36 h-11 border-0 bg-transparent focus:ring-0 focus:ring-offset-0 text-sm">
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="central">Central Province</SelectItem>
                      <SelectItem value="southern">Southern Province</SelectItem>
                      <SelectItem value="western">Western Province</SelectItem>
                      <SelectItem value="uva">Uva Province</SelectItem>
                      <SelectItem value="northern">Northern Province</SelectItem>
                      <SelectItem value="eastern">Eastern Province</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tour Type Dropdown */}
                <div>
                  <Select>
                    <SelectTrigger className="w-32 lg:w-36 h-11 border-0 bg-transparent focus:ring-0 focus:ring-offset-0 text-sm">
                      <SelectValue placeholder="Tour Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tour Types</SelectItem>
                      <SelectItem value="cultural">Cultural & Heritage</SelectItem>
                      <SelectItem value="adventure">Adventure Tours</SelectItem>
                      <SelectItem value="wildlife">Wildlife Safari</SelectItem>
                      <SelectItem value="beach">Beach Holidays</SelectItem>
                      <SelectItem value="honeymoon">Honeymoon Packages</SelectItem>
                      <SelectItem value="ayurveda">Ayurveda & Wellness</SelectItem>
                      <SelectItem value="trekking">Hiking & Trekking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search Button */}
              <Button size="lg" className="w-full sm:w-auto h-11 px-6 rounded-full sm:ml-2">
                <Search className="h-4 w-4 sm:mr-2" />
                <span className="sm:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="mt-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Custom Package Banner - Organic Wave Style */}
            <Link to="/custom-package" className="block group">
              <div className="relative bg-accent/10 rounded-3xl overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-background/50 to-primary/20" />
                
                {/* Top wave decoration */}
                <svg className="absolute top-0 left-0 w-full h-8 text-accent" viewBox="0 0 1200 40" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0,40 C150,0 350,40 500,20 C650,0 850,40 1000,20 C1100,10 1150,30 1200,20 L1200,0 L0,0 Z" />
                </svg>
                
                {/* Bottom wave decoration */}
                <svg className="absolute bottom-0 left-0 w-full h-10 text-primary" viewBox="0 0 1200 50" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0,0 C150,30 350,0 500,20 C650,40 850,10 1000,30 C1100,40 1150,20 1200,30 L1200,50 L0,50 Z" />
                </svg>
                
                {/* Decorative leaves - left */}
                <div className="absolute -left-4 bottom-0 w-24 h-24 opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-palm">
                    <ellipse cx="20" cy="80" rx="15" ry="40" fill="currentColor" transform="rotate(-30 20 80)" />
                    <ellipse cx="35" cy="75" rx="12" ry="35" fill="currentColor" transform="rotate(-15 35 75)" opacity="0.8" />
                  </svg>
                </div>
                
                {/* Decorative leaves - right */}
                <div className="absolute -right-4 bottom-0 w-24 h-24 opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-palm">
                    <ellipse cx="80" cy="80" rx="15" ry="40" fill="currentColor" transform="rotate(30 80 80)" />
                    <ellipse cx="65" cy="75" rx="12" ry="35" fill="currentColor" transform="rotate(15 65 75)" opacity="0.8" />
                  </svg>
                </div>
                
                {/* Content container */}
                <div className="relative px-4 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  
                  {/* Image with organic frame */}
                  <div className="relative flex-shrink-0">
                    {/* Organic blob shape behind image */}
                    <div className="absolute -inset-2 bg-accent/30 rounded-[40%_60%_70%_30%/30%_30%_70%_70%] group-hover:rounded-[60%_40%_30%_70%/70%_70%_30%_30%] transition-all duration-700" />
                    <div className="relative w-36 h-28 sm:w-48 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={customTravelers} 
                        alt="Happy travelers in Sri Lanka" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating airplane icon */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                      <svg className="w-5 h-5 text-white rotate-45" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                      Design Your Dream Journey
                    </h3>
                    <p className="text-foreground/80 text-sm sm:text-base mt-1.5 max-w-sm font-medium">
                      Handcraft your perfect Sri Lanka adventure — choose destinations, activities & dates
                    </p>
                  </div>
                  
                  {/* CTA Button with organic shape */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 bg-accent text-white px-5 sm:px-6 py-3 rounded-[25px_10px_25px_10px] font-semibold text-sm sm:text-base group-hover:bg-primary group-hover:rounded-[10px_25px_10px_25px] transition-all duration-500 shadow-xl">
                      <span>Start Planning</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Quick Contact Strip */}
            <div className="mt-4 flex items-center justify-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white/70 text-xs sm:text-sm">Need help planning?</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#25D366]/30"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 brightness-0 invert" />
                  <span>Chat Now</span>
                </a>
              </div>
              
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>

          {/* Stats */}
          <StatsSection />

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <a href="#destinations" className="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors">
              <span className="text-xs mb-1">Scroll to explore</span>
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
