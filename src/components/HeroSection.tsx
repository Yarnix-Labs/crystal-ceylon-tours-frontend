import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuickTransferModal from "@/components/QuickTransferModal";
import TripAdvisorRatedBadge from "./TripAdvisorRatedBadge";


import heroVideo from "@/assets/hero-video.mp4";
import customTravelers from "@/assets/custom-travelers.jpg";



const HeroSection = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const phoneNumber = "+94771234567";
  const message = "Hello! I'm interested in booking a tour to Sri Lanka.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-8 sm:pb-12">
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
      <div className="container mx-auto px-4 relative z-10 mt-3">
        <div className="text-center max-w-3xl mx-auto">
          {/* Quick Transfer Button */}
          <button
            onClick={() => setIsTransferModalOpen(true)}
            className="group inline-flex items-center gap-2.5 bg-accent/90 hover:bg-accent backdrop-blur-sm rounded-full px-5 py-2 mb-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm text-white font-semibold">
              Quick Transfer Booking
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Heading */}
          <h1 className="font-display text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="text-accent">Your Gateway to</span>
            <br />
            <span className="text-primary italic">Sri Lanka's Paradise</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-2">
            Discover ancient temples, pristine beaches, lush tea plantations, and exotic wildlife 
            with personalized private tours crafted just for you.
          </p>

          {/* Search Box */}
          <div className="bg-background/95 backdrop-blur-md rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-xl max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              {/* Search Input */}
              <div className="flex-1 relative w-full sm:border-r border-border/50">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search destinations..."
                  className="pl-12 h-11 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                />
              </div>
              
              {/* Static text container - hidden on mobile */}
              <div className="hidden sm:flex items-center h-11">
                <div className="sm:border-r border-border/50 h-full flex items-center justify-start w-32 lg:w-36 px-4">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Sri Lanka</span>
                </div>
                <div className="h-full flex items-center justify-start w-32 lg:w-36 px-4">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Adventures</span>
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
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-accent text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-[25px_10px_25px_10px] font-semibold text-xs sm:text-sm md:text-base group-hover:bg-primary group-hover:rounded-[10px_25px_10px_25px] transition-all duration-500 shadow-xl">
                      <span>Start Planning</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* TripAdvisor Rated Badge - Desktop Floating */}
          <div className="hidden lg:block absolute -left-12 bottom-0 z-20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <TripAdvisorRatedBadge />
          </div>

          {/* TripAdvisor Rated Badge - Mobile/Tablet Centered */}
          <div className="lg:hidden mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <TripAdvisorRatedBadge />
          </div>


        </div>
      </div>

      {/* Quick Transfer Modal */}
      <QuickTransferModal
        open={isTransferModalOpen}
        onOpenChange={setIsTransferModalOpen}
      />
    </section>
  );
};

export default HeroSection;
