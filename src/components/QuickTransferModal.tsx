import React, { useState } from "react";
import {
  Plane,
  Hotel,
  MapPin,
  Car,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  Send,
  Zap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

// Transfer type options
const transferTypes = [
  {
    id: "airport-pickup",
    label: "Airport Pickup",
    icon: Plane,
    description: "From Bandaranaike International Airport",
  },
  {
    id: "airport-dropoff",
    label: "Airport Drop-off",
    icon: Plane,
    description: "To Bandaranaike International Airport",
  },
  {
    id: "hotel-transfer",
    label: "Hotel Transfer",
    icon: Hotel,
    description: "Between hotels or accommodation",
  },
  {
    id: "city-transfer",
    label: "City Transfer",
    icon: MapPin,
    description: "Point-to-point city transfer",
  },
];

// Vehicle options
const vehicleTypes = [
  { id: "sedan", label: "Sedan", description: "1-3 passengers", maxPax: 3 },
  { id: "suv", label: "SUV", description: "1-5 passengers", maxPax: 5 },
  { id: "mini-van", label: "Mini Van", description: "1-7 passengers", maxPax: 7 },
  { id: "luxury-sedan", label: "Luxury Sedan", description: "1-3 passengers", maxPax: 3 },
  { id: "coaster", label: "Coaster Bus", description: "8-20 passengers", maxPax: 20 },
];

// Popular Sri Lanka locations
const popularLocations = [
  "Bandaranaike International Airport (CMB)",
  "Colombo",
  "Kandy",
  "Galle",
  "Sigiriya",
  "Ella",
  "Nuwara Eliya",
  "Mirissa",
  "Negombo",
  "Trincomalee",
  "Anuradhapura",
  "Dambulla",
  "Bentota",
  "Yala",
  "Unawatuna",
  "Hikkaduwa",
  "Arugam Bay",
  "Polonnaruwa",
  "Jaffna",
  "Batticaloa",
];

interface QuickTransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuickTransferModal: React.FC<QuickTransferModalProps> = ({
  open,
  onOpenChange,
}) => {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<string>("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [passengers, setPassengers] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState<string[]>([]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);

  const filterLocations = (query: string) => {
    if (!query.trim()) return [];
    return popularLocations.filter((loc) =>
      loc.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handlePickupChange = (value: string) => {
    setPickupLocation(value);
    const filtered = filterLocations(value);
    setPickupSuggestions(filtered);
    setShowPickupSuggestions(filtered.length > 0 && value.length > 0);
  };

  const handleDropoffChange = (value: string) => {
    setDropoffLocation(value);
    const filtered = filterLocations(value);
    setDropoffSuggestions(filtered);
    setShowDropoffSuggestions(filtered.length > 0 && value.length > 0);
  };

  const resetForm = () => {
    setSelectedType("");
    setPickupLocation("");
    setDropoffLocation("");
    setVehicleType("");
    setPassengers("");
    setDate("");
    setTime("");
    setName("");
    setEmail("");
    setMobileNo("");
    setPickupSuggestions([]);
    setDropoffSuggestions([]);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) resetForm();
    onOpenChange(isOpen);
  };

  const canSubmit =
    selectedType &&
    pickupLocation &&
    dropoffLocation &&
    vehicleType &&
    passengers &&
    date &&
    time &&
    name &&
    mobileNo;

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setIsSubmitting(true);

    // Build WhatsApp message
    const transferLabel =
      transferTypes.find((t) => t.id === selectedType)?.label || selectedType;
    const vehicleLabel =
      vehicleTypes.find((v) => v.id === vehicleType)?.label || vehicleType;

    const message =
      `🚗 *Quick Transfer Booking Request*\n\n` +
      `📋 *Transfer Type:* ${transferLabel}\n` +
      `📍 *Pickup:* ${pickupLocation}\n` +
      `📍 *Drop-off:* ${dropoffLocation}\n` +
      `🚘 *Vehicle:* ${vehicleLabel}\n` +
      `👥 *Passengers:* ${passengers}\n` +
      `📅 *Date:* ${date}\n` +
      `🕐 *Time:* ${time}\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email || "Not provided"}\n` +
      `📞 *Mobile:* ${mobileNo}`;

    const phoneNumber = "+94771234567";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);

    toast({
      title: "Opening WhatsApp...",
      description: "Your transfer request is being sent to our team.",
      className: "bg-green-50 border-green-200 text-green-800",
    });

    window.open(whatsappUrl, "_blank");
    handleClose(false);
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  // Get selected transfer type icon for dropdown display
  const selectedTransferType = transferTypes.find((t) => t.id === selectedType);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[620px] max-h-[92vh] overflow-y-auto p-0 gap-0 rounded-[24px] border-0 shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-accent via-accent to-ocean-dark p-5 sm:p-6 rounded-t-[24px] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Bottom wave */}
          <svg
            className="absolute bottom-0 left-0 w-full h-5 text-background"
            viewBox="0 0 1200 30"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,30 C200,5 400,25 600,15 C800,5 1000,25 1200,10 L1200,30 L0,30 Z"
            />
          </svg>

          <DialogHeader className="relative z-10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Zap className="h-4.5 w-4.5 text-white" />
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-display font-bold text-white">
                Quick Transfer
              </DialogTitle>
            </div>
            <DialogDescription className="text-white/80 text-xs sm:text-[13px] pl-12">
              Fill in the details below to book your transfer instantly
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body — Single Page Form */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Transfer Type — Dropdown */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
              <Car className="h-4 w-4 text-accent" />
              Transfer Type
            </label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl">
                <SelectValue placeholder="Select transfer type" />
              </SelectTrigger>
              <SelectContent>
                {transferTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <SelectItem key={type.id} value={type.id}>
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-accent shrink-0" />
                        <span>{type.label}</span>
                        <span className="text-muted-foreground text-xs hidden sm:inline">
                          — {type.description}
                        </span>
                      </span>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Pickup & Drop-off Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pickup Location */}
            <div className="space-y-1.5 relative">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <div className="w-4.5 h-4.5 rounded-full bg-palm/15 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-palm" />
                </div>
                Pickup Location
              </label>
              <Input
                placeholder="e.g. Airport, Colombo..."
                value={pickupLocation}
                onChange={(e) => handlePickupChange(e.target.value)}
                onFocus={() =>
                  setShowPickupSuggestions(pickupSuggestions.length > 0)
                }
                onBlur={() =>
                  setTimeout(() => setShowPickupSuggestions(false), 200)
                }
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all pl-4"
              />
              {showPickupSuggestions && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-border/30 max-h-36 overflow-y-auto">
                  {pickupSuggestions.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      className="w-full text-left px-4 py-2 text-sm hover:bg-accent/5 transition-colors first:rounded-t-xl last:rounded-b-xl flex items-center gap-2"
                      onMouseDown={() => {
                        setPickupLocation(loc);
                        setShowPickupSuggestions(false);
                      }}
                    >
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dropoff Location */}
            <div className="space-y-1.5 relative">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <div className="w-4.5 h-4.5 rounded-full bg-destructive/15 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                </div>
                Drop-off Location
              </label>
              <Input
                placeholder="e.g. Kandy, Galle..."
                value={dropoffLocation}
                onChange={(e) => handleDropoffChange(e.target.value)}
                onFocus={() =>
                  setShowDropoffSuggestions(dropoffSuggestions.length > 0)
                }
                onBlur={() =>
                  setTimeout(() => setShowDropoffSuggestions(false), 200)
                }
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all pl-4"
              />
              {showDropoffSuggestions && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-border/30 max-h-36 overflow-y-auto">
                  {dropoffSuggestions.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      className="w-full text-left px-4 py-2 text-sm hover:bg-accent/5 transition-colors first:rounded-t-xl last:rounded-b-xl flex items-center gap-2"
                      onMouseDown={() => {
                        setDropoffLocation(loc);
                        setShowDropoffSuggestions(false);
                      }}
                    >
                      <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Trip Details
              </span>
            </div>
          </div>

          {/* Vehicle Type & Passenger Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <Car className="h-4 w-4 text-accent" />
                Vehicle Type
              </label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl">
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((v) => (
                    <SelectItem key={v.id} value={v.id}>
                      <span className="flex items-center gap-2">
                        {v.label}
                        <span className="text-muted-foreground text-xs">
                          ({v.description})
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <Users className="h-4 w-4 text-accent" />
                Passenger Count
              </label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl">
                  <SelectValue placeholder="No. of passengers" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n} {n === 1 ? "Passenger" : "Passengers"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <Calendar className="h-4 w-4 text-accent" />
                Transfer Date
              </label>
              <Input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <Clock className="h-4 w-4 text-accent" />
                Pickup Time
              </label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Your Info
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
              <User className="h-4 w-4 text-accent" />
              Your Name
            </label>
            <Input
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all"
            />
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <Mail className="h-4 w-4 text-accent" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
                <Phone className="h-4 w-4 text-accent" />
                Mobile Number
              </label>
              <Input
                type="tel"
                placeholder="+94 7X XXX XXXX"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="button"
            disabled={!canSubmit || isSubmitting}
            onClick={handleSubmit}
            className="w-full h-12 bg-accent hover:bg-ocean-dark text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.01] active:scale-[0.99] text-[15px] mt-1"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                 Send Booking Request
              </span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickTransferModal;
