import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DestinationsSection from "@/components/DestinationsSection";
import TourPackagesSection from "@/components/TourPackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import TrustPartnersSection from "@/components/TrustPartnersSection";
import NewsletterCTASection from "@/components/NewsletterCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Crystal Ceylon Tours | Sri Lanka Tour Packages & Private Tours"
        description="Experience the best of Sri Lanka with our custom tour packages and private tours."
        canonical="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <DestinationsSection />
        <TourPackagesSection />
        <TestimonialsSection />
        <GallerySection />
        <BlogPreviewSection />
        <TrustPartnersSection />
        <NewsletterCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
