import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import destinationsHero from "@/assets/destinations-hero.jpg";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import galleImg from "@/assets/galle.jpg";
import kandyImg from "@/assets/kandy.jpg";
import yalaImg from "@/assets/yala.jpg";
import mirissaImg from "@/assets/mirissa.jpg";

const destinations = [
  {
    slug: "sigiriya",
    name: "Sigiriya",
    province: "Central Province",
    description: "Ancient rock fortress rising dramatically from the jungle, offering breathtaking panoramic views and fascinating frescoes.",
    image: sigiriyaImg,
    highlights: ["Lion Rock Fortress", "Ancient Frescoes", "Water Gardens"],
  },
  {
    slug: "ella",
    name: "Ella",
    province: "Uva Province",
    description: "Picturesque hill country town surrounded by tea plantations and misty mountains, perfect for hiking and nature lovers.",
    image: ellaImg,
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Plantations"],
  },
  {
    slug: "galle",
    name: "Galle",
    province: "Southern Province",
    description: "Historic Dutch colonial fort city with charming cobblestone streets, boutique shops, and stunning ocean views.",
    image: galleImg,
    highlights: ["Galle Fort", "Lighthouse", "Dutch Architecture"],
  },
  {
    slug: "kandy",
    name: "Kandy",
    province: "Central Province",
    description: "Sacred city home to the Temple of the Tooth, surrounded by lush green hills and the beautiful Kandy Lake.",
    image: kandyImg,
    highlights: ["Temple of Tooth", "Kandy Lake", "Peradeniya Gardens"],
  },
  {
    slug: "yala-national-park",
    name: "Yala National Park",
    province: "Southern Province",
    description: "Premier wildlife sanctuary famous for its leopard population, elephants, and diverse ecosystems.",
    image: yalaImg,
    highlights: ["Leopard Safari", "Elephants", "Bird Watching"],
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    province: "Southern Province",
    description: "Pristine tropical beach paradise perfect for whale watching, surfing, and ultimate relaxation.",
    image: mirissaImg,
    highlights: ["Whale Watching", "Pristine Beaches", "Surfing"],
  },
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Explore Sri Lanka"
        subtitle="Discover the diverse landscapes, ancient wonders, and hidden gems of this tropical paradise"
        backgroundImage={destinationsHero}
        breadcrumb="Destinations"
      />

      {/* Destinations Grid */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {destinations.map((destination, index) => (
              <Link
                key={destination.name}
                to={`/destinations/${destination.slug}`}
                className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6 font-normal">
                    {destination.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Explore Destination
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
    </div>
  );
};

export default Destinations;
