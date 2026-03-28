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
import { MapPin, Info } from "lucide-react";
import destinationsHero from "@/assets/destinations-hero.jpg";
import { useDestinations } from "@/hooks/use-public-api";

const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data: response, isLoading, isError } = useDestinations(currentPage);

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

  const destinations = response?.items || [];
  const meta = response?.meta;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Explore Sri Lanka"
        subtitle="Discover the diverse landscapes, ancient wonders, and hidden gems of this tropical paradise"
        backgroundImage={destinationsHero}
        breadcrumb="Destinations"
      />

      {/* Destinations Grid */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          {isError ? (
            <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
              <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Failed to load destinations</h3>
              <p className="text-muted-foreground mb-6">There was an error connecting to the server. Please try again later.</p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                  // Loading Skeletons
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-card rounded-lg border border-border overflow-hidden flex flex-col h-[380px]">
                      <Skeleton className="w-full aspect-[3/2]" />
                      <div className="p-4 space-y-3 flex-1">
                        <Skeleton className="h-6 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <div className="mt-auto pt-4">
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : destinations.length > 0 ? (
                  destinations.map((destination, index) => (
                    <Link
                      key={destination.id}
                      to={`/destinations/${destination.slug}`}
                      className="group block rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-400 opacity-0 animate-fade-in-up flex flex-col h-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={destination.coverImage}
                          alt={destination.title}
                          className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {destination.location && (
                          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {destination.location}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display text-lg font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                          {destination.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4">
                          {destination.excerpt}
                        </p>
                        <div className="mt-auto flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all duration-300">
                          Read More <span className="text-lg">→</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-muted-foreground">No destinations found.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {meta && meta.totalPages > 1 && (
                <div className="mt-12">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {destinations.map((destination, index) => (
              <Link
                key={destination.name}
                to={`/destinations/${destination.slug}`}
                className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6 font-normal">
                    {destination.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Explore Destination
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                    <div className="w-6 sm:w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-primary" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Destinations;
