import { useState, useEffect } from "react";
import {
  createCustomBooking,
  getPublicVehicles,
} from "@/api/services/public";
import { Vehicle } from "@/lib/data/vehicle";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Users,
  Clock,
  Send,
  Check,
  Car,
} from "lucide-react";
import { cn } from "@/lib/utils";
import packagesHero from "@/assets/packages-hero.jpg";



const CustomPackage = () => {
  // ── API data ──────────────────────────────────────────────────────────────
  const [apiVehicles, setApiVehicles] = useState<Vehicle[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const vehiclesResult = await getPublicVehicles();
        setApiVehicles(vehiclesResult || []);
      } catch {
        // Non-blocking: fallback to empty lists
      } finally {
        setDataLoading(false);
      }
    };
    load();
  }, []);

  // ── Form state ────────────────────────────────────────────────────────────
  const [startDate, setStartDate] = useState<Date>();
  const [numberOfDays, setNumberOfDays] = useState("1");
  const [travelers, setTravelers] = useState("2");
  const [country, setCountry] = useState("");
  const [vehicleId, setVehicleId] = useState<string>("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const generateWhatsAppMessage = () => {
    const selectedVehicle = apiVehicles.find(v => v.id.toString() === vehicleId);

    const message = `
🌴 *CUSTOM TOUR PACKAGE REQUEST*

👤 *Contact Details:*
Name: ${name}
Email: ${email}
Phone: ${phone}

📅 *Trip Details:*
• Start Date: ${startDate ? format(startDate, "PPP") : "Flexible"}
• Duration: ${numberOfDays} ${parseInt(numberOfDays) === 1 ? "day" : "days"}
• Country: ${country || "Not specified"}
• Vehicle: ${selectedVehicle ? selectedVehicle.type : "Not specified"}
• Travelers: ${travelers}

📝 *Special Requests:*
${specialRequests || "None"}

Looking forward to your response!
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !country.trim() || !vehicleId || !startDate) {
      return;
    }

    setIsSubmitting(true);
    const loadingToastId = toast.loading("Submitting your request...", {
      description: "Please wait while we send your custom package inquiry.",
    });
    try {
      await createCustomBooking({
        fullName: name.trim(),
        email: email.trim(),
        phoneNumber: phone.trim(),
        whatsappNumber: (whatsapp || phone).trim(),
        country: country.trim(),
        vehicleId: parseInt(vehicleId),
        numberOfDays: parseInt(numberOfDays),
        startDate: startDate ? startDate.toISOString().split("T")[0] : "",
        travelers: parseInt(travelers) || 1,
        specialRequests: specialRequests.trim() || undefined,
      });

      toast.dismiss(loadingToastId);
      setIsSuccess(true);
      toast.success("Request Submitted Successfully! 🎉", {
        description:
          "We've received your custom package inquiry. Our team will get back to you within 24 hours with a personalised itinerary and quote.",
      });
    } catch (error: any) {
      toast.dismiss(loadingToastId);
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again or contact us directly.";
      toast.error("Submission Failed", {
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    name.trim() && 
    email.trim() && 
    !!startDate && 
    country.trim() && 
    vehicleId;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Create Your Dream Tour"
        subtitle="Plan your perfect Sri Lanka journey with ease - tell us your preferences and we'll handle the rest"
        backgroundImage={packagesHero}
        breadcrumb="Custom Package"
      />

      <section className="py-16 lg:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Trip Details */}
            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-lg shadow-black/[0.03] border border-white/60 ring-1 ring-border/30 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  1
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Trip Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Date */}
                <div className="space-y-2">
                  <Label>Preferred Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label>Duration (Days)</Label>
                  <Select value={numberOfDays} onValueChange={setNumberOfDays}>
                    <SelectTrigger className="h-12">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((d) => (
                        <SelectItem key={d} value={d.toString()}>
                          {d} {d === 1 ? "Day" : "Days"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Travelers */}
                <div className="space-y-2">
                  <Label>Number of Travelers</Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger className="h-12">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <SelectItem key={n} value={n.toString()}>
                          {n} {n === 1 ? "Traveler" : "Travelers"}
                        </SelectItem>
                      ))}
                      <SelectItem value="10+">10+ Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country">Your Country</Label>
                  <Input
                    id="country"
                    placeholder="e.g. United Kingdom"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Vehicle Selection */}
                <div className="space-y-2 md:col-span-2">
                  <Label>Preferred Vehicle</Label>
                  <Select value={vehicleId} onValueChange={setVehicleId}>
                    <SelectTrigger className="h-14">
                      <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder="Select a vehicle...">
                        {(() => {
                          const selected = apiVehicles.find(v => v.id.toString() === vehicleId);
                          if (!selected) return null;
                          return (
                            <div className="flex items-center gap-3">
                              {selected.images?.[0] && (
                                <img
                                  src={selected.images[0]}
                                  alt={selected.type}
                                  className="w-8 h-8 rounded-md object-cover"
                                />
                              )}
                              <span>{selected.type} ({selected.passengers} pax)</span>
                            </div>
                          );
                        })()}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {apiVehicles.map((vehicle) => (
                        <SelectItem key={vehicle.id} value={vehicle.id.toString()} className="h-16">
                          <div className="flex items-center gap-3 py-1">
                            {vehicle.images?.[0] && (
                              <img
                                src={vehicle.images[0]}
                                alt={vehicle.type}
                                className="w-10 h-10 rounded-md object-cover flex-shrink-0"
                              />
                            )}
                            <div className="flex flex-col">
                              <span className="font-medium">{vehicle.type}</span>
                              <span className="text-xs text-muted-foreground">{vehicle.passengers} passengers</span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-lg shadow-black/[0.03] border border-white/60 ring-1 ring-border/30 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  2
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Your Contact Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                  <Input
                    id="phone"
                    placeholder="+94712345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    placeholder="Same as phone if blank"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="requests">Special Requests</Label>
                  <Textarea
                    id="requests"
                    placeholder="Any specific requirements, dietary restrictions, mobility needs, or special occasions..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 lg:p-8 border-2 border-primary/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Package Summary
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="bg-background rounded-xl p-3 sm:p-4 text-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {numberOfDays}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Days</div>
                </div>
                <div className="bg-background rounded-xl p-3 sm:p-4 text-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {travelers}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Travelers</div>
                </div>
                <div className="bg-background rounded-xl p-3 sm:p-4 text-center">
                  <Car className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground text-xs sm:text-sm truncate px-1">
                    {apiVehicles.find(v => v.id.toString() === vehicleId)?.type || "Not selected"}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Vehicle</div>
                </div>
              </div>

              {isSuccess ? (
                <div className="text-center py-4 px-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">Request Submitted!</h4>
                  <p className="text-foreground/70 text-sm">
                    We've received your custom package inquiry and will get back to you within 24 hours with a personalised itinerary and quote.
                  </p>
                </div>
              ) : (
                <>
                  <Button
                    onClick={handleSubmit}
                    disabled={!isFormValid || isSubmitting}
                    className="w-full h-12 sm:h-14 text-base sm:text-lg gap-2 sm:gap-3"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                        Submit Custom Package Request
                      </>
                    )}
                  </Button>

                  <p className="text-foreground/80 font-medium text-xs sm:text-sm text-center mt-4">
                    We'll review your request and get back to you within 24 hours with
                    a personalized itinerary and quote.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default CustomPackage;
