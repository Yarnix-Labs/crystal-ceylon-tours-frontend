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
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Our Tours</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Carefully crafted itineraries that showcase the best of Sri Lanka
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Link
              key={pkg.title}
              to={`/tour-packages/${pkg.slug}`}
              className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-400 group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {pkg.duration.replace(" Days", "").replace(" Day", "")} Days
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{pkg.duration} Tour</span>
                  </div>
                  <span className="text-base font-bold text-foreground">${pkg.price}</span>
                </div>

                <h3 className="font-display text-base font-bold text-accent mb-1 group-hover:text-primary transition-colors duration-300">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {pkg.description}
                </p>

                {/* CTA */}
                <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-2 border-t border-border/50">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/tour-packages">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View All Tour Packages
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackagesSection;
