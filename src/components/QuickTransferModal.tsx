import React, { useState, useEffect, useCallback } from "react";
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
  MessageSquare,
  Loader2,
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { getPublicVehicles, createQuickBooking } from "@/api/services/public";
import type { Vehicle } from "@/lib/data/vehicle";
import type { QuickBookingPayload } from "@/lib/data/quickBooking";

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
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoadingVehicles, setIsLoadingVehicles] = useState(false);

  const fetchVehicles = useCallback(async () => {
    setIsLoadingVehicles(true);
    try {
      const data = await getPublicVehicles();
      setVehicles(data);
    } catch (error) {
      console.error("Failed to fetch vehicles:", error);
      toast({
        title: "Error",
        description: "Could not load vehicle list. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingVehicles(false);
    }
  }, [toast]);

  useEffect(() => {
    if (open) {
      fetchVehicles();
    }
  }, [open, fetchVehicles]);

  const handlePickupChange = (value: string) => {
    setPickupLocation(value);
  };

  const handleDropoffChange = (value: string) => {
    setDropoffLocation(value);
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
    setMessage("");
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
    name;

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setIsSubmitting(true);

    try {
      const transferLabel =
        transferTypes.find((t) => t.id === selectedType)?.label || selectedType;
      
      const payload: QuickBookingPayload = {
        transferType: transferLabel,
        pickupLocation: pickupLocation,
        dropLocation: dropoffLocation,
        vehicleId: parseInt(vehicleType),
        passengersCount: parseInt(passengers),
        date: date,
        pickupTime: time,
        name: name,
        email: email || undefined,
        mobileNo: mobileNo || undefined,
        message: message || undefined,
      };

      await createQuickBooking(payload);

      toast({
        title: "Success!",
        description: "Your transfer inquiry has been submitted successfully.",
        className: "bg-green-50 border-green-200 text-green-800",
      });

      handleClose(false);
    } catch (error) {
      console.error("Failed to submit quick booking:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  // Get selected transfer type icon for dropdown display
  const selectedTransferType = transferTypes.find((t) => t.id === selectedType);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[620px] max-h-[92vh] flex flex-col p-0 gap-0 rounded-[24px] border-0 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-accent via-accent to-ocean-dark p-7 sm:p-9 rounded-t-[24px] overflow-hidden">
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
            <div className="flex items-center gap-3.5 mb-1.5">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Quick Transfer
              </DialogTitle>
            </div>
            <DialogDescription className="text-white text-[14px] sm:text-[15px] font-medium pl-13.5 opacity-100 leading-relaxed max-w-[400px]">
              Fill in the details below to book your transfer instantly
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body — Single Page Form */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
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
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all pl-4"
              />
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
                className="h-11 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all pl-4"
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
                  <SelectValue placeholder={isLoadingVehicles ? "Loading vehicles..." : "Select vehicle"} />
                </SelectTrigger>
                <SelectContent>
                  {isLoadingVehicles ? (
                    <div className="flex items-center justify-center p-4">
                      <Loader2 className="h-4 w-4 animate-spin text-accent" />
                    </div>
                  ) : vehicles.length === 0 ? (
                    <div className="p-4 text-center text-sm text-muted-foreground">
                      No vehicles available
                    </div>
                  ) : (
                    vehicles.map((v) => (
                      <SelectItem key={v.id.toString()} value={v.id.toString()}>
                        <span className="flex items-center gap-2">
                          {v.type}
                          <span className="text-muted-foreground text-xs">
                            ({v.model} — Max {v.passengers})
                          </span>
                        </span>
                      </SelectItem>
                    ))
                  )}
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
                Email Address <span className="text-muted-foreground/60 font-normal ml-1">(Optional)</span>
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
                Mobile Number <span className="text-muted-foreground/60 font-normal ml-1">(Optional)</span>
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

          {/* Message Field */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-foreground/90">
              <MessageSquare className="h-4 w-4 text-accent" />
              Additional Message <span className="text-muted-foreground/60 font-normal ml-1">(Optional)</span>
            </label>
            <Textarea
              placeholder="Any special requests or details..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px] bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all resize-none"
            />
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
