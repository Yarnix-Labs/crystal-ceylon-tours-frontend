import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-image.jpg";

const PrivacyPolicy = () => {
  const lastUpdated = "June 3, 2026";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | Crystal Ceylon Tours"
        description="Learn how Crystal Ceylon Tours collects, uses, and protects your personal information when booking Sri Lanka travel packages."
        canonical="/privacy-policy"
      />
      <Navbar />
      
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect your personal information at Crystal Ceylon Tours."
        backgroundImage={heroImage}
        breadcrumb="Privacy Policy"
      />
      
      <div className="py-20 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-20">
          <div className="bg-card rounded-[24px] sm:rounded-[32px] shadow-xl ring-1 ring-border/30 p-8 sm:p-12 md:p-16">
            <p className="text-muted-foreground mb-10 font-medium border-b pb-4">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-slate prose-lg max-w-none font-sans prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-p:font-medium prose-li:text-foreground prose-li:font-medium">
              
              <p>
                At <strong>Crystal Ceylon Tours</strong> ("we", "us", or "our"), accessible from <Link to="/" className="text-primary hover:underline">crystalceylontours.com</Link>, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by Crystal Ceylon Tours and how we use it.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
              </p>
              <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              <ul>
                <li><strong>Contact Forms & Inquiries:</strong> Name, email address, phone number, and the contents of your message.</li>
                <li><strong>Custom Package Forms:</strong> Travel preferences, budget estimations, arrival/departure dates, number of travelers, and specific destination requests.</li>
                <li><strong>Booking Forms:</strong> Full passenger names, passport details (only when required for hotel/train bookings), dietary requirements, and medical conditions necessary for safe travel.</li>
                <li><strong>Newsletter Forms:</strong> Email addresses and names for marketing communications.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul>
                <li>Provide, operate, and maintain our website.</li>
                <li>Improve, personalize, and expand our website and tour offerings.</li>
                <li>Process your travel bookings, itinerary planning, and reservations with third-party vendors (hotels, transportation).</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                <li>Send you emails and WhatsApp messages regarding your tour.</li>
                <li>Find and prevent fraud.</li>
              </ul>

              <h2>3. Third-Party Services & Analytics</h2>
              <p>
                We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include:
              </p>
              <ul>
                <li><strong>Booking Partners:</strong> Hotels, specialized local guides, and transport providers in Sri Lanka necessary to fulfill your booked itinerary.</li>
                <li><strong>Analytics:</strong> We use Google Analytics and similar services to track website traffic and user behavior to improve our user experience. These tools may use cookies and web beacons.</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>

              <h2>4. Use of Cookies</h2>
              <p>
                Like any other website, Crystal Ceylon Tours uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>

              <h2>5. Your Data Protection Rights</h2>
              <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <ul>
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
              </ul>
              <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

              <h2>6. Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> crystalceylon76@gmail.com</li>
                <li><strong>Phone:</strong> +94 77 123 4567</li>
                <li><strong>Address:</strong> 42 Galle Road, Colombo 03, Sri Lanka</li>
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

export default PrivacyPolicy;
