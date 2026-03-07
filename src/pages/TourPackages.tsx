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
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                Can't find what you're looking for?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Create your own custom tour package tailored to your preferences
              </p>
            </div>
            <Link to="/custom-package">
              <Button size="lg" className="gap-2 whitespace-nowrap w-full sm:w-auto">
                Build Your Own Package
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Link
                key={pkg.title}
                to={`/tour-packages/${pkg.slug}`}
                className="group bg-card rounded-lg border border-border overflow-hidden shadow:shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-400 opacity-0 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                    {pkg.duration.split(" / ")[0].replace(" Days", "").replace(" Day", "")} Days
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Duration + Price row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{pkg.duration.split(" / ")[0]}</span>
                    </div>
                    <span className="text-base font-bold text-foreground">${pkg.price}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-accent mb-1 group-hover:text-primary transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {pkg.highlights.join(", ")}
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
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default TourPackages;
