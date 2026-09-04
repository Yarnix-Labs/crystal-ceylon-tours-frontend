import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DestinationsSection from "@/components/DestinationsSection";
import TourPackagesSection from "@/components/TourPackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import TrustPartnersSection from "@/components/TrustPartnersSection";
import SEOContentBlock from "@/components/SEOContentBlock";
import NewsletterCTASection from "@/components/NewsletterCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "Organization"],
  "name": "Seilavo Tours",
  "url": "https://seilavotours.com",
  "logo": "https://seilavotours.com/logo-4.png",
  "image": "https://seilavotours.com/default-og-image.jpg",
  "description": "Experience the best of Sri Lanka with our custom tour packages and private tours.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94762866748",
    "contactType": "customer service",
    "email": "seilavotours@gmail.com",
    "availableLanguage": ["English"]
  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Seilavo Tours | Sri Lanka Tour Packages & Private Tours"
        description="Experience the best of Sri Lanka with our custom tour packages and private tours."
        canonical="/"
        schema={travelAgencySchema}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <TourPackagesSection />
        <DestinationsSection />
        <TestimonialsSection />
        <GallerySection />
        <BlogPreviewSection />
        <TrustPartnersSection />
        <SEOContentBlock />
        <NewsletterCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
