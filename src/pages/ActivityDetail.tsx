import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Check,
  Calendar,
  Sun,
  Camera
} from "lucide-react";
import surfingImg from "@/assets/activity-surfing.jpg";
import whaleImg from "@/assets/activity-whale.jpg";
import hikingImg from "@/assets/activity-hiking.jpg";
import safariImg from "@/assets/activity-safari.jpg";
import cultureImg from "@/assets/activity-culture.jpg";
import beachImg from "@/assets/activity-beach.jpg";

const activitiesData: Record<string, {
  title: string;
  tagline: string;
  image: string;
  description: string[];
  locations: { name: string; description: string }[];
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  whatsIncluded: string[];
  tips: string[];
}> = {
  "surfing-water-sports": {
    title: "Surfing & Water Sports",
    tagline: "Ride the legendary waves of Sri Lanka's coastline",
    image: surfingImg,
    description: [
      "Sri Lanka has emerged as one of Asia's premier surfing destinations, offering consistent waves for riders of all levels throughout the year. The island's diverse coastline provides year-round surfing opportunities, with the southwest coast best from November to April and the east coast from May to October.",
      "Beyond surfing, Sri Lanka offers an incredible array of water sports including kitesurfing in Kalpitiya, diving in Trincomalee, and snorkeling in Hikkaduwa. The warm tropical waters and abundant marine life make every aquatic adventure unforgettable.",
      "Whether you're a complete beginner looking for gentle waves and patient instructors, or an experienced surfer seeking challenging reef breaks, Sri Lanka has the perfect spot for you."
    ],
    locations: [
      { name: "Arugam Bay", description: "World-famous right-hand point break, perfect for intermediate to advanced surfers. Best from May to October." },
      { name: "Hikkaduwa", description: "Beginner-friendly beach breaks with surf schools and a vibrant beach scene. Best from November to April." },
      { name: "Weligama", description: "Gentle waves ideal for learning, with numerous surf camps and a laid-back atmosphere." },
      { name: "Mirissa", description: "Mix of beach and reef breaks suitable for all levels, with stunning sunset sessions." }
    ],
    highlights: ["World-class surf breaks", "Year-round waves", "Affordable surf schools", "Warm tropical waters", "Vibrant surf culture"],
    bestTime: "November - April (West/South) | May - October (East)",
    duration: "Half day to multi-day surf camps",
    difficulty: "Beginner to Advanced",
    groupSize: "Private or group lessons available",
    whatsIncluded: [
      "Professional surf instructors",
      "Quality surfboards and equipment",
      "Rash guards and reef booties",
      "Beach photography sessions",
      "Transport to surf spots"
    ],
    tips: [
      "Book lessons during low tide for gentler waves",
      "Apply reef-safe sunscreen liberally",
      "Stay hydrated - surfing is exhausting!",
      "Respect local surfers and follow lineup etiquette",
      "Consider travel insurance with water sports coverage"
    ]
  },
  "whale-watching": {
    title: "Whale Watching",
    tagline: "Witness the giants of the deep in their natural habitat",
    image: whaleImg,
    description: [
      "Sri Lanka offers one of the world's best whale watching experiences, with Mirissa being the gateway to seeing the magnificent blue whale - the largest animal on Earth. The continental shelf drops dramatically close to shore, allowing whales to be spotted just a few kilometers from the coast.",
      "From November to April, the waters off Mirissa come alive with blue whales, sperm whales, and pods of playful dolphins. The sight of a 30-meter blue whale breaching the surface is a truly humbling experience that stays with you forever.",
      "Responsible whale watching practices are prioritized, with strict guidelines ensuring minimal disturbance to these gentle giants while providing unforgettable encounters for visitors."
    ],
    locations: [
      { name: "Mirissa", description: "The whale watching capital of Sri Lanka. Best chances to see blue whales from November to April." },
      { name: "Trincomalee", description: "East coast alternative, excellent for sperm whales and dolphins from May to October." },
      { name: "Kalpitiya", description: "Growing destination known for large pods of spinner dolphins year-round." },
      { name: "Dondra Point", description: "Southernmost tip of Sri Lanka, occasional sightings of migrating whales." }
    ],
    highlights: ["Blue whale sightings", "Sperm whale encounters", "Dolphin pods", "Professional guides", "Sunrise departures"],
    bestTime: "November - April (Mirissa) | May - October (Trincomalee)",
    duration: "4-6 hours (early morning departure)",
    difficulty: "Easy (boat trip)",
    groupSize: "Small group boats (max 15-20 passengers)",
    whatsIncluded: [
      "Expert marine biologist guide",
      "Comfortable boat with shade",
      "Life jackets and safety equipment",
      "Light breakfast and refreshments",
      "Hotel pickup and drop-off"
    ],
    tips: [
      "Take motion sickness tablets before departure",
      "Bring binoculars for distant sightings",
      "Wear layers - early mornings can be cool",
      "Charge your camera - you'll take hundreds of photos!",
      "Book with operators who follow whale watching guidelines"
    ]
  },
  "hiking-trekking": {
    title: "Hiking & Trekking",
    tagline: "Conquer misty peaks and discover hidden waterfalls",
    image: hikingImg,
    description: [
      "Sri Lanka's hill country offers some of the most rewarding hiking experiences in Asia. From the sacred pilgrimage up Adam's Peak to the dramatic vistas of World's End at Horton Plains, every trail reveals the island's stunning natural beauty.",
      "The central highlands, a UNESCO World Heritage site, feature lush cloud forests, cascading waterfalls, and tea plantations that seem to roll endlessly across the landscape. The cool mountain air and misty mornings create a mystical atmosphere.",
      "Whether you're seeking a challenging sunrise climb or a leisurely walk through tea estates, Sri Lanka's diverse terrain caters to hikers of all abilities and preferences."
    ],
    locations: [
      { name: "Adam's Peak", description: "Sacred mountain with 5,500 steps. Climb overnight for an unforgettable sunrise at 2,243m." },
      { name: "Ella Rock", description: "Moderate 3-hour hike through tea plantations with panoramic views of Ella Gap." },
      { name: "Horton Plains", description: "9km loop to World's End cliff and Baker's Falls through cloud forest." },
      { name: "Knuckles Range", description: "Multi-day treks through pristine wilderness and remote villages." }
    ],
    highlights: ["Sunrise at Adam's Peak", "World's End viewpoint", "Tea plantation walks", "Waterfall discoveries", "Wildlife spotting"],
    bestTime: "January - April (Adam's Peak season) | Year-round (other trails)",
    duration: "3 hours to multi-day treks",
    difficulty: "Easy to Challenging",
    groupSize: "Solo, couples, or guided groups",
    whatsIncluded: [
      "Experienced local guides",
      "Trail permits and entrance fees",
      "Packed breakfast/lunch",
      "First aid kit",
      "Transport to trailheads"
    ],
    tips: [
      "Start Adam's Peak climb at 2am for sunrise",
      "Bring warm layers - highlands can be cold",
      "Wear sturdy hiking shoes with grip",
      "Carry plenty of water and snacks",
      "Hire a guide for remote trails"
    ]
  },
  "wildlife-safari": {
    title: "Wildlife Safari",
    tagline: "Track leopards and elephants in their natural kingdom",
    image: safariImg,
    description: [
      "Sri Lanka boasts the highest density of leopards in the world, making it one of the best places on Earth to spot these elusive big cats. Yala National Park is the crown jewel, but the island offers numerous wildlife sanctuaries each with unique experiences.",
      "Beyond leopards, Sri Lanka's national parks are home to Asian elephants, sloth bears, sambar deer, crocodiles, and over 400 bird species. The diverse ecosystems range from dry zone forests to wetlands and coastal lagoons.",
      "Safari experiences here are intimate and personal, with experienced trackers who know every corner of the parks and can predict animal movements based on years of observation."
    ],
    locations: [
      { name: "Yala National Park", description: "Highest leopard density in the world. Also home to elephants, bears, and diverse birdlife." },
      { name: "Udawalawe", description: "Best for elephant sightings - herds of 50+ are common. Visit the Elephant Transit Home." },
      { name: "Wilpattu", description: "Largest national park with scenic lakes (villus). Less crowded, excellent leopard sightings." },
      { name: "Minneriya", description: "Famous for 'The Gathering' - up to 300 elephants congregate August-September." }
    ],
    highlights: ["Leopard tracking", "Elephant herds", "Bird watching", "Sunrise safaris", "Expert naturalists"],
    bestTime: "February - July (dry season for best wildlife viewing)",
    duration: "Half-day (3-4 hours) or full-day safaris",
    difficulty: "Easy (jeep safari)",
    groupSize: "Private jeep (up to 6 passengers)",
    whatsIncluded: [
      "4x4 safari jeep with expert driver",
      "Professional naturalist guide",
      "National park entrance fees",
      "Refreshments and snacks",
      "Binoculars available"
    ],
    tips: [
      "Book the first morning slot (6am) for best sightings",
      "Wear neutral colors (khaki, olive, brown)",
      "Bring a good zoom camera or binoculars",
      "Be patient - wildlife spotting takes time",
      "Stay quiet and respect animal space"
    ]
  },
  "cultural-experiences": {
    title: "Cultural Experiences",
    tagline: "Journey through 2,500 years of living history",
    image: cultureImg,
    description: [
      "Sri Lanka's cultural heritage spans over 2,500 years, with ancient cities, sacred temples, and living traditions that continue to thrive today. The Cultural Triangle, home to eight UNESCO World Heritage sites, offers a journey through time.",
      "From the ancient rock fortress of Sigiriya to the sacred city of Kandy, every destination tells stories of powerful kings, devoted monks, and skilled artisans. The island's Buddhist heritage is particularly profound, with temples and dagobas that have been places of worship for millennia.",
      "Cultural experiences extend beyond monuments to include traditional dance performances, craft villages, spice gardens, and the warm hospitality of Sri Lankan homes where visitors are always welcome."
    ],
    locations: [
      { name: "Kandy", description: "Sacred city with the Temple of the Tooth Relic. Watch traditional Kandyan dance performances." },
      { name: "Anuradhapura", description: "Ancient capital with massive dagobas and the sacred Bodhi Tree, grown from a cutting 2,300 years ago." },
      { name: "Polonnaruwa", description: "Medieval capital with impressive stone Buddha statues and the famous Gal Vihara." },
      { name: "Galle", description: "Colonial fort city with Dutch architecture, boutique shops, and stunning rampart walks." }
    ],
    highlights: ["UNESCO heritage sites", "Temple ceremonies", "Traditional dance", "Colonial history", "Local crafts"],
    bestTime: "Year-round (cultural sites accessible anytime)",
    duration: "Half-day to multi-day cultural tours",
    difficulty: "Easy to Moderate (some climbing at Sigiriya)",
    groupSize: "Private or group tours available",
    whatsIncluded: [
      "Licensed cultural guide",
      "All entrance fees",
      "Air-conditioned transport",
      "Traditional lunch experience",
      "Temple-appropriate attire if needed"
    ],
    tips: [
      "Dress modestly for temples (cover shoulders and knees)",
      "Remove shoes before entering sacred areas",
      "Ask permission before photographing monks",
      "Climb Sigiriya early to avoid heat",
      "Stay for evening puja ceremonies at temples"
    ]
  },
  "beach-relaxation": {
    title: "Beach & Relaxation",
    tagline: "Unwind on pristine shores under swaying palms",
    image: beachImg,
    description: [
      "Sri Lanka is blessed with over 1,600 kilometers of coastline, offering some of the most beautiful and unspoiled beaches in Asia. From the golden sands of the south coast to the secluded coves of the east, there's a perfect beach for every traveler.",
      "Beyond just sunbathing, Sri Lanka's beach destinations offer Ayurvedic spa treatments, yoga retreats, and wellness experiences that have been practiced on the island for thousands of years. The combination of sea, sun, and ancient healing creates the ultimate relaxation experience.",
      "Whether you seek a lively beach scene with restaurants and nightlife or a remote stretch of sand with just the sound of waves, Sri Lanka's diverse coastline delivers paradise on every level."
    ],
    locations: [
      { name: "Unawatuna", description: "Crescent-shaped bay with calm waters, beachfront cafes, and excellent snorkeling." },
      { name: "Tangalle", description: "Secluded beaches with luxury resorts and traditional fishing villages nearby." },
      { name: "Nilaveli", description: "Pristine white sand beach near Trincomalee, perfect for diving at Pigeon Island." },
      { name: "Bentota", description: "Water sports hub with river safaris, turtle hatcheries, and upscale resorts." }
    ],
    highlights: ["Pristine beaches", "Ayurvedic spas", "Yoga retreats", "Sunset views", "Fresh seafood"],
    bestTime: "November - April (South/West) | May - September (East)",
    duration: "Day trips to extended beach stays",
    difficulty: "Easy (pure relaxation!)",
    groupSize: "Solo travelers to families",
    whatsIncluded: [
      "Beachfront accommodation options",
      "Ayurvedic treatment sessions",
      "Yoga and meditation classes",
      "Fresh coconut water on the beach",
      "Sunset cruise experiences"
    ],
    tips: [
      "Check which coast is in season before booking",
      "Book beachfront properties in advance during peak season",
      "Try a traditional Ayurvedic massage",
      "Sample the fresh seafood at beach shacks",
      "Watch for sea turtles nesting (November-April)"
    ]
  }
};

