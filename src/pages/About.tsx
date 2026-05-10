import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Award, Users, Heart, Globe } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

import ammMalinga from "@/assets/aboutusimages/AMM Malinga(Travel Consultant).jpeg";
import djAnanda from "@/assets/aboutusimages/DJ Ananda(Managing Director).jpeg";
import jayaniApsara from "@/assets/aboutusimages/Jayani Apsara(Director).jpeg";
import tharakaWalawage from "@/assets/aboutusimages/Tharaka Walawage(Managing Director).jpeg";
import uduliAnjana from "@/assets/aboutusimages/Uduli Anjana(Travl Consultant).jpeg";
import yasithNawanjana from "@/assets/aboutusimages/Yasith Nawanjana(IT Support System Admin).jpeg";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "15,000+", label: "Happy Travelers" },
  { value: "50+", label: "Tour Packages" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We live and breathe Sri Lanka. Our passion for this beautiful island drives everything we do.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every traveler is unique. We craft bespoke experiences tailored to your interests and preferences.",
  },
  {
    icon: Award,
    title: "Local Expertise",
    description: "Our team of local guides brings insider knowledge and authentic cultural connections.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description: "We're committed to responsible travel that benefits local communities and preserves nature.",
  },
];

const team = [
  { name: "Tharaka Walawage", role: "Managing Director", image: tharakaWalawage },
  { name: "DJ Ananda", role: "Managing Director", image: djAnanda },
  { name: "Jayani Apsara", role: "Director", image: jayaniApsara },
  { name: "AMM Malinga", role: "Travel Consultant", image: ammMalinga },
  { name: "Uduli Anjana", role: "Travel Consultant", image: uduliAnjana },
  { name: "Yasith Nawanjana", role: "IT Support System Admin", image: yasithNawanjana },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="About Crystal Ceylon"
        subtitle="Your trusted partner for authentic Sri Lankan travel experiences since 2022"
        backgroundImage={aboutHero}
        breadcrumb="About Us"
      />

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label opacity-0 animate-fade-in-up">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Born from a Love for Sri Lanka
            </h2>
            <div className="space-y-4 sm:space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-medium leading-relaxed text-justify">
                Crystal Ceylon was founded in 2022 by Tharaka Walawage, a passionate traveler who wanted to share 
                the magic of Sri Lanka with the world. What started as a small family operation has grown into 
                one of the most trusted tour companies on the island.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-medium leading-relaxed text-justify">
                We believe that travel should be transformative. That's why we go beyond typical tourist trails 
                to offer authentic experiences that connect you with Sri Lanka's rich culture, stunning landscapes, 
                and warm-hearted people.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-medium leading-relaxed text-justify">
                Today, our team of experienced local guides and travel experts continue to craft unforgettable 
                journeys, whether you're climbing ancient rock fortresses, sipping tea in misty highlands, 
                or spotting leopards in the wild.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-label opacity-0 animate-fade-in-up">Our Team</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Meet the Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
                  {/* Decorative background circle */}
                  <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 -m-2 md:-m-3" />
                  
                  {/* Image container with ring */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-4 ring-background group-hover:ring-primary/20 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating badge for role on hover (optional enhancement) */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-primary/10 hidden md:block">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">
                      Expert Team
                    </p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 font-semibold text-sm md:text-base uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-label opacity-0 animate-fade-in-up">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/80 text-xs sm:text-sm font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default About;
