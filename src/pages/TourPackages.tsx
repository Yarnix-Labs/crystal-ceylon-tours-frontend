import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import packagesHero from "@/assets/packages-hero.jpg";
import { useTourPackages } from "@/hooks/use-public-api";

const TourPackages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(pageParam ? parseInt(pageParam) : 1);

  const { data, isLoading } = useTourPackages(currentPage);
  const tours = data?.items || [];
  const meta = data?.meta;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Tour Packages"
        subtitle="Carefully crafted itineraries that showcase the very best of Sri Lanka's wonders"
        backgroundImage={packagesHero}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg border border-white/60 ring-1 ring-border/30 h-[400px]">
                  <Skeleton className="w-full aspect-video sm:aspect-[16/10] rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5" />
                  <div className="px-3 pb-3 flex flex-col flex-1">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-2.5" />
                    <Skeleton className="h-4 w-full mb-6" />
                    <Skeleton className="h-4 w-20 mt-auto" />
                  </div>
                </div>
              ))
            ) : tours.length > 0 ? (
              tours.map((pkg, index) => (
                <Link
                  key={pkg.id}
                  to={`/tour-packages/${pkg.slug}`}
                  className="group relative flex flex-col rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5 bg-muted">
                    <img
                      src={pkg.heroImage}
                      alt={pkg.name}
                      className="w-full aspect-video sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-accent px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-lg ring-1 ring-white/50 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {pkg.totalDays} Days
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 pb-3 flex flex-col flex-1">
                    {/* Badge */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {pkg.packageType || "Premium Tour"}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2.5 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-normal mb-6">
                      {pkg.shortDescription}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                      <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <div className="w-6 sm:w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-primary" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-muted-foreground">No tour packages found.</p>
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
                  
                  {Array.from({ length: meta.totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

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

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default TourPackages;
