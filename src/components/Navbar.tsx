import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, Calendar, Facebook, Instagram, Youtube, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tour Packages", href: "/tour-packages" },
  { name: "Things To Do", href: "/things-to-do" },
  { name: "Destinations", href: "/destinations" },
  { name: "Customize Package", href: "/custom-package" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Colombo'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      day: '2-digit',
      month: '2-digit',
      timeZone: 'Asia/Colombo'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className={`transition-all duration-500 ease-in-out bg-white ${
        isScrolled ? "max-h-0 opacity-0 overflow-hidden border-b-0" : "max-h-10 opacity-100 border-b border-border/30"
      }`}>
        <div className="px-2 sm:px-4 lg:px-8 bg-white">
          <div className="flex items-center justify-between py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium text-foreground/80 w-full min-h-[40px]">
            {/* Left side info */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span className="leading-none mt-0.5">Local Time: {formatTime(currentTime)}</span>
              </div>
              
              <div className="h-3 w-px bg-border/80" />
              
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span className="leading-none mt-0.5">Date: {formatDate(currentTime)}</span>
              </div>

              <div className="h-3 w-px bg-border/80" />

              <a href="mailto:info@crystalceylon.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span className="leading-none mt-0.5 text-foreground hover:text-primary transition-colors">info@crystalceylon.com</span>
              </a>

              <div className="h-3 w-px bg-border/80" />

              <a href="tel:+94771234567" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span className="leading-none mt-0.5 text-foreground hover:text-primary transition-colors">+94 77 123 4567</span>
              </a>
            </div>

            {/* Right side - language selector, flag and social icons */}
            <div className="flex items-center gap-3 sm:gap-4 md:ml-auto">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-md hover:text-primary transition-colors ring-0 focus:ring-0 outline-none">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  <span className="font-semibold hidden sm:inline leading-none mt-0.5">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang)}
                      className={`flex items-center gap-2 cursor-pointer font-medium ${
                        currentLanguage.code === lang.code ? "bg-accent/10 text-accent font-semibold" : ""
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="h-3 w-px bg-border/80 hidden sm:block" />

              {/* Currency Selector Dummy */}
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors pt-0.5">
                <img 
                  src="https://flagcdn.com/w20/lk.png" 
                  srcSet="https://flagcdn.com/w40/lk.png 2x" 
                  width="18" 
                  alt="Sri Lanka" 
                  className="rounded-sm shadow-sm opacity-90"
                />
                <span className="font-semibold leading-none">LK</span>
              </div>

              <div className="h-3 w-px bg-border/80 hidden sm:block" />

              {/* Social Icons */}
              <div className="flex items-center gap-1.5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#E1306C]/10 hover:bg-[#E1306C] text-[#E1306C] hover:text-white flex items-center justify-center transition-all">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#E60023]/10 hover:bg-[#E60023] text-[#E60023] hover:text-white flex items-center justify-center transition-all">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256c0 105.57 66.08 195.04 159.03 234.61-2.18-19.66-4.14-49.87.86-71.11 4.53-19.14 29.15-120.35 29.15-120.35s-7.46-14.92-7.46-36.96c0-34.64 20.09-60.48 45.14-60.48 21.28 0 31.55 15.98 31.55 35.12 0 21.41-13.62 53.4-20.67 83.05-5.91 24.81 12.45 45.06 36.97 45.06 44.33 0 78.43-46.74 78.43-114.28 0-59.78-43-101.55-104.34-101.55-69.58 0-110.39 52.26-110.39 106.12 0 21.48 8.28 44.57 18.6 57.08 2.05 2.48 2.34 4.67 1.54 7.64-2.52 9.5-8.2 31.42-9.35 36.14-1.63 6.64-5.45 7.9-12.21 4.75-45.56-21.21-74.05-87.7-74.05-141.28 0-114.99 83.5-220.62 241.06-220.62 131.52 0 233.7 93.7 233.7 218.84 0 131.05-82.55 236.46-197.35 236.46-38.56 0-74.83-20.04-87.21-43.76 0 0-19.11 72.82-23.72 90.6-8.54 32.88-31.58 74.02-47.05 99.1A246.33 246.33 0 0 0 248 504c136.97 0 248-111.03 248-248S384.97 8 248 8z"/></svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#000000]/10 hover:bg-[#000000] text-[#000000] hover:text-white flex items-center justify-center transition-all">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Navigation bar container */}
      <div className="relative h-12 sm:h-14">
        {/* Logo section with organic design */}
        <div className="absolute left-0 top-0 h-full w-[30%] sm:w-[25%] lg:w-[25%] overflow-hidden">
          {/* White background */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Top wave decoration - accent color */}
          <svg className="absolute top-0 left-0 w-full h-2 text-accent" viewBox="0 0 200 10" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,10 C30,0 70,10 100,5 C130,0 170,10 200,5 L200,0 L0,0 Z" />
          </svg>
          
          {/* Organic wave edge */}
          <svg 
            className="absolute -right-2 top-0 h-full w-8 text-white"
            viewBox="0 0 40 100" 
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              d="M0,0 L40,0 C20,15 30,35 15,50 C0,65 25,85 10,100 L0,100 Z"
            />
          </svg>
          
          {/* Decorative leaf - left */}
          <div className="absolute -left-2 bottom-0 opacity-60">
            <svg viewBox="0 0 40 50" className="w-8 h-10 text-palm">
              <ellipse cx="10" cy="40" rx="8" ry="20" fill="currentColor" transform="rotate(-25 10 40)" />
              <ellipse cx="18" cy="38" rx="6" ry="16" fill="currentColor" transform="rotate(-10 18 38)" opacity="0.7" />
            </svg>
          </div>
          
          {/* Decorative leaf - right side */}
          <div className="absolute right-6 bottom-0 opacity-50">
            <svg viewBox="0 0 30 40" className="w-6 h-8 text-palm">
              <ellipse cx="20" cy="32" rx="6" ry="16" fill="currentColor" transform="rotate(20 20 32)" />
            </svg>
          </div>
          
          {/* Accent circles */}
          <div className="absolute right-12 top-1 w-3 h-3 rounded-full bg-accent/30" />
          <div className="absolute right-16 bottom-2 w-2 h-2 rounded-full bg-primary/40" />
        </div>

        {/* Logo and company name */}
        <Link 
          to="/" 
          className="absolute left-2 sm:left-4 w-auto top-1/2 -translate-y-1/2 z-20 flex items-center gap-3 group"
        >
          <img 
            src={logo} 
            alt="Crystal Ceylon" 
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300" 
          />
          <span className="text-sm sm:text-base font-bold whitespace-nowrap hidden lg:block">
            <span className="text-accent">Crystal</span>{" "}
            <span className="text-primary">Ceylon Tours</span>
          </span>
        </Link>

        {/* Angled gold navigation bar */}
        <nav 
          className="absolute right-0 top-0 h-full bg-primary w-[75%] sm:w-[78%] lg:w-[78%]"
          style={{
            clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0% 100%)"
          }}
        >
          <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-0.5 lg:gap-1.5 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-[15px] font-medium tracking-wide transition-all relative group whitespace-nowrap ${
                    location.pathname === link.href 
                      ? "text-primary-foreground drop-shadow-md" 
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:drop-shadow-md"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-foreground transition-all duration-300 ${
                    location.pathname === link.href ? "w-8" : "w-0 group-hover:w-8"
                  }`} />
                </Link>
              ))}
            </div>


            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-primary-foreground ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 w-full xl:hidden bg-primary border-t border-primary-foreground/20 animate-fade-in z-50">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.href 
                      ? "bg-primary-foreground/10 text-primary-foreground font-medium" 
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary-foreground/20 mt-4">
                <a href="tel:+94771234567" className="flex items-center gap-3 py-2 text-primary-foreground/80">
                  <Phone className="h-4 w-4" />
                  <span>+94 77 123 4567</span>
                </a>
                <a href="mailto:info@crystalceylon.com" className="flex items-center gap-3 py-2 text-primary-foreground/80">
                  <Mail className="h-4 w-4" />
                  <span>info@crystalceylon.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
