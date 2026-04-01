import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import destinationsHero from "@/assets/destinations-hero.jpg";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGalleryImages } from "@/hooks/use-public-api";
import type { GalleryImage as ApiGalleryImage } from "@/api/services/public";

// Gallery image wrapper for UI state
interface GalleryImageUI extends ApiGalleryImage {
  src: string;
  alt: string;
  span: "normal" | "tall" | "wide" | "featured";
}

const Lightbox = ({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImageUI;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image */}
      <div
        className="relative z-40 max-w-[92vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl animate-scale-in"
        />
        {/* Caption */}
        <div className="mt-6 text-center animate-fade-in-up">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            {image.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(pageParam ? parseInt(pageParam) : 1);

  const { data: response, isLoading, isError } = useGalleryImages(currentPage);
  const meta = response?.meta;
  
  // Transform API data to UI structure
  const galleryImages: GalleryImageUI[] = (response?.items || []).map((img, idx) => {
    let span: GalleryImageUI["span"] = "normal";
    const patternPos = idx % 12;
    if (patternPos === 0) span = "featured";
    else if (patternPos === 1 || patternPos === 5 || patternPos === 9) span = "tall";
    else if (patternPos === 3 || patternPos === 7 || patternPos === 11) span = "wide";
    
    return {
      ...img,
      src: img.imageUrl,
      alt: img.title,
      span
    };
  });

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

  const [lightboxImage, setLightboxImage] = useState<GalleryImageUI | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = useCallback((image: GalleryImageUI) => {
    setLightboxImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const goToPrev = useCallback(() => {
    if (!lightboxImage) return;
    const currentIdx = galleryImages.findIndex((img) => img.id === lightboxImage.id);
    const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
    setLightboxImage(galleryImages[prevIdx]);
  }, [lightboxImage]);

  const goToNext = useCallback(() => {
    if (!lightboxImage) return;
    const currentIdx = galleryImages.findIndex((img) => img.id === lightboxImage.id);
    const nextIdx = (currentIdx + 1) % galleryImages.length;
    setLightboxImage(galleryImages[nextIdx]);
  }, [lightboxImage]);

  // Get grid span classes based on image span type
  const getSpanClasses = (span: GalleryImageUI["span"]) => {
    switch (span) {
      case "featured":
        return "md:col-span-2 md:row-span-2";
      case "tall":
        return "md:row-span-2";
      case "wide":
        return "md:col-span-2";
      default:
        return "";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </section>
        
        <section className="py-20 container mx-auto px-4">
          <Skeleton className="h-6 w-64 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[280px] gap-4 sm:gap-5">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="w-full h-full rounded-[20px]" />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Photo Gallery"
        subtitle="Explore the breathtaking beauty of Sri Lanka through our curated collection of stunning photography"
        backgroundImage={destinationsHero}
        breadcrumb="Gallery"
      />

      {/* Gallery Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-40 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Image Count */}
          <div className="text-center mb-10">
            <p className="text-foreground/80 text-xs sm:text-sm md:text-base font-medium">
              Showing{" "}
              <span className="font-bold text-foreground">{galleryImages.length}</span>{" "}
              photos from across Sri Lanka
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[280px] gap-4 sm:gap-5"
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative rounded-[20px] overflow-hidden cursor-pointer bg-muted ${getSpanClasses(
                  image.span
                )} transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
                onClick={() => openLightbox(image)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Permanent gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Zoom icon - top right, appears on hover */}
                <div className="absolute top-4 right-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                {/* Content - bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5 drop-shadow-lg">
                    {image.title}
                  </h3>

                  {/* Animated line */}
                  <div className="w-8 h-0.5 rounded-full bg-white/40 mt-3 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                </div>

                {/* Hover glow border effect */}
                <div className="absolute inset-0 rounded-[20px] ring-2 ring-transparent group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
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

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-accent" />
                <span className="text-foreground/80 text-xs sm:text-sm md:text-base font-medium">
                  Want to see these places in person?
                </span>
              </div>
              <a
                href="/custom-package"
                className="inline-flex items-center gap-2.5 bg-foreground hover:bg-primary text-white rounded-full px-7 py-4 text-sm font-bold tracking-wider transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-primary/30 hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  PLAN YOUR TRIP
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
