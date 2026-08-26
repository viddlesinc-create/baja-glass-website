export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  featuredImage: string;
  datePublished: string;
  dateModified: string;
  author: string;
  readTime: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "shower-door-installation-cost-las-vegas",
    title: "How Much Does Shower Door Installation Cost in Las Vegas? (2026 Guide)",
    excerpt: "Complete pricing breakdown for frameless, semi-frameless, and framed shower doors in Las Vegas. Learn about factors affecting cost and get accurate estimates.",
    category: "Pricing & Cost",
    featuredImage: "/lovable-uploads/dff9a879-f6db-4f4a-908d-2842b809c7e4.png",
    datePublished: "2025-01-15",
    dateModified: "2026-07-29",
    author: "Cliff Robinson",
    readTime: "4 min read",
    url: "/blog/shower-door-installation-cost-las-vegas"
  },
  {
    slug: "frameless-vs-semi-frameless-shower-doors",
    title: "Frameless vs Semi-Frameless Shower Doors: Complete Comparison Guide",
    excerpt: "Detailed comparison of frameless and semi-frameless shower doors. Discover which style is best for your Las Vegas bathroom, with pros, cons, and cost analysis.",
    category: "Comparison Guides",
    featuredImage: "/lovable-uploads/7d880084-fd2a-4d13-9b02-6bc5661be634.png",
    datePublished: "2025-01-10",
    dateModified: "2026-07-30",
    author: "Cliff Robinson",
    readTime: "4 min read",
    url: "/blog/frameless-vs-semi-frameless-shower-doors"
  },
  {
    slug: "las-vegas-water-quality-shower-glass-hard-water-solutions",
    title: "Las Vegas Hard Water Solutions for Shower Glass: Complete Guide",
    excerpt: "Combat Las Vegas's notoriously hard water with proven solutions. Learn about water softeners, protective coatings, and daily care to keep your shower glass spotless.",
    category: "Maintenance & Care",
    featuredImage: "/lovable-uploads/92357ff9-fc77-40cb-b708-fb8fe634aa42.png",
    datePublished: "2025-01-08",
    dateModified: "2026-01-10",
    author: "Cliff Robinson",
    readTime: "4 min read",
    url: "/blog/las-vegas-water-quality-shower-glass-hard-water-solutions"
  },
  {
    slug: "glass-care-guide",
    title: "Complete Glass Care Guide for Shower Doors",
    excerpt: "Professional tips and techniques to maintain crystal-clear shower glass and extend the life of your investment. Daily, weekly, and monthly care routines.",
    category: "Maintenance & Care",
    featuredImage: "/lovable-uploads/9642038d-f5d9-4f9d-8096-46dc1eb70052.png",
    datePublished: "2025-01-15",
    dateModified: "2026-01-10",
    author: "Cliff Robinson",
    readTime: "2 min read",
    url: "/blog/glass-care-guide"
  },
  {
    slug: "choosing-right-door",
    title: "How to Choose the Right Shower Door for Your Bathroom",
    excerpt: "Expert guide to selecting the perfect shower door. Compare frameless vs framed, glass thickness options, hardware finishes, and space considerations.",
    category: "Buying Guides",
    featuredImage: "/lovable-uploads/a77b5014-d325-4972-91dc-b5714d7b34a7.png",
    datePublished: "2025-01-12",
    dateModified: "2026-01-10",
    author: "Cliff Robinson",
    readTime: "3 min read",
    url: "/blog/choosing-right-door"
  },
  {
    slug: "installation-process",
    title: "Shower Door Installation Process: What to Expect",
    excerpt: "Complete guide to shower door installation from consultation to final inspection. Learn preparation steps, timeline, and what to expect during professional installation.",
    category: "Installation",
    featuredImage: "/lovable-uploads/d89fa07d-a693-478f-8b0d-e12f2607c1e7.png",
    datePublished: "2025-01-05",
    dateModified: "2026-01-10",
    author: "Cliff Robinson",
    readTime: "3 min read",
    url: "/blog/installation-process"
  },
  {
    slug: "warranty-information",
    title: "Shower Door Warranty Information: Coverage & Terms",
    excerpt: "Complete guide to shower door warranty coverage. Learn about materials, installation terms, maintenance requirements, and how to request warranty service.",
    category: "Warranty & Support",
    featuredImage: "/lovable-uploads/fb2b173a-c011-49f6-aba2-541dbd7b4387.png",
    datePublished: "2025-01-01",
    dateModified: "2026-01-10",
    author: "Cliff Robinson",
    readTime: "3 min read",
    url: "/blog/warranty-information"
  }
];

export const categories = [
  "All Posts",
  "Pricing & Cost",
  "Comparison Guides",
  "Maintenance & Care",
  "Buying Guides",
  "Installation",
  "Warranty & Support"
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All Posts") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime())
    .slice(0, count);
}
