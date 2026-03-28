import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ChevronLeft, 
  MapPin, 
  Map as MapIcon,
  Star,
  Camera,
  Info,
  Calendar,
  Compass,
  Check
  Sun,
  Send
} from "lucide-react";
import { useDestinationBySlug } from "@/hooks/use-public-api";

const DestinationDetail = () => {
  const { slug } = useParams();
  const { data: destination, isLoading, isError } = useDestinationBySlug(slug || "");

  if (isError) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            We couldn't load the destination details. It might have been moved or there's a temporary server issue.
          </p>
          <Link to="/destinations">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Destinations
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
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 container mx-auto px-4 text-center space-y-4">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-12 w-2/3 mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4 bg-muted/5 border-b border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Skeleton className="h-[400px] w-full" />
              <Skeleton className="h-[200px] w-full" />
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

  if (!destination) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            The destination you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/destinations">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Destinations
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
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={destination.coverImage} 
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Destinations
          </Link>
          <div className="flex items-center justify-center gap-2 text-white/90 mb-4 bg-black/20 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-full border border-white/10">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold tracking-wide">{destination.location}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            {destination.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            {destination.excerpt}
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-b border-border shadow-sm sticky top-[72px] z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Best Time</span>
              <span className="text-sm font-bold text-foreground">{destination.bestTime || "Year Round"}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Listed Packages</span>
              <span className="text-sm font-bold text-foreground">{destination.tourCount || 0} Tours</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Highlights</span>
              <span className="text-sm font-bold text-foreground">{destination.keyHighlights?.length || 0} Attractions</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Photo Opps</span>
              <span className="text-sm font-bold text-foreground">High Density</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div className="animate-fade-in">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-4">
                  <span className="h-10 w-1.5 bg-primary rounded-full" />
                  About {destination.title}
                </h2>
                <div className="bg-card p-6 md:p-10 rounded-2xl shadow-sm border border-border">
                  <div className="prose prose-slate max-w-none text-muted-foreground leading-[1.8] text-base md:text-lg">
                    {destination.content.split('\n').map((paragraph, index) => (
                      <p key={index} className={paragraph.trim() ? "mb-6" : "mb-2"}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {destination.keyHighlights && destination.keyHighlights.length > 0 && (
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-4">
                    <span className="h-10 w-1.5 bg-primary rounded-full" />
                    Key Highlights
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {destination.keyHighlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col gap-3 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
                      >
                        <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                          <Star className="h-6 w-6 text-accent group-hover:text-inherit" />
                        </div>
                        <h3 className="font-bold text-foreground text-xl capitalize">{highlight.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Explorer Note / Vision */}
              {destination.explorerNote && (
                <div className="relative overflow-hidden bg-accent rounded-3xl p-8 md:p-12 text-accent-foreground shadow-xl">
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-10">
                    <Compass className="h-64 w-64" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                      <Camera className="h-8 w-8 text-primary" />
                      Explorer's Note
                    </h2>
                    <p className="text-lg md:text-xl italic font-serif leading-relaxed opacity-90">
                      "{destination.explorerNote}"
                    </p>
                  </div>
                </div>
              )}
              
              {/* Image Gallery */}
              {destination.images && destination.images.length > 1 && (
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Captured Moments
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {destination.images.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer group">
                        <img 
                          src={img} 
                          alt={`${destination.title} gallery ${idx}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>



      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8">
              
              {/* Back Button */}
              <div className="mb-8">
                <Link to="/destinations">
                  <Button variant="outline" className="gap-2 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Destinations
                  </Button>
                </Link>
              </div>

              {/* Description */}
              <div className="mb-12 sm:mb-16">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 flex items-end gap-2.5">
                  <span className="italic text-primary font-medium tracking-tight">About</span> 
                  {destination.name}
                </h2>
                
                {/* Vertical line border wrapper */}
                <div className="border-l-[3px] border-primary/40 pl-5 sm:pl-8 space-y-3 sm:space-y-4">
                  {destination.description.map((paragraph, index) => (
                    <p key={index} className="text-sm sm:text-base md:text-[17px] text-foreground/80 font-medium leading-[1.8] text-justify sm:text-left">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 sm:w-16 bg-accent rounded-full"></div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Key Highlights
                  </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {destination.thingsToDo.map((activity, index) => (
                    <div key={index} className="bg-card/50 hover:bg-card p-5 sm:p-6 rounded-[24px] border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1.5">{activity.title}</h3>
                        <p className="text-sm sm:text-base text-foreground/80 font-medium leading-[1.6]">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-6">
                {/* CTA Card */}
                <div className="bg-card border border-border rounded-3xl shadow-lg p-8 space-y-6 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">Plan Your Visit</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Let us create a custom itinerary including {destination.title} and other hidden gems nearby. We handle all logistics while you enjoy the journey.
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <Link to="/contact">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-7 text-lg font-bold shadow-lg shadow-primary/20 rounded-2xl" size="lg">
                        Get Custom Itinerary
                      </Button>
                    </Link>
                    <Link to="/tour-packages">
                      <Button variant="outline" className="w-full py-6 text-base font-bold border-2 border-primary text-primary hover:bg-primary/5 rounded-2xl" size="lg">
                        View Tour Packages
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-6 border-t border-border mt-6">
                    <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                      <span>Quick Stats</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Region</span>
                        <span className="font-bold">{destination.location}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span className="text-palm font-bold flex items-center gap-1">
                          <Check className="h-3 w-3" /> {destination.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Monthly Visitors</span>
                        <span className="font-bold">~{destination.views * 10 || "High"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info / Social Trust could go here */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                
                {/* Start Your Journey */}
                <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm ring-1 ring-border/20">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Start Your Journey</h3>
                  <p className="text-foreground/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-8 text-left">
                    Ready to experience the magic of {destination.name}? Let our travel experts craft the perfect itinerary for you.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base">Tailored Itineraries</h4>
                        <p className="text-foreground/80 text-sm font-medium mt-0.5">Customized just for you</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base">Best Timing</h4>
                        <p className="text-foreground/80 text-xs sm:text-sm font-medium mt-0.5">Optimized for your schedule</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base">Expert Guides</h4>
                        <p className="text-foreground/80 text-sm font-medium mt-0.5">Advice on when to visit</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl h-auto py-3.5 sm:py-4 text-sm sm:text-base font-bold tracking-wide transition-transform hover:-translate-y-1">
                    Explore Packages
                  </Button>
                </div>

                {/* Explorer's Note */}
                <div className="bg-primary/10 rounded-[32px] p-6 sm:p-8 border border-primary/20">
                  <Sun className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-display italic text-2xl font-bold text-primary mb-3">Explorer's Note</h3>
                  <p className="text-primary/90 italic text-sm sm:text-base leading-relaxed font-medium">
                    The {destination.province.replace('Province', '').trim()} region is highly recommended during Sri Lanka's {destination.bestTime} season when {destination.weather.toLowerCase()}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default DestinationDetail;
