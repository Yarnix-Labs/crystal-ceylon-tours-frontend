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
  Sun,
  Send
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useDestinationBySlug } from "@/hooks/use-public-api";

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: destination, isLoading, isError } = useDestinationBySlug(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </section>
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-[200px] w-full max-w-5xl mx-auto rounded-[22px]" />
          <div className="space-y-8 max-w-5xl mx-auto mt-12">
            <Skeleton className="h-[400px] w-full rounded-[24px]" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !destination) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-4">Destination Not Found</h1>
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={destination.coverImage || destination.images?.[0]} 
            alt={destination.title}
            className="w-full h-full object-cover"
          />
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
                  {destination.title}
                </h2>
                
                {/* Vertical line border wrapper */}
                <div className="border-l-[3px] border-primary/40 pl-5 sm:pl-8 space-y-3 sm:space-y-4">
                  {(destination.content || "").split('\n').filter(p => p.trim()).map((paragraph, index) => (
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
                
                {destination.keyHighlights && destination.keyHighlights.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {destination.keyHighlights.map((activity, index) => (
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
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                
                {/* Start Your Journey */}
                <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm ring-1 ring-border/20">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Start Your Journey</h3>
                  <p className="text-foreground/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-8 text-left">
                    Ready to experience the magic of {destination.title}? Let our travel experts craft the perfect itinerary for you.
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
                {destination.explorerNote && (
                <div className="bg-primary/10 rounded-[32px] p-6 sm:p-8 border border-primary/20">
                  <Sun className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-display italic text-2xl font-bold text-primary mb-3">Explorer's Note</h3>
                  <p className="text-primary/90 italic text-sm sm:text-base leading-relaxed font-medium">
                    {destination.explorerNote}
                  </p>
                </div>
                )}

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
