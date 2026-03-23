import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import ellaImg from "@/assets/ella.jpg";
import galleImg from "@/assets/galle.jpg";
import yalaImg from "@/assets/yala.jpg";
import mirissaImg from "@/assets/mirissa.jpg";
import kandyImg from "@/assets/kandy.jpg";

const featuredPost = {
  slug: "ultimate-guide-sri-lanka",
  title: "The Ultimate Guide to Sri Lanka: Everything You Need to Know",
  excerpt: "From ancient ruins to pristine beaches, discover why Sri Lanka is the must-visit destination of 2026. This comprehensive guide covers the best times to visit, top destinations, and insider tips.",
  image: sigiriyaImg,
  author: "Chamara Fernando",
  date: "January 28, 2026",
  readTime: "12 min read",
  category: "Travel Guide",
};

const blogPosts = [
  {
    slug: "hidden-gems-hill-country",
    title: "10 Hidden Gems in Sri Lanka's Hill Country",
    excerpt: "Escape the crowds and discover secret waterfalls, charming villages, and breathtaking viewpoints.",
    image: ellaImg,
    author: "Nimal Silva",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Destinations",
  },
  {
    slug: "food-journey-colombo",
    title: "A Food Lover's Journey Through Colombo",
    excerpt: "From street food to fine dining, explore the vibrant culinary scene of Sri Lanka's capital.",
    image: galleImg,
    author: "Priya Mendis",
    date: "January 22, 2026",
    readTime: "6 min read",
    category: "Food & Culture",
  },
  {
    slug: "safari-photography-yala",
    title: "Safari Photography Tips for Yala National Park",
    excerpt: "Expert advice on capturing stunning wildlife shots, including the elusive Sri Lankan leopard.",
    image: yalaImg,
    author: "Rohan Jayawardena",
    date: "January 18, 2026",
    readTime: "10 min read",
    category: "Wildlife",
  },
  {
    slug: "whale-watching-guide",
    title: "Best Beaches for Whale Watching in Sri Lanka",
    excerpt: "When and where to spot blue whales, sperm whales, and dolphins off the Sri Lankan coast.",
    image: mirissaImg,
    author: "Chamara Fernando",
    date: "January 15, 2026",
    readTime: "7 min read",
    category: "Marine Life",
  },
  {
    slug: "temple-etiquette",
    title: "Temple Etiquette: Visiting Sacred Sites Respectfully",
    excerpt: "Essential dos and don'ts for visiting Buddhist temples and Hindu kovils in Sri Lanka.",
    image: kandyImg,
    author: "Nimal Silva",
    date: "January 10, 2026",
    readTime: "5 min read",
    category: "Culture",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Travel Blog"
        subtitle="Stories, tips, and inspiration for your Sri Lankan adventure"
        backgroundImage={blogHero}
        breadcrumb="Blog"
      />

      {/* Featured Post */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mb-12 opacity-0 animate-fade-in-up">
            <span className="section-label">Featured Story</span>
          </div>
          
          <Link 
            to={`/blog/${featuredPost.slug}`}
            className="group relative bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up block" 
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-72 md:h-[400px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-foreground/80 font-medium text-sm md:text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-foreground/80 font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <span
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  <span className="relative">
                    Read full article
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mb-12 opacity-0 animate-fade-in-up">
            <span className="section-label">Latest Articles</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.title}
                className="group relative flex flex-col rounded-[20px] sm:rounded-[24px] bg-white p-2 sm:p-2.5 shadow-lg shadow-black/[0.03] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 border border-white/60 ring-1 ring-border/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[14px] sm:rounded-[18px] mb-3 sm:mb-4 bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="px-2 sm:px-3 pb-2 flex flex-col flex-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/80 font-medium text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between text-primary font-semibold text-xs sm:text-sm pt-3 border-t border-border/40">
                    <span className="flex items-center gap-1.5 sm:gap-2 group-hover:gap-2.5 sm:group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <div className="w-6 sm:w-8 h-1 rounded-full bg-border transition-all duration-300 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
