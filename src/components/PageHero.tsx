import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumb: string;
}

const PageHero = ({ title, subtitle, backgroundImage, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 opacity-0 animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
          <Link to="/" className="flex items-center gap-1 text-white/80 hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span className="text-sm">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-white/60" />
          <span className="text-sm text-primary font-medium">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {subtitle}
        </p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
