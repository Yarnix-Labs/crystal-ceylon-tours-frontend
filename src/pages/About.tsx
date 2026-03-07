import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Globe, ArrowRight } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
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
  { name: "Chamara Fernando", role: "Founder & CEO", image: "CF" },
  { name: "Priya Mendis", role: "Head of Operations", image: "PM" },
  { name: "Nimal Silva", role: "Senior Tour Guide", image: "NS" },
  { name: "Rohan Jayawardena", role: "Customer Experience", image: "RJ" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="About Crystal Ceylon"
        subtitle="Your trusted partner for authentic Sri Lankan travel experiences since 2010"
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
            <div className="space-y-6 text-lg text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p>
                Crystal Ceylon was founded in 2010 by Chamara Fernando, a passionate traveler who wanted to share 
                the magic of Sri Lanka with the world. What started as a small family operation has grown into 
                one of the most trusted tour companies on the island.
              </p>
              <p>
                We believe that travel should be transformative. That's why we go beyond typical tourist trails 
                to offer authentic experiences that connect you with Sri Lanka's rich culture, stunning landscapes, 
                and warm-hearted people.
              </p>
              <p>
                Today, our team of experienced local guides and travel experts continue to craft unforgettable 
                journeys, whether you're climbing ancient rock fortresses, sipping tea in misty highlands, 
                or spotting leopards in the wild.
              </p>
            </div>
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
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center mx-auto mb-4 text-2xl md:text-3xl font-display font-bold text-primary-foreground shadow-lg">
                  {member.image}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-footer">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 opacity-0 animate-fade-in-up">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Let us create your perfect Sri Lankan adventure. Contact us today to start planning.
          </p>
          <Button size="lg" className="bg-accent hover:bg-sunset-light text-accent-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Start Planning Your Trip
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default About;
