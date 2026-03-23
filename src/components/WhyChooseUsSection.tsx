import { ShieldCheck, Compass, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import yalaImg from "@/assets/yala.jpg";

const WhyChooseUsSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

          {/* Left Side - Image with Floating Badges */}
          <div className="w-full lg:w-1/2 relative z-10">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[80px] -z-10" />

            <div className="relative group w-full max-w-[540px] lg:max-w-none mx-auto">
              {/* Main Image */}
              <div className="relative rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.12)] ring-1 ring-border/50">
                <img
                  src={yalaImg}
                  alt="Wildlife Safari in Sri Lanka"
                  className="w-full aspect-video sm:aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              </div>

              {/* Dynamic Floating Feature Card */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-3 bg-white/95 backdrop-blur-xl p-3 sm:p-5 rounded-[16px] sm:rounded-[20px] shadow-xl ring-1 ring-black/5 flex flex-col items-center gap-1 sm:gap-1.5 hover:-translate-y-2 transition-transform duration-500 ease-out z-20 w-32 sm:w-44 text-center group-hover:shadow-[0_15px_30px_rgba(251,177,56,0.15)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-lg sm:text-xl font-display font-bold text-foreground">
                  100%
                </p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">
                  Tailored & Secure<br />Journeys
                </p>
              </div>

              {/* Secondary Floating Element */}
              <div className="absolute top-8 -left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl ring-1 ring-border flex items-center gap-2.5 animate-float pointer-events-none hidden sm:flex z-20">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-accent" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary uppercase text-[7px] font-bold text-secondary-foreground flex items-center justify-center text-center leading-none">
                    15K+<br />Guests
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 mt-6 sm:mt-10 lg:mt-0">
            {/* Subtitle */}
            <div className="mb-2">
              <span className="font-display italic text-xl sm:text-2xl md:text-3xl text-accent font-medium">
                The Crystal Ceylon Difference
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
                Masterpieces
                <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M2,10 Q50,0 98,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span> Of Travel
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-500 font-normal max-w-xl mb-4 sm:mb-6">
              We go beyond standard itineraries to deliver authentic Sri Lankan experiences. Your journey shouldn't be off-the-shelf. We specialize in curating personalized escapes with uncompromising quality.
            </p>

            {/* Bullet Points with unique icons */}
            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {[
                {
                  icon: <Compass className="w-5 h-5" />,
                  title: "Expert Local Navigators",
                  desc: "Guides who know the hidden gems beyond the tourist trails."
                },
                {
                  icon: <HeartHandshake className="w-5 h-5" />,
                  title: "Uncompromising Comfort",
                  desc: "Premium transport and handpicked luxury accommodations."
                }
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3.5 group">
                  <div className="mt-0.5 shrink-0 bg-accent/5 group-hover:bg-accent/10 transition-colors rounded-[14px] p-3 text-accent ring-1 ring-accent/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-md  font-bold leading-relaxed">
                      {feature.title}
                    </h4>
                    <p className=" text-sm  font-normal text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/custom-package">
              <Button size="default" className="bg-foreground hover:bg-primary text-white hover:text-white rounded-full px-4 py-3 sm:px-5 sm:py-5 h-auto text-xs sm:text-sm md:text-base font-bold tracking-wider transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-primary/30 hover:-translate-y-1 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  CUSTOMIZE YOUR JOURNEY
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
