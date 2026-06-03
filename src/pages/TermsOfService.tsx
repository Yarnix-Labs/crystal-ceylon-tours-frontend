import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-image.jpg";

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
      
      <div className="py-20 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-20">
          <div className="bg-card rounded-[24px] sm:rounded-[32px] shadow-xl ring-1 ring-border/30 p-8 sm:p-12 md:p-16">
            <p className="text-muted-foreground mb-10 font-medium border-b pb-4">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-slate prose-lg max-w-none font-sans prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-p:font-medium prose-li:text-foreground prose-li:font-medium">
              
              <p>
                Welcome to <strong>Crystal Ceylon Tours</strong>. By booking a tour, utilizing our services, or accessing <Link to="/" className="text-primary hover:underline">crystalceylontours.com</Link>, you agree to be bound by the following Terms and Conditions. Please read them carefully before making a booking.
              </p>

              <h2>1. Booking and Payment Policies</h2>
              <ul>
                <li><strong>Confirmation:</strong> A booking is considered confirmed only upon receipt of a minimum deposit of 30% of the total tour cost, unless otherwise agreed in writing.</li>
                <li><strong>Final Payment:</strong> The remaining balance must be paid at least 14 days prior to your arrival date in Sri Lanka. For last-minute bookings (within 14 days of arrival), full payment is required upfront.</li>
                <li><strong>Payment Methods:</strong> We accept payments via bank transfer, major credit cards via our secure online payment gateway, and cash (in approved currencies) upon arrival under specific agreed conditions.</li>
              </ul>

              <h2>2. Cancellation and Refund Policy</h2>
              <p>We understand that travel plans can change. Cancellations must be made in writing. Our standard cancellation policy is as follows:</p>
              <ul>
                <li><strong>30+ Days before arrival:</strong> 100% refund of deposit (excluding non-refundable hotel/train bookings already secured on your behalf and transaction fees).</li>
                <li><strong>15 - 29 Days before arrival:</strong> 50% refund of the total tour cost.</li>
                <li><strong>7 - 14 Days before arrival:</strong> 25% refund of the total tour cost.</li>
                <li><strong>Less than 7 Days / No Shows:</strong> No refund will be issued.</li>
              </ul>
              <p><em>Note: Certain luxury hotels, national park safaris, and train tickets maintain strict non-refundable policies year-round. These specific costs cannot be refunded regardless of the cancellation window.</em></p>

              <h2>3. Tour Modifications</h2>
              <p>
                Crystal Ceylon Tours reserves the right to modify itineraries, accommodations, and transport arrangements due to unforeseen circumstances such as severe weather, natural disasters, political instability, or road closures. In such events, we will provide alternative arrangements of a comparable standard.
              </p>
              <p>
                If you wish to modify your itinerary after the tour has commenced, any additional costs incurred will be your responsibility.
              </p>

              <h2>4. Customer Responsibilities</h2>
              <ul>
                <li><strong>Travel Documents:</strong> It is your responsibility to ensure you possess a valid passport (with at least 6 months validity from the date of arrival) and the appropriate Sri Lankan ETA (Electronic Travel Authorization) or Visa.</li>
                <li><strong>Travel Insurance:</strong> We strongly recommend that all clients purchase comprehensive travel insurance that covers medical expenses, trip cancellation, personal liability, and loss of luggage. Crystal Ceylon Tours does not provide travel insurance.</li>
                <li><strong>Health & Fitness:</strong> You must ensure you are medically fit to participate in the booked activities (e.g., hiking, diving, safaris).</li>
              </ul>

              <h2>5. Limitation of Liability</h2>
              <p>
                Crystal Ceylon Tours acts solely as an agent for the various independent suppliers that provide hotel accommodations, transportation, sightseeing activities, and other services connected with your tour.
              </p>
              <p>
                We shall not be liable for any injury, damage, loss, accident, delay, or irregularity that may be caused by the defect of any vehicle, or the negligence or default of any company or person engaged in carrying out these services. We are not liable for losses or expenses arising from sickness, weather, strikes, war, quarantine, or other causes beyond our direct control (Force Majeure).
              </p>

              <h2>6. Force Majeure</h2>
              <p>
                Crystal Ceylon Tours cannot accept liability or pay any compensation where the performance or prompt performance of our contractual obligations is prevented or affected by "Force Majeure". These events include, but are not limited to, war, threat of war, civil strife, terrorist activity, industrial dispute, natural disasters, adverse weather conditions, and government actions.
              </p>

              <h2>7. Complaints and Disputes</h2>
              <p>
                If you experience any issues during your tour, you must immediately inform your designated tour guide or our 24/7 support team so that we can attempt to resolve the matter promptly. Any unresolved disputes shall be subject to the exclusive jurisdiction of the courts of the Democratic Socialist Republic of Sri Lanka.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> crystalceylon76@gmail.com</li>
                <li><strong>Phone:</strong> +94 77 123 4567</li>
              </ul>

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
