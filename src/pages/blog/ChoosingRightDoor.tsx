import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ArticleByline from "@/components/ArticleByline";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
const customEnclosure = "/images/custom-enclosure.jpg";

const DATE_PUBLISHED = "2025-01-15";
const DATE_MODIFIED = "2026-09-24";

// Every price below comes from the published cost guide
// (/blog/shower-door-installation-cost-las-vegas). Do not add figures that are not there.
const decisions = [
  { decision: "Door style", options: "Framed, semi-frameless or frameless; sliding, hinged or pivot", guide: "Framed $400–$800 · semi-frameless $800–$1,400 · frameless $1,200–$2,800" },
  { decision: "Glass thickness", options: "3/8\" (standard) or 1/2\" (premium) tempered safety glass", guide: "1/2\" glass adds $400–$800" },
  { decision: "Glass clarity", options: "Standard clear or low-iron ultra-clear", guide: "Low-iron adds $200–$500" },
  { decision: "Protective coating", options: "None, or a hydrophobic coating such as ShowerGuard or EnduroShield", guide: "Coating adds $150–$300" },
  { decision: "Hardware finish", options: "Polished chrome, brushed nickel, matte black or brass/gold", guide: "Chrome standard · nickel +$100–$150 · black +$150–$250 · brass/gold +$200–$300" },
  { decision: "Budget", options: "Add the style range to any upgrades you choose", guide: "Custom enclosure $2,000–$4,500+ · steam enclosure $3,000–$6,000+" }
];

const faqs = [
  {
    question: "What is the most important decision when choosing a shower door?",
    answer: "Door style. Framed, semi-frameless or frameless sets most of the price and the look, and it determines which glass thickness makes sense. Choose the style first, then glass, coating and hardware finish."
  },
  {
    question: "Is 3/8\" or 1/2\" glass better for a shower door?",
    answer: "3/8\" tempered glass is our standard and works for most doors. 1/2\" glass is the premium option; it feels heavier and more solid and adds $400–$800 to the project."
  },
  {
    question: "Is low-iron glass worth it?",
    answer: "Low-iron glass is ultra-clear, which matters most if you want the glass to disappear or you have light-colored tile. It adds $200–$500."
  },
  {
    question: "Do I need a protective coating on my shower glass?",
    answer: "A hydrophobic coating such as ShowerGuard or EnduroShield helps water bead off the glass and adds $150–$300. It is worth considering in Las Vegas because of the valley's hard water."
  },
  {
    question: "How much does a new shower door cost?",
    answer: "Framed doors run $400–$800, semi-frameless $800–$1,400 and frameless $1,200–$2,800. Custom enclosures start around $2,000 and steam enclosures around $3,000. Measurements and quotes are free."
  }
];

