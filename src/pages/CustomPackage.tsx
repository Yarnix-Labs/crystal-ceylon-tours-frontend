import { useState } from "react";
import { Link } from "react-router-dom";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { format } from "date-fns";
import {
  MapPin,
  Plus,
  X,
  Calendar as CalendarIcon,
  Users,
  Clock,
  Plane,
  Send,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import packagesHero from "@/assets/packages-hero.jpg";

const existingDestinations = [
  "Sigiriya",
  "Kandy",
  "Ella",
  "Galle",
  "Mirissa",
  "Yala National Park",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Anuradhapura",
  "Dambulla",
  "Trincomalee",
  "Arugam Bay",
  "Jaffna",
  "Bentota",
  "Hikkaduwa",
  "Unawatuna",
  "Colombo",
  "Negombo",
  "Habarana",
  "Udawalawe",
];

const accommodationTypes = [
  { value: "budget", label: "Budget Friendly" },
  { value: "standard", label: "Standard (3-Star)" },
  { value: "superior", label: "Superior (4-Star)" },
  { value: "luxury", label: "Luxury (5-Star)" },
  { value: "boutique", label: "Boutique Hotels" },
];

const activities = [
  "Wildlife Safari",
  "Whale Watching",
  "Hiking & Trekking",
  "Temple & Cultural Tours",
  "Beach Activities",
  "Train Journeys",
  "Water Sports",
  "Tea Plantation Visit",
  "Cooking Class",
  "Ayurveda & Spa",
  "Photography Tour",
  "Village Experience",
];

interface DestinationEntry {
  id: string;
  name: string;
  days: number;
}

const CustomPackage = () => {
  const [destinations, setDestinations] = useState<DestinationEntry[]>([]);
  const [currentDestination, setCurrentDestination] = useState("");
  const [currentDays, setCurrentDays] = useState(1);
  const [comboOpen, setComboOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [travelers, setTravelers] = useState("2");
  const [accommodation, setAccommodation] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const addDestination = () => {
    if (currentDestination.trim()) {
      setDestinations([
        ...destinations,
        {
          id: Date.now().toString(),
          name: currentDestination.trim(),
          days: currentDays,
        },
      ]);
      setCurrentDestination("");
      setCurrentDays(1);
      setComboOpen(false);
    }
  };

  const removeDestination = (id: string) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const totalDays = destinations.reduce((sum, d) => sum + d.days, 0);

  const generateWhatsAppMessage = () => {
    const destinationsList = destinations
      .map((d) => `• ${d.name} (${d.days} ${d.days === 1 ? "day" : "days"})`)
      .join("\n");

    const activitiesList =
      selectedActivities.length > 0
        ? selectedActivities.join(", ")
        : "Not specified";

    const accommodationLabel =
      accommodationTypes.find((a) => a.value === accommodation)?.label ||
      "Not specified";

    const message = `
🌴 *CUSTOM TOUR PACKAGE REQUEST*

👤 *Contact Details:*
Name: ${name}
Email: ${email}
Phone: ${phone}

📍 *Destinations:*
${destinationsList || "Not specified"}

📅 *Trip Details:*
• Start Date: ${startDate ? format(startDate, "PPP") : "Flexible"}
• Duration: ${totalDays} ${totalDays === 1 ? "day" : "days"}
• Travelers: ${travelers}
• Accommodation: ${accommodationLabel}

🎯 *Activities:*
${activitiesList}

📝 *Special Requests:*
${specialRequests || "None"}

Looking forward to your response!
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || destinations.length === 0) {
      return;
    }
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/94771234567?text=${message}`, "_blank");
  };

  const isFormValid =
    name.trim() && email.trim() && destinations.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Create Your Dream Tour"
        subtitle="Design your perfect Sri Lanka adventure from scratch - choose destinations, activities, and let us handle the rest"
        backgroundImage={packagesHero}
        breadcrumb="Custom Package"
      />

      <section className="py-16 lg:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Destinations */}
            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-lg shadow-black/[0.03] border border-white/60 ring-1 ring-border/30 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  1
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Choose Your Destinations
                </h2>
              </div>

              {/* Added destinations */}
              {destinations.length > 0 && (
                <div className="space-y-3 mb-6">
                  {destinations.map((dest, index) => (
                    <div
                      key={dest.id}
                      className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 bg-secondary/50 rounded-xl p-3 sm:p-4 animate-fade-in"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-xs sm:text-sm shrink-0">
                        {index + 1}
                      </div>
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary hidden sm:block" />
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-foreground text-sm sm:text-base truncate block">
                          {dest.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-background rounded-lg px-2 sm:px-3 py-1 sm:py-1.5">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span className="text-xs sm:text-sm font-medium">
                          {dest.days}d
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeDestination(dest.id)}
                        className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:text-destructive shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Total Duration
                    </span>
                    <span className="font-bold text-primary">
                      {totalDays} {totalDays === 1 ? "Day" : "Days"}
                    </span>
                  </div>
                </div>
              )}

              {/* Add destination form */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Popover open={comboOpen} onOpenChange={setComboOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={comboOpen}
                        className="w-full justify-between h-12"
                      >
                        {currentDestination || "Select or type destination..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start">
                      <Command>
                        <CommandInput
                          placeholder="Search or type new destination..."
                          value={currentDestination}
                          onValueChange={setCurrentDestination}
                        />
                        <CommandList>
                          <CommandEmpty>
                            <button
                              onClick={addDestination}
                              className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded text-left"
                            >
                              <Plus className="h-4 w-4" />
                              Add "{currentDestination}" as new destination
                            </button>
                          </CommandEmpty>
                          <CommandGroup heading="Popular Destinations">
                            {existingDestinations
                              .filter((dest) =>
                                dest
                                  .toLowerCase()
                                  .includes(currentDestination.toLowerCase())
                              )
                              .map((dest) => (
                                <CommandItem
                                  key={dest}
                                  value={dest}
                                  onSelect={() => {
                                    setCurrentDestination(dest);
                                    setComboOpen(false);
                                  }}
                                >
                                  <MapPin className="mr-2 h-4 w-4" />
                                  {dest}
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-full sm:w-32">
                  <Select
                    value={currentDays.toString()}
                    onValueChange={(v) => setCurrentDays(parseInt(v))}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                        <SelectItem key={d} value={d.toString()}>
                          {d} {d === 1 ? "day" : "days"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={addDestination}
                  disabled={!currentDestination.trim()}
                  className="h-12 gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>

            {/* Step 2: Trip Details */}
            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-lg shadow-black/[0.03] border border-white/60 ring-1 ring-border/30 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  2
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

                {/* Accommodation */}
                <div className="space-y-2 md:col-span-2">
                  <Label>Accommodation Preference</Label>
                  <Select value={accommodation} onValueChange={setAccommodation}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select accommodation type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {accommodationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Step 3: Activities */}
            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-lg shadow-black/[0.03] border border-white/60 ring-1 ring-border/30 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  3
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Activities & Experiences
                </h2>
              </div>

              <p className="text-foreground/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                Select activities you'd like to include (optional)
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {activities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => toggleActivity(activity)}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-xl border-2 transition-all text-left",
                      selectedActivities.includes(activity)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                        selectedActivities.includes(activity)
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      )}
                    >
                      {selectedActivities.includes(activity) && (
                        <Check className="h-3 w-3 text-primary-foreground" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{activity}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div className="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-lg shadow-black/[0.03] border border-white/60 ring-1 ring-border/30 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  4
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
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input
                    id="phone"
                    placeholder="+1 234 567 8900"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-background rounded-xl p-3 sm:p-4 text-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {destinations.length}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Destinations</div>
                </div>
                <div className="bg-background rounded-xl p-3 sm:p-4 text-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {totalDays}
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
                  <Plane className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {selectedActivities.length}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Activities</div>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className="w-full h-12 sm:h-14 text-base sm:text-lg gap-2 sm:gap-3"
                size="lg"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                Send Request via WhatsApp
              </Button>

              <p className="text-foreground/80 font-medium text-xs sm:text-sm text-center mt-4">
                We'll review your request and get back to you within 24 hours with
                a personalized itinerary and quote.
              </p>
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
