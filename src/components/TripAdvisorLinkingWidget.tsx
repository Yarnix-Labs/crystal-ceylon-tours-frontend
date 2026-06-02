import React from "react";

const TripAdvisorLinkingWidget = () => {
  return (
    <div className="tripadvisor-linking-widget-container animate-fade-in pointer-events-auto mt-3">
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
        className="inline-flex flex-col items-center sm:items-start bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#00AA6C] group"
      >
        <span className="text-black font-bold text-xs sm:text-sm group-hover:underline leading-tight mb-2.5 text-center sm:text-left">
          Read reviews of Crystal<br/>Ceylon Tours
        </span>
        <img 
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
          alt="TripAdvisor"
          className="h-5 sm:h-6 w-auto"
        />
      </a>
    </div>
  );
};

export default TripAdvisorLinkingWidget;
