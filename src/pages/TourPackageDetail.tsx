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
  Building,
  Utensils,
  ChevronLeft,
  Calendar,
  Info
} from "lucide-react";
import { useTourPackageBySlug } from "@/hooks/use-public-api";

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
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.heroImage} 
            alt={tour.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
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
                      </div>
                    </div>
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
        </section>
      )}

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default TourPackageDetail;
