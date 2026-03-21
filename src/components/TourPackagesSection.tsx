import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import yalaImg from "@/assets/yala.jpg";

const packages = [
  {
    slug: "cultural-triangle-explorer",
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    price: 899,
    image: sigiriyaImg,
    description: "Explore ancient rock fortresses, cave temples, and sacred cities across Sri Lanka's Cultural Triangle.",
  },
  {
    slug: "hill-country-adventure",
    title: "Hill Country Adventure",
    duration: "5 Days",
    price: 649,
    image: ellaImg,
    description: "Discover misty mountains, tea plantations, and the iconic Nine Arch Bridge in Sri Lanka's hill country.",
  },
  {
    slug: "wildlife-safari-experience",
    title: "Wildlife Safari Experience",
    duration: "4 Days",
    price: 549,
    image: yalaImg,
    description: "Spot leopards, elephants, and exotic birds in Yala National Park's stunning wilderness.",
  },
];

const TourPackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-accent text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Our Tours
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[48px] font-bold text-foreground mb-3">
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Tour Packages
              <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M2,10 Q50,0 98,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h2>
          {/* <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto font-normal"> */}

            <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto font-normal">
              Carefully crafted itineraries that showcase the best of Sri Lanka with premium comfort and unforgettable experiences.
            </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <Link
              key={pkg.title}
              to={`/tour-packages/${pkg.slug}`}
              className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[20px] mb-5 bg-muted">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Fixed Duration Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-accent px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ring-1 ring-white/50 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {pkg.duration}
                </div>

                {/* Hover Price Overlay Badge */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-bold shadow-xl shadow-primary/30 text-sm">
                    ${pkg.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-3 pb-3 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Premium Tour
                  </div>
                  <span className="text-base font-bold text-foreground transition-opacity duration-300 group-hover:opacity-0">
                    ${pkg.price}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {pkg.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-normal mb-6">
                  {pkg.description}
                </p>

                {/* Modern CTA */}
                <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                  <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <div className="w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 relative z-10">
          <Link to="/tour-packages">
            <Button variant="outline" size="lg" className="border-accent/40 text-accent hover:bg-accent hover:text-white rounded-full px-8 py-6 h-auto text-sm sm:text-base font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1 group">
              View All Tour Packages
              <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackagesSection;