const ChoosingRightDoor = () => {
  return (
    <>
      <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Choose a Shower Door",
            "description": "Choose a shower door in five decisions: door style, glass thickness, glass clarity, protective coating and hardware finish, with the price each choice adds.",
            "author": {
              "@type": "Person",
              "@id": "https://bajaglass.com/authors/cliff-robinson#person",
              "name": "Cliff Robinson",
              "url": "https://bajaglass.com/authors/cliff-robinson"
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "datePublished": DATE_PUBLISHED,
            "dateModified": DATE_MODIFIED,
            "image": "https://bajaglass.com/images/custom-enclosure.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/choosing-right-door"
            }
          })}
        </script>
        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <article className="min-h-screen">
        {/* Header */}
        <header className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              How to Choose a Shower Door
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              To choose a shower door, decide five things in order: the door style (framed, semi-frameless or frameless, and how it opens), the glass thickness, the glass clarity, whether to add a protective coating, and the hardware finish. Style sets most of the budget; the other four are upgrades you add on top.
            </p>
            <ArticleByline
              datePublished={DATE_PUBLISHED}
              dateModified={DATE_MODIFIED}
              wordCount={1180}
            />
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img
              src={customEnclosure}
              alt="Glass shower enclosure with a hinged glass door"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Decision table */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">The Shower Door Decision Table</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Use this table as a checklist. Work top to bottom, and write down your choice in each row before you request a quote. Prices are the published Las Vegas ranges from our{" "}
              <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80">shower door installation cost guide</Link>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-3 pr-4 font-semibold">Decision</th>
                    <th className="py-3 pr-4 font-semibold">Your options</th>
                    <th className="py-3 font-semibold">Price guide</th>
                  </tr>
                </thead>
                <tbody>
                  {decisions.map((row) => (
                    <tr key={row.decision} className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">{row.decision}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.options}</td>
                      <td className="py-3 text-muted-foreground">{row.guide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 1. Door style */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground">1. Choose the Door Style</h2>
            <p>
              Door style is the decision that shapes everything else, so make it first. There are two parts to it: how much frame the door has, and how it opens.
            </p>
            <p>
              <strong className="text-foreground">Frame.</strong> A framed door surrounds the glass with metal and is the most affordable option at $400–$800. A semi-frameless door keeps some metal support but drops most of the frame, at $800–$1,400. A frameless door uses heavier glass with minimal hardware for the most open look, at $1,200–$2,000 with 3/8" glass or $1,600–$2,800 with 1/2" glass. For a full side-by-side comparison of looks, cleaning and cost, read{" "}
              <Link to="/blog/frameless-vs-semi-frameless-shower-doors" className="text-primary underline hover:text-primary/80">frameless vs. semi-frameless vs. framed shower doors</Link>.
            </p>
            <p>
              <strong className="text-foreground">How it opens.</strong> Sliding doors run along the opening and do not swing into the room, which suits tub-and-shower combinations and tight bathrooms. Hinged doors swing open like a standard door and need clear floor space in front of the shower. Pivot doors turn on a pivot point at the top and bottom of the glass. If you want a larger layout, a custom enclosure ($2,000–$4,500+) or a steam enclosure ($3,000–$6,000+) combines the door with fixed panels built for your space.
            </p>
          </div>
        </section>

        {/* 2. Glass thickness */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground">2. Choose the Glass Thickness</h2>
            <p>
              Every door we install uses tempered safety glass. The choice is thickness: 3/8" is our standard and works for most doors, while 1/2" is the premium option. Thicker glass feels heavier and more solid when you open the door, and it is a common pairing with frameless designs. Moving from 3/8" to 1/2" glass adds $400–$800.
            </p>
          </div>
        </section>

        {/* 3. Glass clarity */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground">3. Decide on Glass Clarity</h2>
            <p>
              Standard clear glass is what most showers use. Low-iron glass is an ultra-clear alternative that looks more transparent, especially at the edges and on thicker panels. It is worth considering if you want the glass to disappear or you are showcasing tile. Low-iron glass adds $200–$500.
            </p>
          </div>
        </section>

        {/* 4. Coating */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground">4. Decide Whether to Add a Protective Coating</h2>
            <p>
              A hydrophobic coating such as ShowerGuard or EnduroShield helps water bead and run off the glass instead of drying on it. In Las Vegas, where hard water leaves spots quickly, it is worth deciding on this when you order the door. A coating adds $150–$300.
            </p>
          </div>
        </section>

        {/* 5. Hardware */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground">5. Pick a Hardware Finish</h2>
            <p>
              Match the hinges, handle and any other hardware on the door to your faucet and fixtures. Polished chrome is standard. Brushed nickel adds $100–$150, matte black adds $150–$250, and brass or gold adds $200–$300.
            </p>
          </div>
        </section>

        {/* 6. Budget */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground">6. Add It Up Against Your Budget</h2>
            <p>
              Start with the range for your door style, then add each upgrade you picked. For example, a frameless door with 3/8" glass ($1,200–$2,000) plus a hydrophobic coating ($150–$300) and matte black hardware ($150–$250) lands between $1,500 and $2,550. If the total is higher than you want, the upgrades are the easiest place to trim; the door style is the hardest to change later.
            </p>
            <p>
              Published ranges are a guide. Your exact price depends on the measured opening, so every project gets a free in-home measurement and a written quote.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Get Help Choosing Your Shower Door
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Baja Glass &amp; Mirror has installed shower doors in Las Vegas since 2009. We will measure your shower, walk through each decision with you and give you a written quote, free. Call (702) 383-0779.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Free In-Home Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/blog/shower-door-installation-cost-las-vegas" onClick={() => window.scrollTo(0, 0)}>See the Cost Guide</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ChoosingRightDoor;
