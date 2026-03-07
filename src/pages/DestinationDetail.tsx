import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  Thermometer, 
  Check,
  Star,
  Camera,
  Utensils,
  Bed
} from "lucide-react";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import galleImg from "@/assets/galle.jpg";
import kandyImg from "@/assets/kandy.jpg";
import yalaImg from "@/assets/yala.jpg";
import mirissaImg from "@/assets/mirissa.jpg";

const destinationsData: Record<string, {
  name: string;
  tagline: string;
  province: string;
  image: string;
  description: string[];
  highlights: string[];
  thingsToDo: { title: string; description: string }[];
  bestTime: string;
  idealDuration: string;
  weather: string;
  gettingThere: string;
  localCuisine: string[];
  accommodations: string[];
  nearbyAttractions: { name: string; distance: string }[];
}> = {
  "sigiriya": {
    name: "Sigiriya",
    tagline: "The ancient rock fortress rising from the jungle",
    province: "Central Province",
    image: sigiriyaImg,
    description: [
      "Sigiriya, also known as Lion Rock, is a UNESCO World Heritage site and one of the most iconic landmarks in Sri Lanka. This ancient rock fortress rises 200 meters above the surrounding jungle, offering breathtaking views and a fascinating glimpse into the island's royal history.",
      "Built in the 5th century by King Kashyapa, the fortress features remarkable engineering including an advanced hydraulic system, beautiful frescoes of celestial maidens, and the famous Lion's Paws gate. The climb to the summit is rewarded with panoramic views stretching to the horizon.",
      "Beyond the rock itself, the surrounding area includes beautifully landscaped water gardens, boulder gardens, and terraced gardens that showcase the sophisticated urban planning of ancient Sri Lanka."
    ],
    highlights: ["Lion Rock Fortress", "Ancient Frescoes", "Water Gardens", "Mirror Wall", "Summit Panorama"],
    thingsToDo: [
      { title: "Climb Lion Rock", description: "Ascend 1,200 steps to the summit for incredible views and ancient ruins." },
      { title: "View the Frescoes", description: "Admire the 1,500-year-old paintings of celestial maidens in a sheltered gallery." },
      { title: "Explore Water Gardens", description: "Walk through the ancient royal pleasure gardens with fountains and pools." },
      { title: "Sunrise Hot Air Balloon", description: "Float above the fortress at dawn for a magical aerial perspective." },
      { title: "Visit Pidurangala Rock", description: "Climb the neighboring rock for the best views of Sigiriya at sunrise." }
    ],
    bestTime: "January to April (dry season)",
    idealDuration: "1-2 days",
    weather: "Tropical, hot and humid. Cooler mornings recommended for climbing.",
    gettingThere: "3.5 hours from Colombo by car. Nearest railway station is Habarana (30 min away).",
    localCuisine: ["Rice and curry", "Kottu roti", "Wood apple juice", "Buffalo curd with treacle"],
    accommodations: ["Heritance Kandalama", "Aliya Resort", "Water Garden Sigiriya", "Vil Uyana"],
    nearbyAttractions: [
      { name: "Dambulla Cave Temple", distance: "17 km" },
      { name: "Polonnaruwa", distance: "60 km" },
      { name: "Minneriya National Park", distance: "25 km" },
      { name: "Pidurangala Rock", distance: "1 km" }
    ]
  },
  "ella": {
    name: "Ella",
    tagline: "Misty mountains and rolling tea plantations",
    province: "Uva Province",
    image: ellaImg,
    description: [
      "Ella is a small town nestled in the heart of Sri Lanka's hill country, famous for its stunning natural beauty and laid-back atmosphere. Surrounded by tea plantations, waterfalls, and misty mountains, it's a paradise for hikers and nature lovers.",
      "The town serves as a base for some of Sri Lanka's most scenic hikes, including the climb to Ella Rock and Little Adam's Peak. The famous Nine Arch Bridge, a masterpiece of colonial-era engineering, is just a short walk from town.",
      "Ella's charm lies in its perfect combination of adventure and relaxation. Spend your mornings hiking through tea estates, afternoons exploring waterfalls, and evenings enjoying the town's excellent cafes and restaurants."
    ],
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Plantations", "Ravana Falls", "Scenic Train Ride"],
    thingsToDo: [
      { title: "Hike Little Adam's Peak", description: "Easy 45-minute climb with panoramic views of Ella Gap and surrounding hills." },
      { title: "Visit Nine Arch Bridge", description: "Watch trains cross this iconic colonial bridge, especially beautiful at sunrise." },
      { title: "Trek to Ella Rock", description: "3-hour challenging hike through tea estates with rewarding summit views." },
      { title: "Take the Scenic Train", description: "Experience one of the world's most beautiful train journeys to/from Kandy." },
      { title: "Tour a Tea Factory", description: "Learn how Ceylon tea is processed and enjoy fresh tastings." }
    ],
    bestTime: "January to March (driest months)",
    idealDuration: "2-3 days",
    weather: "Cool and pleasant year-round. Expect some mist and occasional rain.",
    gettingThere: "6 hours from Colombo by car, or take the scenic train from Kandy (6-7 hours).",
    localCuisine: ["Fresh tea estate cuisine", "Roti with curry", "Fruit shakes", "Wood-fired pizza"],
    accommodations: ["98 Acres Resort", "Ella Jungle Resort", "Zion View", "The Secret Ella"],
    nearbyAttractions: [
      { name: "Ravana Falls", distance: "6 km" },
      { name: "Diyaluma Falls", distance: "30 km" },
      { name: "Lipton's Seat", distance: "25 km" },
      { name: "Udawalawe National Park", distance: "75 km" }
    ]
  },
  "galle": {
    name: "Galle",
    tagline: "Colonial charm meets tropical paradise",
    province: "Southern Province",
    image: galleImg,
    description: [
      "Galle Fort is a UNESCO World Heritage site and one of the best-preserved colonial fortifications in Asia. Built by the Portuguese in the 16th century and extensively fortified by the Dutch, the fort is a living museum of European colonial architecture in a tropical setting.",
      "Within the fort's ancient walls, you'll find charming cobblestone streets lined with boutique hotels, art galleries, antique shops, and excellent restaurants. The ramparts offer stunning views of the Indian Ocean and are perfect for sunset strolls.",
      "Beyond the fort, Galle serves as a gateway to Sri Lanka's beautiful southern beaches. The town maintains a wonderful blend of history, culture, and modern tourism that makes it one of the island's most beloved destinations."
    ],
    highlights: ["Galle Fort", "Dutch Reformed Church", "Maritime Museum", "Lighthouse", "Rampart Walks"],
    thingsToDo: [
      { title: "Walk the Fort Ramparts", description: "Stroll along the ancient walls at sunset for spectacular ocean views." },
      { title: "Explore the Old Town", description: "Wander through cobblestone streets full of boutiques, cafes, and galleries." },
      { title: "Visit the Lighthouse", description: "See the iconic white lighthouse at the fort's southeastern tip." },
      { title: "Maritime Museum", description: "Learn about Galle's rich maritime history and Dutch colonial period." },
      { title: "Day Trip to Beaches", description: "Visit nearby Unawatuna or Jungle Beach for swimming and snorkeling." }
    ],
    bestTime: "December to April (dry season)",
    idealDuration: "2-3 days",
    weather: "Tropical and humid. Monsoon from May to October.",
    gettingThere: "2 hours from Colombo via the Southern Expressway. Regular trains available.",
    localCuisine: ["Fresh seafood", "Hoppers", "Lamprais", "Dutch-influenced desserts"],
    accommodations: ["Amangalla", "Fort Bazaar", "The Fort Printers", "Jetwing Lighthouse"],
    nearbyAttractions: [
      { name: "Unawatuna Beach", distance: "5 km" },
      { name: "Japanese Peace Pagoda", distance: "4 km" },
      { name: "Sea Turtle Hatchery", distance: "12 km" },
      { name: "Mirissa", distance: "35 km" }
    ]
  },
  "kandy": {
    name: "Kandy",
    tagline: "Sri Lanka's sacred cultural capital",
    province: "Central Province",
    image: kandyImg,
    description: [
      "Kandy is the cultural heart of Sri Lanka and the last capital of the ancient kings' era. This UNESCO World Heritage city is home to the sacred Temple of the Tooth Relic, one of Buddhism's most important pilgrimage sites.",
      "Set among lush green hills around a picturesque lake, Kandy offers a perfect blend of natural beauty, cultural heritage, and colonial architecture. The city's vibrant markets, traditional crafts, and warm hospitality make it a must-visit destination.",
      "Beyond its religious significance, Kandy is famous for its traditional dance performances, botanical gardens, and proximity to tea country. The annual Esala Perahera festival transforms the city into a spectacular celebration of lights, dance, and elephants."
    ],
    highlights: ["Temple of the Tooth", "Kandy Lake", "Peradeniya Gardens", "Kandyan Dance", "Tea Estates"],
    thingsToDo: [
      { title: "Temple of the Tooth", description: "Visit Sri Lanka's most sacred Buddhist site housing Buddha's tooth relic." },
      { title: "Evening Puja Ceremony", description: "Witness the atmospheric daily ritual at the temple at 6:30pm." },
      { title: "Peradeniya Botanical Gardens", description: "Explore 147 acres of stunning tropical gardens and rare orchids." },
      { title: "Kandyan Dance Show", description: "Experience traditional dance and fire-walking performances." },
      { title: "Walk Around Kandy Lake", description: "Enjoy a peaceful stroll around the scenic lake at sunset." }
    ],
    bestTime: "January to April (avoid monsoon season)",
    idealDuration: "2-3 days",
    weather: "Cooler than lowlands. Expect afternoon showers, especially March-May.",
    gettingThere: "3 hours from Colombo by car. Scenic train journey available (3.5 hours).",
    localCuisine: ["Kandy rice and curry", "Milk rice", "Kavum sweets", "Ceylon tea"],
    accommodations: ["Earl's Regency", "Kandy House", "Kings Pavilion", "Mahaweli Reach"],
    nearbyAttractions: [
      { name: "Pinnawala Elephant Orphanage", distance: "40 km" },
      { name: "Nuwara Eliya", distance: "77 km" },
      { name: "Knuckles Mountain Range", distance: "35 km" },
      { name: "Hanthana Mountain", distance: "8 km" }
    ]
  },
  "yala-national-park": {
    name: "Yala National Park",
    tagline: "Where leopards roam in the wild",
    province: "Southern Province",
    image: yalaImg,
    description: [
      "Yala National Park is Sri Lanka's most visited wildlife destination and home to the world's highest density of leopards. This vast wilderness encompasses diverse ecosystems including dry monsoon forests, grasslands, and coastal lagoons.",
      "Beyond leopards, Yala supports impressive populations of Asian elephants, sloth bears, crocodiles, and over 200 bird species. The park's varied landscapes, from ancient ruins to pristine beaches, add to its unique appeal.",
      "Safari experiences in Yala are thrilling and intimate, with experienced trackers who know the movements of individual leopards. Dawn and dusk safaris offer the best chances for wildlife encounters in golden light."
    ],
    highlights: ["Leopard Sightings", "Elephant Herds", "Sloth Bears", "Bird Watching", "Ancient Ruins"],
    thingsToDo: [
      { title: "Morning Leopard Safari", description: "Start at 5:30am for the best chances of leopard sightings." },
      { title: "Evening Game Drive", description: "Watch elephants gather at waterholes during golden hour." },
      { title: "Bird Watching", description: "Spot painted storks, peacocks, and rare species in the lagoons." },
      { title: "Full Day Safari", description: "Deep penetration into the park for comprehensive wildlife viewing." },
      { title: "Visit Sithulpawwa", description: "Ancient Buddhist monastery within the park dating back 2,200 years." }
    ],
    bestTime: "February to July (dry season, animals near water)",
    idealDuration: "2 nights / 3 days",
    weather: "Hot and dry. Early mornings and evenings are cooler.",
    gettingThere: "5 hours from Colombo. Nearest town is Tissamaharama (30 min from park gate).",
    localCuisine: ["Safari-style picnic breakfasts", "Fresh tropical fruits", "Rice packets", "King coconut"],
    accommodations: ["Cinnamon Wild", "Chena Huts", "Leopard Trails", "Wild Coast Tented Lodge"],
    nearbyAttractions: [
      { name: "Tissamaharama", distance: "20 km" },
      { name: "Kataragama Temple", distance: "25 km" },
      { name: "Kirinda Beach", distance: "15 km" },
      { name: "Bundala National Park", distance: "50 km" }
    ]
  },
  "mirissa": {
    name: "Mirissa",
    tagline: "Golden beaches and gentle giants of the sea",
    province: "Southern Province",
    image: mirissaImg,
    description: [
      "Mirissa is a tropical paradise on Sri Lanka's southern coast, famous for its crescent-shaped beach, whale watching opportunities, and laid-back surf culture. This small fishing village has transformed into one of the island's most popular beach destinations.",
      "From November to April, Mirissa becomes the whale watching capital of Sri Lanka, with blue whales and sperm whales regularly spotted just a few kilometers offshore. The sight of the world's largest animal in its natural habitat is unforgettable.",
      "Beyond marine life, Mirissa offers perfect conditions for swimming, surfing, and simply relaxing on pristine sands. The town's excellent beachfront restaurants serve fresh seafood as the sun sets over the Indian Ocean."
    ],
    highlights: ["Whale Watching", "Pristine Beach", "Parrot Rock", "Surfing", "Seafood"],
    thingsToDo: [
      { title: "Whale Watching", description: "Early morning boat trips to spot blue whales, sperm whales, and dolphins." },
      { title: "Beach Day", description: "Swim, sunbathe, and relax on the beautiful crescent beach." },
      { title: "Climb Parrot Rock", description: "Short climb for panoramic views of the bay, especially at sunset." },
      { title: "Learn to Surf", description: "Take lessons on the beginner-friendly waves at the east end." },
      { title: "Seafood Dinner", description: "Feast on fresh catch at beachfront restaurants under the stars." }
    ],
    bestTime: "November to April (calm seas and whale season)",
    idealDuration: "3-5 days",
    weather: "Tropical beach weather. Monsoon from May to October.",
    gettingThere: "2.5 hours from Colombo via Southern Expressway. Near Weligama station.",
    localCuisine: ["Grilled fish", "Prawns and lobster", "Kottu", "Fresh fruit smoothies"],
    accommodations: ["Paradise Beach Club", "Lantern Boutique", "The Kingfisher", "Mandara Resort"],
    nearbyAttractions: [
      { name: "Weligama Bay", distance: "5 km" },
      { name: "Galle Fort", distance: "35 km" },
      { name: "Coconut Tree Hill", distance: "3 km" },
      { name: "Secret Beach", distance: "8 km" }
    ]
  }
};

