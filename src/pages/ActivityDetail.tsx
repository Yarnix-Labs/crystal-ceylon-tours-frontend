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
  Clock, 
  Users, 
  Star, 
  Check,
  Calendar,
  Sun,
  Camera,
  Info
} from "lucide-react";
import { useThingToDoBySlug } from "@/hooks/use-public-api";

const ActivityDetail = () => {
  const { slug } = useParams();
  const { data: activity, isLoading, isError } = useThingToDoBySlug(slug || "");

  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Activity Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            We couldn't load this experience. It might have been moved or there's a temporary server issue.
          </p>
          <Link to="/things-to-do">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Things To Do
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="relative h-[60vh] min-h-[400px] bg-muted/20 flex items-center justify-center">
          <Skeleton className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-16 w-2/3 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
        </section>
        
        <section className="bg-card border-b border-border py-8">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-5 mx-auto" />
                <Skeleton className="h-3 w-16 mx-auto" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 container mx-auto px-4 space-y-20">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <Skeleton className="h-10 w-48 mx-auto" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-6 w-32 mx-auto" />
          </div>
          
          <div className="space-y-12">
            <Skeleton className="h-10 w-64 mx-auto" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
                <Skeleton className="h-64 w-full rounded-2xl" />
                <Skeleton className="h-48 w-full rounded-2xl" />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={activity.coverImage || activity.heroImage || activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/things-to-do" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-bold group"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Things To Do
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 drop-shadow-lg">
            <span className="text-primary">{activity.title.split(' ')[0]}</span>{' '}
            <span className="text-white">{activity.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          {activity.tagline && (
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
              {activity.tagline}
            </p>
          )}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-b border-border shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-1">Location</span>
                <span className="text-sm font-bold text-foreground">{activity.location || "Islandwide"}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-1">Duration</span>
                <span className="text-sm font-bold text-foreground">{activity.duration || "Self-paced"}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sun className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-1">Difficulty</span>
                <span className="text-sm font-bold text-foreground">{activity.difficulty || "Easy"}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-1">Best For</span>
                <span className="text-sm font-bold text-foreground">{activity.purpose || "Everyone"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Centered and Boxed as per Image */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2A3E59] mb-8">Overview</h2>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-white mb-10">
              <p className="text-[#64748B] text-lg md:text-xl leading-relaxed font-medium">
                {activity.overview || activity.excerpt || activity.content.split('\n')[0]}
              </p>
            </div>
            <Link 
              to="/things-to-do" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-all hover:-translate-x-1"
            >
              <ChevronLeft className="h-5 w-5" />
              Back to Things to Do
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Highlights - Alternating Layout as per Image */}
      {activity.experienceHighlight && activity.experienceHighlight.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2A3E59] text-center mb-20">
              Experience Highlights
            </h2>
            
            <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
              {activity.experienceHighlight.map((item, index) => {
                const isEven = index % 2 === 0;
                const itemNumber = (index + 1).toString().padStart(2, '0');
                
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                  >
                    {/* Image Part */}
                    <div className="w-full md:w-1/2 relative group">
                      <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                      {/* Number/Icon Badge */}
                      <div className={`absolute ${isEven ? 'top-6 left-6' : 'top-6 right-6'} h-12 w-12 rounded-2xl bg-primary shadow-lg flex items-center justify-center text-white font-black text-sm z-10`}>
                        {itemNumber}
                      </div>
                    </div>

                    {/* Content Part */}
                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="bg-[#F8FAFC] p-8 md:p-12 rounded-[2.5rem] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-white h-full flex flex-col justify-center min-h-[250px] hover:shadow-xl transition-shadow duration-500">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Star className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-[#2A3E59] leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Highlights (Quick Stars) */}
      {activity.highlights && activity.highlights.length > 0 && (
        <section className="py-24 bg-muted/10 border-t border-border/50">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-center mb-16 flex items-center justify-center gap-4">
               Key Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {activity.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-2xl border border-border flex items-start gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-6 leading-tight">
              Ready to immersive in this adventure?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 font-medium">
              Join us for an unforgettable journey. Our experienced guides are ready to show you the best of Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 h-14 rounded-2xl font-black text-lg">
                  Book Now
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 h-14 rounded-2xl font-black text-lg">
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/20">
            <h3 className="font-display text-2xl font-bold mb-6">What's Included</h3>
            <ul className="space-y-4">
              {activity.whatsIncluded?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-white/90">{item}</span>
                </li>
              )) || (
                <>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white/90 mt-0.5" /><span>Knowledgeable Local Guide</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white/90 mt-0.5" /><span>Safety Equipment & Gear</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white/90 mt-0.5" /><span>Entrance Permits</span></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default ActivityDetail;
