import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Users, Heart, Globe, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import storyImg1 from "@/assets/sigiriya.jpg";
import storyImg2 from "@/assets/gallery-tea-plantation.png";

import ammMalinga from "@/assets/aboutusimages/AMM Malinga(Travel Consultant).jpeg";
import djAnanda from "@/assets/aboutusimages/DJ Ananda(Managing Director).jpeg";
import jayaniApsara from "@/assets/aboutusimages/Jayani Apsara(Director).jpeg";
import tharakaWalawage from "@/assets/aboutusimages/Tharaka Walawage(Managing Director).jpeg";
import uduliAnjana from "@/assets/aboutusimages/Uduli Anjana(Travl Consultant).jpeg";
import yasithNawanjana from "@/assets/aboutusimages/Yasith Nawanjana(IT Support System Admin).jpeg";

const stats = [
  { end: 4, suffix: "+", label: "Years Experience" },
  { end: 15000, suffix: "+", label: "Happy Travelers" },
  { end: 50, suffix: "+", label: "Tour Packages" },
  { end: 98, suffix: "%", label: "Satisfaction Rate" },
];

const CountUp = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * end);
      
      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={elementRef} className="inline-block">
      {formattedCount}{suffix}
    </div>
  );
};

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We live and breathe Sri Lanka. Our passion for this beautiful island drives everything we do.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every traveler is unique. We craft bespoke experiences tailored to your interests and preferences.",
  },
  {
    icon: Award,
    title: "Local Expertise",
    description: "Our team of local guides brings insider knowledge and authentic cultural connections.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description: "We're committed to responsible travel that benefits local communities and preserves nature.",
  },
];

const team = [
  { name: "Tharaka Walawage", role: "Managing Director", image: tharakaWalawage },
  { name: "DJ Ananda", role: "Managing Director", image: djAnanda },
  { name: "Jayani Apsara", role: "Director", image: jayaniApsara },
  { name: "AMM Malinga", role: "Travel Consultant", image: ammMalinga },
  { name: "Uduli Anjana", role: "Travel Consultant", image: uduliAnjana },
  { name: "Yasith Nawanjana", role: "IT Support System Admin", image: yasithNawanjana },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="About Crystal Ceylon"
        subtitle="Your trusted partner for authentic Sri Lankan travel experiences since 2022"
        backgroundImage={heroImage}
        breadcrumb="About Us"
      />

      {/* Stats Section */}
      <section className="py-8 sm:py-10 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2 drop-shadow-sm">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/90 text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Premium Layout */}
      <section className="py-24 lg:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Image Composition */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end lg:pr-12">
              {/* Decorative blob/shape behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 w-full max-w-[280px] min-[375px]:max-w-[320px] sm:max-w-[420px]">
                {/* Main Image */}
                <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <img 
                    src={storyImg1} 
                    alt="Our Story" 
                    className="w-full h-[300px] min-[375px]:h-[350px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Experience Badge */}
                <div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-10 sm:-left-12 opacity-0 animate-fade-in-up group" 
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 text-center shadow-2xl flex flex-col items-center justify-center min-w-[100px] h-[100px] sm:min-w-[140px] sm:h-[140px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="text-2xl sm:text-4xl font-display font-bold text-white mb-0.5 sm:mb-1">2022</div>
                    <div className="text-white/90 text-[8px] sm:text-xs font-bold uppercase tracking-widest">Established</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2">
              <span className="section-label opacity-0 animate-fade-in-up text-sm sm:text-base">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 sm:mb-8 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Crafting Authentic <br className="hidden sm:block"/>
                <span className="text-primary italic">Sri Lankan</span> Journeys
              </h2>
              
              <div className="space-y-4 sm:space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/80 font-medium leading-relaxed">
                  <span className="float-left text-4xl sm:text-5xl font-display text-primary mr-3 mt-1 font-bold">C</span>
                  rystal Ceylon was founded in 2022 by Tharaka Walawage, a passionate traveler who wanted to share the magic of Sri Lanka with the world. What started as a small family operation has rapidly grown into one of the most trusted tour companies on the island.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/80 font-medium leading-relaxed">
                  We believe that travel should be transformative. We go far beyond typical tourist trails to offer authentic, deeply immersive experiences that connect you with Sri Lanka's rich heritage, stunning landscapes, and warm-hearted people.
                </p>
                
                {/* Feature List */}
                <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "Bespoke Itineraries",
                    "Expert Local Guides",
                    "Sustainable Tourism",
                    "24/7 On-trip Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-foreground/90 uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label opacity-0 animate-fade-in-up">Our Team</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Meet the Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Decorative background circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/10 to-transparent -m-2 sm:-m-2.5 md:-m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image container with ring */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-primary/20 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Floating badge for role on hover */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-primary/10 z-10 hidden md:block">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">
                      Expert Team
                    </p>
                  </div>
                </div>
                
                <div className="space-y-1 relative z-20">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-secondary/50 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label opacity-0 animate-fade-in-up">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-card rounded-3xl p-6 sm:p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary drop-shadow-sm" />
                  </div>
                  <h3 className="relative font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="relative text-foreground/80 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
