import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingEnquiryForm from "@/components/BookingEnquiryForm";
import { useTourPackageBySlug, useThingToDoBySlug } from "@/hooks/use-public-api";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookNow = () => {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  const navigate = useNavigate();

  const isTour = type === "tour";
  const isActivity = type === "activity";

  const { data: tour, isLoading: isLoadingTour } = useTourPackageBySlug(isTour ? (slug || "") : "");
  const { data: activity, isLoading: isLoadingActivity } = useThingToDoBySlug(isActivity ? (slug || "") : "");

  const isLoading = isLoadingTour || isLoadingActivity;
  const item = isTour ? tour : activity;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      {!isLoading && item && (
        <section className="relative h-[25vh] sm:h-[30vh] min-h-[200px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={(isTour ? tour?.heroImage : activity?.image) || activity?.coverImage || activity?.heroImage} 
              alt={isTour ? tour?.name : activity?.title}
              className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 pt-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              {isTour ? tour?.name : activity?.title}
            </h1>
          </div>
        </section>
      )}

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Button 
              variant="ghost" 
              className="gap-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          {isLoading ? (
            <div className="max-w-4xl mx-auto space-y-8">
              <Skeleton className="h-[200px] w-full rounded-[20px]" />
              <Skeleton className="h-[600px] w-full rounded-[28px]" />
            </div>
          ) : (
            <div className="animate-fade-in-up">
              {/* Reference Header (Simplified) */}
              <div className="text-center mb-10">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2 px-4 italic">
                  Complete Your Booking Enquiry
                </h2>
                <div className="w-16 h-1 bg-accent/40 mx-auto mt-4 rounded-full" />
              </div>

              <BookingEnquiryForm 
                tourId={item?.id}
                tourName={isTour ? tour?.name : activity?.title}
                duration={isTour ? tour?.packageDuration : activity?.duration}
                capacity={isTour ? `${tour?.minPeople} Persons` : "Standard"}
                referenceNo={isTour ? tour?.tourRefNumber : activity?.id?.toString()}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookNow;
