import { useState, useEffect, useRef } from "react";
import { Send, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Outer Card */}
          <div className="relative rounded-[22px] sm:rounded-[32px] bg-gradient-to-br from-secondary/60 via-white to-accent/5 p-1 sm:p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.04)] ring-1 ring-border/30">
            <div className="rounded-[18px] sm:rounded-[26px] bg-white p-5 sm:p-8 md:p-12 lg:p-14">
              <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16">

                {/* Left Side — Content */}
                <div className="flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                    <Sparkles className="h-3.5 w-3.5" />
                    Stay Connected
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                    Never Miss an
                  </h2>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">
                      Adventure
                    </span>
                  </h2>

                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-normal mb-5 sm:mb-8">
                    Join our community of passionate travelers and get exclusive access to deals, insider tips, and destination inspiration delivered to your inbox.
                  </p>

                  {/* Subscriber Count */}
                  <div className="flex items-center gap-3">
                    {/* Avatar dots */}
                    <div className="flex -space-x-2.5">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-accent shadow-sm" />
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-primary shadow-sm" />
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-ocean-dark shadow-sm" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-display font-bold text-foreground leading-tight">2,000+</p>
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">Happy Subscribers</p>
                    </div>
                  </div>
                </div>

                {/* Right Side — Subscribe Card */}
                <div className="w-full lg:w-[380px] shrink-0">
                  <div className="rounded-[18px] sm:rounded-[22px] bg-gradient-to-br from-accent/5 via-white to-primary/5 border border-border/40 p-5 sm:p-6 md:p-8 shadow-sm">
                    {/* Mail icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 sm:mb-5">
                      <Mail className="h-6 w-6" />
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5">
                      Subscribe Now
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-5">
                      Get weekly updates on travel deals and destinations
                    </p>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 mb-5">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 sm:h-12 rounded-xl bg-white border-border/60 text-foreground placeholder:text-muted-foreground/40 pl-10 sm:pl-11 pr-4 sm:pr-5 text-xs sm:text-sm focus-visible:ring-accent/40 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:border-accent/50"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-11 sm:h-12 rounded-xl bg-accent hover:bg-ocean-light text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-lg shadow-accent/15 hover:shadow-accent/30 hover:-translate-y-0.5 group"
                      >
                        <span className="flex items-center gap-2">
                          Subscribe to Newsletter
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </Button>
                    </form>

                    {/* Privacy note */}
                    <p className="text-muted-foreground/50 text-[11px] mb-5">
                      We respect your privacy. Read our{" "}
                      <a href="#" className="text-accent hover:underline font-semibold">
                        Privacy Policy
                      </a>
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2">
                      {[
                        "Weekly travel inspiration",
                        "Exclusive discounts & deals",
                        "Expert travel tips",
                      ].map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTASection;
