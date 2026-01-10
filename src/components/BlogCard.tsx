import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-background to-secondary/20">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge variant="outline" className="w-fit mb-4">
              {post.category}
            </Badge>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
              <Link to={post.url} onClick={() => window.scrollTo(0, 0)}>
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.dateModified)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <Link
              to={post.url}
              className="text-accent font-medium hover:underline inline-flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              Read Full Article →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>
      <CardHeader className="pb-2">
        <Badge variant="outline" className="w-fit mb-2 text-xs">
          {post.category}
        </Badge>
        <h3 className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2">
          <Link to={post.url} onClick={() => window.scrollTo(0, 0)}>
            {post.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.dateModified)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
