import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const GOOGLE_PLACE_ID = "ChIJq6r6eofGyIAR_KDPoQYhGVI";
const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

const Reviews = () => {
  // Real Google Business Profile reviews, copied verbatim (text unedited) from
  // Baja Glass & Mirror LLC, place ID ChIJq6r6eofGyIAR_KDPoQYhGVI, pulled 2026-11-11.
  // Reviewer shown as first name + last initial. Reviews describing repair work were
  // left out (repair is not a Baja service). Deliberately NO Review/AggregateRating
  // JSON-LD: Google ignores self-serving LocalBusiness review markup and it is a policy risk.
  // No rating/count is shown in copy so nothing here goes stale against the GBP.
  const reviews: {
    name: string;
    location: string;
    rating: number;
    date: string;
    service: string;
    text: string;
    verified?: boolean;
  }[] = [
    {
      name: "Tracy M.",
      location: "Google review",
      rating: 5,
      date: "August 2026",
      service: "Custom shower glass",
      text: "Baja is the best glass company I’ve worked with in over 35 years of building in Las Vegas.\nHe did my custom shower glass — showed up on time, did excellent quality work, and got the job done right. Highly recommend!",
    },
    {
      name: "Jennifer C.",
      location: "Google review",
      rating: 5,
      date: "July 2026",
      service: "Shower door replacement",
      text: "Great experience! We had the shower door in our master bedroom replaced. The process was easy from quote to completion. Fair price, professional service, clean, respectful and communicative. Colton and his team were fantastic and a joy to do business with. Would definitely recommend Baja Glass, our shower door looks great!",
    },
    {
      name: "Jamie C.",
      location: "Google review",
      rating: 5,
      date: "July 2026",
      service: "Sliding shower door",
      text: "Excellent experience from start to finish! The sliding door looks beautiful, and the installation was smooth and professionally done. A special thanks to Cliff for being so responsive and helpful throughout the entire process. We truly appreciate the great customer service and seamless installation. Highly recommend!",
    },
    {
      name: "Hong C.",
      location: "Google review",
      rating: 5,
      date: "June 2026",
      service: "Shower door installation",
      text: "As a new resident in the area, I searched online and called a couple of glass companies. I chose Baja Glass over the others for several reasons: the excellent Google customer reviews, the comfortable and pressure-free conversation I had with the owner, Cliff, and the professionalism that the lead technician, Colton, demonstrated during the pre-installation evaluation visit.\n\nI am very glad I chose Baja Glass. Colton and Anthony did an excellent job installing the shower door. I would not hesitate to recommend Baja Glass to my friends and neighbors.",
    },
    {
      name: "Aleksandr B.",
      location: "Google review",
      rating: 5,
      date: "June 2026",
      service: "Custom shower surround",
      text: "Cliff really helped me out when I needed help ordering a custom shower surround. Everything arrived on time and fit great just from discussing my project over the phone. Will definitely be calling baja glass again!",
    },
    {
      name: "K. C.",
      location: "Google review",
      rating: 5,
      date: "April 2026",
      service: "Rain glass shower door",
      text: "Spectacular job. Cliff and the gang recommended Raindrop glass and the result is wonderful. Professional crew and professional results. Could not be happier - my wife said \"we should have had it done 10 years ago\".",
    },
    {
      name: "Nevada Nites",
      location: "Google review",
      rating: 5,
      date: "April 2026",
      service: "Sliding glass door",
      text: "Cliff and his son were great. They are the prototype of how a trades business should operate. You need a service, the person answers the phone, you schedule a consultation, they show up on time and create an order, you pay, they keep you in the loop and delivery in the time range when promised.  No games, no delays, no attitude, just providing you the service you paid for with curtesy.  When my sliding door came in, the hardware came in from the vendor as the wrong color. Baja assured me they'd have it in 72 hrs and be back, two days later I got a call from Cliff's son, I forget his name, that he'd be right over and an hour later it was done. I which they did HVAC and pool services, since glass doors aren't something I expect to purchase for a decade or more. However, I would recommend anyone I know who needs shower doors to use Baja.",
    },
    {
      name: "Ray T.",
      location: "Google review",
      rating: 5,
      date: "July 2025",
      service: "Shower glass & mirrors",
      text: "I have been involved in many remodeling projects, working with many contractors over a long number of years. Recently I completed a total house renovation for my personal residence that we have lived in for 30 years. For my project Baja Glass and Mirrors did the shower glass and mirrors.\nAfter a lot of searching someone recommended Baja Glass and Mirrors . From the initial meeting with Cliff, I had a positive feeling that this was the right company.\nThe results speak for themselves. High quality craftsmanship combined with attention to detail and working with professionals that were a joy to deal with. Cliff was my company contact, he was great to work with, patient, professional, knowledgeable combined with a high skill level.\nI rate Baja as one of the best contractors I have ever worked with. I am basing this on the following criteria;\nTheir high level of knowledge, reliability, craftsmanship, competitive pricing, professionalism, attention to detail, professional advice, communication, flexibly all add up to a winning team.\nThe result, we could not be more pleased. Cliff, you and your team of professionals performed way above our high expectations. A big thanks to you and the team. We look forward to working with you on future projects.\nRay Taylor",
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Customer Reviews for Baja Glass and Mirror</h1>
          
          {/* TODO(owner): the "4.6 / 27 Google reviews" figure was removed along with the
              placeholder testimonials that backed it. Restore only after confirming the live
              rating and count on the Google Business Profile, and keep them in sync. */}

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Custom shower doors and glass, installed across the Las Vegas Valley since 2010.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Licensed & Insured</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Las Vegas Owned Since 2010</Badge>
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
              <Button variant="outline" size="lg" asChild className="mt-6">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Our Google Reviews
                </a>
              </Button>
            </div>
          )}
          {reviews.length > 0 && (
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Recent Reviews from Google</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A selection of reviews Las Vegas customers left on our Google Business Profile, shown word for word.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                    Read All Reviews on Google
                  </a>
                </Button>
                <Button size="lg" asChild>
                  <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                    Leave Us a Review
                  </a>
                </Button>
              </div>
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
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{review.text}</p>
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
