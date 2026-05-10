import React from "react";

const TripAdvisorRatedBadge = () => {
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
          .TA_rated, .TA_links, .VYsHhy8 {
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
          }
        </style>
      </head>
      <body>
        <div id="TA_rated458" class="TA_rated">
          <ul id="V2kqHy" class="TA_links YMyZh6Anf" style="list-style: none; margin: 0; padding: 0;">
            <li id="lDJi3K8Ch" class="VYsHhy8">
              <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g616035-d34041386-Reviews-Crystal_Ceylon_Tours-Ella_Uva_Province.html">
                <img src="https://www.tripadvisor.com/img/cdsi/img2/badges/ollie-11424-2.gif" alt="TripAdvisor" />
              </a>
            </li>
          </ul>
        </div>
        <script async src="https://www.jscache.com/wejs?wtype=rated&uniq=458&locationId=34041386&lang=en_US&display_version=2"></script>
      </body>
    </html>
  `;

  // The rated badge needs ~137x140 space. 
  // We use h-[135px] and w-[180px] to ensure the right edge is not clipped.
  return (
    <div className="tripadvisor-badge-container w-[180px] h-[135px]">
      <iframe
        srcDoc={htmlContent}
        title="TripAdvisor Rated Badge"
        className="w-full h-full border-none block m-0 p-0"
        scrolling="no"
        frameBorder="0"
        tabIndex={-1}
      />
    </div>
  );
};

export default TripAdvisorRatedBadge;
