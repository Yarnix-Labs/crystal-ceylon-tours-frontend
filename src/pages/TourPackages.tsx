import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
import heroImage from "@/assets/hero-image.jpg";
import { useTourPackages } from "@/hooks/use-public-api";

import customTravelers from "@/assets/custom-travelers.jpg";

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
        backgroundImage={heroImage}
        breadcrumb="Tour Packages"
      />

      {/* Custom Package CTA - Compact Premium Banner */}
      <section className="py-6 sm:py-10 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/custom-package" className="block group">
              <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/80 shadow-lg ring-1 ring-border/5">
                {/* Background gradient - more vibrant */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-white/40 to-primary/15" />
                
                {/* Wave decorations - slightly more visible */}
                <svg className="absolute top-0 left-0 w-full h-6 text-accent/30" viewBox="0 0 1200 40" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0,40 C150,0 350,40 500,20 C650,0 850,40 1000,20 C1100,10 1150,30 1200,20 L1200,0 L0,0 Z" />
                </svg>
                
                <svg className="absolute bottom-0 left-0 w-full h-8 text-primary/30" viewBox="0 0 1200 50" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0,0 C150,30 350,0 500,20 C650,40 850,10 1000,30 C1100,40 1150,20 1200,30 L1200,50 L0,50 Z" />
                </svg>
                
                {/* Content container - more compact padding */}
                <div className="relative px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                  
                  {/* Image with organic frame - scaled down */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1.5 bg-accent/20 rounded-[40%_60%_70%_30%/30%_30%_70%_70%] group-hover:rounded-[60%_40%_30%_70%/70%_70%_30%_30%] transition-all duration-700" />
                    <div className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-xl overflow-hidden border-[3px] border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={customTravelers} 
                        alt="Happy travelers in Sri Lanka" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating airplane icon - smaller */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                      <svg className="w-4 h-4 text-white rotate-45" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text content - refined spacing */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                      Custom Experience
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-tight">
                      Design Your Dream Journey
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 max-w-sm font-medium">
                      Handcraft your perfect Sri Lanka adventure — choose destinations & activities.
                    </p>
                  </div>
                  
                  {/* CTA Button - compact but visible */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-1.5 bg-accent text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-[20px_8px_20px_8px] font-bold text-xs sm:text-sm group-hover:bg-primary group-hover:rounded-[8px_20px_8px_20px] transition-all duration-500 shadow-lg shadow-accent/20">
                      <span>Start Planning</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
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

                    {/* Hover Price Overlay Badge */}
                    <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none">
                      <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-bold shadow-xl shadow-primary/30 text-sm">
                        ${pkg.price || 0}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 pb-3 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      {/* Badge */}
                      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {pkg.packageType || "Premium Tour"}
                      </div>
                      <span className="text-base font-bold text-foreground transition-opacity duration-300 group-hover:opacity-0">
                        ${pkg.price || 0}
                      </span>
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
            <div className="mt-16 sm:mt-24 flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex p-1.5 sm:p-2.5 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-xl shadow-black/[0.02] ring-1 ring-border/5">
                <Pagination className="py-0 w-auto mx-0">
                  <PaginationContent className="gap-2 sm:gap-4">
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        className={cn(
                          "h-10 sm:h-11 rounded-full border-none shadow-none hover:bg-primary hover:text-white transition-all duration-300",
                          currentPage === 1 ? "pointer-events-none opacity-30 grayscale" : "cursor-pointer"
                        )}
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
                          className={cn(
                            "h-10 w-10 sm:h-11 sm:w-11 rounded-full border-none shadow-none transition-all duration-300",
                            currentPage === i + 1 
                              ? "bg-primary text-white shadow-md shadow-primary/20 scale-105" 
                              : "hover:bg-primary/10 hover:text-primary"
                          )}
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
                        className={cn(
                          "h-10 sm:h-11 rounded-full border-none shadow-none hover:bg-primary hover:text-white transition-all duration-300",
                          currentPage === meta.totalPages ? "pointer-events-none opacity-30 grayscale" : "cursor-pointer"
                        )}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TourPackages;
