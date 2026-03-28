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
import { ArrowRight, Info, MapPin } from "lucide-react";
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-lg border border-border overflow-hidden shadow-sm h-[400px]">
                    <Skeleton className="w-full aspect-[3/2]" />
                    <div className="p-4 space-y-3">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                ))
              ) : activities.length > 0 ? (
                activities.map((activity, index) => (
                  <Link
                    key={activity.id}
                    to={`/things-to-do/${activity.slug}`}
                    className="group block rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="overflow-hidden relative">
                      <img 
                        src={activity.coverImage || activity.image || activitiesHero} 
                        alt={activity.title}
                        className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {activity.location && (
                        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-md text-[10px] flex items-center gap-1">
                          <MapPin className="h-2.5 w-2.5 text-primary" />
                          {activity.location}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-display text-lg font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {activity.excerpt || activity.description || "Explore this amazing activity in Sri Lanka."}
                      </p>
                      <div className="flex items-center justify-between">
                         <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Read More →
                        </span>
                        {activity.duration && (
                          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                            {activity.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground text-lg">No activities found.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {meta && meta.totalPages > 1 && (
              <div className="mt-16">
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our travel experts will create a personalized itinerary based on your interests and preferences.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-ocean-dark opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Get Custom Itinerary
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
