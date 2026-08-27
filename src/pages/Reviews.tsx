import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Reviews = () => {
  // TODO(owner): populate with REAL Google reviews before this page is repopulated.
  // The previous ten entries were placeholder copy, not genuine customer reviews — two of
  // them described repair work the business does not offer. They were removed along with the
  // Review/AggregateRating JSON-LD they fed, which was a Google structured-data policy risk.
  // Re-add only verified reviews (reviewer first name + city + real date), and only then
  // restore review schema so the markup matches what is actually shown on the page.
  const reviews: {
    name: string;
    location: string;
    rating: number;
    date: string;
    service: string;
    text: string;
    verified?: boolean;
  }[] = [];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://bajaglass.com/reviews" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-primary to-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Customer Reviews for Baja Glass & Mirror</h1>
          
          {/* TODO(owner): the "4.6 / 27 Google reviews" figure was removed along with the
              placeholder testimonials that backed it. Restore only after confirming the live
              rating and count on the Google Business Profile, and keep them in sync. */}

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Custom shower doors and glass, installed across the Las Vegas Valley since 2009.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Licensed & Insured</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Las Vegas Owned Since 2009</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Family Owned</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Warranty Backed</Badge>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {reviews.length === 0 && (
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold mb-3">Reviews are being updated</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're refreshing this page with verified reviews from our Google Business
                Profile. In the meantime, you can read what Las Vegas homeowners say about
                Baja Glass &amp; Mirror directly on Google, or call us at (702) 383-0779.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg font-semibold">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    {review.verified && (
                      <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                        <CheckCircle className="h-3 w-3" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  {renderStars(review.rating)}
                  <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4 text-xs">
                    {review.service}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Join hundreds of satisfied Las Vegas homeowners. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Get Free Quote
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
