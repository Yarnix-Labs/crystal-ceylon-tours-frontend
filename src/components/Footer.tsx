import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import TripAdvisorLinkingWidget from "./TripAdvisorLinkingWidget";
import TripAdvisorRatedBadge from "./TripAdvisorRatedBadge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground relative overflow-hidden">
      {/* Decorative background elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6 lg:pr-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-2 group">
              <img 
                src={logo} 
                alt="Crystal Ceylon" 
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" 
              />
            </Link>
            <p className="text-footer-foreground/70 leading-relaxed text-sm sm:text-base font-light">
              Discover the wonders of Sri Lanka with personalized private tours. 
              Experience authentic culture, stunning landscapes, and warm hospitality tailored just for you.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-footer-foreground/80 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Facebook">
                <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-footer-foreground/80 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Instagram">
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-footer-foreground/80 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="YouTube">
                <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="sm:mt-4 lg:mt-0">
            <h3 className="text-white font-display text-lg font-semibold tracking-wide mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)]"></span>
              Company
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Blog', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center text-footer-foreground/70 hover:text-white transition-colors text-sm sm:text-base w-fit"
                  >
                    <span className="relative flex items-center pl-2">
                      <ChevronRight className="absolute -left-3 h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore Links */}
          <div className="sm:mt-4 lg:mt-0">
            <h3 className="text-white font-display text-lg font-semibold tracking-wide mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(var(--accent),0.8)]"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              {['Tour Packages', 'Things to Do', 'Destinations'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(/ /g, '-')}`} 
                    className="group flex items-center text-footer-foreground/70 hover:text-white transition-colors text-sm sm:text-base w-fit"
                  >
                    <span className="relative flex items-center pl-2">
                      <ChevronRight className="absolute -left-3 h-4 w-4 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reviews */}
          <div className="sm:col-span-2 lg:col-span-1 sm:mt-4 lg:mt-0">
            <h3 className="text-white font-display text-lg font-semibold tracking-wide mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#34e0a1] rounded-full shadow-[0_0_10px_rgba(52,224,161,0.8)]"></span>
              Reviews
            </h3>
            <div className="flex flex-col gap-3 items-start">
              <TripAdvisorRatedBadge />
              <TripAdvisorLinkingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 relative z-10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-footer-foreground/50 text-sm font-light text-center md:text-left">
              &copy; {currentYear} Crystal Ceylon Tours. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-sm font-light">
              <Link to="/privacy-policy" className="text-footer-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-footer-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
