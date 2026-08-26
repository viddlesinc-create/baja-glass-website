import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

// TODO(owner): repopulate with REAL verified Google reviews.
// The previous entries were placeholder copy, not genuine customer reviews.
// Both components below render nothing while these are empty.
const featuredReviews: Review[] = [];


const carouselReviews: Review[] = [];


const renderStars = (rating: number) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export const FeaturedReviews = () => {
  if (featuredReviews.length === 0) return null;
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(5)}
            <span className="text-lg font-semibold ml-2">4.6 out of 5</span>
          </div>
          <p className="text-muted-foreground">Based on 27 Google reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredReviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg bg-background relative overflow-hidden">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-muted/20" />
              <CardContent className="p-6">
                <div className="mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{review.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ReviewCarousel = () => {
  if (carouselReviews.length === 0) return null;
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollSpeed = 1;
    let animationId: number;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const allReviews = [...carouselReviews, ...carouselReviews];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          More Happy Customers
        </h2>
        <p className="text-center text-muted-foreground">
          See why Las Vegas homeowners choose Baja Glass
        </p>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-hidden cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {allReviews.map((review, index) => (
          <Card 
            key={index} 
            className="flex-shrink-0 w-[350px] border-0 shadow-md bg-background"
          >
            <CardContent className="p-6">
              <div className="mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-foreground mb-4 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <div className="border-t pt-3">
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
