import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Calendar, 
  Users, 
  User, 
  Phone, 
  Mail, 
  Globe, 
  MessageSquare,
  Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookingMutation } from "@/hooks/use-public-api";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

const formSchema = z.object({
  arrivalDate: z.string().min(1, "Arrival date is required"),
  numPax: z.string().min(1, "Number of pax is required"),
  title: z.string().min(1, "Title is required"),
  fullName: z.string().min(2, "Full name is required"),
  contactNo: z.string().min(5, "Contact number is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface BookingEnquiryFormProps {
  tourId?: string | number;
  tourName?: string;
  referenceNo?: string;
  duration?: string;
  capacity?: string;
}

const BookingEnquiryForm: React.FC<BookingEnquiryFormProps> = ({
  tourId,
  tourName,
  referenceNo,
  duration,
  capacity,
}) => {
  const { toast } = useToast();
  const createBookingMutation = useCreateBookingMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      arrivalDate: "",
      numPax: "1",
      title: "Mr.",
      fullName: "",
      contactNo: "",
      email: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Submitting booking for tourId:", tourId);
      
      await createBookingMutation.mutateAsync({
        tourPackageId: tourId ? Number(tourId) : 0,
        name: values.fullName,
        email: values.email,
        phoneNumber: values.contactNo,
        whatsapp: values.contactNo,
        country: values.country,
        passengers: parseInt(values.numPax),
        clientMessage: values.message || `Inquiry for ${tourName || 'Tour'}`,
        arrivalDate: new Date(values.arrivalDate).toISOString(),
      });

      toast({
        title: "Booking Enquiry Sent!",
        description: "We have received your request and will contact you shortly.",
        className: "bg-green-50 border-green-200 text-green-800",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Top Info Bar */}
      <div className="bg-white rounded-[20px] shadow-sm border border-border/40 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Duration</div>
            <div className="text-sm font-bold text-foreground">{duration || "N/A"}</div>
          </div>
        </div>
        
        <div className="hidden sm:block h-10 w-px bg-border/40" />
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-ocean/10 flex items-center justify-center text-ocean">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Capacity</div>
            <div className="text-sm font-bold text-foreground">{capacity || "Min 2 Persons"}</div>
          </div>
        </div>

        <div className="hidden sm:block h-10 w-px bg-border/40" />

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-palm/10 flex items-center justify-center text-palm">
            <Hash className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Reference</div>
            <div className="text-sm font-bold text-foreground">{referenceNo || "N/A"}</div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-[28px] shadow-xl shadow-black/[0.03] border border-border/30 p-6 sm:p-10 md:p-12">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Plan Your Journey
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Fill out the form below and our travel experts will customize the perfect trip for you.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Arrival Date */}
              <FormField
                control={form.control}
                name="arrivalDate"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      Arrival Date *
                    </FormLabel>
                    <FormControl>
                      <Input type="date" className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl transition-all" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Number of Pax */}
              <FormField
                control={form.control}
                name="numPax"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      Total No Of Pax *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl">
                          <SelectValue placeholder="--select--" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Person" : "Persons"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Full Name */}
              <div className="space-y-2">
                <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                  <User className="h-4 w-4 text-primary" />
                  Enter Full Name *
                </FormLabel>
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="w-24 sm:w-28 flex-shrink-0">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl">
                              <SelectValue placeholder="Title" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."].map((t) => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input placeholder="Name" className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact No */}
              <FormField
                control={form.control}
                name="contactNo"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      Your Contact No. *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+94771234567" className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Address */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      Your Email Address *
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email Address" className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                      <Globe className="h-4 w-4 text-primary" />
                      Your Country *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="-- Select country --" className="h-12 bg-muted/20 border-border/40 focus:bg-white rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="flex items-center gap-2 text-foreground/90 font-bold text-sm">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Enter your message *
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter your message" 
                      className="min-h-[120px] bg-muted/20 border-border/40 focus:bg-white rounded-2xl resize-none p-4" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4 flex justify-end">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-ocean hover:bg-ocean-dark text-white font-bold rounded-xl h-14 px-10 shadow-lg shadow-ocean/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                disabled={createBookingMutation.isPending}
              >
                {createBookingMutation.isPending ? "Sending..." : "Enquire Now »"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookingEnquiryForm;
