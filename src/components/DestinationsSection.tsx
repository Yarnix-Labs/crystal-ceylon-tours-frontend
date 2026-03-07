import { Link } from "react-router-dom";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import galleImg from "@/assets/galle.jpg";
import kandyImg from "@/assets/kandy.jpg";
import yalaImg from "@/assets/yala.jpg";
import mirissaImg from "@/assets/mirissa.jpg";

const destinations = [
  {
    name: "Sigiriya",
    province: "Central Province",
    description: "Ancient rock fortress rising dramatically from the jungle, offering breathtaking panoramic views.",
    image: sigiriyaImg,
  },
  {
    name: "Ella",
    province: "Uva Province",
    description: "Picturesque hill country town surrounded by tea plantations and misty mountains.",
    image: ellaImg,
  },
  {
    name: "Galle",
    province: "Southern Province",
    description: "Historic Dutch colonial fort city with cobblestone streets and ocean views.",
    image: galleImg,
  },
  {
    name: "Kandy",
    province: "Central Province",
    description: "Sacred city home to the Temple of the Tooth, surrounded by lush green hills.",
    image: kandyImg,
  },
  {
    name: "Yala National Park",
    province: "Southern Province",
    description: "Premier wildlife sanctuary famous for its leopard population and diverse ecosystems.",
    image: yalaImg,
  },
  {
    name: "Mirissa",
    province: "Southern Province",
    description: "Pristine tropical beach paradise perfect for whale watching and relaxation.",
    image: mirissaImg,
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Destinations</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Explore Sri Lanka
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the diverse landscapes and rich culture of this tropical paradise
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              to={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group block rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
  );
};

export default DestinationsSection;
