import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  User,
  Share2,
  Facebook,
  Twitter,
  Bookmark
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogBySlug } from "@/hooks/use-public-api";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = useBlogBySlug(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-20 min-h-[70vh] bg-[#F8F9FA]/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Skeleton className="h-6 w-32 mb-12 sm:mb-16" />
            <Skeleton className="h-16 w-full mb-6 max-w-2xl" />
            <Skeleton className="h-4 w-64 mb-12" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      {post.coverImage && (
        <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 pb-12 sm:pb-16 max-w-4xl text-center">
            {post.categoryName && (
              <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
                {post.categoryName}
              </span>
            )}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-white/90 font-medium">
              <span className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <User className="h-4 w-4" />
                {post.authorName}
              </span>
              <span className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Clock className="h-4 w-4" />
                {post.readingTime || "5 min read"}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Minimal Content Layout */}
      <div className={`${post.coverImage ? 'py-16' : 'pt-32 pb-20'} min-h-[70vh] bg-[#F8F9FA]/50`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl bg-white rounded-[32px] sm:p-12 shadow-sm border border-border/40">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="gap-2 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <ChevronLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          {!post.coverImage && (
            <>
              {/* Primary Post Header if no Hero */}
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-[1.2] tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground font-medium mb-12 pb-8 border-b border-border/40">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.authorName}
                </span>
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                </span>
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime || "5 min read"}
                </span>
              </div>
            </>
          )}

          {/* Clean Long Description Standard - Using dangerouslySetInnerHTML for parsed HTML content */}
          <div 
            className="prose prose-lg sm:prose-xl max-w-none prose-headings:font-display prose-p:text-foreground/80 prose-p:font-medium prose-p:text-sm sm:prose-p:text-base md:prose-p:text-[17px] prose-p:leading-[2] whitespace-pre-wrap [&>p]:mb-8 [&>div]:mb-8 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:mb-8 [&>ol]:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
