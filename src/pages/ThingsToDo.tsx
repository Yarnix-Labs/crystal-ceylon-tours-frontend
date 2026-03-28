import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { ArrowRight, MapPin, Info } from "lucide-react";
import activitiesHero from "@/assets/activities-hero.jpg";
import { useThingsToDoList } from "@/hooks/use-public-api";

const ThingsToDo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data: response, isLoading, isError } = useThingsToDoList(currentPage);

  useEffect(() => {
    if (pageParam && parseInt(pageParam) !== currentPage) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activities = response?.items || [];
  const meta = response?.meta;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Things To Do"
        subtitle="From thrilling adventures to peaceful retreats, discover unforgettable experiences"
        backgroundImage={activitiesHero}
        breadcrumb="Things To Do"
      />

      {isError ? (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
            <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Failed to load activities</h3>
            <p className="text-muted-foreground mb-6">There was an error connecting to the server. Please try again later.</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border overflow-hidden flex flex-col h-[420px]">
                    <Skeleton className="w-full aspect-[3/2]" />
                    <div className="p-5 space-y-3 flex-1">
                      <Skeleton className="h-7 w-full" />
                      <Skeleton className="h-20 w-full" />
                      <div className="flex gap-2 mt-auto">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                  </div>
                ))
              ) : activities.length > 0 ? (
                activities.map((activity, index) => (
                  <Link
                    key={activity.id}
                    to={`/things-to-do/${activity.slug}`}
                    className="group block rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-400 opacity-0 animate-fade-in-up flex flex-col h-full"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={activity.coverImage || activity.image} 
                        alt={activity.title}
                        className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {activity.category && (
                        <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                          {activity.category}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3 uppercase tracking-tighter">
                        <MapPin className="h-3.5 w-3.5" />
                        {activity.location || "Various Locations"}
                      </div>
                      
                      <h3 className="font-display text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                        {activity.excerpt || activity.overview || "Explore this incredible experience in Sri Lanka."}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm font-bold text-primary group-hover:gap-2 flex items-center transition-all">
                          Experience More <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground">No activities found.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {meta && meta.totalPages > 1 && (
              <div className="mt-20">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 || 
                        page === meta.totalPages || 
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(page);
                              }}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (
                        page === currentPage - 2 || 
                        page === currentPage + 2
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}

                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < meta.totalPages) handlePageChange(currentPage + 1);
                        }}
                        className={currentPage === meta.totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Dreaming of Adventure?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Let us design a personalized journey tailored to your passions and preferred pace.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg font-black h-14 px-10 rounded-2xl shadow-xl">
              Custom Itinerary
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default ThingsToDo;