const DestinationDetail = () => {
  const { slug } = useParams();
  const destination = slug ? destinationsData[slug] : null;

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Destination Not Found</h1>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
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
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Destinations
          </Link>
          <div className="flex items-center justify-center gap-2 text-white/80 mb-4">
            <MapPin className="h-5 w-5" />
            <span>{destination.province}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {destination.name}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{destination.tagline}</p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Ideal Duration</span>
              <span className="text-sm font-medium text-foreground">{destination.idealDuration}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Best Time</span>
              <span className="text-sm font-medium text-foreground">{destination.bestTime}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Thermometer className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Weather</span>
              <span className="text-sm font-medium text-foreground line-clamp-1">{destination.weather.split('.')[0]}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Highlights</span>
              <span className="text-sm font-medium text-foreground">{destination.highlights.length}+ attractions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  About {destination.name}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {destination.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                      <Star className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Things to Do */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Things To Do
                </h2>
                <div className="space-y-4">
                  {destination.thingsToDo.map((activity, index) => (
                    <div key={index} className="bg-card p-6 rounded-xl border border-border">
                      <h3 className="font-semibold text-foreground text-lg mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Attractions */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Nearby Attractions
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {destination.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center justify-between bg-card p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{attraction.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{attraction.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Getting There */}
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Getting There</h3>
                  <p className="text-muted-foreground text-sm">{destination.gettingThere}</p>
                </div>

                {/* Local Cuisine */}
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Utensils className="h-5 w-5 text-accent" />
                    <h3 className="font-display text-xl font-bold text-foreground">Local Cuisine</h3>
                  </div>
                  <ul className="space-y-2">
                    {destination.localCuisine.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-4 w-4 text-palm" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Where to Stay */}
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Bed className="h-5 w-5 text-accent" />
                    <h3 className="font-display text-xl font-bold text-foreground">Where to Stay</h3>
                  </div>
                  <ul className="space-y-2">
                    {destination.accommodations.map((hotel, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-4 w-4 text-palm" />
                        <span>{hotel}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary/10 rounded-xl p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Plan Your Visit</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Let us create a custom itinerary including {destination.name} and nearby attractions.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    Get Custom Itinerary
                  </Button>
                  <Button variant="outline" className="w-full mt-3 border-primary text-primary">
                    View Tour Packages
                  </Button>
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

export default DestinationDetail;
