import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Check,
  Calendar,
  Sun,
  Camera
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useThingToDoBySlug } from "@/hooks/use-public-api";

const ActivityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: activity, isLoading, isError } = useThingToDoBySlug(slug || "");

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

  if (isError || !activity) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-4">Activity Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            The experience you are looking for doesn't exist or has been removed.
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={activity.image || activity.coverImage || activity.heroImage} 
            alt={activity.title}
            className="w-full h-full object-cover text-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>



      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <div className="space-y-12 sm:space-y-16">
              
              {/* Back Button */}
              <div className="mb-8">
                <Link to="/things-to-do">
                  <Button variant="outline" className="gap-2 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Things To Do
                  </Button>
                </Link>
              </div>

              {/* Activity Header Title (Moved from Hero) */}
              <div className="mb-0 sm:mb-2">
                <div className="flex flex-col gap-2">
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                    <span className="text-primary">{activity.title.split(' ')[0]}</span>{' '}
                    <span>{activity.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                </div>
              </div>

              {/* Description & Overview */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  About This Experience
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Overview as a highlighted first section if exists */}
                    {activity.overview && (
                      <div className="mb-6 pb-6 border-b border-border/50">
                        {activity.overview
                          .replace(/<p>\s*<\/p>/g, "")
                          .split('\n')
                          .filter(p => p.trim())
                          .map((paragraph, index) => (
                            <p key={`ov-${index}`} className="text-sm sm:text-base md:text-[18px] text-foreground/90 font-semibold leading-[1.8] text-justify sm:text-left italic">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    )}
                    
                    {/* Main Description */}
                    {(activity.description || activity.content || "")
                      .replace(/<p>\s*<\/p>/g, "")
                      .split('\n')
                      .filter(p => p.trim())
                      .map((paragraph, index) => (
                        <p key={index} className="text-sm sm:text-base md:text-[17px] text-foreground/80 font-medium leading-[1.8] text-justify sm:text-left">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              {(activity.experienceHighlight?.length ? activity.experienceHighlight : activity.vision?.length ? activity.vision : activity.highlights?.length ? activity.highlights : []).length > 0 && (
              <div>
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Experience Highlights
                  </h2>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {(activity.experienceHighlight?.length ? activity.experienceHighlight : activity.vision?.length ? activity.vision : activity.highlights || []).map((highlight, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}>
                      {/* Image Side */}
                      <div className="md:w-1/2 relative rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-sm">
                        <img src={highlight.image || activity.image || activity.coverImage || activity.heroImage || ''} alt={"title" in highlight ? highlight.title : ""} className="w-full aspect-video sm:aspect-[16/10] object-cover" />
                        <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-md">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="md:w-1/2 bg-card rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 border border-border/30">
                        <div className="flex items-start sm:items-center gap-3 mb-4">
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                          </div>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                            {"title" in highlight ? highlight.title : ""}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {"description" in highlight ? highlight.description : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* What's Included */}
              {activity.whatsIncluded && activity.whatsIncluded.length > 0 && (
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  What's Included
                </h2>
                <div className="bg-card rounded-[18px] sm:rounded-[22px] shadow-sm ring-1 ring-border/30 p-5 sm:p-6 md:p-8">
                  <ul className="space-y-2.5 sm:space-y-3">
                    {activity.whatsIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-foreground/80 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              )}

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ActivityDetail;
