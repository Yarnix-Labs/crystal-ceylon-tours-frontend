import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import galleImg from "@/assets/galle.jpg";

const blogPosts = [
  {
    slug: "ultimate-guide-sri-lanka",
    title: "The Ultimate Guide to Sri Lanka: Everything You Need to Know",
    excerpt:
      "From ancient ruins to pristine beaches, discover why Sri Lanka is the must-visit destination of 2026.",
    image: sigiriyaImg,
    author: "Chamara Fernando",
    date: "Jan 28, 2026",
    readTime: "12 min",
    category: "Travel Guide",
    featured: true,
  },
  {
    slug: "hidden-gems-hill-country",
    title: "10 Hidden Gems in Sri Lanka's Hill Country",
    excerpt:
      "Escape the crowds and discover secret waterfalls, charming villages, and breathtaking viewpoints.",
    image: ellaImg,
    author: "Nimal Silva",
    date: "Jan 25, 2026",
    readTime: "8 min",
    category: "Destinations",
    featured: false,
  },
  {
    slug: "food-journey-colombo",
    title: "A Food Lover's Journey Through Colombo",
    excerpt:
      "From street food to fine dining, explore the vibrant culinary scene of Sri Lanka's capital.",
    image: galleImg,
    author: "Priya Mendis",
    date: "Jan 22, 2026",
    readTime: "6 min",
    category: "Food & Culture",
    featured: false,
  },
];

const BlogPreviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-secondary/40 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 text-accent text-xs font-bold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <BookOpen className="h-3.5 w-3.5" />
            Travel Blog
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-foreground mb-2 sm:mb-3">
            Stories &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Travel Tips
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,10 Q50,0 98,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-primary/40"
                />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto font-normal">
            Expert insights, local tips, and inspiring stories to help you plan the perfect Sri Lankan adventure.
          </p>
        </div>

        {/* Blog Grid - Featured + 2 Side */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Featured Post - Large Card */}
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group relative block rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-[20px] mb-5 bg-muted">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                {featuredPost.category}
              </div>

              {/* Featured Badge */}
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-wider">
                Featured
              </div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-accent" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {featuredPost.title}
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 leading-relaxed font-normal mb-5">
                {featuredPost.excerpt}
              </p>

              {/* Read more indicator */}
              <div className="flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-border/40">
                <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </span>
                <div className="w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
              </div>
            </div>
          </Link>

          {/* Side Posts - 2 Stacked */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {sidePosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 border border-white/60 ring-1 ring-border/30 flex-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[20px] bg-muted sm:w-52 md:w-60 shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full aspect-video sm:aspect-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-accent text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-3 sm:px-5 py-3 sm:py-2 flex-1">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-accent" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-accent" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="w-8 h-1 rounded-full bg-border mt-3 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-10 sm:mt-14 relative z-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-accent/40 text-accent hover:bg-accent hover:text-white rounded-full px-5 py-3 sm:px-8 sm:py-6 h-auto text-xs sm:text-sm md:text-base font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1 group"
            >
              View All Articles
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
