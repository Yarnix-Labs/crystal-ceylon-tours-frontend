import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import packagesHero from "@/assets/packages-hero.jpg";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import yalaImg from "@/assets/yala.jpg";
import galleImg from "@/assets/galle.jpg";
import kandyImg from "@/assets/kandy.jpg";
import mirissaImg from "@/assets/mirissa.jpg";

const packages = [
  {
    slug: "cultural-triangle-explorer",
    title: "Cultural Triangle Explorer",
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 People",
    rating: 4.9,
    reviews: 128,
    price: 899,
    image: sigiriyaImg,
    highlights: ["Sigiriya Rock Fortress", "Ancient Polonnaruwa", "Dambulla Cave Temple", "Kandy Temple"],
    includes: ["Accommodation", "Private Transport", "English Guide", "Entrance Fees"],
  },
  {
    slug: "hill-country-adventure",
    title: "Hill Country Adventure",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 People",
    rating: 4.8,
    reviews: 96,
    price: 649,
    image: ellaImg,
    highlights: ["Nine Arch Bridge", "Tea Plantations", "Little Adam's Peak", "Train Ride"],
    includes: ["Boutique Hotels", "All Transport", "Trekking Guide", "Tea Factory Tour"],
  },
  {
    slug: "wildlife-safari-experience",
    title: "Wildlife Safari Experience",
    duration: "4 Days / 3 Nights",
    groupSize: "2-10 People",
    rating: 4.9,
    reviews: 154,
    price: 549,
    image: yalaImg,
    highlights: ["Yala National Park", "Leopard Spotting", "Elephant Safari", "Bird Watching"],
    includes: ["Safari Lodge", "Jeep Safari", "Expert Tracker", "All Meals"],
  },
  {
    slug: "southern-coast-discovery",
    title: "Southern Coast Discovery",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    rating: 4.7,
    reviews: 89,
    price: 749,
    image: galleImg,
    highlights: ["Galle Fort", "Whale Watching", "Beach Relaxation", "Stilt Fishermen"],
    includes: ["Beach Resorts", "Boat Tours", "Private Driver", "Breakfast"],
  },
  {
    slug: "complete-sri-lanka-tour",
    title: "Complete Sri Lanka Tour",
    duration: "14 Days / 13 Nights",
    groupSize: "2-6 People",
    rating: 5.0,
    reviews: 67,
    price: 1899,
    image: kandyImg,
    highlights: ["All Major Sites", "Beach & Mountains", "Wildlife Safari", "Cultural Shows"],
    includes: ["Luxury Hotels", "All Transport", "All Meals", "Activities"],
  },
  {
    slug: "tropical-beach-escape",
    title: "Tropical Beach Escape",
    duration: "5 Days / 4 Nights",
    groupSize: "2-4 People",
    rating: 4.8,
    reviews: 112,
    price: 599,
    image: mirissaImg,
    highlights: ["Mirissa Beach", "Whale Watching", "Surfing Lessons", "Sunset Cruises"],
    includes: ["Beach Villa", "Water Sports", "Spa Treatment", "Breakfast"],
  },
];

const TourPackages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Tour Packages"
        subtitle="Carefully crafted itineraries that showcase the very best of Sri Lanka's wonders"
        backgroundImage={packagesHero}
        breadcrumb="Tour Packages"
      />

      {/* Custom Package CTA */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 max-w-4xl mx-auto text-center md:text-left">
            <div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                Can't find what you're looking for?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-normal">
                Create your own custom tour package tailored to your preferences
              </p>
            </div>
            <Link to="/custom-package">
              <Button size="lg" className="gap-2 whitespace-nowrap w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 h-auto text-xs sm:text-sm font-bold rounded-full">
                Build Your Own Package
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-14 sm:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <Link
                key={pkg.title}
                to={`/tour-packages/${pkg.slug}`}
                className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-accent px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-lg ring-1 ring-white/50 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {pkg.duration.split(" / ")[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Premium Tour
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-normal mb-6">
                    {pkg.highlights.join(" • ")}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <div className="w-6 sm:w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default TourPackages;
