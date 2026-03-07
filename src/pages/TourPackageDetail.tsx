import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  Tag, 
  ArrowRight, 
  Check, 
  X, 
  Phone, 
  Mail,
  Building,
  Utensils,
  ChevronLeft
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
      { day: 1, route: "COLOMBO – ANURADHAPURA", hotel: "Heritage Hotel", location: "Anuradhapura" },
      { day: 2, route: "POLONNARUWA ANCIENT CITY", hotel: "Hotel Sudu Araliya", location: "Polonnaruwa" },
      { day: 3, route: "SIGIRIYA – DAMBULLA", hotel: "Aliya Resort", location: "Sigiriya" },
      { day: 4, route: "KANDY – COLOMBO", hotel: "Earl's Regency", location: "Kandy" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "COLOMBO – ANURADHAPURA",
        description: "Begin your cultural journey from Colombo to the ancient city of Anuradhapura. Explore the sacred Bodhi Tree, one of the oldest historically documented trees in the world, and discover the ancient stupas and monasteries that mark this UNESCO World Heritage site.",
        image: sigiriyaImg,
        accommodation: "Heritage Hotel – Anuradhapura",
        meals: "Dinner & Breakfast"
      },
      {
        day: 2,
        title: "POLONNARUWA ANCIENT CITY",
        description: "Visit the medieval capital of Polonnaruwa, featuring impressive ruins including the Royal Palace, the Gal Vihara with its stunning rock-cut Buddha statues, and the ancient irrigation systems that showcase the engineering brilliance of ancient Sri Lanka.",
        image: kandyImg,
        accommodation: "Hotel Sudu Araliya – Polonnaruwa",
        meals: "Dinner & Breakfast"
      },
      {
        day: 3,
        title: "SIGIRIYA – DAMBULLA",
        description: "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site featuring ancient frescoes and breathtaking views. Later, explore the Dambulla Cave Temple, home to over 150 Buddha statues and intricate murals dating back to the 1st century BC.",
        image: sigiriyaImg,
        accommodation: "Aliya Resort – Sigiriya",
        meals: "Dinner & Breakfast"
      },
      {
        day: 4,
        title: "KANDY – COLOMBO",
        description: "Journey to Kandy, the cultural capital of Sri Lanka. Visit the Temple of the Sacred Tooth Relic, explore the Royal Botanical Gardens, and enjoy a traditional Kandyan dance performance before returning to Colombo.",
        image: kandyImg,
        accommodation: "Earl's Regency – Kandy",
        meals: "Dinner & Breakfast"
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
      { day: 1, route: "COLOMBO – KANDY", hotel: "Mahaweli Reach Hotel", location: "Kandy" },
      { day: 2, route: "KANDY – NUWARA ELIYA", hotel: "Grand Hotel", location: "Nuwara Eliya" },
      { day: 3, route: "NUWARA ELIYA – ELLA", hotel: "98 Acres Resort", location: "Ella" },
      { day: 4, route: "ELLA EXPLORATION", hotel: "98 Acres Resort", location: "Ella" },
      { day: 5, route: "ELLA – COLOMBO", hotel: "-", location: "Departure" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "COLOMBO – KANDY",
        description: "Travel to Kandy, stopping at a spice garden and the Pinnawala Elephant Orphanage. Explore the Temple of the Sacred Tooth Relic and enjoy a cultural dance performance.",
        image: kandyImg,
        accommodation: "Mahaweli Reach Hotel – Kandy",
        meals: "Dinner & Breakfast"
      },
      {
        day: 2,
        title: "KANDY – NUWARA ELIYA",
        description: "Journey to Nuwara Eliya through tea country. Visit a tea factory, explore the colonial town, and enjoy the cool mountain climate.",
        image: ellaImg,
        accommodation: "Grand Hotel – Nuwara Eliya",
        meals: "Dinner & Breakfast"
      },
      {
        day: 3,
        title: "NUWARA ELIYA – ELLA",
        description: "Take the scenic train ride to Ella, passing through tunnels and over the famous Nine Arch Bridge. Settle into your mountain retreat.",
        image: ellaImg,
        accommodation: "98 Acres Resort – Ella",
        meals: "Dinner & Breakfast"
      },
      {
        day: 4,
        title: "ELLA EXPLORATION",
        description: "Hike to Little Adam's Peak at sunrise, visit the Nine Arch Bridge, and explore Ravana Falls. Enjoy local cuisine and relax.",
        image: ellaImg,
        accommodation: "98 Acres Resort – Ella",
        meals: "Dinner & Breakfast"
      },
      {
        day: 5,
        title: "ELLA – COLOMBO",
        description: "Return to Colombo with stops at scenic viewpoints. Transfer to the airport for your departure.",
        image: sigiriyaImg,
        accommodation: "Departure",
        meals: "Breakfast"
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
      { day: 1, route: "COLOMBO – YALA", hotel: "Cinnamon Wild", location: "Yala" },
      { day: 2, route: "YALA SAFARI", hotel: "Cinnamon Wild", location: "Yala" },
      { day: 3, route: "YALA – UDAWALAWE", hotel: "Grand Udawalawe", location: "Udawalawe" },
      { day: 4, route: "UDAWALAWE – COLOMBO", hotel: "-", location: "Departure" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "COLOMBO – YALA",
        description: "Travel to Yala National Park with stops at Galle Fort. Check into your safari lodge and enjoy an evening game drive.",
        image: yalaImg,
        accommodation: "Cinnamon Wild – Yala",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "YALA SAFARI",
        description: "Full day of safari adventures with dawn and dusk game drives. High chances of leopard sightings, elephants, and diverse birdlife.",
        image: yalaImg,
        accommodation: "Cinnamon Wild – Yala",
        meals: "All Meals"
      },
      {
        day: 3,
        title: "YALA – UDAWALAWE",
        description: "Morning safari before traveling to Udawalawe. Visit the Elephant Transit Home and enjoy an evening safari.",
        image: yalaImg,
        accommodation: "Grand Udawalawe – Udawalawe",
        meals: "All Meals"
      },
      {
        day: 4,
        title: "UDAWALAWE – COLOMBO",
        description: "Early morning safari for elephant sightings before returning to Colombo for your departure.",
        image: yalaImg,
        accommodation: "Departure",
        meals: "Breakfast"
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
      { day: 1, route: "COLOMBO – GALLE", hotel: "Amari Galle", location: "Galle" },
      { day: 2, route: "GALLE EXPLORATION", hotel: "Amari Galle", location: "Galle" },
      { day: 3, route: "GALLE – MIRISSA", hotel: "Mandara Resort", location: "Mirissa" },
      { day: 4, route: "WHALE WATCHING", hotel: "Mandara Resort", location: "Mirissa" },
      { day: 5, route: "BEACH DAY", hotel: "Mandara Resort", location: "Mirissa" },
      { day: 6, route: "MIRISSA – COLOMBO", hotel: "-", location: "Departure" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "COLOMBO – GALLE",
        description: "Scenic coastal drive to Galle. Visit a sea turtle hatchery and explore the iconic Galle Fort at sunset.",
        image: galleImg,
        accommodation: "Amari Galle – Galle",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "GALLE EXPLORATION",
        description: "Full day exploring Galle Fort, its museums, boutiques, and cafes. Visit the Japanese Peace Pagoda and enjoy beach time.",
        image: galleImg,
        accommodation: "Amari Galle – Galle",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "GALLE – MIRISSA",
        description: "Travel to Mirissa with stops at stilt fishermen and Koggala Lake. Settle into your beach resort.",
        image: mirissaImg,
        accommodation: "Mandara Resort – Mirissa",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "WHALE WATCHING",
        description: "Early morning whale watching excursion to spot blue whales, sperm whales, and dolphins. Afternoon beach relaxation.",
        image: mirissaImg,
        accommodation: "Mandara Resort – Mirissa",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "BEACH DAY",
        description: "Free day to enjoy the beach, try surfing, or explore nearby Weligama. Farewell dinner at a seafood restaurant.",
        image: mirissaImg,
        accommodation: "Mandara Resort – Mirissa",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "MIRISSA – COLOMBO",
        description: "Leisurely morning before returning to Colombo for your departure.",
        image: galleImg,
        accommodation: "Departure",
        meals: "Breakfast"
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
      { day: 1, route: "ARRIVAL – NEGOMBO", hotel: "Jetwing Blue", location: "Negombo" },
      { day: 2, route: "NEGOMBO – ANURADHAPURA", hotel: "Ulagalla Resort", location: "Anuradhapura" },
      { day: 3, route: "POLONNARUWA", hotel: "Ulagalla Resort", location: "Anuradhapura" },
      { day: 4, route: "SIGIRIYA – DAMBULLA", hotel: "Heritance Kandalama", location: "Sigiriya" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "ARRIVAL – NEGOMBO",
        description: "Welcome to Sri Lanka! Transfer to your beach hotel in Negombo to relax after your flight.",
        image: mirissaImg,
        accommodation: "Jetwing Blue – Negombo",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "NEGOMBO – ANURADHAPURA",
        description: "Journey to the ancient city of Anuradhapura, exploring the sacred Bodhi Tree and ancient monasteries.",
        image: sigiriyaImg,
        accommodation: "Ulagalla Resort – Anuradhapura",
        meals: "All Meals"
      },
      {
        day: 3,
        title: "POLONNARUWA",
        description: "Full day exploring the medieval capital of Polonnaruwa with its impressive ruins and Buddha statues.",
        image: kandyImg,
        accommodation: "Ulagalla Resort – Anuradhapura",
        meals: "All Meals"
      },
      {
        day: 4,
        title: "SIGIRIYA – DAMBULLA",
        description: "Climb Sigiriya Rock Fortress and explore the Dambulla Cave Temple, both UNESCO World Heritage sites.",
        image: sigiriyaImg,
        accommodation: "Heritance Kandalama – Sigiriya",
        meals: "All Meals"
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
      { day: 1, route: "COLOMBO – MIRISSA", hotel: "Lantern Boutique", location: "Mirissa" },
      { day: 2, route: "BEACH & SURFING", hotel: "Lantern Boutique", location: "Mirissa" },
      { day: 3, route: "WHALE WATCHING", hotel: "Lantern Boutique", location: "Mirissa" },
      { day: 4, route: "SPA & RELAXATION", hotel: "Lantern Boutique", location: "Mirissa" },
      { day: 5, route: "MIRISSA – COLOMBO", hotel: "-", location: "Departure" },
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: "COLOMBO – MIRISSA",
        description: "Scenic drive along the coast to Mirissa. Settle into your beachfront villa and enjoy sunset on the beach.",
        image: mirissaImg,
        accommodation: "Lantern Boutique – Mirissa",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "BEACH & SURFING",
        description: "Morning surfing lesson in Weligama Bay. Afternoon free for beach activities or exploring the area.",
        image: mirissaImg,
        accommodation: "Lantern Boutique – Mirissa",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "WHALE WATCHING",
        description: "Early morning whale watching expedition. Rest of the day for beach relaxation and snorkeling.",
        image: mirissaImg,
        accommodation: "Lantern Boutique – Mirissa",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "SPA & RELAXATION",
        description: "Indulge in a traditional Ayurvedic spa treatment. Farewell dinner at a beachside restaurant.",
        image: mirissaImg,
        accommodation: "Lantern Boutique – Mirissa",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "MIRISSA – COLOMBO",
        description: "Final beach morning before transferring to Colombo airport for your departure.",
        image: galleImg,
        accommodation: "Departure",
        meals: "Breakfast"
      },
    ]
  }
};

const TourPackageDetail = () => {
  const { slug } = useParams();
  const packageData = slug ? packagesData[slug as keyof typeof packagesData] : null;

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Package Not Found</h1>
          <Link to="/tour-packages">
            <Button>Back to Tour Packages</Button>
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
            src={packageData.image} 
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/tour-packages" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Tour Packages
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary">{packageData.title.split(' ')[0]}</span>{' '}
            <span className="text-accent">{packageData.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-white/90">{packageData.duration}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Itinerary In Brief */}
            <div className="lg:col-span-2 space-y-8">
              {/* Itinerary In Brief */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Itinerary In Brief
                </h2>
                <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                  {packageData.itineraryBrief.map((day, index) => (
                    <div 
                      key={day.day}
                      className={`flex items-center p-5 ${index !== packageData.itineraryBrief.length - 1 ? 'border-b border-border' : ''}`}
                    >
                      <div className="flex flex-col items-center justify-center min-w-[60px] text-center border-r border-border pr-5 mr-5">
                        <span className="text-xs text-muted-foreground uppercase">Day</span>
                        <span className="text-2xl font-bold text-foreground">{day.day}</span>
                        <span className="text-muted-foreground">:</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground uppercase tracking-wide">
                          {day.route}
                        </h3>
                      </div>
                      <div className="text-right text-sm text-muted-foreground hidden sm:block">
                        <div className="font-medium text-foreground">{day.hotel} –</div>
                        <div>{day.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Description */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Package Description
                </h2>
                <div className="bg-card rounded-xl shadow-sm p-6 md:p-8">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {packageData.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Includes / Excludes */}
              <div className="bg-card rounded-xl shadow-sm p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Includes */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-6 w-6 rounded-full bg-palm/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-palm" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">Includes</h3>
                    </div>
                    <ul className="space-y-3">
                      {packageData.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <Check className="h-5 w-5 text-palm flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="h-4 w-4 text-destructive" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">Excludes</h3>
                    </div>
                    <ul className="space-y-3">
                      {packageData.excludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Tour Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Tour Details
                </h2>
                <div className="bg-card rounded-xl shadow-sm p-6 space-y-5">
                  {/* Tour Ref */}
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Tag className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase">Tour Ref No:</div>
                      <div className="font-bold text-foreground">{packageData.id}</div>
                    </div>
                  </div>

                  {/* Package Type */}
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase">Package Type:</div>
                      <div className="font-bold text-foreground">{packageData.type}</div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase">Package Duration:</div>
                      <div className="font-bold text-foreground">{packageData.nights} Nights / {packageData.days} Days</div>
                    </div>
                  </div>

                  {/* Min People */}
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase">Min No. of People:</div>
                      <div className="font-bold text-foreground">{packageData.minPeople}</div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-5 mt-5">
                    <p className="text-sm text-muted-foreground mb-4">
                      If you have any questions to ask or need help to decide which tour is best for you, we are always happy to help.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="tel:+94762866748" 
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4 text-accent" />
                        <span>+94 76 2866 748</span>
                      </a>
                      <a 
                        href="mailto:hello@crystalceylon.com" 
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        <span>hello@crystalceylon.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="border-t border-border pt-5 mt-5">
                    <div className="text-center mb-4">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-3xl font-bold text-primary">${packageData.price}</div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                      Book This Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Of Your Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Highlights Of Your Journey
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-accent" />
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {packageData.itineraryDetailed.map((day, index) => (
              <div key={day.day} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline Line & Dot */}
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                  </div>
                  {index !== packageData.itineraryDetailed.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-xl shadow-sm overflow-hidden pb-6">
                  {/* Day Badge & Title */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded">
                        Day - {day.day}
                      </span>
                      <h3 className="font-display text-xl font-bold text-accent uppercase">
                        {day.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Image */}
                  <div className="px-6 grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-3">
                      <p className="text-muted-foreground leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <img 
                        src={day.image} 
                        alt={day.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Accommodation & Meals */}
                  <div className="px-6 mt-4 flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-accent" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase block">Accommodation</span>
                        <span className="text-foreground">{day.accommodation}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-primary" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase block">Meal Plan</span>
                        <span className="text-foreground">{day.meals}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to customize this tour or create your own unique Sri Lanka experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Customize This Tour
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TourPackageDetail;
