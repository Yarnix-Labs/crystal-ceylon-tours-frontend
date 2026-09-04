import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  canonical,
  keywords = "Sri Lanka tours, Sri Lanka travel, custom tour packages, private tours Sri Lanka, Seilavo Tours",
  ogImage = "https://www.seilavotours.com/default-og-image.jpg",
  ogType = "website",
  schema,
}: SEOProps) {
  const siteUrl = "https://www.seilavotours.com";
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Generate Breadcrumbs based on canonical URL
  const breadcrumbSchema = canonical && canonical !== "/" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      ...canonical.split("/").filter(Boolean).map((part, index, array) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " "),
        "item": `${siteUrl}/${array.slice(0, index + 1).join("/")}`
      }))
    ]
  } : undefined;

  const finalSchema = [];
  if (schema) {
    if (Array.isArray(schema)) finalSchema.push(...schema);
    else finalSchema.push(schema);
  }
  if (breadcrumbSchema) {
    finalSchema.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      {finalSchema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema.length === 1 ? finalSchema[0] : finalSchema)}
        </script>
      )}
    </Helmet>
  );
}
