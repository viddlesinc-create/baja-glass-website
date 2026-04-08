import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Phone, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { trackPhoneClick } from "@/lib/analytics";

const Reviews = () => {
  const reviews = [
    {
      name: "Jennifer Martinez",
      location: "Henderson, NV",
      rating: 5,
      date: "November 15, 2024",
      service: "Frameless Shower Door Installation",
      text: "Baja Glass installed a beautiful frameless shower door in our Henderson home. The installers were professional, on time, and the quality is outstanding. They took precise measurements and the installation was flawless. Our bathroom looks amazing now! Highly recommend their services.",
      verified: true
    },
    {
      name: "Robert Chen",
      location: "Summerlin, NV",
      rating: 5,
      date: "October 28, 2024",
      service: "Custom Shower Enclosure",
      text: "We hired Baja Glass for our Summerlin bathroom remodel. The custom enclosure they designed fits perfectly and looks amazing. Great communication throughout the process, and they completed the job exactly when promised. The attention to detail is exceptional."
    },
    {
      name: "Sarah Thompson",
      location: "Paradise, NV",
      rating: 5,
      date: "October 12, 2024",
      service: "Sliding Shower Door",
      text: "Professional service from start to finish. The team at Baja Glass helped us choose the perfect sliding door for our space. Installation was quick and clean. The door operates smoothly and looks beautiful. Worth every penny!"
    },
    {
      name: "Michael Rodriguez",
      location: "Las Vegas, NV",
      rating: 5,
      date: "September 30, 2024",
      service: "Glass Replacement",
      text: "Had a crack in our shower glass and Baja Glass came out quickly to assess and replace it. They matched the glass perfectly and the new panel looks great. Fair pricing and excellent customer service."
    },
    {
      name: "Emily Watson",
      location: "Spring Valley, NV",
      rating: 5,
      date: "September 18, 2024",
      service: "Frameless Shower Door",
      text: "Absolutely love our new frameless shower door! The clarity of the glass is incredible and the hardware is top quality. The Baja Glass team was knowledgeable and helped us make the right choices for our bathroom."
    },
    {
      name: "David Kim",
      location: "Enterprise, NV",
      rating: 5,
      date: "August 25, 2024",
      service: "Steam Shower Enclosure",
      text: "Baja Glass built a custom steam shower enclosure for our master bathroom. They understood the special requirements for steam and used the right thickness glass with proper sealing. The craftsmanship is excellent."
    },
    {
      name: "Lisa Anderson",
      location: "Henderson, NV",
      rating: 5,
      date: "August 10, 2024",
      service: "Hinged Shower Door",
      text: "Very pleased with our hinged shower door installation. The team was courteous, cleaned up after themselves, and the door is perfect. It opens and closes smoothly with a solid feel. Highly recommend!"
    },
    {
      name: "James Miller",
      location: "Summerlin, NV",
      rating: 5,
      date: "July 22, 2024",
      service: "Custom Enclosure",
      text: "Worked with Baja Glass on a challenging neo-angle shower enclosure. They handled the complex angles perfectly and the result is stunning. True professionals who take pride in their work."
    },
    {
      name: "Patricia Lewis",
      location: "Las Vegas, NV",
      rating: 5,
      date: "July 8, 2024",
      service: "Frameless Shower Door",
      text: "From quote to installation, everything was smooth and professional. The frameless door they installed transformed our bathroom. The glass is crystal clear and the hardware finish matches our fixtures perfectly."
    },
    {
      name: "Carlos Sanchez",
      location: "Paradise, NV",
      rating: 5,
      date: "June 20, 2024",
      service: "Sliding Door Upgrade",
      text: "Our shower door rollers were worn out and the door was hard to slide. Baja Glass came out, replaced the rollers and tracks, and now it glides like new. Great service at a fair price."
    },
    {
      name: "Amanda Foster",
      location: "Henderson, NV",
      rating: 5,
      date: "June 5, 2024",
      service: "Semi-Frameless Door",
      text: "Beautiful semi-frameless door installation. The team was punctual, professional, and the installation was done in a few hours. Our shower looks modern and elegant now."
    },
    {
      name: "Thomas Wright",
      location: "Spring Valley, NV",
      rating: 5,
      date: "May 18, 2024",
      service: "Custom Glass Work",
      text: "Baja Glass created a custom enclosure for our oddly-shaped shower. They measured multiple times to ensure perfect fit and the result exceeded our expectations. Excellent craftsmanship!"
    },
    {
      name: "Rebecca Johnson",
      location: "Enterprise, NV",
      rating: 5,
      date: "May 2, 2024",
      service: "Frameless Door with Low-Iron Glass",
      text: "We upgraded to low-iron glass and it was absolutely worth it. The clarity is amazing compared to regular glass. Baja Glass explained all the options clearly and helped us make the best choice."
    },
    {
      name: "Daniel Park",
      location: "Summerlin, NV",
      rating: 5,
      date: "April 15, 2024",
      service: "Shower Door Replacement",
      text: "Replaced our old framed door with a new frameless one. The difference is night and day. The bathroom feels more spacious and modern. Great job by the Baja Glass team!"
    },
    {
      name: "Michelle Turner",
      location: "Las Vegas, NV",
      rating: 5,
      date: "March 28, 2024",
      service: "Custom Enclosure",
      text: "Professional, knowledgeable, and detail-oriented. They built a beautiful custom enclosure that fits our space perfectly. Very happy with the quality and service."
    },
    {
      name: "Kevin Brown",
      location: "Henderson, NV",
      rating: 5,
      date: "March 10, 2024",
      service: "Frameless Shower Door",
      text: "From the initial consultation to final installation, Baja Glass was fantastic. They answered all our questions, provided fair pricing, and delivered excellent work. Will use them again!"
    },
    {
      name: "Nicole Adams",
      location: "Paradise, NV",
      rating: 5,
      date: "February 22, 2024",
      service: "Sliding Shower Door",
      text: "Love our new sliding shower door! The installation was quick and the quality is excellent. The door slides smoothly and looks beautiful. Highly recommend Baja Glass."
    },
    {
      name: "Christopher Lee",
      location: "Spring Valley, NV",
      rating: 5,
      date: "February 5, 2024",
      service: "Hinged Door Installation",
      text: "Top-notch service and quality. The hinged door they installed operates perfectly and looks great. The team was professional and respectful of our home."
    },
    {
      name: "Angela Martinez",
      location: "Summerlin, NV",
      rating: 5,
      date: "January 20, 2024",
      service: "Steam Shower Enclosure",
      text: "Baja Glass installed our steam shower enclosure with the proper ceiling and sealing. They knew exactly what was needed and executed it perfectly. Very impressed with their expertise."
    },
    {
      name: "Steven Harris",
      location: "Enterprise, NV",
      rating: 5,
      date: "January 8, 2024",
      service: "Frameless Shower Door",
      text: "Excellent experience from start to finish. Fair pricing, professional installation, and beautiful results. Our frameless shower door is the centerpiece of our bathroom remodel."
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://bajaglass.com/#localbusiness",
            "name": "Baja Glass & Mirror LLC",
            "url": "https://bajaglass.com",
            "telephone": "(702) 383-0779",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4280 W Reno Ave Ste A",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89118",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.097781,
              "longitude": -115.197234
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "27",
              "ratingCount": "27"
            },
            "review": reviews.slice(0, 10).map(review => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": review.name },
              "datePublished": new Date(review.date).toISOString().split('T')[0],
              "reviewRating": { 
                "@type": "Rating", 
                "ratingValue": review.rating, 
                "bestRating": "5",
                "worstRating": "1"
              },
              "reviewBody": review.text
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Customer Reviews for Baja Glass & Mirror</h1>
          
          {/* Aggregate Rating Display */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-6xl font-bold">4.6</span>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/60 text-yellow-400/60'}`} />
                  ))}
                </div>
                <p className="text-white/90">Based on 27 Google reviews</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            See what Las Vegas homeowners are saying about their experience with Baja Glass.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Licensed & Insured</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">20+ Years Experience</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Family Owned</Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30">Warranty Backed</Badge>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
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
              <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("reviews")}>
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
