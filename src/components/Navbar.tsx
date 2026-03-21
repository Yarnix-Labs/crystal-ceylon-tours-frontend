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
        <div className="px-2 sm:px-4">
          <div className="flex items-center justify-between py-1.5 text-xs text-muted-foreground w-full">
            {/* Left side info */}
            <div className="hidden lg:flex items-center gap-4 divide-x divide-border">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-primary" />
                <span>Local Time: {formatTime(currentTime)}</span>
              </div>
              <div className="flex items-center gap-1.5 pl-4">
                <Calendar className="h-3 w-3 text-primary" />
                <span>Date: {formatDate(currentTime)}</span>
              </div>
              <a href="mailto:info@crystalceylon.com" className="flex items-center gap-1.5 pl-4 hover:text-primary transition-colors">
                <Mail className="h-3 w-3 text-primary" />
                <span>info@crystalceylon.com</span>
              </a>
              <a href="tel:+94771234567" className="flex items-center gap-1.5 pl-4 hover:text-primary transition-colors">
                <Phone className="h-3 w-3 text-primary" />
                <span>+94 77 123 4567</span>
              </a>
            </div>

            {/* Right side - language selector, flag and social icons */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-muted transition-colors">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <span className="font-medium hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang)}
                      className={`flex items-center gap-2 cursor-pointer ${
                        currentLanguage.code === lang.code ? "bg-secondary" : ""
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="h-4 w-px bg-border hidden sm:block" />

              <div className="flex items-center gap-1.5">
                <span className="text-lg">🇱🇰</span>
                <span className="font-medium">LK</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Facebook className="h-3.5 w-3.5 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded bg-[#1DA1F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Youtube className="h-3.5 w-3.5 text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Instagram className="h-3.5 w-3.5 text-white" />
                </a>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={whatsappIcon} alt="WhatsApp" className="h-3.5 w-3.5" />
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
            <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-2.5 py-1.5 text-sm font-medium transition-all relative group whitespace-nowrap ${
                    location.pathname === link.href 
                      ? "text-primary-foreground" 
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                    location.pathname === link.href ? "w-6" : "w-0 group-hover:w-6"
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
