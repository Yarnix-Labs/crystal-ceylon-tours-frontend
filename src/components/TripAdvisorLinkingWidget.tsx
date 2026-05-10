import React, { useEffect } from "react";

const TripAdvisorLinkingWidget = () => {
  useEffect(() => {
    // Inject the TripAdvisor widget script provided by the user
    const scriptUrl = "https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&uniq=856&locationId=34041386&lang=en_US&border=true&display_version=2";
    
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
    <div className="tripadvisor-linking-widget-container animate-fade-in pointer-events-auto mt-4">
      <div id="TA_linkingWidgetRedesign856" className="TA_linkingWidgetRedesign inline-block border-2 border-[#00AA6C] bg-white p-3">
        <ul id="dqwVYp3a" className="TA_links Rt8t2nn list-none m-0 p-0">
          <li id="O7DIeJtm" className="iQ784a3mes flex flex-col gap-2">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
              className="text-[#000000] font-bold text-sm hover:underline leading-tight block"
            >
              Read reviews of Crystal<br/>Ceylon Tours
            </a>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
              className="block mt-1"
            >
              <img 
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
                alt="TripAdvisor"
                className="h-6 w-auto"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TripAdvisorLinkingWidget;
