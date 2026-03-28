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
import { Calendar, ArrowRight, Info } from "lucide-react";
import projectsHero from "@/assets/packages-hero.jpg";
import { useTourPackages } from "@/hooks/use-public-api";

const TourPackages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data: response, isLoading, isError } = useTourPackages(currentPage);

  useEffect(() => {
    // If URL page changes (e.g. via back button), update state
    if (pageParam && parseInt(pageParam) !== currentPage) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tours = response?.items || [];
  const meta = response?.meta;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <PageHero
        title="Tour Packages"
        subtitle="Carefully crafted itineraries that showcase the very best of Sri Lanka's wonders"
        backgroundImage={projectsHero}
        breadcrumb="Tour Packages"
      />

      {/* Custom Package CTA */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 max-w-4xl mx-auto text-center md:text-left">
            <div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                Can't find what you're looking for?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-normal">
                Create your own custom tour package tailored to your preferences
              </p>
            </div>
            <Link to="/custom-package">
              <Button size="lg" className="gap-2 whitespace-nowrap w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 h-auto text-xs sm:text-sm font-bold rounded-full">
                Build Your Own Package
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-14 sm:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          {isError ? (
            <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
              <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Failed to load packages</h3>
              <p className="text-muted-foreground mb-6">There was an error connecting to the server. Please try again later.</p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                  // Loading Skeletons
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-card rounded-lg border border-border overflow-hidden flex flex-col h-[400px]">
                      <Skeleton className="w-full aspect-[3/2]" />
                      <div className="p-4 space-y-3 flex-1">
                        <div className="flex justify-between">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-12" />
                        </div>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <div className="mt-auto pt-4 flex justify-between">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : tours.length > 0 ? (
                  tours.map((pkg, index) => (
                    <Link
                      key={pkg.id}
                      to={`/tour-packages/${pkg.slug}`}
                      className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up flex flex-col"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={pkg.heroImage}
                          alt={pkg.name}
                          className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          {pkg.totalDays} Days
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-1">
                        {/* Duration + Price row */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span>{pkg.packageDuration || `${pkg.totalDays} Days`}</span>
                          </div>
                          <span className="text-base font-bold text-primary">${pkg.price}</span>
                        </div>

                        <h3 className="font-display text-base font-bold text-accent mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                          {pkg.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                          {pkg.shortDescription}
                        </p>

                        {/* CTA */}
                        <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/50">
                          <span>View Details</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-muted-foreground">No tour packages found.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <Link
                key={pkg.title}
                to={`/tour-packages/${pkg.slug}`}
                className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-accent px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-lg ring-1 ring-white/50 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {pkg.duration.split(" / ")[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Premium Tour
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-normal mb-6">
                    {pkg.highlights.join(" • ")}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <div className="w-6 sm:w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-primary" />
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
                        // Show first, last, current, and pages around current
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

export default TourPackages;
