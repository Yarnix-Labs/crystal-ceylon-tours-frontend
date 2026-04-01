import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactMessageMutation } from "@/hooks/use-public-api";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["42 Galle Road", "Colombo 03", "Sri Lanka"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+94 77 123 4567", "+94 11 234 5678"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@crystalceylon.com", "bookings@crystalceylon.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8AM - 6PM", "Sunday: 9AM - 4PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phoneno: "",
    subject: "",
    message: ""
  });
  
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const mutation = useContactMessageMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email,
      Phoneno: formData.Phoneno,
      subject: formData.subject || "General Inquiry",
      message: formData.message
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        setSuccessMsg("Thank you for reaching out! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          Phoneno: "",
          subject: "",
          message: ""
        });
      },
      onError: (err: any) => {
        setErrorMsg(err?.response?.data?.message || "Something went wrong. Please try again.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Let's plan your dream Sri Lankan adventure together."
        backgroundImage={contactHero}
        breadcrumb="Contact"
      />

      {/* Contact Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-foreground/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                     Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="h-12" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="h-12" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" name="Phoneno" value={formData.Phoneno} onChange={handleInputChange} placeholder="+1 234 567 8900" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What is this regarding?" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream Sri Lankan adventure..."
                    className="min-h-32 resize-none"
                    required
                  />
                </div>

                {successMsg && <div className="p-4 bg-green-50 text-green-600 rounded-lg text-sm font-medium">{successMsg}</div>}
                {errorMsg && <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">{errorMsg}</div>}

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-ocean-dark h-14 text-lg" disabled={mutation.isPending}>
                  {mutation.isPending ? "Sending..." : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                Get in Touch
              </h2>
              <p className="text-foreground/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-8">
                Prefer to reach out directly? Here's how you can contact us.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.title}
                      className="group relative bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-foreground/80 text-xs sm:text-sm font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-palm to-palm-dark rounded-2xl p-8 text-center">
                <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Chat with Us on WhatsApp
                </h3>
                <p className="text-white/90 mb-6">
                  Get instant responses and personalized travel advice.
                </p>
                <Button size="lg" className="bg-white text-palm hover:bg-white/90">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
            <p className="text-foreground/80 font-medium text-sm md:text-base">
              Interactive map would be displayed here
            </p>
            <p className="text-foreground/80 font-medium text-xs sm:text-sm mt-2">
              42 Galle Road, Colombo 03, Sri Lanka
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
