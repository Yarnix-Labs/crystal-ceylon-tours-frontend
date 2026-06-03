import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Map, Compass } from "lucide-react";

const SEOContentBlock = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Main Intro */}
          <div className="md:w-1/3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Discover Sri Lanka with Crystal Ceylon Tours
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full mb-6" />
            <p className="text-base text-foreground/70 leading-relaxed mb-6">
              Welcome to the teardrop island of the Indian Ocean—a land of ancient ruins, endless beaches, welcoming people, and famous tea. We specialize in crafting the finest <strong>Sri Lanka tour packages</strong> designed to immerse you in the authentic beauty and culture of this magnificent country.
            </p>
            <Link 
              to="/custom-package" 
              className="inline-flex items-center text-base font-bold text-primary hover:text-accent transition-colors group"
            >
              Design Your Custom Tour
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Detailed Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* Feature 1 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-foreground text-base">Private Sri Lanka Tours</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Our private tours guarantee flexibility, comfort, and personalized attention. With an experienced local guide and a dedicated private vehicle, you have the freedom to explore at your own pace, from the Sigiriya Rock Fortress to the lush tea plantations of Nuwara Eliya.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Map className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-base">Unforgettable Experiences</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We curate travel experiences that resonate. Dive into cultural tours of ancient cities, embark on exhilarating wildlife safaris in Yala National Park, relax on the pristine beaches of Mirissa, or hike through the misty trails of Horton Plains.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-foreground text-base">Bespoke Custom Itineraries</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Standard itineraries don't fit everyone. Tell us your dreams—whether a romantic honeymoon, a family vacation, or a solo adventure—and our experts will weave them into a seamless reality, handpicking accommodations that elevate your stay.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentBlock;
