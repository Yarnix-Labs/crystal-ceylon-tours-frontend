import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import activitiesHero from "@/assets/activities-hero.jpg";
import surfingImg from "@/assets/activity-surfing.jpg";
import whaleImg from "@/assets/activity-whale.jpg";
import hikingImg from "@/assets/activity-hiking.jpg";
import safariImg from "@/assets/activity-safari.jpg";
import cultureImg from "@/assets/activity-culture.jpg";
import beachImg from "@/assets/activity-beach.jpg";

const activities = [
  {
    slug: "surfing-water-sports",
    image: surfingImg,
    title: "Surfing & Water Sports",
    description: "Ride world-class waves at Arugam Bay, Hikkaduwa, and Weligama. From beginner lessons to pro breaks.",
    locations: ["Arugam Bay", "Hikkaduwa", "Weligama"],
  },
  {
    slug: "whale-watching",
    image: whaleImg,
    title: "Whale Watching",
    description: "Witness majestic blue whales and playful dolphins in their natural habitat off the southern coast.",
    locations: ["Mirissa", "Trincomalee", "Kalpitiya"],
  },
  {
    slug: "hiking-trekking",
    image: hikingImg,
    title: "Hiking & Trekking",
    description: "Conquer Adam's Peak at sunrise, trek through misty hill country, and explore hidden waterfalls.",
    locations: ["Adam's Peak", "Ella Rock", "Horton Plains"],
  },
  {
    slug: "wildlife-safari",
    image: safariImg,
    title: "Wildlife Safari",
    description: "Spot leopards, elephants, and exotic birds in Sri Lanka's stunning national parks.",
    locations: ["Yala", "Udawalawe", "Wilpattu"],
  },
  {
    slug: "cultural-experiences",
    image: cultureImg,
    title: "Cultural Experiences",
    description: "Explore ancient temples, colonial forts, and vibrant local markets. Immerse in tradition.",
    locations: ["Kandy", "Anuradhapura", "Galle"],
  },
  {
    slug: "beach-relaxation",
    image: beachImg,
    title: "Beach & Relaxation",
    description: "Unwind on pristine golden beaches, enjoy Ayurvedic spa treatments, and watch magical sunsets.",
    locations: ["Unawatuna", "Tangalle", "Nilaveli"],
  },
];

const ThingsToDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Things To Do"
        subtitle="From thrilling adventures to peaceful retreats, discover unforgettable experiences"
        backgroundImage={activitiesHero}
        breadcrumb="Things To Do"
      />

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Link
                key={activity.title}
                to={`/things-to-do/${activity.slug}`}
                className="group block rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="font-display text-base font-bold text-accent mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {activity.description}
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our travel experts will create a personalized itinerary based on your interests and preferences.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ocean-dark opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Get Custom Itinerary
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThingsToDo;
