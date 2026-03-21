import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import destinationsHero from "@/assets/destinations-hero.jpg";

// Gallery images
import gallerySigiriya from "@/assets/gallery-sigiriya.png";
import galleryNineArch from "@/assets/gallery-nine-arch.png";
import galleryLeopard from "@/assets/gallery-leopard.png";
import galleryKandyTemple from "@/assets/gallery-kandy-temple.png";
import galleryMirissaBeach from "@/assets/gallery-mirissa-beach.png";
import galleryTeaPlantation from "@/assets/gallery-tea-plantation.png";
import galleryGalleFort from "@/assets/gallery-galle-fort.png";
import galleryElephants from "@/assets/gallery-elephants.png";
import galleryWhale from "@/assets/gallery-whale.png";
import galleryDambulla from "@/assets/gallery-dambulla.png";
import galleryStiltFishermen from "@/assets/gallery-stilt-fishermen.png";
import gallerySurfing from "@/assets/gallery-surfing.png";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  location: string;
  title: string;
  span: "normal" | "tall" | "wide" | "featured";
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: gallerySigiriya,
    alt: "Sigiriya Lion Rock at golden hour",
    category: "Culture",
    location: "Central Province",
    title: "Sigiriya Rock Fortress",
    span: "featured",
  },
  {
    id: 2,
    src: galleryNineArch,
    alt: "Nine Arch Bridge in Ella with train",
    category: "Nature",
    location: "Uva Province",
    title: "Nine Arch Bridge",
    span: "tall",
  },
  {
    id: 3,
    src: galleryLeopard,
    alt: "Wild leopard in Yala National Park",
    category: "Wildlife",
    location: "Southern Province",
    title: "Yala Leopard Safari",
    span: "normal",
  },
  {
    id: 4,
    src: galleryKandyTemple,
    alt: "Temple of the Tooth in Kandy",
    category: "Culture",
    location: "Central Province",
    title: "Temple of the Tooth",
    span: "wide",
  },
  {
    id: 5,
    src: galleryMirissaBeach,
    alt: "Pristine beach in Mirissa",
    category: "Beach",
    location: "Southern Province",
    title: "Mirissa Paradise",
    span: "normal",
  },
  {
    id: 6,
    src: galleryTeaPlantation,
    alt: "Tea picker in Nuwara Eliya",
    category: "Nature",
    location: "Central Province",
    title: "Tea Country Heritage",
    span: "tall",
  },
  {
    id: 7,
    src: galleryGalleFort,
    alt: "Galle Fort lighthouse at sunset",
    category: "Culture",
    location: "Southern Province",
    title: "Galle Fort Sunset",
    span: "normal",
  },
  {
    id: 8,
    src: galleryElephants,
    alt: "Elephants crossing a lake",
    category: "Wildlife",
    location: "North Central Province",
    title: "Elephant Gathering",
    span: "wide",
  },
  {
    id: 9,
    src: galleryWhale,
    alt: "Blue whale breaching in Mirissa",
    category: "Wildlife",
    location: "Southern Province",
    title: "Whale Watching",
    span: "normal",
  },
  {
    id: 10,
    src: galleryDambulla,
    alt: "Dambulla Cave Temple Buddha statues",
    category: "Culture",
    location: "Central Province",
    title: "Dambulla Cave Temple",
    span: "tall",
  },
  {
    id: 11,
    src: galleryStiltFishermen,
    alt: "Stilt fishermen at sunset",
    category: "Beach",
    location: "Southern Province",
    title: "Stilt Fishermen",
    span: "normal",
  },
  {
    id: 12,
    src: gallerySurfing,
    alt: "Surfer riding wave at Arugam Bay",
    category: "Adventure",
    location: "Eastern Province",
    title: "Arugam Bay Surfing",
    span: "wide",
  },
];

// Lightbox component
const Lightbox = ({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
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
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{image.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{image.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
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

  const openLightbox = useCallback((image: GalleryImage) => {
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
  const getSpanClasses = (span: GalleryImage["span"]) => {
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
            <p className="text-muted-foreground text-sm">
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

                {/* Category badge - top left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                    {image.category}
                  </span>
                </div>

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
                  <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    {image.location}
                  </div>

                  {/* Animated line */}
                  <div className="w-8 h-0.5 rounded-full bg-white/40 mt-3 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                </div>

                {/* Hover glow border effect */}
                <div className="absolute inset-0 rounded-[20px] ring-2 ring-transparent group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground text-sm font-medium">
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
