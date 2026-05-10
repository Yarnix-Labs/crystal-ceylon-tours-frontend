import React from "react";

const TripAdvisorLinkingWidget = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            background: transparent; 
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .TA_linkingWidgetRedesign, .TA_links {
            margin: 0 !important;
            text-align: left !important;
          }
        </style>
      </head>
      <body>
        <div id="TA_linkingWidgetRedesign856" class="TA_linkingWidgetRedesign">
          <ul id="dqwVYp3a" class="TA_links" style="list-style: none; margin: 0; padding: 0;">
            <li id="O7DIeJtm" class="iQ784a3mes">
              <a 
                target="_blank" 
                href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html"
              >
                Read reviews of Crystal Ceylon Tours
              </a>
            </li>
          </ul>
        </div>
        <script async src="https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&uniq=856&locationId=34041386&lang=en_US&border=true&display_version=2"></script>
      </body>
    </html>
  `;

  // The linking widget is horizontal, needs ~210x72 space.
  // Tightening height to completely remove bottom gap.
  return (
    <div className="tripadvisor-linking-widget-container w-[210px] h-[72px]">
      <iframe
        srcDoc={htmlContent}
        title="TripAdvisor Linking Widget"
        className="w-full h-full border-none block m-0 p-0"
        scrolling="no"
        frameBorder="0"
        tabIndex={-1}
      />
    </div>
  );
};

export default TripAdvisorLinkingWidget;
