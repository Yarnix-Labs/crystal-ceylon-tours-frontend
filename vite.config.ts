import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from "vite-plugin-sitemap";

// 1. Define all your guaranteed static routes
const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/destinations",
  "/tour-packages",
  "/things-to-do",
  "/blog",
  "/gallery",
  "/custom-package"
];

// 2. (Optional but Recommended) Fetch dynamic routes from your API during build time
// E.g., fetch your tours, destinations, and blogs to add them to the sitemap.
const fetchDynamicRoutes = async () => {
  // Example implementation (Replace with your actual data fetching logic/API calls):
  // const destinations = await fetch('https://api.crystalceylontours.com/destinations').then(res => res.json());
  // return destinations.map(d => `/destinations/${d.slug}`);
  
  return [
    // This is where you would return your dynamic paths:
    // '/destinations/colombo',
    // '/tour-packages/sigiriya-cultural-tour',
    // '/blog/best-time-to-visit-sri-lanka'
  ];
};

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // Fetch dynamic paths before configuring Vite
  const dynamicPaths = await fetchDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicPaths];

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      Sitemap({
        hostname: "https://crystalceylontours.com",
        dynamicRoutes: allRoutes,
        exclude: [
          "/book-now",
          "/book-now/*",
          "/*" // Excludes the catch-all NotFound route
        ],
        changefreq: "weekly",
        priority: 0.8,
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
