import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const phoneNumber = "+94771234567";
  const message = "Hello! I'm interested in booking a tour to Sri Lanka.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:animate-none hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse ring animation */}
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
            <span className="absolute h-full w-full animate-pulse rounded-full bg-[#25D366] opacity-20" />
            
            {/* Icon */}
            <img src={whatsappIcon} alt="WhatsApp" className="relative h-8 w-8 brightness-0 invert" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>Chat with us on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
