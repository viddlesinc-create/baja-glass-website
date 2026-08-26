import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories, getRecentPosts } from "@/data/blogPosts";
import { BookOpen, Phone } from "lucide-react";
import PhoneNumber from "@/components/PhoneNumber";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  
  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];
  const remainingPosts = selectedCategory === "All Posts" 
    ? blogPosts.slice(1) 
    : filteredPosts;

  return (
    <div className="min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://bajaglass.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bajaglass.com/blog" />
        <meta property="og:image" content="https://bajaglass.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Baja Glass & Mirror" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bajaglass.com/og-image.jpg" />

        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Baja Glass & Mirror Blog",
            "description": "Expert shower door guides, maintenance tips, and industry insights",
            "url": "https://bajaglass.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Baja Glass & Mirror LLC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.datePublished,
              "dateModified": post.dateModified,
              "url": `https://bajaglass.com${post.url}`,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-primary to-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-8 w-8" />
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">
              Shower Door Resources
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Shower Door Blog & Guides
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Expert tips, buying guides, and maintenance advice from Las Vegas's trusted shower door specialists. 
            Make informed decisions for your bathroom upgrade.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Installation Guides</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Cost Comparisons</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Maintenance Tips</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Design Ideas</Badge>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (only show when "All Posts" selected) */}
      {selectedCategory === "All Posts" && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === "All Posts" ? "All Articles" : selectedCategory}
          </h2>
          
          {remainingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Shower Door Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Our experts are ready to help you choose the perfect shower door for your Las Vegas home.
            Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Get Free Quote
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <PhoneNumber 
                location="blog_cta"
                showIcon={true}
                showPrefix={true}
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
