import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SEOContentBlock = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-border/40">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Discover Sri Lanka with Crystal Ceylon Tours
            </h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mx-auto" />
          </div>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed">
            
            <p>
              Welcome to the teardrop island of the Indian Ocean—a land of ancient ruins, endless beaches, welcoming people, and famous tea. At <strong>Crystal Ceylon Tours</strong>, we specialize in crafting the finest <strong>Sri Lanka tour packages</strong> designed to immerse you in the authentic beauty and culture of this magnificent country. Whether you're seeking a thrilling wildlife adventure, a serene beach holiday, or a deep dive into rich historical heritage, our expertly tailored itineraries offer an unparalleled travel experience.
            </p>

            <h3>Why Choose Our Private Sri Lanka Tours?</h3>
            <p>
              Traveling should be more than just visiting tourist spots; it should be an unforgettable journey shaped around your unique interests. Our <strong>private Sri Lanka tours</strong> guarantee flexibility, comfort, and personalized attention. With an experienced local guide and a dedicated private vehicle, you have the freedom to explore at your own pace. You can linger longer at the awe-inspiring Sigiriya Rock Fortress, take spontaneous detours through lush tea plantations in Nuwara Eliya, or pause to photograph wild elephants in Yala National Park.
            </p>

            <h3>Unforgettable Sri Lanka Travel Experiences</h3>
            <p>
              We don't just book holidays; we curate <strong>Sri Lanka travel experiences</strong> that resonate. Our diverse range of offerings caters to every type of traveler:
            </p>
            <ul>
              <li><strong>Cultural Tours:</strong> Step back in time as you explore the ancient cities of Anuradhapura and Polonnaruwa, marvel at the Dambulla Cave Temple, and witness the sacred Temple of the Tooth Relic in Kandy.</li>
              <li><strong>Wildlife Safaris:</strong> Sri Lanka is a biodiversity hotspot. Join our expert trackers for exhilarating safaris in Minneriya to see the great elephant gathering, or venture into Yala National Park in search of the elusive Sri Lankan leopard.</li>
              <li><strong>Beach Holidays:</strong> Relax on pristine, golden shores. From the lively waves of Mirissa and Unawatuna in the south to the untouched tranquility of Trincomalee in the east, we know the perfect beach for your tropical escape.</li>
              <li><strong>Adventure & Nature:</strong> Hike through the misty trails of Horton Plains, take the world-famous scenic train ride from Kandy to Ella, and conquer the peaks of Adam's Peak or Little Adam's Peak.</li>
            </ul>

            <h3>Bespoke Custom Tours Tailored for You</h3>
            <p>
              We understand that standard itineraries don't fit everyone. That’s why we excel at designing <strong>custom tours</strong>. You tell us your dreams—whether it's a romantic honeymoon, a family vacation, or a solo backpacking adventure—and our travel experts will weave them into a seamless reality. From boutique eco-lodges to luxury resorts, we handpick accommodations that elevate your stay. 
            </p>

            <p>
              When you book with Crystal Ceylon Tours, you're not just a client; you become a part of our extended family. Our commitment to sustainable tourism ensures that your visit positively impacts local communities while preserving the island's natural splendor for generations to come.
            </p>

            <div className="mt-10 text-center">
              <Link to="/custom-package" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                Design Your Custom Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentBlock;
