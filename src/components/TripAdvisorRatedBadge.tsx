import React from "react";

const TripAdvisorRatedBadge = () => {
  return (
    <div className="tripadvisor-badge-container animate-fade-in pointer-events-auto">
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
        className="inline-flex flex-col items-center bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
      >
        <span className="text-black font-bold text-xs sm:text-sm mb-1.5 uppercase tracking-wide">Recommended on</span>
        <img 
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
          alt="TripAdvisor"
          className="h-5 sm:h-6 w-auto mb-2.5"
        />
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((bubble) => (
            <div key={bubble} className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#34e0a1] border border-[#00AA6C] shadow-sm"></div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default TripAdvisorRatedBadge;
