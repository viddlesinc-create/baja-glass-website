import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, Shield, Clock, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroShowerDoor from "@/assets/hero-shower-door.jpg";

const GlassCareGuide = () => {
  return (
    <>
      <Helmet>
        <title>Glass Care Guide - How to Clean Shower Doors | Baja Glass Las Vegas</title>
        <meta 
          name="description" 
          content="Learn professional shower glass cleaning tips, maintenance techniques, and water spot prevention methods. Keep your glass doors crystal clear with daily care routines, weekly cleaning schedules, and protective coating options. Expert care guide from Baja Glass." 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content="shower glass cleaning, glass care, shower door maintenance, water spot prevention, Las Vegas glass care" />
        <link rel="canonical" href="https://bajaglass.com/blog/glass-care-guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Glass Care Guide - How to Clean Shower Doors | Baja Glass Las Vegas" />
        <meta property="og:description" content="Learn professional shower glass cleaning tips, maintenance techniques, and water spot prevention methods. Expert care guide from Baja Glass." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bajaglass.com/blog/glass-care-guide" />
        <meta property="og:image" content="https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" />
        <meta property="og:site_name" content="Baja Glass" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glass Care Guide - How to Clean Shower Doors | Baja Glass Las Vegas" />
        <meta name="twitter:description" content="Learn professional shower glass cleaning tips, maintenance techniques, and water spot prevention methods." />
        <meta name="twitter:image" content="https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png" />
      </Helmet>
      
      <article className="min-h-screen">
        {/* Header */}
        <header className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/resources" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Complete Glass Care Guide for Shower Doors
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Professional tips and techniques to maintain crystal-clear shower glass and extend the life of your investment.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img 
              src={heroShowerDoor}
              alt="Crystal clear shower door showcasing proper glass care maintenance"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Opening Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Your shower glass is a significant investment that deserves proper care.</strong> With the right maintenance routine, 
                you can keep your shower doors looking pristine for years while preventing costly damage from mineral buildup, 
                soap scum, and water spots. This comprehensive guide will teach you professional-grade techniques used by glass experts.
              </p>
            </div>
          </div>
        </section>

        {/* Daily Care Section */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Droplets className="h-8 w-8 text-accent" />
              Daily Glass Care Routine
            </h2>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">After Every Shower</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span><strong>Squeegee immediately:</strong> Use a high-quality squeegee to remove water from glass surfaces, starting from top to bottom in smooth strokes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span><strong>Wipe hardware:</strong> Dry handles, hinges, and tracks with a soft microfiber cloth to prevent water spots and corrosion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                    <span><strong>Ventilate properly:</strong> Leave the door slightly open and run exhaust fans to promote air circulation and prevent humidity buildup.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weekly Cleaning */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Clock className="h-8 w-8 text-accent" />
              Weekly Deep Cleaning Protocol
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Materials Needed</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Microfiber cloths (lint-free)</li>
                    <li>• Mild dish soap or glass cleaner</li>
                    <li>• White vinegar for mineral deposits</li>
                    <li>• Baking soda for tough stains</li>
                    <li>• Non-abrasive sponge</li>
                    <li>• Squeegee or chamois</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Step-by-Step Process</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Rinse glass with warm water</li>
                    <li>2. Apply cleaning solution evenly</li>
                    <li>3. Clean in circular motions</li>
                    <li>4. Address any stubborn spots</li>
                    <li>5. Rinse thoroughly with clean water</li>
                    <li>6. Dry completely with microfiber cloth</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Water Spot Prevention */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent" />
              Water Spot Prevention & Removal
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Water spots are the most common issue with shower glass, caused by mineral deposits left behind when water evaporates. 
                Prevention is always easier than removal, but we'll cover both approaches.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Professional Removal Techniques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Light Mineral Deposits</h4>
                    <p className="text-muted-foreground text-sm mb-3">Mix equal parts white vinegar and water in a spray bottle. Apply, let sit for 5 minutes, then scrub gently with a non-abrasive sponge.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Heavy Buildup</h4>
                    <p className="text-muted-foreground text-sm mb-3">Create a paste with baking soda and water. Apply to affected areas, let sit for 15 minutes, then scrub gently and rinse thoroughly.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Protective Coatings */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-accent" />
              Protective Coatings & Long-Term Care
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Protective glass coatings create an invisible barrier that repels water and makes cleaning significantly easier. 
                These hydrophobic treatments can reduce cleaning time by up to 90% and keep your glass looking new longer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Benefits of Glass Protection</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Water beads and rolls off easily</li>
                    <li>• Reduced mineral deposit buildup</li>
                    <li>• Easier daily maintenance</li>
                    <li>• Enhanced glass clarity</li>
                    <li>• Protection against etching</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">When to Reapply</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Every 2-3 years for premium coatings</li>
                    <li>• When water stops beading effectively</li>
                    <li>• After deep cleaning with abrasive products</li>
                    <li>• Following glass restoration work</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Need Professional Glass Care Services?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Our experts can apply protective coatings, restore damaged glass, and provide maintenance services to keep your shower doors pristine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Glass Care Service</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/shower-doors-las-vegas" onClick={() => window.scrollTo(0, 0)}>View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Proper glass care is simple but crucial for maintaining your shower door investment. Daily squeegee use, 
                    weekly deep cleaning, and protective coatings will keep your glass looking crystal clear for years. 
                    Remember that prevention is always easier than restoration—establish good habits early and your glass will thank you.
                  </p>
                  <p>
                    For complex issues or professional coating applications, don't hesitate to contact our experts. 
                    We're here to help you maintain beautiful, functional shower glass that enhances your bathroom experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </article>
    </>
  );
};

export default GlassCareGuide;