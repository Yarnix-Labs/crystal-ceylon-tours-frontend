import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  User,
  Share2,
  Facebook,
  Twitter,
  Bookmark
} from "lucide-react";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import galleImg from "@/assets/galle.jpg";
import yalaImg from "@/assets/yala.jpg";
import mirissaImg from "@/assets/mirissa.jpg";
import kandyImg from "@/assets/kandy.jpg";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  content: { type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote'; content: string | string[] }[];
  tags: string[];
  relatedPosts: string[];
}> = {
  "ultimate-guide-sri-lanka": {
    title: "The Ultimate Guide to Sri Lanka: Everything You Need to Know",
    excerpt: "From ancient ruins to pristine beaches, discover why Sri Lanka is the must-visit destination of 2026.",
    image: sigiriyaImg,
    author: "Chamara Fernando",
    authorBio: "Travel writer and Sri Lanka expert with over 15 years of experience exploring every corner of the island.",
    date: "January 28, 2026",
    readTime: "12 min read",
    category: "Travel Guide",
    content: [
      { type: 'paragraph', content: "Sri Lanka, the teardrop-shaped island nation in the Indian Ocean, has emerged as one of the world's most exciting travel destinations. With eight UNESCO World Heritage sites, pristine beaches, abundant wildlife, and one of the world's most flavorful cuisines, this small island packs an incredible diversity of experiences." },
      { type: 'heading', content: "Why Visit Sri Lanka in 2026?" },
      { type: 'paragraph', content: "The island has undergone a remarkable tourism renaissance, with improved infrastructure, new eco-lodges, and enhanced visitor experiences while maintaining its authentic charm. Here's what makes Sri Lanka unmissable this year:" },
      { type: 'list', content: ["Improved road networks making travel between destinations faster", "New boutique hotels and eco-lodges opening across the island", "Enhanced wildlife conservation efforts in national parks", "Growing culinary tourism with cooking classes and food tours", "Sustainable tourism initiatives protecting natural beauty"] },
      { type: 'heading', content: "Best Time to Visit" },
      { type: 'paragraph', content: "Sri Lanka can be visited year-round thanks to its two monsoon seasons affecting different coasts at different times. The southwest coast and hill country are best from December to March, while the east coast shines from April to September." },
      { type: 'subheading', content: "Peak Season (December - March)" },
      { type: 'paragraph', content: "This is the ideal time to visit the Cultural Triangle, southern beaches, and hill country. Expect sunny skies, calm seas, and perfect conditions for outdoor activities. Book accommodations well in advance." },
      { type: 'subheading', content: "Shoulder Season (April - May, September - October)" },
      { type: 'paragraph', content: "Fewer crowds and lower prices, with generally good weather. Some afternoon showers possible but rarely disruptive to travel plans." },
      { type: 'heading', content: "Must-Visit Destinations" },
      { type: 'paragraph', content: "While it's impossible to see everything in one trip, these destinations should be on every first-timer's list:" },
      { type: 'list', content: ["Sigiriya - The ancient rock fortress is an absolute must-see", "Kandy - Cultural capital with the sacred Temple of the Tooth", "Ella - Hill country beauty with hiking and tea plantations", "Galle - Colonial fort city with boutique charm", "Yala - Best leopard sightings in the world", "Mirissa - Whale watching and pristine beaches"] },
      { type: 'heading', content: "Getting Around" },
      { type: 'paragraph', content: "Hiring a private driver is the most popular and convenient way to explore Sri Lanka. Expect to pay around $50-70 per day including fuel. For a more adventurous experience, take the scenic train from Kandy to Ella - often called one of the world's most beautiful train journeys." },
      { type: 'quote', content: "\"Sri Lanka is like a compressed version of Asia - ancient temples, wild elephants, colonial history, and paradise beaches all within a few hours of each other.\"" },
      { type: 'heading', content: "Practical Tips" },
      { type: 'list', content: ["Visa: Electronic Travel Authorization (ETA) required for most nationalities", "Currency: Sri Lankan Rupee (LKR). USD widely accepted at hotels", "Language: Sinhala and Tamil official; English widely spoken in tourist areas", "Dress code: Cover shoulders and knees when visiting temples", "Tipping: 10% at restaurants; tip drivers and guides at end of tour"] },
      { type: 'paragraph', content: "Sri Lanka rewards the curious traveler with experiences that range from spiritual to thrilling, from relaxing to adventurous. Whether you have one week or one month, the Pearl of the Indian Ocean will capture your heart." }
    ],
    tags: ["Travel Guide", "Sri Lanka", "Planning", "First Time Visitors"],
    relatedPosts: ["hidden-gems-hill-country", "food-journey-colombo", "temple-etiquette"]
  },
  "hidden-gems-hill-country": {
    title: "10 Hidden Gems in Sri Lanka's Hill Country",
    excerpt: "Escape the crowds and discover secret waterfalls, charming villages, and breathtaking viewpoints.",
    image: ellaImg,
    author: "Nimal Silva",
    authorBio: "Local guide and photographer who has spent decades exploring Sri Lanka's lesser-known trails.",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Destinations",
    content: [
      { type: 'paragraph', content: "While Ella and Nuwara Eliya attract the crowds, Sri Lanka's hill country hides countless treasures waiting to be discovered. I've spent years wandering these misty mountains, and these are my favorite secret spots." },
      { type: 'heading', content: "1. Bomburuella Falls" },
      { type: 'paragraph', content: "Hidden behind a small village near Haputale, this 50-meter waterfall sees almost no tourists. The trek through tea estates is as beautiful as the destination itself. Ask villagers for directions - they're always happy to help." },
      { type: 'heading', content: "2. Diyaluma Falls Natural Pools" },
      { type: 'paragraph', content: "While the main Diyaluma Falls is well-known, few visitors know about the natural infinity pools at the top. The 3-hour climb is challenging but rewards you with swimming holes overlooking the valley - pure magic." },
      { type: 'heading', content: "3. Adisham Bungalow" },
      { type: 'paragraph', content: "This stunning English country house near Haputale was built in the 1930s and now operates as a Benedictine monastery. The gardens are impeccable, and the homemade jams and chutneys are legendary." },
      { type: 'heading', content: "4. Meemure Village" },
      { type: 'paragraph', content: "Sri Lanka's most remote village sits in the heart of the Knuckles Range. The journey there is an adventure in itself, crossing rivers and climbing steep mountain roads. Stay overnight with a local family for an authentic experience." },
      { type: 'heading', content: "5. Sembuwatta Lake" },
      { type: 'paragraph', content: "This pristine natural lake is surrounded by forest and rarely visited by foreign tourists. The zipline across the lake offers unique perspectives, and the surrounding hiking trails are peaceful and scenic." },
      { type: 'quote', content: "\"The real Sri Lanka exists in these hidden corners - where time moves slowly and strangers are welcomed like family.\"" },
      { type: 'heading', content: "6. Bambarakanda Falls" },
      { type: 'paragraph', content: "At 263 meters, this is Sri Lanka's tallest waterfall, yet it receives a fraction of the visitors of more famous falls. The surrounding pine forest adds to its mystical atmosphere." },
      { type: 'heading', content: "7. Tangamale Sanctuary" },
      { type: 'paragraph', content: "A hidden bird sanctuary near Haputale where you can spot over 70 species. The early morning mist creates magical photography opportunities, and you'll likely have the entire place to yourself." },
      { type: 'heading', content: "8. Ritigala Ancient Monastery" },
      { type: 'paragraph', content: "These atmospheric ruins predate Sigiriya and are far less visited. The forest has reclaimed much of the ancient monastery, creating an Indiana Jones-like exploration experience." },
      { type: 'heading', content: "9. Mini World's End, Haputale" },
      { type: 'paragraph', content: "Skip the tourist crowds at Horton Plains and head to Haputale's own precipice. The views are equally dramatic, the entry is free, and you can visit at any time." },
      { type: 'heading', content: "10. Dhowa Rock Temple" },
      { type: 'paragraph', content: "This cave temple near Ella features a remarkable 4-meter Buddha carved into the rock face over 2,000 years ago. Few tourists visit, leaving you to explore in peaceful solitude." },
      { type: 'paragraph', content: "These hidden gems represent the real magic of Sri Lanka's hill country - places where authentic experiences await those willing to venture off the beaten path." }
    ],
    tags: ["Hill Country", "Hidden Gems", "Off the Beaten Path", "Waterfalls"],
    relatedPosts: ["ultimate-guide-sri-lanka", "hiking-adams-peak"]
  },
  "food-journey-colombo": {
    title: "A Food Lover's Journey Through Colombo",
    excerpt: "From street food to fine dining, explore the vibrant culinary scene of Sri Lanka's capital.",
    image: galleImg,
    author: "Priya Mendis",
    authorBio: "Food writer and culinary tour guide passionate about Sri Lankan cuisine and its diverse influences.",
    date: "January 22, 2026",
    readTime: "6 min read",
    category: "Food & Culture",
    content: [
      { type: 'paragraph', content: "Colombo's food scene is a vibrant tapestry woven from Sri Lankan, Indian, Malay, Chinese, and Dutch influences. From humble street carts to elegant colonial dining rooms, the capital offers flavors that will surprise and delight your palate." },
      { type: 'heading', content: "Morning: Street Food Breakfast" },
      { type: 'paragraph', content: "Start your day like a local at one of Colombo's countless street-side kadés (small eateries). Order a plate of egg hoppers - crispy, bowl-shaped rice flour pancakes with an egg cooked in the center. Pair with pol sambol (coconut relish) and a cup of strong Ceylon tea." },
      { type: 'list', content: ["Hoppers (appa) - Fermented rice flour pancakes", "String hoppers - Steamed rice noodle nests", "Pol roti - Coconut flatbread", "Kiribath - Festive milk rice served with lunu miris"] },
      { type: 'heading', content: "Mid-Morning: Pettah Market Experience" },
      { type: 'paragraph', content: "Dive into the sensory overload of Pettah market. While not primarily a food market, you'll find stalls selling fresh fruits, spices, and snacks. Don't miss trying:\n• Vadai (lentil fritters)\n• Fresh king coconut\n• Isso vadai (prawn fritters from the coast)" },
      { type: 'heading', content: "Lunch: Rice and Curry" },
      { type: 'paragraph', content: "For the quintessential Sri Lankan meal, seek out a traditional rice and curry lunch packet. Unlike Indian curries, Sri Lankan versions feature distinct preparations for each vegetable, fish, or meat, all served on a single plate with rice." },
      { type: 'quote', content: "\"A proper Sri Lankan rice and curry should have at least seven curries - each telling a different story of spice and technique.\"" },
      { type: 'heading', content: "Afternoon: Colonial High Tea" },
      { type: 'paragraph', content: "Experience the British influence at Mount Lavinia Hotel or the Galle Face Hotel. High tea here combines English traditions with local touches - Ceylon tea served with love cake, kokis (crispy cookies), and delicate sandwiches." },
      { type: 'heading', content: "Evening: Street Food Safari" },
      { type: 'paragraph', content: "As the sun sets, street food stalls come alive. Galle Face Green is the prime spot for evening snacks. Must-try items include kottu roti (chopped roti stir-fried with vegetables and meat) and isso vadai fresh from the vendors." },
      { type: 'heading', content: "Dinner: Fine Dining" },
      { type: 'paragraph', content: "End your culinary journey at one of Colombo's excellent restaurants showcasing modern Sri Lankan cuisine. Ministry of Crab (for seafood), Upali's (traditional), or Nihonbashi (Sri Lankan-Japanese fusion) offer unforgettable dining experiences." },
      { type: 'heading', content: "Essential Food Tips" },
      { type: 'list', content: ["Don't be afraid of spice - locals can tone it down if asked", "Eat with your right hand for the authentic experience", "Street food is generally safe if it's freshly cooked", "Vegetarians are well-catered for in Sri Lankan cuisine", "Always try the daily special at local restaurants"] },
      { type: 'paragraph', content: "Colombo's food scene is evolving rapidly, with young chefs rediscovering traditional recipes and adding modern twists. Come hungry, stay curious, and let your taste buds guide you through this delicious city." }
    ],
    tags: ["Food", "Colombo", "Street Food", "Culinary"],
    relatedPosts: ["ultimate-guide-sri-lanka", "temple-etiquette"]
  },
  "safari-photography-yala": {
    title: "Safari Photography Tips for Yala National Park",
    excerpt: "Expert advice on capturing stunning wildlife shots, including the elusive Sri Lankan leopard.",
    image: yalaImg,
    author: "Rohan Jayawardena",
    authorBio: "Professional wildlife photographer with 10+ years experience in Sri Lanka's national parks.",
    date: "January 18, 2026",
    readTime: "10 min read",
    category: "Wildlife",
    content: [
      { type: 'paragraph', content: "Yala National Park offers some of the best wildlife photography opportunities in Asia. With the world's highest density of leopards and abundant elephants, it's a paradise for photographers. Here's how to make the most of your safari." },
      { type: 'heading', content: "Essential Camera Gear" },
      { type: 'paragraph', content: "The right equipment can make all the difference in wildlife photography. Here's what I recommend bringing:" },
      { type: 'list', content: ["Telephoto lens (200-600mm range ideal for leopards)", "Wide-angle lens for landscapes and elephant herds", "Fast memory cards (wildlife moves quickly!)", "Extra batteries - heat drains them fast", "Dust-proof camera bag", "Bean bag for jeep-stabilized shots"] },
      { type: 'heading', content: "Best Times for Photography" },
      { type: 'paragraph', content: "Light is everything in wildlife photography. The golden hours - first two hours after sunrise and last two before sunset - offer the most beautiful conditions. Leopards are most active during these times too." },
      { type: 'subheading', content: "Morning Safari (5:30 AM - 11:00 AM)" },
      { type: 'paragraph', content: "The best light and most active wildlife. Leopards often return from night hunting, and elephants emerge for morning grazing. The soft morning light creates magical images." },
      { type: 'subheading', content: "Afternoon Safari (2:00 PM - 6:30 PM)" },
      { type: 'paragraph', content: "After the heat of midday, animals become active again. This is prime time for elephants at waterholes and predators preparing for the night hunt." },
      { type: 'heading', content: "Photographing Leopards" },
      { type: 'paragraph', content: "Yala's leopards are unusually habituated to vehicles, offering incredible photographic opportunities. Key tips:" },
      { type: 'list', content: ["Patience is essential - sometimes you wait hours", "Keep your camera ready at all times", "Use burst mode when action happens", "Focus on the eyes for emotional impact", "Capture behavior, not just portraits", "Be silent - loud noises can scare leopards away"] },
      { type: 'quote', content: "\"The best wildlife photos come from understanding animal behavior. Learn to predict what they'll do next.\"" },
      { type: 'heading', content: "Dealing with Challenging Conditions" },
      { type: 'paragraph', content: "Yala's environment presents unique challenges:" },
      { type: 'list', content: ["Dust: Use weather-sealed bodies and clean lenses frequently", "Heat haze: Shoot in the early morning when air is cooler", "Harsh midday light: Look for shaded subjects or convert to black and white", "Moving jeep: Brace yourself and use faster shutter speeds"] },
      { type: 'heading', content: "Beyond Leopards" },
      { type: 'paragraph', content: "While leopards steal the spotlight, don't ignore Yala's other photogenic subjects. Elephants, sloth bears, crocodiles, and over 200 bird species offer endless opportunities. The park's landscapes - from grasslands to ancient ruins - make stunning backdrops." },
      { type: 'heading', content: "Ethical Photography" },
      { type: 'paragraph', content: "Always prioritize animal welfare over the shot. Never pressure drivers to get too close, and never use flash or make loud noises. The best wildlife photos come from patience and respect." },
      { type: 'paragraph', content: "With preparation and patience, Yala will reward you with images you'll treasure forever. The moment a leopard locks eyes with your camera is one you'll never forget." }
    ],
    tags: ["Photography", "Wildlife", "Yala", "Safari Tips"],
    relatedPosts: ["ultimate-guide-sri-lanka", "whale-watching-guide"]
  },
  "whale-watching-guide": {
    title: "Best Beaches for Whale Watching in Sri Lanka",
    excerpt: "When and where to spot blue whales, sperm whales, and dolphins off the Sri Lankan coast.",
    image: mirissaImg,
    author: "Chamara Fernando",
    authorBio: "Marine life enthusiast and travel writer specializing in responsible wildlife tourism.",
    date: "January 15, 2026",
    readTime: "7 min read",
    category: "Marine Life",
    content: [
      { type: 'paragraph', content: "Sri Lanka is one of the world's best destinations for whale watching, offering the rare opportunity to see the largest animal on Earth - the blue whale - just a few kilometers from shore. Here's your complete guide to this magical experience." },
      { type: 'heading', content: "Why Sri Lanka?" },
      { type: 'paragraph', content: "The island's position in the Indian Ocean places it along major whale migration routes. The continental shelf drops dramatically close to the shore, bringing deep-water species near the coast. Nowhere else can you reliably see blue whales so close to land." },
      { type: 'heading', content: "Best Locations" },
      { type: 'subheading', content: "Mirissa (November - April)" },
      { type: 'paragraph', content: "The whale watching capital of Sri Lanka. Boats depart at 6:30 AM and typically encounter blue whales within 1-2 hours. Sperm whales and dolphins are also common sightings." },
      { type: 'subheading', content: "Trincomalee (May - October)" },
      { type: 'paragraph', content: "During the southwest monsoon, the action shifts to the east coast. Trincomalee offers excellent sightings with fewer boats than Mirissa." },
      { type: 'subheading', content: "Kalpitiya (Year-round)" },
      { type: 'paragraph', content: "Known more for dolphins than whales, Kalpitiya offers spectacular super-pod sightings with hundreds of spinner dolphins." },
      { type: 'heading', content: "What You Might See" },
      { type: 'list', content: ["Blue Whale - Earth's largest animal (up to 30m)", "Sperm Whale - Deep divers with distinctive blow", "Bryde's Whale - Smaller, often feeding near surface", "Spinner Dolphin - Acrobatic and playful", "Bottlenose Dolphin - Curious and boat-friendly", "Pilot Whale - Often in large family groups"] },
      { type: 'quote', content: "\"Seeing a blue whale surface for breath, its massive body appearing endless, puts life in perspective like nothing else.\"" },
      { type: 'heading', content: "Choosing a Responsible Operator" },
      { type: 'paragraph', content: "Not all operators follow ethical guidelines. Choose companies that:" },
      { type: 'list', content: ["Maintain safe distances from whales", "Limit trip duration to reduce stress on animals", "Don't chase or encircle whales", "Provide marine biologist guides", "Contribute to conservation research"] },
      { type: 'heading', content: "Practical Tips" },
      { type: 'list', content: ["Take motion sickness tablets the night before", "Bring binoculars for distant sightings", "Wear layers - early mornings are cool", "Bring waterproof camera protection", "Stay hydrated and bring snacks", "Manage expectations - wildlife isn't guaranteed"] },
      { type: 'heading', content: "Best Time of Day" },
      { type: 'paragraph', content: "Morning trips (departing 6:00-6:30 AM) offer the calmest seas and best light for photography. The ocean typically becomes choppier by midday." },
      { type: 'paragraph', content: "Whale watching in Sri Lanka is a humbling experience that connects you with the ocean's gentle giants. Book with a responsible operator, bring your sense of wonder, and prepare for memories that will last a lifetime." }
    ],
    tags: ["Marine Life", "Whale Watching", "Mirissa", "Wildlife"],
    relatedPosts: ["ultimate-guide-sri-lanka", "safari-photography-yala"]
  },
  "temple-etiquette": {
    title: "Temple Etiquette: Visiting Sacred Sites Respectfully",
    excerpt: "Essential dos and don'ts for visiting Buddhist temples and Hindu kovils in Sri Lanka.",
    image: kandyImg,
    author: "Nimal Silva",
    authorBio: "Cultural historian and guide dedicated to helping visitors understand Sri Lanka's spiritual heritage.",
    date: "January 10, 2026",
    readTime: "5 min read",
    category: "Culture",
    content: [
      { type: 'paragraph', content: "Sri Lanka's temples are not tourist attractions - they are living places of worship that have served communities for centuries. Understanding and following local customs shows respect and enriches your experience immensely." },
      { type: 'heading', content: "Dress Code" },
      { type: 'paragraph', content: "Modest dress is essential at all religious sites. Both men and women should:" },
      { type: 'list', content: ["Cover shoulders completely", "Wear pants or skirts below the knee", "Avoid tight or transparent clothing", "Remove hats and sunglasses", "Many temples rent sarongs if needed"] },
      { type: 'heading', content: "Removing Shoes" },
      { type: 'paragraph', content: "Always remove footwear before entering temple grounds. This applies to the entire compound, not just buildings. Hot sand can burn feet - bring socks or accept the discomfort as part of the experience." },
      { type: 'heading', content: "Behavior Guidelines" },
      { type: 'list', content: ["Speak quietly and avoid loud laughter", "Turn off mobile phones or switch to silent", "Never turn your back to Buddha statues", "Don't point feet toward Buddha images", "Sit below monks when in their presence", "Walk clockwise around stupas and shrines"] },
      { type: 'heading', content: "Photography Etiquette" },
      { type: 'paragraph', content: "Photography rules vary by temple. General guidelines:" },
      { type: 'list', content: ["Ask permission before photographing", "Never pose next to or touching Buddha statues", "Never photograph people praying without permission", "Some inner sanctums prohibit all photography", "Avoid using flash in enclosed spaces"] },
      { type: 'quote', content: "\"When you enter a temple in the right spirit, you don't just see a building - you feel the devotion of countless generations who have sought peace within these walls.\"" },
      { type: 'heading', content: "Making Offerings" },
      { type: 'paragraph', content: "You're welcome to participate in offerings:" },
      { type: 'list', content: ["Flowers are the most common offering", "White lotus is particularly sacred", "Light oil lamps at designated areas", "Incense can be offered at specific shrines", "Never offer leather or animal products"] },
      { type: 'heading', content: "Hindu Kovils" },
      { type: 'paragraph', content: "Sri Lanka's Hindu temples have similar but distinct customs. Men should remove shirts at many kovils. Women may need to cover heads. Non-Hindus may be restricted from inner sanctums, especially during ceremonies." },
      { type: 'heading', content: "Attending Puja Ceremonies" },
      { type: 'paragraph', content: "The evening puja at Temple of the Tooth and other major temples is a beautiful experience. Arrive 30 minutes early for good positioning. The ceremony includes drumming, chanting, and offerings. Maintain silence throughout." },
      { type: 'paragraph', content: "Approaching temples with humility and respect transforms a sightseeing visit into a meaningful cultural exchange. The monks and devotees you encounter will appreciate your efforts and often share deeper insights into their practice." }
    ],
    tags: ["Culture", "Temples", "Buddhism", "Etiquette"],
    relatedPosts: ["ultimate-guide-sri-lanka", "food-journey-colombo"]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
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
      <section className="relative h-[50vh] min-h-[400px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Blog
          </Link>
          <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              {post.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={index} className="text-muted-foreground leading-relaxed mb-6">{block.content as string}</p>;
                  case 'heading':
                    return <h2 key={index} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{block.content as string}</h2>;
                  case 'subheading':
                    return <h3 key={index} className="font-display text-xl font-semibold text-foreground mt-6 mb-3">{block.content as string}</h3>;
                  case 'list':
                    return (
                      <ul key={index} className="space-y-2 mb-6">
                        {(block.content as string[]).map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-accent pl-6 py-2 my-8 bg-accent/5 rounded-r-lg">
                        <p className="text-lg italic text-foreground">{block.content as string}</p>
                      </blockquote>
                    );
                  default:
                    return null;
                }
              })}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-card rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{post.author}</h4>
                    <p className="text-muted-foreground mt-1">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Share */}
                <div className="bg-card rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </h4>
                  <div className="flex gap-3">
                    <button className="h-10 w-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-muted text-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Ready to Explore?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Let us help you plan your Sri Lanka adventure.
                  </p>
                  <Link to="/tour-packages">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Tour Packages
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
