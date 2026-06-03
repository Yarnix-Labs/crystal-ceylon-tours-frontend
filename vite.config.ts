import { defineConfig, loadEnv } from "vite";
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

// 2. Fetch dynamic routes from your API during build time
const fetchDynamicRoutes = async (apiUrl: string) => {
  const routes: string[] = [];
  try {
    const [toursRes, destsRes, blogsRes, activitiesRes]: any[] = await Promise.all([
      fetch(`${apiUrl}/tour-packages/package/summary/?page=1`).then(res => res.json()).catch(() => ({ data: { items: [] } })),
      fetch(`${apiUrl}/destinations/summary/list?page=1`).then(res => res.json()).catch(() => ({ data: { items: [] } })),
      fetch(`${apiUrl}/blogs/published/list?page=1`).then(res => res.json()).catch(() => ({ data: { items: [] } })),
      fetch(`${apiUrl}/things-to-do/summary/list?page=1`).then(res => res.json()).catch(() => ({ data: { items: [] } }))
    ]);

    const tours = toursRes?.data?.items || toursRes?.items || [];
    const dests = destsRes?.data?.items || destsRes?.items || [];
    const blogs = blogsRes?.data?.items || blogsRes?.items || [];
    const activities = activitiesRes?.data?.items || activitiesRes?.items || [];

    tours.forEach((t: any) => t.slug && routes.push(`/tour-packages/${t.slug}`));
    dests.forEach((d: any) => d.slug && routes.push(`/destinations/${d.slug}`));
    blogs.forEach((b: any) => b.slug && routes.push(`/blog/${b.slug}`));
    activities.forEach((a: any) => a.slug && routes.push(`/things-to-do/${a.slug}`));
    
    console.log(`[Sitemap] Fetched ${routes.length} dynamic routes from API.`);
  } catch (error) {
    console.error("[Sitemap] Failed to fetch dynamic routes:", error);
  }
  return routes;
};

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const API_URL = env.VITE_API_URL || 'http://localhost:3000/api/v1';

  // Fetch dynamic paths before configuring Vite
  const dynamicPaths = await fetchDynamicRoutes(API_URL);
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
