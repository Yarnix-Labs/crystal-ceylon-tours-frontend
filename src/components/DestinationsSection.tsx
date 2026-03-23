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
    <section id="destinations" className="py-16 sm:py-24 bg-gradient-to-b from-secondary/50 to-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-accent text-xs font-bold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Destinations
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-foreground mb-2 sm:mb-3">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Sri Lanka
              <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M2,10 Q50,0 98,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto font-normal">
            Discover the diverse landscapes and rich culture of this tropical paradise with handpicked modern escapes.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              to={`/destinations/${destination.name.toLowerCase().replace(/\\s+/g, "-")}`}
              className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Modern subtle badge overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-primary shadow-lg ring-1 ring-white/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -rotate-45" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content text */}
              <div className="px-3 pb-3 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-accent mb-2.5 uppercase tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {destination.province}
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {destination.name}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-normal mb-6">
                  {destination.description}
                </p>
                
                {/* Visual read more indicator */}
                <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                  <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Explore Destination
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                  <div className="w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
