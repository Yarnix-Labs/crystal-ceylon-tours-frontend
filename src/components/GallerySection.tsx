import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, ZoomIn, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Gallery images
import gallerySigiriya from "@/assets/gallery-sigiriya.png";
import galleryNineArch from "@/assets/gallery-nine-arch.png";
import galleryLeopard from "@/assets/gallery-leopard.png";
import galleryKandyTemple from "@/assets/gallery-kandy-temple.png";
import galleryMirissaBeach from "@/assets/gallery-mirissa-beach.png";
import galleryTeaPlantation from "@/assets/gallery-tea-plantation.png";
import galleryGalleFort from "@/assets/gallery-galle-fort.png";
import galleryElephants from "@/assets/gallery-elephants.png";

const galleryPreviewImages = [
  {
    src: gallerySigiriya,
    alt: "Sigiriya Rock Fortress",
    title: "Sigiriya",
    location: "Central Province",
    span: "col-span-2 row-span-2",
  },
  {
    src: galleryNineArch,
    alt: "Nine Arch Bridge",
    title: "Nine Arch Bridge",
    location: "Ella",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryLeopard,
    alt: "Yala Leopard Safari",
    title: "Wildlife Safari",
    location: "Yala",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryKandyTemple,
    alt: "Temple of the Tooth",
    title: "Kandy Temple",
    location: "Kandy",
    span: "col-span-1 row-span-2",
  },
  {
    src: galleryMirissaBeach,
    alt: "Mirissa Beach Paradise",
    title: "Mirissa Beach",
    location: "Southern Coast",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryTeaPlantation,
    alt: "Tea Plantation Heritage",
    title: "Tea Country",
    location: "Nuwara Eliya",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryGalleFort,
    alt: "Galle Fort Lighthouse",
    title: "Galle Fort",
    location: "Galle",
    span: "col-span-1 row-span-1",
  },
  {
    src: galleryElephants,
    alt: "Wild Elephants",
    title: "Elephant Safari",
    location: "Minneriya",
    span: "col-span-1 row-span-1",
  },
];

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-16 sm:py-24 bg-gradient-to-b from-background to-secondary/40 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-accent text-xs font-bold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <Camera className="h-3.5 w-3.5" />
            Gallery
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-foreground mb-2 sm:mb-3">
            Captured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Moments
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,10 Q50,0 98,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-primary/40"
                />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto font-normal">
            A visual journey through the breathtaking landscapes, vibrant culture, and exotic wildlife of Sri Lanka.
          </p>
        </div>

        {/* Gallery Grid - Modern Mosaic Layout */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-[200px] gap-2 sm:gap-3 md:gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {galleryPreviewImages.map((image, index) => (
            <Link
              key={index}
              to="/gallery"
              className={`group relative rounded-[16px] sm:rounded-[20px] overflow-hidden cursor-pointer ${image.span}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover zoom icon */}
              <div className="absolute top-3 right-3 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-sm sm:text-lg font-bold text-white drop-shadow-lg">
                  {image.title}
                </h3>
                <div className="flex items-center gap-1 text-white/80 text-[10px] sm:text-xs font-medium mt-0.5">
                  <MapPin className="h-3 w-3" />
                  {image.location}
                </div>
              </div>

              {/* Hover glow ring */}
              <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] ring-2 ring-transparent group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-10 sm:mt-14 relative z-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="border-accent/40 text-accent hover:bg-accent hover:text-white rounded-full px-5 py-3 sm:px-8 sm:py-6 h-auto text-xs sm:text-sm md:text-base font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1 group"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
