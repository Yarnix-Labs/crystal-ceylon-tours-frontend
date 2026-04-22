import React from "react";

const TripAdvisorSocialWidget = () => {
  return (
    <a 
      href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#34E0A1] hover:scale-110 transition-all duration-300 shadow-sm"
      title="Review us on TripAdvisor"
    >
      <img 
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logomark.svg" 
        alt="TripAdvisor"
        className="h-3.5 w-3.5"
      />
    </a>
  );
};

export default TripAdvisorSocialWidget;
