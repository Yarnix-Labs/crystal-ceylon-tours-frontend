import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import TripAdvisorRatedBadge from "./TripAdvisorRatedBadge";
import TripAdvisorLinkingWidget from "./TripAdvisorLinkingWidget";




const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container mx-auto px-4 py-10 sm:py-16">
        {/* Desktop: 4 columns side by side | Mobile: company info on top, then 3 link columns */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          {/* Company Info */}
          <div className="col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Crystal Ceylon" className="h-16 w-auto bg-white rounded-lg p-1" />
            </Link>
            <p className="text-footer-foreground/80 leading-relaxed">
              Discover the wonders of Sri Lanka with personalized private tours. 
              Experience authentic culture, stunning landscapes, and warm hospitality.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-2">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-footer-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-footer-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-footer-foreground/80 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="col-span-2">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/tour-packages" className="text-footer-foreground/80 hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link to="/things-to-do" className="text-footer-foreground/80 hover:text-primary transition-colors">Things to Do</Link></li>
              <li><Link to="/destinations" className="text-footer-foreground/80 hover:text-primary transition-colors">Destinations</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-2">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors">TikTok</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors">Pinterest</a></li>
            </ul>
          </div>

          {/* Widget */}
          <div className="col-span-3">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Reviews</h3>
            <TripAdvisorRatedBadge />
            <TripAdvisorLinkingWidget />
          </div>
        </div>

        {/* Mobile & Tablet layout (< lg) */}
        <div className="lg:hidden">
          {/* Company Info - full width on top */}
          <div className="space-y-5 mb-8 sm:mb-10">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Crystal Ceylon" className="h-14 sm:h-16 w-auto bg-white rounded-lg p-1" />
            </Link>
            <p className="text-footer-foreground/80 text-sm sm:text-base leading-relaxed max-w-md">
              Discover the wonders of Sri Lanka with personalized private tours. 
              Experience authentic culture, stunning landscapes, and warm hospitality.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* 3 Columns - always side by side */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {/* Company */}
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-5">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/about" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">About Us</Link></li>
                <li><Link to="/blog" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Blog</Link></li>
                <li><Link to="/contact" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Contact Us</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-5">Explore</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/tour-packages" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Tour Packages</Link></li>
                <li><Link to="/things-to-do" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Things to Do</Link></li>
                <li><Link to="/destinations" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Destinations</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-5">Follow Us</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Instagram</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">TikTok</a></li>
                <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-primary transition-colors text-xs sm:text-sm">Pinterest</a></li>
              </ul>
            </div>
          </div>

          {/* Widget - Mobile */}
          <div className="mt-8 sm:mt-10 pt-8 border-t border-white/10">
            <h3 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-5 text-center sm:text-left">Reviews</h3>
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4">
              <TripAdvisorRatedBadge />
              <TripAdvisorLinkingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-footer-foreground/60 text-sm">
              © 2026 Crystal Ceylon. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-footer-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-footer-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
