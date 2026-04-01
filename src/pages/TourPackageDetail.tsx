import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useTourPackageBySlug } from "@/hooks/use-public-api";
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

const TourPackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: tour, isLoading, isError } = useTourPackageBySlug(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        {/* Loading Hero Skeleton */}
        <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </section>
        
        <section className="py-10 sm:py-16 container mx-auto px-4">
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

  if (isError || !tour) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.heroImage} 
            alt={tour.name}
            className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out_forwards]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="hsl(var(--muted) / 0.3)" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
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
                  <span className="text-primary">{tour.name.split(' ')[0]}</span>{' '}
                  <span className="text-foreground">{tour.name.split(' ').slice(1).join(' ')}</span>
                </h1>
              </div>

              {/* Itinerary In Brief */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Itinerary In Brief
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 overflow-hidden">
                  {tour.days?.map((day, index) => (
                    <div 
                      key={day.dayNumber}
                      className={`flex items-center p-3.5 sm:p-5 ${index !== (tour.days?.length || 0) - 1 ? 'border-b border-border/50' : ''}`}
                    >
                      <span className="inline-flex items-center justify-center bg-accent/15 text-accent text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full mr-3 sm:mr-20 whitespace-nowrap">
                        Day {day.dayNumber}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground">
                          {day.topic}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-muted-foreground hidden sm:flex">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="font-medium">{day.location || "Safe & professional driver"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Description */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Package Description
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    {tour.description?.split('\n').filter(p => p.trim()).map((paragraph, index) => (
                      <p key={index} className="text-sm sm:text-base md:text-[17px] text-foreground/80 font-medium leading-[1.8] text-justify sm:text-left">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Includes / Excludes */}
              {((tour.includes && tour.includes.length > 0) || (tour.excludes && tour.excludes.length > 0)) && (
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
                      {tour.includes?.map((item, index) => (
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
                      {tour.excludes?.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-foreground/80 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              )}
            </div>

            {/* Right Column - Tour Details Sidebar */}
            <div className="lg:col-span-1">
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
                      <div className="font-bold text-foreground text-sm sm:text-base">{tour.tourRefNumber}</div>
                    </div>
                  </div>

                  {/* Package Type */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Package Type:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{tour.packageType || "Premium Tour"}</div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Package Duration:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{tour.packageDuration || `${tour.totalDays} Days`}</div>
                    </div>
                  </div>

                  {/* Min People */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider">Min No. of People:</div>
                      <div className="font-bold text-foreground text-sm sm:text-base">{tour.minPeople} People</div>
                    </div>
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
                  </div>

                  {/* CTA */}
                  <div className="border-t border-border/50 pt-4 sm:pt-5 mt-4 sm:mt-5">
                    <Link to={`/book-now/tour/${slug}`}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-auto py-3 text-sm sm:text-base font-bold tracking-wide" size="lg">
                        Book This Tour
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {tour.days?.map((day, index) => (
              <div key={day.dayNumber} className="relative flex gap-4 sm:gap-6 pb-8 sm:pb-12 last:pb-0">
                {/* Timeline Line & Dot */}
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10 shadow-sm">
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-accent" />
                  </div>
                  {index !== (tour.days?.length || 0) - 1 && (
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
                          Day – {day.dayNumber}
                        </span>
                        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground">
                          {day.topic}
                        </h3>
                      </div>
                      {/* Destination badge on right */}
                      {day.destinations && day.destinations.length > 0 && (
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm flex-shrink-0">
                          <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
                          <span className="font-medium">{day.destinations.map(d => d.title).join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description & Image */}
                  <div className="px-4 sm:px-6 grid md:grid-cols-5 gap-4 sm:gap-6">
                    <div className="md:col-span-3 space-y-4">
                      <p className="text-foreground/80 text-sm sm:text-base md:text-base leading-relaxed font-medium text-justify">
                        {day.description}
                      </p>

                      {/* Destinations Tags */}
                      {day.destinations && day.destinations.length > 0 && (
                        <div>
                          <p className="text-xs sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1.5">Destinations</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {day.destinations.map((dest, dIdx) => (
                              <span key={dIdx} className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full">
                                <MapPin className="h-3 w-3" />
                                {dest.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Things to Do */}
                      {day.thingsToDo && day.thingsToDo.length > 0 && (
                        <div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1.5">Things to Do</p>
                          <ul className="space-y-1.5">
                            {day.thingsToDo.map((activity, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                                <Compass className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="font-normal">{activity.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {day.image && (
                      <div className="md:col-span-2">
                        <img 
                          src={day.image} 
                          alt={day.topic}
                          className="w-full h-40 sm:h-52 object-cover rounded-xl"
                        />
                      </div>
                    )}
                  </div>

                  {/* Service Highlights Bar */}
                  {(day.mealPlan || day.accommodation) && (
                    <div className="mx-4 sm:mx-6 mt-4 sm:mt-5 border-t border-border/40 pt-3 sm:pt-4 pb-3 sm:pb-4 flex flex-wrap gap-4 sm:gap-8">
                      {day.mealPlan && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <Utensils className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                          <span className="font-medium">Meal Plan: {day.mealPlan}</span>
                        </div>
                      )}
                      {day.accommodation && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                          <span className="font-medium">Accommodation: {day.accommodation}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Legacy CTA Section (Optional, could be removed if redundant) */}
      <section className="py-10 sm:py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
            Customise Your Experience
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto font-normal">
            Contact us today to customize this tour or create your own unique Sri Lanka experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to={`/book-now/tour/${slug}`}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-auto py-3 px-6 text-xs sm:text-sm font-bold tracking-wide">
                Book This Tour
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full h-auto py-3 px-6 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TourPackageDetail;
