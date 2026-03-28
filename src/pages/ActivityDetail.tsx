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
import activitiesHero from "@/assets/activities-hero.jpg";

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
          <p className="text-muted-foreground mb-8">The activity you are looking for could not be loaded.</p>
          <Link to="/things-to-do">
            <Button>Back to Things To Do</Button>
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
        <section className="relative h-[60vh] min-h-[400px]">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </section>
        <div className="container mx-auto px-4 py-12 space-y-12">
          <Skeleton className="h-10 w-1/3" />
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
            <div className="lg:col-span-1">
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={activity.coverImage || activity.image || activitiesHero} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/things-to-do" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Things To Do
          </Link>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-primary">{activity.title.split(' ')[0]}</span>{' '}
            <span className="text-white">{activity.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          {activity.tagline && <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">{activity.tagline}</p>}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-b border-border shadow-sm sticky top-20 z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Location</span>
              <span className="text-sm font-bold text-foreground">{activity.location || "Multiple"}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Duration</span>
              <span className="text-sm font-bold text-foreground">{activity.duration || "Self-paced"}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Sun className="h-5 w-5 text-primary" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Difficulty</span>
              <span className="text-sm font-bold text-foreground">{activity.difficulty || "Easy"}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Type</span>
              <span className="text-sm font-bold text-foreground">{activity.category || "Adventure"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div>
                <div className="mb-8">
                  <span className="section-label">Overview</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                    Experience the Magic
                  </h2>
                </div>
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  {/* Handling content as string (split by newlines if needed) */}
                  {(activity.content || activity.description || "No description available.").split('\n').map((paragraph, index) => (
                    paragraph.trim() ? <p key={index} className="mb-6">{paragraph}</p> : null
                  ))}
                </div>
              </div>

              {/* Highlights */}
              {activity.highlights && activity.highlights.length > 0 && (
                <div>
                  <div className="mb-8">
                    <span className="section-label">Features</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                      Activity Highlights
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {activity.highlights.map((highlight, index) => (
                      <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-sm group hover:border-primary/50 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                           <Star className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-foreground">{highlight.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Highlights / Pictures */}
              {(activity.experienceHighlight || activity.vision) && (
                <div>
                  <div className="mb-8">
                    <span className="section-label">Visuals</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                      Captured Moments
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(activity.experienceHighlight || activity.vision || []).map((item, index) => (
                      <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h4 className="text-white font-bold text-lg">{item.title}</h4>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-8">
                {/* What's Included */}
                {activity.whatsIncluded && activity.whatsIncluded.length > 0 && (
                  <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                    <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                       <Check className="h-5 w-5 text-palm" />
                       What's Included
                    </h3>
                    <ul className="space-y-4">
                      {activity.whatsIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-palm/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-palm" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  
                  <h3 className="font-display text-2xl font-bold mb-4">Start Your Adventure</h3>
                  <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
                    Ready to experience {activity.title}? Our team is ready to help you plan the perfect trip!
                  </p>
                  <div className="space-y-4">
                    <Link to="/contact">
                      <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold py-6 rounded-xl shadow-lg" size="lg">
                        Enquire Now
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 font-bold py-6 rounded-xl">
                        Ask a Question
                      </Button>
                    </Link>
                  </div>
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

export default ActivityDetail;
