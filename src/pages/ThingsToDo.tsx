import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, ChevronLeft } from "lucide-react";
import activitiesHero from "@/assets/activities-hero.jpg";
import { useThingsToDoList } from "@/hooks/use-public-api";

const ThingsToDo = () => {
  const { data: response, isLoading, isError } = useThingsToDoList(1);
  const activities = response?.items || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        {/* Loading Hero Skeleton */}
        <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </section>
        
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[250px] w-full rounded-[20px]" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (isError || activities.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Activities Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            Unable to load activities at this time.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
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
      
      <PageHero
        title="Things To Do"
        subtitle="From thrilling adventures to peaceful retreats, discover unforgettable experiences"
        backgroundImage={activitiesHero}
        breadcrumb="Things To Do"
      />

      {/* Activities Grid */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <Link
                key={activity.slug || activity.title}
                to={`/things-to-do/${activity.slug}`}
                className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                  <img 
                    src={activity.image || activity.coverImage || activity.heroImage} 
                    alt={activity.title}
                    className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6 font-normal">
                    {activity.description || activity.excerpt || activity.overview || "Discover incredible experiences in Sri Lanka."}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <div className="w-6 sm:w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our travel experts will create a personalized itinerary based on your interests and preferences.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ocean-dark opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Get Custom Itinerary
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThingsToDo;
