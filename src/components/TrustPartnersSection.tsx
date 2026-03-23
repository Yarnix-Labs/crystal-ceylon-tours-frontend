import { useState, useEffect, useRef } from "react";
import { Award, CreditCard, Globe, BadgeCheck, Headphones } from "lucide-react";

const partners = [
  {
    name: "Sri Lanka Tourism",
    icon: <Globe className="h-6 w-6" />,
    description: "Authorized Partner",
  },
  {
    name: "Trip Advisor",
    icon: <Award className="h-6 w-6" />,
    description: "Certificate of Excellence",
  },
  {
    name: "Secure Payments",
    icon: <CreditCard className="h-6 w-6" />,
    description: "SSL Encrypted",
  },
  {
    name: "Licensed Operator",
    icon: <BadgeCheck className="h-6 w-6" />,
    description: "SLTDA Registered",
  },
  {
    name: "24/7 Support",
    icon: <Headphones className="h-6 w-6" />,
    description: "Always Available",
  },
];

const TrustPartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 bg-background relative overflow-hidden border-t border-border/30"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Label */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted-foreground text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Trusted & Certified — Your Journey is Safe With Us
          </p>
        </div>

        {/* Trust Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative flex flex-col items-center text-center p-5 sm:p-6 rounded-[20px] bg-white/50 border border-border/40 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-3 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-500">
                {partner.icon}
              </div>

              {/* Text */}
              <h4 className="relative z-10 text-xs sm:text-sm font-bold text-foreground mb-0.5 leading-tight">
                {partner.name}
              </h4>
              <p className="relative z-10 text-[10px] sm:text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPartnersSection;
