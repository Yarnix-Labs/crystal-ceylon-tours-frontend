import React, { useEffect } from "react";

const TripAdvisorRatedBadge = () => {
  useEffect(() => {
    // Inject the TripAdvisor widget script provided by the user
    const scriptUrl = "https://www.jscache.com/wejs?wtype=rated&uniq=458&locationId=34041386&lang=en_US&display_version=2";
    
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.setAttribute("data-loadtrk", "");
    
    // Explicitly type 'this' as 'any' to allow setting the custom 'loadtrk' property
    script.onload = function (this: any) {
      this.loadtrk = true;
    };

    document.body.appendChild(script);

    // Cleanup: Remove script when component unmounts
    return () => {
      const scriptElements = document.querySelectorAll(`script[src="${scriptUrl}"]`);
      scriptElements.forEach(s => {
        if (s.parentNode) {
          s.parentNode.removeChild(s);
        }
      });
    };
  }, []);

  return (
    <div className="tripadvisor-badge-container animate-fade-in pointer-events-auto">
      <div id="TA_rated458" className="TA_rated">
        <ul id="V2kqHy" className="TA_links YMyZh6Anf list-none m-0 p-0">
          <li id="lDJi3K8Ch" className="VYsHhy8">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
              className="block"
            >
              <img 
                src="https://www.tripadvisor.com/img/cdsi/img2/badges/ollie-11424-2.gif" 
                alt="TripAdvisor"
                className="w-full h-auto max-w-[120px] sm:max-w-[150px] rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TripAdvisorRatedBadge;
