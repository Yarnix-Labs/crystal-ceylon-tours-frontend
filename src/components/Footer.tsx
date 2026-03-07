import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Tour Packages", href: "#packages" },
  { name: "Things To Do", href: "#activities" },
  { name: "Blog", href: "#blog" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const destinations = [
  { name: "Sigiriya", href: "#" },
  { name: "Ella", href: "#" },
  { name: "Galle", href: "#" },
  { name: "Kandy", href: "#" },
  { name: "Yala National Park", href: "#" },
  { name: "Mirissa", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Crystal Ceylon" className="h-16 w-auto bg-white rounded-lg p-1" />
            </Link>
            <p className="text-footer-foreground/80 leading-relaxed">
              Discover the wonders of Sri Lanka with personalized private tours. 
              Experience authentic culture, stunning landscapes, and warm hospitality.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Popular Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <a
                    href={destination.href}
                    className="text-footer-foreground/80 hover:text-primary transition-colors"
                  >
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-footer-foreground/80">Colombo, Sri Lanka</span>
              </li>
              <li>
                <a
                  href="tel:+94771234567"
                  className="flex items-center gap-3 text-footer-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>+94 77 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@crystalceylon.com"
                  className="flex items-center gap-3 text-footer-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>info@crystalceylon.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-footer-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
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
