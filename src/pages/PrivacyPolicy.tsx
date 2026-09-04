import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-image.jpg";
import { 
  Shield, 
  Database, 
  CheckCircle, 
  Globe, 
  MapPin, 
  BarChart, 
  Cookie, 
  UserCheck, 
  Mail, 
  Phone 
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "June 3, 2026";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | Seilavo Tours"
        description="Learn how Seilavo Tours collects, uses, and protects your personal information when booking Sri Lanka travel packages."
        canonical="/privacy-policy"
      />
      <Navbar />
      
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect your personal information at Seilavo Tours."
        backgroundImage={heroImage}
        breadcrumb="Privacy Policy"
      />
      
      <div className="py-20 bg-muted/20 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-4xl -mt-16 relative z-20">
          <div className="bg-white rounded-[32px] shadow-2xl ring-1 ring-border/10 p-6 sm:p-10 md:p-16">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between border-b border-border/60 pb-8 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Privacy Policy</h2>
                <p className="text-muted-foreground font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Last Updated: {lastUpdated}
                </p>
              </div>
              <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2.5 shadow-sm">
                <Shield className="w-4 h-4" />
                Data Protection
              </div>
            </div>

            {/* Introduction */}
            <div className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-10 sm:mb-12 font-medium text-justify">
              <p>
                At <strong className="text-foreground">Seilavo Tours</strong> ("we", "us", or "our"), accessible from <Link to="/" className="text-primary hover:underline font-bold">www.seilavotours.com</Link>, one of our main priorities is the privacy of our visitors and clients. This document explains the types of information we collect and how we use it to provide you with an unforgettable Sri Lankan experience.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              
              {/* Section 1 */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/15 p-3 rounded-2xl text-accent shadow-sm">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">1. Information We Collect</h3>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                  <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our tours, or when you contact us.</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p><strong>Contact & Inquiries:</strong> Name, email address, phone number, and the contents of your message.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p><strong>Custom Packages:</strong> Travel preferences, budget estimations, arrival/departure dates, and specific destination requests.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p><strong>Booking Details:</strong> Full passenger names, passport details (only for required hotel/train bookings), and dietary/medical requirements.</p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/15 p-3 rounded-2xl text-primary shadow-sm">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">2. How We Use Your Information</h3>
                </div>
                <div className="text-foreground/80 leading-relaxed text-justify">
                  <p className="mb-4">We use the information we collect in various ways, primarily to ensure your trip is perfect:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Provide, operate, and maintain our website.",
                      "Improve, personalize, and expand tour offerings.",
                      "Process travel bookings and reservations with vendors.",
                      "Communicate for customer service and updates.",
                      "Send emails and WhatsApp messages regarding your tour.",
                      "Find and prevent fraud."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-500/15 p-3 rounded-2xl text-orange-600 shadow-sm">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">3. Third-Party Services</h3>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                  <p>We may share your data with trusted third-party vendors who perform services on our behalf:</p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" /> Booking Partners
                      </h4>
                      <p className="text-sm">Hotels, specialized local guides, and transport providers in Sri Lanka necessary to fulfill your booked itinerary.</p>
                    </div>
                    <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-accent" /> Analytics
                      </h4>
                      <p className="text-sm">We use Google Analytics to track website traffic and improve user experience via cookies and web beacons.</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-orange-50 rounded-xl border border-orange-100 text-orange-800 text-sm font-medium flex items-center gap-3">
                    <Shield className="w-5 h-5 shrink-0" />
                    We never sell, rent, or trade your personal information to third parties for their marketing purposes.
                  </div>
                </div>
              </section>

              {/* Section 4 & 5 Combined */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-purple-500/15 p-2.5 rounded-xl text-purple-600 shadow-sm">
                      <Cookie className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">4. Use of Cookies</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm text-justify">
                    Like any other website, Seilavo Tours uses "cookies" to store information including visitors' preferences, and the pages visited. The information is used to optimize your experience by customizing our web page content based on browser type.
                  </p>
                </section>

                <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-blue-500/15 p-2.5 rounded-xl text-blue-600 shadow-sm">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">5. Your Rights</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm mb-4 text-justify">
                    You have the right to access, rectify, erase, or restrict processing of your personal data.
                  </p>
                  <p className="text-foreground/80 leading-relaxed text-sm text-justify">
                    If you make a request, we have one month to respond to you. Contact us to exercise these rights.
                  </p>
                </section>
              </div>

              {/* Contact Us */}
              <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 sm:p-8 border border-primary/20">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-6 text-center">Questions About Privacy?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-white/50">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mb-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-foreground mb-1">Email Us</span>
                    <a href="mailto:seilavotours@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">seilavotours@gmail.com</a>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-white/50">
                    <div className="bg-accent/10 p-3 rounded-full text-accent mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-foreground mb-1">Call Us</span>
                    <a href="tel:+94771234567" className="text-xs text-muted-foreground hover:text-accent transition-colors">+94 77 123 4567</a>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-white/50">
                    <div className="bg-palm/10 p-3 rounded-full text-palm mb-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-foreground mb-1">Visit Us</span>
                    <span className="text-xs text-muted-foreground">42 Galle Road, Colombo 03</span>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
