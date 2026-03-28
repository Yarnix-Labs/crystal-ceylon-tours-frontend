import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  User,
  Share2,
  Facebook,
  Twitter,
  Bookmark,
  Info
} from "lucide-react";
import { useBlogBySlug } from "@/hooks/use-public-api";
import { format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isLoading, isError } = useBlogBySlug(slug || "");

  if (isError) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            We couldn't load the article. It might have been moved or there's a temporary server issue.
          </p>
          <Link to="/blog">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="relative h-[50vh] min-h-[400px] flex items-end justify-center bg-muted/20">
          <Skeleton className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 container mx-auto px-4 pb-12 space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-12 w-2/3" />
            <div className="flex gap-6">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <div className="lg:col-span-1 space-y-6">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <Info className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            The article you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button size="lg" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pb-12 lg:pb-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium group"
      {/* Minimal Content Layout */}
      <div className="pt-28 pb-20 min-h-[70vh] bg-[#F8F9FA]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold mb-12 sm:mb-16 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
          <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            {post.categoryName || "Travel Story"}
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 max-w-5xl leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 lg:gap-10 text-white/90 font-bold text-xs md:text-sm uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                <User className="h-4 w-4" />
              </div>
              <span>{post.authorName}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                <Calendar className="h-4 w-4" />
              </div>
              <span>{format(new Date(post.publishedAt), "MMMM dd, yyyy")}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <Clock className="h-4 w-4" />
                </div>
                <span>{post.readingTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Lead Excerpt */}
              <div className="mb-12">
                <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-relaxed italic border-l-4 border-primary pl-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Main Body Content */}
              <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">
                {/* 
                  Assuming the content is rich text or potentially includes HTML-style line breaks.
                  We split by newlines and wrap in paragraphs for a standard look if it's plain text.
                  If it was HTML, we'd use dangerouslySetInnerHTML.
                */}
                <div className="text-muted-foreground leading-[1.9] text-lg space-y-8">
                  {post.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() ? (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ) : (
                      <div key={index} className="h-2" />
                    )
                  ))}
                </div>
              </div>



              {/* Author Bio Section */}
              <div className="mt-16 p-8 bg-card rounded-3xl border border-border shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="h-24 w-24 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] block mb-2">Written By</span>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-3">{post.authorName}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Expert contributor at Crystal Ceylon Tours, sharing deep insights and passion for Sri Lanka's cultural heritage, wildlife, and natural beauty.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-10">
                {/* Share Card */}
                <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                  <h4 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-primary" />
                    Spread the Word
                  </h4>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#1877F2] text-white font-bold hover:shadow-lg hover:shadow-[#1877F2]/20 transition-all duration-300">
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#1DA1F2] text-white font-bold hover:shadow-lg hover:shadow-[#1DA1F2]/20 transition-all duration-300">
                      <Twitter className="h-5 w-5" />
                      <span>Twitter</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-muted text-foreground font-bold hover:bg-muted/80 transition-all duration-300">
                      <Bookmark className="h-5 w-5" />
                      <span>Save for Later</span>
                    </button>
                  </div>
                </div>

                {/* Engagement CTA */}
                <div className="bg-accent rounded-3xl p-8 text-accent-foreground relative overflow-hidden group shadow-xl">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <h4 className="font-display text-xl font-bold mb-4 relative z-10 font-bold">Plan Your Own Story</h4>
                  <p className="text-accent-foreground/80 text-sm mb-6 leading-relaxed relative z-10 leading-relaxed font-medium">
                    Inspired by this article? Let us help you experience Sri Lanka firsthand with a custom-designed tour itinerary.
                  </p>
                  <Link to="/contact" className="relative z-10 block">
                    <Button className="w-full bg-white text-accent hover:bg-white/90 py-6 text-base font-black rounded-2xl shadow-lg" size="lg">
                      Start Planning
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          
          {/* Primary Post Header */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-foreground mb-6 leading-[1.2] tracking-tight">
            {post.title}
          </h1>
          
          {/* 3 Items: Author, Date, Read Time */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground font-medium mb-12 pb-8 border-b border-border/40">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Clean Long Description Standard */}
          <div className="prose prose-lg sm:prose-xl max-w-none">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return <p key={index} className="text-foreground/80 font-medium text-sm sm:text-base md:text-[17px] leading-[1.8] text-justify sm:text-left mb-8">{block.content as string}</p>;
                case 'heading':
                case 'subheading':
                  return null;
                case 'list':
                  return (
                    <div key={index}>
                      {(block.content as string[]).map((item, i) => (
                        <p key={`${index}-${i}`} className="text-foreground/80 font-medium text-sm sm:text-base md:text-[17px] leading-[1.8] text-justify sm:text-left mb-8">{item}</p>
                      ))}
                    </div>
                  );
                case 'quote':
                  return <p key={index} className="text-foreground/80 font-medium text-sm sm:text-base md:text-[17px] leading-[1.8] text-justify sm:text-left mb-8">{block.content as string}</p>;
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
