import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-image.jpg";
import { 
  FileText, 
  CreditCard, 
  RefreshCw, 
  RefreshCcw, 
  UserCheck, 
  ShieldAlert, 
  CloudLightning, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "June 3, 2026";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms and Conditions | Crystal Ceylon Tours"
        description="Read the terms and conditions for booking tours and travel packages with Crystal Ceylon Tours in Sri Lanka."
        canonical="/terms-of-service"
      />
      <Navbar />
      
      <PageHero
        title="Terms & Conditions"
        subtitle="Important information regarding your booking with Crystal Ceylon Tours."
        backgroundImage={heroImage}
        breadcrumb="Terms & Conditions"
      />
      
      <div className="py-20 bg-muted/20 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-4xl -mt-16 relative z-20">
          <div className="bg-white rounded-[32px] shadow-2xl ring-1 ring-border/10 p-6 sm:p-10 md:p-16">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between border-b border-border/60 pb-8 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">Terms & Conditions</h2>
                <p className="text-muted-foreground font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Last Updated: {lastUpdated}
                </p>
              </div>
              <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2.5 shadow-sm">
                <FileText className="w-4 h-4" />
                Legal Agreement
              </div>
            </div>

            {/* Introduction */}
            <div className="text-lg text-foreground/80 leading-relaxed mb-12 font-medium">
              <p>
                Welcome to <strong className="text-foreground">Crystal Ceylon Tours</strong>. By booking a tour, utilizing our services, or accessing <Link to="/" className="text-primary hover:underline font-bold">crystalceylontours.com</Link>, you agree to be bound by the following Terms and Conditions. Please read them carefully before making a booking.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              
              {/* Section 1 */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/15 p-3 rounded-2xl text-accent shadow-sm">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">1. Booking and Payment Policies</h3>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p><strong>Confirmation:</strong> A booking is considered confirmed only upon receipt of a minimum deposit of 30% of the total tour cost, unless otherwise agreed in writing.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p><strong>Final Payment:</strong> The remaining balance must be paid at least 14 days prior to your arrival date in Sri Lanka. For last-minute bookings (within 14 days of arrival), full payment is required upfront.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p><strong>Payment Methods:</strong> We accept payments via bank transfer, major credit cards via our secure online payment gateway, and cash (in approved currencies) upon arrival under specific agreed conditions.</p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-500/15 p-3 rounded-2xl text-red-600 shadow-sm">
                    <RefreshCcw className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">2. Cancellation and Refund Policy</h3>
                </div>
                <div className="text-foreground/80 leading-relaxed">
                  <p className="mb-4">We understand that travel plans can change. Cancellations must be made in writing. Our standard cancellation policy is as follows:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center justify-center">
                      <span className="text-sm font-bold text-foreground mb-1">30+ Days Before</span>
                      <span className="text-2xl font-bold text-green-500">100% Refund</span>
                      <span className="text-xs text-muted-foreground mt-1">Excludes non-refundable bookings</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center justify-center">
                      <span className="text-sm font-bold text-foreground mb-1">15 - 29 Days Before</span>
                      <span className="text-2xl font-bold text-yellow-500">50% Refund</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center justify-center">
                      <span className="text-sm font-bold text-foreground mb-1">7 - 14 Days Before</span>
                      <span className="text-2xl font-bold text-orange-500">25% Refund</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center justify-center">
                      <span className="text-sm font-bold text-foreground mb-1">Less than 7 Days</span>
                      <span className="text-2xl font-bold text-red-500">No Refund</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100 text-red-800 text-sm font-medium flex items-center gap-3">
                    <ShieldAlert className="w-5 h-5 shrink-0" />
                    Certain luxury hotels, national park safaris, and train tickets maintain strict non-refundable policies year-round. These specific costs cannot be refunded regardless of the cancellation window.
                  </div>
                </div>
              </section>

              {/* Section 3 & 4 Combined */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-blue-500/15 p-2.5 rounded-xl text-blue-600 shadow-sm">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">3. Tour Modifications</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm mb-4">
                    Crystal Ceylon Tours reserves the right to modify itineraries, accommodations, and transport arrangements due to unforeseen circumstances such as severe weather, natural disasters, political instability, or road closures. We will provide alternative arrangements of a comparable standard.
                  </p>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    If you wish to modify your itinerary after the tour has commenced, any additional costs incurred will be your responsibility.
                  </p>
                </section>

                <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-primary/15 p-2.5 rounded-xl text-primary shadow-sm">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">4. Customer Responsibilities</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <p><strong>Travel Documents:</strong> Valid passport (6 months validity) and appropriate ETA/Visa.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <p><strong>Insurance:</strong> Comprehensive travel insurance covering medical, cancellation, and loss is strongly recommended.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <p><strong>Health & Fitness:</strong> Must be medically fit for booked activities (e.g. hiking, safaris).</p>
                    </li>
                  </ul>
                </section>
              </div>

              {/* Section 5 & 6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-orange-500/15 p-2.5 rounded-xl text-orange-600 shadow-sm">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">5. Limitation of Liability</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm mb-4">
                    Crystal Ceylon Tours acts solely as an agent for the independent suppliers providing hotel accommodations, transportation, and sightseeing activities.
                  </p>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    We shall not be liable for any injury, damage, loss, accident, delay, or irregularity caused by the defect of any vehicle, or the negligence of any company carrying out these services.
                  </p>
                </section>

                <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-purple-500/15 p-2.5 rounded-xl text-purple-600 shadow-sm">
                      <CloudLightning className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">6. Force Majeure</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm mb-4">
                    We cannot accept liability or pay compensation where performance of obligations is prevented by "Force Majeure".
                  </p>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    Events include war, threat of war, civil strife, terrorist activity, industrial dispute, natural disasters, adverse weather conditions, and government actions.
                  </p>
                </section>
              </div>
              
              {/* Section 7 */}
              <section className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/15 p-3 rounded-2xl text-accent shadow-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">7. Complaints and Disputes</h3>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>If you experience any issues during your tour, you must immediately inform your designated tour guide or our 24/7 support team so that we can attempt to resolve the matter promptly.</p>
                  <p>Any unresolved disputes shall be subject to the exclusive jurisdiction of the courts of the Democratic Socialist Republic of Sri Lanka.</p>
                </div>
              </section>

              {/* Contact Us */}
              <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 sm:p-8 border border-primary/20">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Questions About Terms?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-white/50">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mb-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-foreground mb-1">Email Us</span>
                    <a href="mailto:crystalceylon76@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">crystalceylon76@gmail.com</a>
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

export default TermsOfService;
