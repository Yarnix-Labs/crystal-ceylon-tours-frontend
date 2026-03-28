export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  readingTime:string;
  coverImage: string;
  tags: string[];
  views: number;
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  authorName:string;
  categoryName?: string;
}



// Helper to extract just the blog posts
export const blogPosts: BlogPost[] = [];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Example usage with your API response:
// const response: BlogListResponse = /* your API response */;
// blogPosts.push(...response.data.items);