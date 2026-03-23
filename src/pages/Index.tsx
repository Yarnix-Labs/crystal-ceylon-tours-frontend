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

const Index = () => {
  return (
    <div className="min-h-screen">
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
