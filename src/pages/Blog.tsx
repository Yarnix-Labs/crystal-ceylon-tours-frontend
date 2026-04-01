import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useBlogsList } from "@/hooks/use-public-api";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(pageParam ? parseInt(pageParam) : 1);

  const { data: response, isLoading, isError } = useBlogsList(currentPage);
  const posts = response?.items || [];
  const meta = response?.meta;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam]);

  const featuredPost = currentPage === 1 && posts.length > 0 ? posts[0] : null;
  const blogPosts = currentPage === 1 ? posts.slice(1) : posts;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </section>
        
        <section className="py-20 container mx-auto px-4">
          <Skeleton className="w-full h-[400px] rounded-[32px] mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[250px] w-full rounded-[20px]" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (isError || posts.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">No Articles Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            Check back later for exciting Sri Lanka travel stories and tips.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
      {featuredPost && (
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
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {featuredPost.categoryName && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  {featuredPost.categoryName}
                </div>
                )}
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
                    <span className="text-foreground">{featuredPost.authorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{featuredPost.readingTime || "5 min read"}</span>
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
      )}

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
                    src={post.coverImage}
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

          {/* Pagination */}
          {meta && meta.totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: meta.totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < meta.totalPages) handlePageChange(currentPage + 1);
                      }}
                      className={currentPage === meta.totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
