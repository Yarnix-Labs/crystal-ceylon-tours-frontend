import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileStickyBookingBarProps {
  price: number;
  slug: string;
}

export default function MobileStickyBookingBar({ price, slug }: MobileStickyBookingBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-border/40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden flex items-center justify-between shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] transform-gpu">
      <div className="flex flex-col">
        <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Price</span>
        <span className="text-xl sm:text-2xl font-bold text-foreground leading-none">
          ${price} <span className="text-xs sm:text-sm font-medium text-muted-foreground">/ pp</span>
        </span>
      </div>
      <Link to={`/book-now/tour/${slug}`}>
        <Button size="lg" className="rounded-full bg-primary text-white shadow-xl shadow-primary/25 font-bold px-8 h-12 text-sm sm:text-base hover:bg-primary/90 transition-all active:scale-95">
          Book Now
        </Button>
      </Link>
    </div>
  );
}
