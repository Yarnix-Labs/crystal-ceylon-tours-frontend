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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <Link
                key={destination.name}
                to={`/destinations/${destination.slug}`}
                className="group block rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="overflow-hidden">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="font-display text-base font-bold text-accent mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {destination.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Read More →
                  </span>
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