const ActivityDetail = () => {
  const { slug } = useParams();
  const activity = slug ? activitiesData[slug] : null;

  if (!activity) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Activity Not Found</h1>
          <Link to="/things-to-do">
            <Button>Back to Things To Do</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover text-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>



      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <div className="space-y-12 sm:space-y-16">
              
              {/* Back Button */}
              <div className="mb-8">
                <Link to="/things-to-do">
                  <Button variant="outline" className="gap-2 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Things To Do
                  </Button>
                </Link>
              </div>

              {/* Activity Header Title (Moved from Hero) */}
              <div className="mb-0 sm:mb-2">
                <div className="flex flex-col gap-2">
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                    <span className="text-primary">{activity.title.split(' ')[0]}</span>{' '}
                    <span>{activity.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  About This Experience
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    {activity.description.map((paragraph, index) => (
                      <p key={index} className="text-sm sm:text-base md:text-[17px] text-foreground/80 font-medium leading-[1.8] text-justify sm:text-left">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Experience Highlights
                  </h2>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {activity.locations.map((location, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}>
                      {/* Image Side */}
                      <div className="md:w-1/2 relative rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-sm">
                        <img src={activity.image} alt={location.name} className="w-full aspect-video sm:aspect-[16/10] object-cover" />
                        <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-md">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="md:w-1/2 bg-card rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 border border-border/30">
                        <div className="flex items-start sm:items-center gap-3 mb-4">
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                          </div>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                            {location.name}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {location.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Insider Tips
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                  <ul className="space-y-2.5 sm:space-y-3">
                    {activity.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-foreground/80 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                        <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ActivityDetail;
