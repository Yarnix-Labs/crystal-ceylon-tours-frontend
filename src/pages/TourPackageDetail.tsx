import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Clock, 
  Users, 
  Tag, 
  ArrowRight, 
  Check, 
  X, 
  Phone, 
  Mail,
  Utensils,
  ChevronLeft,
  MapPin,
  CheckCircle,
  Car,
  Shield,
  Compass,
  Camera,
  Mountain,
  TreePine
} from "lucide-react";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import yalaImg from "@/assets/yala.jpg";
import galleImg from "@/assets/galle.jpg";
import kandyImg from "@/assets/kandy.jpg";
import mirissaImg from "@/assets/mirissa.jpg";

// Extended package data with full details
const packagesData = {
  "cultural-triangle-explorer": {
    id: "TOUR-3034",
    title: "Cultural Triangle Explorer",
    type: "Heritage",
    duration: "7 Days / 6 Nights",
    nights: 6,
    days: 7,
    groupSize: "2-8 People",
    minPeople: "2 Adults",
    price: 899,
    image: sigiriyaImg,
    description: [
      "Step back in time as you explore Sri Lanka's cultural heartland. This journey takes you through the \"Cultural Triangle,\" home to ancient kingdoms, sacred temples, and architectural marvels that date back over two millennia.",
      "Begin in Anuradhapura, the first capital of Sri Lanka, where you'll witness majestic stupas and the sacred Bodhi Tree. Continue to Polonnaruwa to marvel at the well-preserved ruins of a medieval empire.",
      "The highlight of the tour is the ascent of Sigiriya Lion Rock, a breathtaking fortress built atop a massive monolith. Nearby, the Dambulla Cave Temples offer a spiritual retreat adorned with exquisite Buddhist art.",
      "Conclude your journey in Kandy, the last royal capital, nestled in the misty hills. Visit the Temple of the Sacred Tooth Relic and experience the vibrant cultural traditions that continue to thrive in this historic city."
    ],
    includes: [
      "Airport pickup and drop-off",
      "Professional English-speaking guide",
      "Accommodation in 4-star heritage hotels",
      "Daily breakfast and dinner",
      "All entrance fees to UNESCO sites",
      "Private air-conditioned transportation"
    ],
    excludes: [
      "International flights and visa fees",
      "Lunch and beverages",
      "Gratuities for guides and drivers",
      "Personal expenses and insurance"
    ],
    itineraryBrief: [
      { day: 1, route: "Colombo → Anuradhapura", highlight: "Safe & professional driver" },
      { day: 2, route: "Polonnaruwa Ancient City", highlight: "Safe & professional driver" },
      { day: 3, route: "Sigiriya → Dambulla", highlight: "Safe & professional driver" },
      { day: 4, route: "Kandy → Colombo", highlight: "Safe & professional driver" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "Colombo → Anuradhapura",
        description: "Begin your cultural journey from Colombo to the ancient city of Anuradhapura. Explore the sacred Bodhi Tree, one of the oldest historically documented trees in the world, and discover the ancient stupas and monasteries that mark this UNESCO World Heritage site.",
        image: sigiriyaImg,
        destinations: ["Anuradhapura"],
        thingsToDo: ["Visit the Sacred Bodhi Tree", "Explore ancient stupas and monasteries", "Discover Ruwanwelisaya Stupa"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 2,
        title: "Polonnaruwa Ancient City",
        description: "Visit the medieval capital of Polonnaruwa, featuring impressive ruins including the Royal Palace, the Gal Vihara with its stunning rock-cut Buddha statues, and the ancient irrigation systems that showcase the engineering brilliance of ancient Sri Lanka.",
        image: kandyImg,
        destinations: ["Polonnaruwa"],
        thingsToDo: ["Explore Royal Palace ruins", "See Gal Vihara rock-cut Buddhas", "Visit ancient irrigation systems"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 3,
        title: "Sigiriya → Dambulla",
        description: "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site featuring ancient frescoes and breathtaking views. Later, explore the Dambulla Cave Temple, home to over 150 Buddha statues and intricate murals dating back to the 1st century BC.",
        image: sigiriyaImg,
        destinations: ["Sigiriya", "Dambulla"],
        thingsToDo: ["Climb Sigiriya Rock Fortress", "View ancient frescoes", "Explore Dambulla Cave Temple"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 4,
        title: "Kandy → Colombo",
        description: "Journey to Kandy, the cultural capital of Sri Lanka. Visit the Temple of the Sacred Tooth Relic, explore the Royal Botanical Gardens, and enjoy a traditional Kandyan dance performance before returning to Colombo.",
        image: kandyImg,
        destinations: ["Kandy", "Colombo"],
        thingsToDo: ["Visit Temple of the Tooth", "Explore Royal Botanical Gardens", "Watch Kandyan dance performance"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
    ]
  },
  "hill-country-adventure": {
    id: "TOUR-3035",
    title: "Hill Country Adventure",
    type: "Adventure",
    duration: "5 Days / 4 Nights",
    nights: 4,
    days: 5,
    groupSize: "2-6 People",
    minPeople: "2 Adults",
    price: 649,
    image: ellaImg,
    description: [
      "Escape to the misty highlands of Sri Lanka, where rolling tea plantations, cascading waterfalls, and charming colonial towns create a landscape of stunning beauty.",
      "Your adventure begins with the famous train ride from Kandy to Ella, considered one of the most scenic rail journeys in the world. Wind through tunnels, over bridges, and past endless tea estates.",
      "In Ella, hike to Little Adam's Peak for panoramic views, visit the iconic Nine Arch Bridge, and explore local tea factories to learn about Ceylon tea production.",
      "Experience the cool mountain air of Nuwara Eliya, known as 'Little England' for its colonial architecture and manicured gardens."
    ],
    includes: [
      "Boutique hotel accommodations",
      "All transportation including scenic train ride",
      "Professional trekking guide",
      "Tea factory tour with tasting",
      "Daily breakfast",
      "All entrance fees"
    ],
    excludes: [
      "International flights and visa fees",
      "Lunch and dinner",
      "Gratuities",
      "Personal expenses and insurance"
    ],
    itineraryBrief: [
      { day: 1, route: "Colombo → Kandy", highlight: "Safe & professional driver" },
      { day: 2, route: "Kandy → Nuwara Eliya", highlight: "Safe & professional driver" },
      { day: 3, route: "Nuwara Eliya → Ella", highlight: "Safe & professional driver" },
      { day: 4, route: "Ella Exploration", highlight: "Safe & professional driver" },
      { day: 5, route: "Ella → Colombo", highlight: "Safe & professional driver" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "Colombo → Kandy",
        description: "Travel to Kandy, stopping at a spice garden and the Pinnawala Elephant Orphanage. Explore the Temple of the Sacred Tooth Relic and enjoy a cultural dance performance.",
        image: kandyImg,
        destinations: ["Kandy"],
        thingsToDo: ["Visit Pinnawala Elephant Orphanage", "Explore a spice garden", "Watch Kandyan dance performance"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 2,
        title: "Kandy → Nuwara Eliya",
        description: "Journey to Nuwara Eliya through tea country. Visit a tea factory, explore the colonial town, and enjoy the cool mountain climate.",
        image: ellaImg,
        destinations: ["Nuwara Eliya"],
        thingsToDo: ["Visit a tea factory", "Explore colonial town", "Enjoy mountain climate"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 3,
        title: "Nuwara Eliya → Ella",
        description: "Take the scenic train ride to Ella, passing through tunnels and over the famous Nine Arch Bridge. Settle into your mountain retreat.",
        image: ellaImg,
        destinations: ["Ella"],
        thingsToDo: ["Scenic train ride", "See the Nine Arch Bridge", "Explore Ella town"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 4,
        title: "Ella Exploration",
        description: "Hike to Little Adam's Peak at sunrise, visit the Nine Arch Bridge, and explore Ravana Falls. Enjoy local cuisine and relax.",
        image: ellaImg,
        destinations: ["Ella"],
        thingsToDo: ["Hike Little Adam's Peak", "Visit Nine Arch Bridge", "Explore Ravana Falls"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 5,
        title: "Ella → Colombo",
        description: "Return to Colombo with stops at scenic viewpoints. Transfer to the airport for your departure.",
        image: sigiriyaImg,
        destinations: ["Colombo"],
        thingsToDo: ["Scenic viewpoint stops", "Airport transfer"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
    ]
  },
  "wildlife-safari-experience": {
    id: "TOUR-3036",
    title: "Wildlife Safari Experience",
    type: "Wildlife",
    duration: "4 Days / 3 Nights",
    nights: 3,
    days: 4,
    groupSize: "2-10 People",
    minPeople: "2 Adults",
    price: 549,
    image: yalaImg,
    description: [
      "Embark on an unforgettable wildlife adventure in Sri Lanka's premier national parks, home to the world's highest density of leopards and diverse ecosystems.",
      "Yala National Park offers thrilling safari experiences with opportunities to spot leopards, elephants, sloth bears, and hundreds of bird species in their natural habitat.",
      "Experience dawn and dusk safaris when wildlife is most active, accompanied by expert trackers who know every corner of these magnificent reserves.",
      "Stay in eco-lodges that blend luxury with sustainability, offering an immersive experience in the heart of the wilderness."
    ],
    includes: [
      "Safari lodge accommodation",
      "Jeep safaris with expert tracker",
      "All national park entrance fees",
      "All meals at the lodge",
      "Airport transfers",
      "Bottled water during safaris"
    ],
    excludes: [
      "International flights and visa fees",
      "Alcoholic beverages",
      "Gratuities for guides and drivers",
      "Personal expenses and insurance"
    ],
    itineraryBrief: [
      { day: 1, route: "Colombo → Yala", highlight: "Safe & professional driver" },
      { day: 2, route: "Yala Safari", highlight: "Safe & professional driver" },
      { day: 3, route: "Yala → Udawalawe", highlight: "Safe & professional driver" },
      { day: 4, route: "Udawalawe → Colombo", highlight: "Safe & professional driver" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "Colombo → Yala",
        description: "Travel to Yala National Park with stops at Galle Fort. Check into your safari lodge and enjoy an evening game drive.",
        image: yalaImg,
        destinations: ["Yala"],
        thingsToDo: ["Visit Galle Fort en route", "Evening game drive", "Check into safari lodge"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 2,
        title: "Yala Safari",
        description: "Full day of safari adventures with dawn and dusk game drives. High chances of leopard sightings, elephants, and diverse birdlife.",
        image: yalaImg,
        destinations: ["Yala"],
        thingsToDo: ["Dawn game drive", "Leopard & elephant spotting", "Dusk game drive"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 3,
        title: "Yala → Udawalawe",
        description: "Morning safari before traveling to Udawalawe. Visit the Elephant Transit Home and enjoy an evening safari.",
        image: yalaImg,
        destinations: ["Udawalawe"],
        thingsToDo: ["Morning safari", "Visit Elephant Transit Home", "Evening safari"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 4,
        title: "Udawalawe → Colombo",
        description: "Early morning safari for elephant sightings before returning to Colombo for your departure.",
        image: yalaImg,
        destinations: ["Colombo"],
        thingsToDo: ["Early morning safari", "Airport transfer"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
    ]
  },
  "southern-coast-discovery": {
    id: "TOUR-3037",
    title: "Southern Coast Discovery",
    type: "Beach & Culture",
    duration: "6 Days / 5 Nights",
    nights: 5,
    days: 6,
    groupSize: "2-8 People",
    minPeople: "2 Adults",
    price: 749,
    image: galleImg,
    description: [
      "Discover the enchanting southern coast of Sri Lanka, where pristine beaches meet colonial heritage and vibrant marine life.",
      "Explore the UNESCO-listed Galle Fort, a 16th-century Portuguese fortress with charming boutiques, cafes, and stunning ocean views.",
      "Experience the magic of whale watching in Mirissa, one of the best places in the world to see blue whales and dolphins in their natural habitat.",
      "Relax on golden beaches, watch traditional stilt fishermen, and savor fresh seafood as the sun sets over the Indian Ocean."
    ],
    includes: [
      "Beach resort accommodation",
      "Whale watching boat tour",
      "Private driver and vehicle",
      "Daily breakfast",
      "Galle Fort walking tour",
      "Airport transfers"
    ],
    excludes: [
      "International flights and visa fees",
      "Lunch and dinner",
      "Water sports activities",
      "Personal expenses and insurance"
    ],
    itineraryBrief: [
      { day: 1, route: "Colombo → Galle", highlight: "Safe & professional driver" },
      { day: 2, route: "Galle Exploration", highlight: "Safe & professional driver" },
      { day: 3, route: "Galle → Mirissa", highlight: "Safe & professional driver" },
      { day: 4, route: "Whale Watching", highlight: "Safe & professional driver" },
      { day: 5, route: "Beach Day", highlight: "Safe & professional driver" },
      { day: 6, route: "Mirissa → Colombo", highlight: "Safe & professional driver" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "Colombo → Galle",
        description: "Scenic coastal drive to Galle. Visit a sea turtle hatchery and explore the iconic Galle Fort at sunset.",
        image: galleImg,
        destinations: ["Galle"],
        thingsToDo: ["Visit sea turtle hatchery", "Explore Galle Fort at sunset", "Coastal scenic drive"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 2,
        title: "Galle Exploration",
        description: "Full day exploring Galle Fort, its museums, boutiques, and cafes. Visit the Japanese Peace Pagoda and enjoy beach time.",
        image: galleImg,
        destinations: ["Galle"],
        thingsToDo: ["Explore Galle Fort museums", "Visit Japanese Peace Pagoda", "Beach time"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 3,
        title: "Galle → Mirissa",
        description: "Travel to Mirissa with stops at stilt fishermen and Koggala Lake. Settle into your beach resort.",
        image: mirissaImg,
        destinations: ["Mirissa"],
        thingsToDo: ["Watch stilt fishermen", "Visit Koggala Lake", "Beach resort check-in"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 4,
        title: "Whale Watching",
        description: "Early morning whale watching excursion to spot blue whales, sperm whales, and dolphins. Afternoon beach relaxation.",
        image: mirissaImg,
        destinations: ["Mirissa"],
        thingsToDo: ["Whale watching excursion", "Spot dolphins", "Beach relaxation"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 5,
        title: "Beach Day",
        description: "Free day to enjoy the beach, try surfing, or explore nearby Weligama. Farewell dinner at a seafood restaurant.",
        image: mirissaImg,
        destinations: ["Mirissa", "Weligama"],
        thingsToDo: ["Beach activities", "Try surfing", "Explore Weligama"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 6,
        title: "Mirissa → Colombo",
        description: "Leisurely morning before returning to Colombo for your departure.",
        image: galleImg,
        destinations: ["Colombo"],
        thingsToDo: ["Leisurely morning", "Airport transfer"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
    ]
  },
  "complete-sri-lanka-tour": {
    id: "TOUR-3038",
    title: "Complete Sri Lanka Tour",
    type: "Comprehensive",
    duration: "14 Days / 13 Nights",
    nights: 13,
    days: 14,
    groupSize: "2-6 People",
    minPeople: "2 Adults",
    price: 1899,
    image: kandyImg,
    description: [
      "The ultimate Sri Lanka experience covering every major highlight of this incredible island nation over two unforgettable weeks.",
      "From ancient temples to pristine beaches, misty mountains to wildlife-rich jungles, this comprehensive tour leaves no stone unturned.",
      "Experience the Cultural Triangle, the scenic hill country, thrilling wildlife safaris, and relaxing beach escapes all in one journey.",
      "Travel in comfort with luxury accommodations, private transport, and expert guides who bring Sri Lanka's rich history and culture to life."
    ],
    includes: [
      "Luxury hotel accommodation",
      "All transportation",
      "All meals included",
      "All entrance fees and activities",
      "Professional guide throughout",
      "Domestic flights where applicable"
    ],
    excludes: [
      "International flights and visa fees",
      "Alcoholic beverages",
      "Gratuities",
      "Personal expenses and insurance"
    ],
    itineraryBrief: [
      { day: 1, route: "Arrival → Negombo", highlight: "Safe & professional driver" },
      { day: 2, route: "Negombo → Anuradhapura", highlight: "Safe & professional driver" },
      { day: 3, route: "Polonnaruwa", highlight: "Safe & professional driver" },
      { day: 4, route: "Sigiriya → Dambulla", highlight: "Safe & professional driver" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "Arrival → Negombo",
        description: "Welcome to Sri Lanka! Transfer to your beach hotel in Negombo to relax after your flight.",
        image: mirissaImg,
        destinations: ["Negombo"],
        thingsToDo: ["Airport pickup", "Beach hotel relaxation", "Explore Negombo town"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 2,
        title: "Negombo → Anuradhapura",
        description: "Journey to the ancient city of Anuradhapura, exploring the sacred Bodhi Tree and ancient monasteries.",
        image: sigiriyaImg,
        destinations: ["Anuradhapura"],
        thingsToDo: ["Visit Sacred Bodhi Tree", "Explore ancient monasteries", "Discover Anuradhapura ruins"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 3,
        title: "Polonnaruwa",
        description: "Full day exploring the medieval capital of Polonnaruwa with its impressive ruins and Buddha statues.",
        image: kandyImg,
        destinations: ["Polonnaruwa"],
        thingsToDo: ["Explore medieval ruins", "See ancient Buddha statues", "Visit Royal Palace"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 4,
        title: "Sigiriya → Dambulla",
        description: "Climb Sigiriya Rock Fortress and explore the Dambulla Cave Temple, both UNESCO World Heritage sites.",
        image: sigiriyaImg,
        destinations: ["Sigiriya", "Dambulla"],
        thingsToDo: ["Climb Sigiriya Rock Fortress", "Explore Dambulla Cave Temple", "UNESCO Heritage sites"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
    ]
  },
  "tropical-beach-escape": {
    id: "TOUR-3039",
    title: "Tropical Beach Escape",
    type: "Beach & Wellness",
    duration: "5 Days / 4 Nights",
    nights: 4,
    days: 5,
    groupSize: "2-4 People",
    minPeople: "2 Adults",
    price: 599,
    image: mirissaImg,
    description: [
      "Unwind on Sri Lanka's most beautiful beaches with this rejuvenating coastal escape designed for relaxation and water adventures.",
      "Wake up to the sound of waves at Mirissa, a laid-back beach town famous for its golden sand and legendary sunsets.",
      "Try your hand at surfing in Weligama, swim with sea turtles, or simply lounge under swaying palm trees with a fresh king coconut.",
      "Pamper yourself with Ayurvedic spa treatments that have been practiced in Sri Lanka for over 3,000 years."
    ],
    includes: [
      "Beach villa accommodation",
      "Water sports activities",
      "Spa treatment included",
      "Daily breakfast",
      "Airport transfers",
      "Surfing lesson"
    ],
    excludes: [
      "International flights and visa fees",
      "Lunch and dinner",
      "Additional spa treatments",
      "Personal expenses and insurance"
    ],
    itineraryBrief: [
      { day: 1, route: "Colombo → Mirissa", highlight: "Safe & professional driver" },
      { day: 2, route: "Beach & Surfing", highlight: "Safe & professional driver" },
      { day: 3, route: "Whale Watching", highlight: "Safe & professional driver" },
      { day: 4, route: "Spa & Relaxation", highlight: "Safe & professional driver" },
      { day: 5, route: "Mirissa → Colombo", highlight: "Safe & professional driver" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "Colombo → Mirissa",
        description: "Scenic drive along the coast to Mirissa. Settle into your beachfront villa and enjoy sunset on the beach.",
        image: mirissaImg,
        destinations: ["Mirissa"],
        thingsToDo: ["Coastal scenic drive", "Beach villa check-in", "Sunset on the beach"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 2,
        title: "Beach & Surfing",
        description: "Morning surfing lesson in Weligama Bay. Afternoon free for beach activities or exploring the area.",
        image: mirissaImg,
        destinations: ["Mirissa", "Weligama"],
        thingsToDo: ["Surfing lesson in Weligama Bay", "Beach activities", "Area exploration"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 3,
        title: "Whale Watching",
        description: "Early morning whale watching expedition. Rest of the day for beach relaxation and snorkeling.",
        image: mirissaImg,
        destinations: ["Mirissa"],
        thingsToDo: ["Whale watching expedition", "Snorkeling", "Beach relaxation"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 4,
        title: "Spa & Relaxation",
        description: "Indulge in a traditional Ayurvedic spa treatment. Farewell dinner at a beachside restaurant.",
        image: mirissaImg,
        destinations: ["Mirissa"],
        thingsToDo: ["Ayurvedic spa treatment", "Beach relaxation", "Farewell dinner"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
      {
        day: 5,
        title: "Mirissa → Colombo",
        description: "Final beach morning before transferring to Colombo airport for your departure.",
        image: galleImg,
        destinations: ["Colombo"],
        thingsToDo: ["Final beach morning", "Airport transfer"],
        highlights: ["Safe & professional driver", "Quality, comfortable vehicle"]
      },
    ]
  }
};

const TourPackageDetail = () => {
  const { slug } = useParams();
  const { data: tour, isLoading, isError } = useTourPackageBySlug(slug || "");

  if (isError) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            We couldn't load the tour details. The package might have been moved or there's a temporary server issue.
          </p>
          <Link to="/tour-packages">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Tour Packages
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        {/* Loading Hero Skeleton */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 container mx-auto px-4 text-center space-y-4">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-12 w-2/3 mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-[300px] w-full" />
              <Skeleton className="h-[150px] w-full" />
            </div>
            <div className="lg:col-span-1">
              <Skeleton className="h-[500px] w-full sticky top-28" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Tour Package Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            The package you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/tour-packages">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Tour Packages
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.heroImage} 
            alt={tour.name}
            className="w-full h-full object-cover"
            src={packageData.image} 
            alt={packageData.title}
            className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out_forwards]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/tour-packages" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Tour Packages
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-primary">{tour.name.split(' ')[0]}</span>{' '}
            <span className="text-accent">{tour.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-lg sm:text-xl font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span>{tour.packageDuration || `${tour.totalDays} Days`}</span>
            </div>
            {tour.price > 0 && (
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            )}
            {tour.price > 0 && (
              <div className="text-primary font-bold">From ${tour.price}</div>
            )}
          </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="hsl(var(--muted) / 0.3)" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Details */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Itinerary In Brief */}
              {tour.days && tour.days.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="h-8 w-1.5 bg-primary rounded-full" />
                    Itinerary In Brief
                  </h2>
                  <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                    {tour.days.map((day, index) => (
                      <div 
                        key={day.id || index}
                        className={`flex items-center p-5 ${index !== tour.days.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/30 transition-colors`}
                      >
                        <div className="flex flex-col items-center justify-center min-w-[70px] text-center border-r border-border pr-5 mr-5">
                          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Day</span>
                          <span className="text-2xl font-bold text-accent">{day.dayNumber}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground uppercase tracking-wide text-sm sm:text-base">
                            {day.topic}
                          </h3>
                        </div>
                        <div className="text-right text-sm text-muted-foreground hidden sm:block">
                          <div className="font-medium text-foreground">{day.hotelName || day.location}</div>
                          {day.hotelLocation && <div className="text-xs">{day.hotelLocation}</div>}
                        </div>
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Itinerary In Brief */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Back Button */}
              <div className="mb-8">
                <Link to="/tour-packages">
                  <Button variant="outline" className="gap-2 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Tour Packages
                  </Button>
                </Link>
              </div>

              {/* Package Header Title (Moved from Hero) */}
              <div className="mb-10 sm:mb-12">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight">
                  <span className="text-primary">{packageData.title.split(' ')[0]}</span>{' '}
                  <span className="text-foreground">{packageData.title.split(' ').slice(1).join(' ')}</span>
                </h1>
              </div>

              {/* Itinerary In Brief */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Itinerary In Brief
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 overflow-hidden">
                  {packageData.itineraryBrief.map((day, index) => (
                    <div 
                      key={day.day}
                      className={`flex items-center p-3.5 sm:p-5 ${index !== packageData.itineraryBrief.length - 1 ? 'border-b border-border/50' : ''}`}
                    >
                      <span className="inline-flex items-center justify-center bg-accent/15 text-accent text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full mr-3 sm:mr-20 whitespace-nowrap">
                        Day {day.day}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground">
                          {day.route}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-muted-foreground hidden sm:flex">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="font-medium">{day.highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Package Description */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="h-8 w-1.5 bg-primary rounded-full" />
                  Experience Highlights
                </h2>
                <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
                  <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">
                    {tour.description.split('\n').map((paragraph, index) => (
                      <p key={index} className={paragraph.trim() ? "mb-4" : "mb-2"}>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Package Description
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    {packageData.description.map((paragraph, index) => (
                      <p key={index} className="text-sm sm:text-base md:text-[17px] text-foreground/80 font-medium leading-[1.8] text-justify sm:text-left">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {tour.extraDetails && (
                    <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/10">
                      <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Important Note
                      </h4>
                      <p className="text-sm text-muted-foreground italic">
                        {tour.extraDetails}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Includes / Excludes */}
              {( (tour.includes && tour.includes.length > 0) || (tour.excludes && tour.excludes.length > 0) ) && (
                <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Includes */}
                    {tour.includes && tour.includes.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-6 border-b border-palm/10 pb-3">
                          <div className="h-8 w-8 rounded-lg bg-palm/20 flex items-center justify-center">
                            <Check className="h-5 w-5 text-palm" />
                          </div>
                          <h3 className="font-display text-xl font-bold text-foreground">What's Included</h3>
                        </div>
                        <ul className="space-y-4">
                          {tour.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base group">
                              <div className="h-5 w-5 rounded-full border border-palm/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-palm/10 transition-colors">
                                <Check className="h-3 w-3 text-palm" />
                              </div>
                              <span className="group-hover:text-foreground transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Excludes */}
                    {tour.excludes && tour.excludes.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-6 border-b border-destructive/10 pb-3">
                          <div className="h-8 w-8 rounded-lg bg-destructive/20 flex items-center justify-center">
                            <X className="h-5 w-5 text-destructive" />
                          </div>
                          <h3 className="font-display text-xl font-bold text-foreground">Exclusions</h3>
                        </div>
                        <ul className="space-y-4">
                          {tour.excludes.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base group">
                              <div className="h-5 w-5 rounded-full border border-destructive/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-destructive/10 transition-colors">
                                <X className="h-3 w-3 text-destructive" />
                              </div>
                              <span className="group-hover:text-foreground transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
              <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Includes */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div className="h-6 w-6 rounded-full bg-palm/20 flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-palm" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground">Includes</h3>
                    </div>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {packageData.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-foreground/80 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-palm flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-destructive" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground">Excludes</h3>
                    </div>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {packageData.excludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-foreground/80 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Tour Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
                  <div className="p-6 bg-accent text-accent-foreground">
                    <h3 className="font-display text-xl font-bold">Plan Your Journey</h3>
                    <p className="text-accent-foreground/80 text-xs">Everything you need to know</p>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* Tour Ref */}
                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <Tag className="h-5 w-5 text-accent group-hover:text-inherit" />
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Tour Ref No:</div>
                        <div className="font-bold text-foreground">{tour.tourRefNumber}</div>
                      </div>
              <div className="sticky top-28">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Tour Details
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 space-y-4 sm:space-y-5">
                  {/* Tour Ref */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Tour Ref No:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{packageData.id}</div>
                    </div>
                  </div>

                  {/* Package Type */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Package Type:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{packageData.type}</div>
                    </div>

                    {/* Package Type */}
                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <ArrowRight className="h-5 w-5 text-accent group-hover:text-inherit" />
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Package Type:</div>
                        <div className="font-bold text-foreground">{tour.packageType}</div>
                      </div>
                  {/* Duration */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Package Duration:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{packageData.nights} Nights / {packageData.days} Days</div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <Clock className="h-5 w-5 text-accent group-hover:text-inherit" />
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Duration:</div>
                        <div className="font-bold text-foreground">{tour.packageDuration || `${tour.totalDays} Days`}</div>
                      </div>
                    </div>

                    {/* Min People */}
                    <div className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <Users className="h-5 w-5 text-accent group-hover:text-inherit" />
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Min Group size:</div>
                        <div className="font-bold text-foreground">{tour.minPeople} People</div>
                      </div>
                  {/* Min People */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Min No. of People:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{packageData.minPeople}</div>
                    </div>

                    <div className="border-t border-border pt-6 mt-6">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        Need help finding the perfect tour or want to customize this itinerary? We're here 24/7.
                      </p>
                      <div className="space-y-3">
                        <a 
                          href="tel:+94762866748" 
                          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium text-sm"
                        >
                          <Phone className="h-4 w-4 text-accent" />
                          <span>+94 76 2866 748</span>
                        </a>
                        <a 
                          href="mailto:hello@crystalceylon.com" 
                          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium text-sm"
                        >
                          <Mail className="h-4 w-4 text-accent" />
                          <span>hello@crystalceylon.com</span>
                        </a>
                      </div>
                  <div className="border-t border-border/50 pt-4 sm:pt-5 mt-4 sm:mt-5">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-normal leading-relaxed">
                      If you have any questions to ask or need help to decide which tour is best for you, we are always happy to help.
                    </p>
                    <div className="space-y-2.5 sm:space-y-3">
                      <a 
                        href="tel:+94762866748" 
                        className="flex items-center gap-2.5 sm:gap-3 text-foreground hover:text-primary transition-colors text-sm sm:text-base"
                      >
                        <Phone className="h-4 w-4 text-accent" />
                        <span className="font-medium">+94 76 2866 748</span>
                      </a>
                      <a 
                        href="mailto:hello@crystalceylon.com" 
                        className="flex items-center gap-2.5 sm:gap-3 text-foreground hover:text-primary transition-colors text-sm sm:text-base"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        <span className="font-medium">hello@crystalceylon.com</span>
                      </a>
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-border pt-6 mt-6">
                      <div className="text-center mb-6 py-4 bg-muted/30 rounded-lg">
                        <span className="text-xs text-muted-foreground uppercase font-bold">Starting from</span>
                        <div className="text-4xl font-black text-primary my-1">${tour.price}</div>
                        <span className="text-xs text-muted-foreground">per person (Adult)</span>
                      </div>
                      <Link to="/contact">
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold shadow-lg shadow-accent/20" size="lg">
                          Book This Tour
                        </Button>
                      </Link>
                    </div>
                  {/* CTA */}
                  <div className="border-t border-border/50 pt-4 sm:pt-5 mt-4 sm:mt-5">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-auto py-3 text-sm sm:text-base font-bold tracking-wide" size="lg">
                      Book This Tour
                    </Button>
                  </div>
                </div>

                {/* Trust Badges or similar could go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Timeline Journey */}
      {tour.days && tour.days.length > 0 && (
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Full Journey Timeline
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore your detailed day-by-day adventure across Sri Lanka
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="h-1.5 w-12 bg-primary rounded-full" />
                <div className="h-1.5 w-4 bg-accent rounded-full" />
                <div className="h-1.5 w-4 bg-accent rounded-full" />
              </div>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
              {tour.days.map((day, index) => (
                <div key={day.id || index} className="relative flex gap-4 sm:gap-10 pb-16 last:pb-0 group">
                  {/* Timeline Line & Dot */}
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-muted bg-background flex items-center justify-center z-10 group-hover:border-accent transition-colors duration-500 shadow-sm">
                      <span className="text-xs sm:text-sm font-bold text-accent">{day.dayNumber}</span>
      {/* Highlights Of Your Journey */}
      <section className="py-10 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Highlights Of Your Journey
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent" />
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            {packageData.itineraryDetailed.map((day, index) => (
              <div key={day.day} className="relative flex gap-4 sm:gap-6 pb-8 sm:pb-12 last:pb-0">
                {/* Timeline Line & Dot */}
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10 shadow-sm">
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-accent" />
                  </div>
                  {index !== packageData.itineraryDetailed.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-accent/40 to-border/30 mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-[16px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 overflow-hidden">
                  {/* Day Badge & Title Row */}
                  <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="inline-block bg-primary text-primary-foreground text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-md">
                          Day – {day.day}
                        </span>
                        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground">
                          {day.title}
                        </h3>
                      </div>
                      {/* Destination badge on right */}
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm flex-shrink-0">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                        <span className="font-medium">{day.destinations.join(', ')}</span>
                      </div>
                    </div>
                    {index !== tour.days.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-accent/50 to-border mt-2" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:border-accent/20 transition-all duration-500 pb-2">
                    {/* Day Badge & Title */}
                    <div className="p-6 pb-4 sm:p-8 sm:pb-6">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                        <span className="text-sm font-black text-primary/60 uppercase tracking-widest">
                          Day {day.dayNumber}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-accent uppercase tracking-tight line-clamp-2">
                          {day.topic}
                        </h3>
                      </div>

                      {/* Description & Image */}
                      <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-3">
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                            {day.description}
                          </p>
                          
                          {/* Accommodation & Meals */}
                          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-border/60">
                            {day.accommodation && (
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <Building className="h-4 w-4 text-accent" />
                                </div>
                                <div>
                                  <span className="text-[10px] text-muted-foreground uppercase font-bold block leading-none mb-1 tracking-tighter">Accommodation</span>
                                  <span className="text-foreground font-bold text-xs sm:text-sm">{day.hotelName || "Quality Hotel/Resort"}</span>
                                </div>
                              </div>
                            )}
                            {day.mealPlan && (
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Utensils className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <span className="text-[10px] text-muted-foreground uppercase font-bold block leading-none mb-1 tracking-tighter">Meal Plan</span>
                                  <span className="text-foreground font-bold text-xs sm:text-sm">{day.mealPlan}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {day.image && (
                          <div className="md:col-span-2 relative h-48 md:h-full min-h-[180px]">
                            <img 
                              src={day.image} 
                              alt={day.topic}
                              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-inner-lg"
                            />
                            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
                          </div>
                        )}
                  {/* Description & Image */}
                  <div className="px-4 sm:px-6 grid md:grid-cols-5 gap-4 sm:gap-6">
                    <div className="md:col-span-3 space-y-4">
                      <p className="text-foreground/80 text-sm sm:text-base md:text-base leading-relaxed font-medium text-justify">
                        {day.description}
                      </p>

                      {/* Destinations Tags */}
                      <div>
                        <p className="text-xs sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1.5">Destinations</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {day.destinations.map((dest, dIdx) => (
                            <span key={dIdx} className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full">
                              <MapPin className="h-3 w-3" />
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Things to Do */}
                      <div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1.5">Things to Do</p>
                        <ul className="space-y-1.5">
                          {day.thingsToDo.map((activity, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                              <Compass className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="font-normal">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <img 
                        src={day.image} 
                        alt={day.title}
                        className="w-full h-40 sm:h-52 object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Service Highlights Bar */}
                  <div className="mx-4 sm:mx-6 mt-4 sm:mt-5 border-t border-border/40 pt-3 sm:pt-4 pb-3 sm:pb-4 flex flex-wrap gap-4 sm:gap-8">
                    {day.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                        <span className="font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-12 py-7 text-xl font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Ready to start? Book now
                </Button>
              </Link>
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto font-normal">
            Contact us today to customize this tour or create your own unique Sri Lanka experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-auto py-3 px-6 text-xs sm:text-sm font-bold tracking-wide">
              Customize This Tour
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full h-auto py-3 px-6 text-xs sm:text-sm font-bold tracking-wide">
              Contact Us
            </Button>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default TourPackageDetail;
