import { useState, useEffect, useRef } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";

// Reuse gallery images for the Instagram-style feed
import gallerySigiriya from "@/assets/gallery-sigiriya.png";
import galleryNineArch from "@/assets/gallery-nine-arch.png";
import galleryLeopard from "@/assets/gallery-leopard.png";
import galleryMirissaBeach from "@/assets/gallery-mirissa-beach.png";
import galleryTeaPlantation from "@/assets/gallery-tea-plantation.png";
import galleryGalleFort from "@/assets/gallery-galle-fort.png";
import galleryElephants from "@/assets/gallery-elephants.png";
import galleryStiltFishermen from "@/assets/gallery-stilt-fishermen.png";

const instagramPosts = [
  { src: gallerySigiriya, likes: "2.4K", alt: "Sigiriya Rock" },
  { src: galleryNineArch, likes: "3.1K", alt: "Nine Arch Bridge" },
  { src: galleryLeopard, likes: "1.8K", alt: "Yala Leopard" },
  { src: galleryMirissaBeach, likes: "4.2K", alt: "Mirissa Beach" },
  { src: galleryTeaPlantation, likes: "1.5K", alt: "Tea Plantation" },
  { src: galleryGalleFort, likes: "2.9K", alt: "Galle Fort" },
  { src: galleryElephants, likes: "3.6K", alt: "Elephant Safari" },
  { src: galleryStiltFishermen, likes: "2.1K", alt: "Stilt Fishermen" },
];

const InstagramFeedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-[#dc2743]/20">
            <Instagram className="h-3.5 w-3.5" />
            @crystalceylontours
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground mb-2">
            Follow Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Adventures
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
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
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto font-normal">
            Join 12K+ travelers following our journey across Sri Lanka
          </p>
        </div>
      </div>

      {/* Full-width Image Grid — edge-to-edge */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-4 md:grid-cols-8 gap-1 sm:gap-1.5">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
              style={{
                transitionDelay: `${index * 60}ms`,
              }}
            >
              {/* Image */}
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-400 flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white text-[10px] sm:text-xs font-bold">
                    ♥ {post.likes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Follow CTA */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mt-8 sm:mt-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-sm font-bold tracking-wider shadow-lg shadow-[#dc2743]/20 hover:shadow-xl hover:shadow-[#dc2743]/30 hover:-translate-y-1 hover:scale-105 transition-all duration-400 group"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
