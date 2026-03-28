import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { Calendar, User, ArrowRight, Clock, Info } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";
import { useBlogsList } from "@/hooks/use-public-api";
import { format } from "date-fns";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data: response, isLoading, isError } = useBlogsList(currentPage);

  useEffect(() => {
    if (pageParam && parseInt(pageParam) !== currentPage) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const blogs = response?.items || [];
  const meta = response?.meta;
  
  // Use the first blog of the first page as the featured post
  const featuredPost = currentPage === 1 ? blogs[0] : null;
  const otherPosts = currentPage === 1 ? blogs.slice(1) : blogs;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Travel Blog"
        subtitle="Stories, tips, and inspiration for your Sri Lankan adventure"
        backgroundImage={blogHero}
        breadcrumb="Blog"
      />

      {isError ? (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
              <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Failed to load blog posts</h3>
              <p className="text-muted-foreground mb-6">There was an error connecting to the server. Please try again later.</p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {(currentPage === 1 || isLoading) && (
            <section className="pt-20 pb-10">
              <div className="container mx-auto px-4">
                <div className="mb-12">
                  <span className="section-label">Featured Story</span>
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
                
                {isLoading ? (
                  <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
                    <div className="grid md:grid-cols-2 gap-0">
                      <Skeleton className="h-72 md:h-[400px] w-full" />
                      <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-20 w-full" />
                        <div className="flex gap-4">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : featuredPost ? (
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in-up block border border-border" 
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
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                          {featuredPost.categoryName || "Travel Guide"}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground mb-8 uppercase tracking-tighter">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            <span>{featuredPost.authorName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{format(new Date(featuredPost.publishedAt), "MMMM dd, yyyy")}</span>
                          </div>
                          {featuredPost.readingTime && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span>{featuredPost.readingTime}</span>
                            </div>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-2 text-primary font-bold group/link">
                          <span className="relative">
                            Read full article
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                          </span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : null}
              </div>
            </section>
          )}

          {/* Blog Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12">
                <span className="section-label">{currentPage === 1 ? "Latest Articles" : `Page ${currentPage} Stories`}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-card rounded-xl border border-border overflow-hidden flex flex-col h-[400px]">
                      <Skeleton className="w-full aspect-[3/2]" />
                      <div className="p-5 space-y-3 flex-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-16 w-full" />
                        <div className="mt-auto pt-4 flex gap-4">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : otherPosts.length > 0 ? (
                  otherPosts.map((post, index) => (
                    <Link
                      to={`/blog/${post.slug}`}
                      key={post.id}
                      className="group block rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-400 opacity-0 animate-fade-in-up flex flex-col h-full"
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                          {post.categoryName || "Travel"}
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

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3 text-primary" />
                            {format(new Date(post.publishedAt), "MMM dd, yyyy")}
                          </div>
                          {post.readingTime && (
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3 w-3 text-primary" />
                              {post.readingTime}
                            </div>
                          )}
                        </div>
                        
                        <h3 className="font-display text-lg md:text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                              {post.authorName.charAt(0)}
                            </div>
                            <span className="text-xs font-bold text-foreground">{post.authorName}</span>
                          </div>
                          <span className="text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-muted-foreground">No articles found.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {meta && meta.totalPages > 1 && (
                <div className="mt-20">
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
                      
                      {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((page) => {
                        if (
                          page === 1 || 
                          page === meta.totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(page);
                                }}
                                isActive={currentPage === page}
                                className="cursor-pointer"
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (
                          page === currentPage - 2 || 
                          page === currentPage + 2
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

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
              )}
            </div>
          </section>
        </>
      )}

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
