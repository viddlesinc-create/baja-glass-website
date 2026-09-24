import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ArticleByline from "@/components/ArticleByline";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
const installationProcess = "/images/installation-process.jpg";

const DATE_PUBLISHED = "2025-01-15";
const DATE_MODIFIED = "2026-09-24";

// Informational post. Local "Las Vegas" intent belongs to /shower-door-installation-las-vegas,
// so keep the city out of the title and H1. Timings match the published process.
const steps = [
  {
    title: "In-home consultation and laser measurement",
    time: "About 1 hour",
    detail: "An installer visits your home, looks at the shower opening and laser-measures it. This is also when you talk through door style, glass thickness, clarity, coating and hardware finish. Measuring on site matters because walls and curbs are rarely perfectly square, and the glass has to be cut to the opening as it really is."
  },
  {
    title: "Design and quote",
    time: "After the visit",
    detail: "You receive a design and a written quote based on the measurements and the options you chose. Nothing is ordered until you approve it."
  },
  {
    title: "Fabrication",
    time: "2–5 business days",
    detail: "The tempered safety glass is cut and finished to your measurements, in 3/8\" (standard) or 1/2\" (premium) thickness, with any low-iron glass or hydrophobic coating you selected. Our fabrication happens in our Las Vegas shop."
  },
  {
    title: "Installation",
    time: "Typically a single day",
    detail: "The installer sets the glass and hardware, checks the door's alignment and swing or slide, and confirms the fit against the opening."
  },
  {
    title: "Final walkthrough and warranty review",
    time: "At the end of install day",
    detail: "Before leaving, the installer walks you through the finished door, shows you how it operates and reviews your warranty."
  }
];

const faqs = [
  {
    question: "How long does shower door installation take?",
    answer: "From measurement to installation typically takes 3–7 business days. The consultation and measurement takes about an hour, fabrication takes 2–5 business days, and the installation itself is typically completed in a single day."
  },
  {
    question: "Why does a glass shower door need to be measured in person?",
    answer: "Glass shower doors are cut to the exact opening, and tempered glass cannot be trimmed after it is made. A laser measurement on site captures the real dimensions so the finished door fits."
  },
  {
    question: "What glass is used for shower installation?",
    answer: "Tempered safety glass, in 3/8\" (standard) or 1/2\" (premium) thickness. Low-iron ultra-clear glass and hydrophobic coatings such as ShowerGuard and EnduroShield are optional upgrades."
  },
  {
    question: "How much does shower door installation cost?",
    answer: "Published ranges are $400–$800 for framed doors, $800–$1,400 for semi-frameless and $1,200–$2,800 for frameless. Custom and steam enclosures cost more. The measurement and quote are free."
  }
];

const InstallationProcess = () => {
  return (
    <>
      <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How Shower Door Installation Works, Step by Step",
            "description": "The five steps of a glass shower door installation, from in-home laser measurement to the final walkthrough, with typical timing for each.",
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
            "image": "https://bajaglass.com/images/installation-process.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bajaglass.com/blog/installation-process"
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
              How Shower Door Installation Works, Step by Step
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Glass shower door installation happens in five steps: an in-home consultation and laser measurement (about an hour), a design and quote, fabrication of the tempered glass (2–5 business days), installation (typically a single day) and a final walkthrough. From measurement to installation typically takes 3–7 business days.
            </p>
            <ArticleByline
              datePublished={DATE_PUBLISHED}
              dateModified={DATE_MODIFIED}
              wordCount={640}
            />
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img
              src={installationProcess}
              alt="Installer fitting a glass shower door"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Steps */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">The 5 Steps of Shower Door Installation</h2>
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm font-medium text-accent mb-2">{s.time}</p>
                    <p className="text-muted-foreground text-lg">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-lg text-muted-foreground mt-10">
              For a closer look at timing, including what can make each stage shorter or longer, read{" "}
              <Link to="/blog/how-long-does-shower-door-installation-take" className="text-primary underline hover:text-primary/80">how long shower door installation takes</Link>.
            </p>
          </div>
        </section>

        {/* Preparation */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What Homeowners Should Prepare</h2>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Before the consultation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Think about the look you want: framed, semi-frameless or frameless, and whether the door should slide, swing on hinges or pivot.",
                    "Note your faucet and fixture finish so the hardware can match: polished chrome, brushed nickel, matte black or brass/gold.",
                    "Set a budget range. Our shower door cost guide lists typical prices for each style and upgrade.",
                    "Make sure the shower opening is accessible so it can be measured accurately."
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mt-8 mb-4">Before installation day</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Clear personal items, rugs and decorations out of the bathroom.",
                    "Keep a clear path from the entry to the bathroom so glass panels can be carried in safely.",
                    "Keep children and pets away from the work area while the glass is being installed.",
                    "Plan to be available at the end for the final walkthrough and warranty review."
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-lg text-muted-foreground mt-8">
              Wondering what your project will cost? See the price ranges by door type in our{" "}
              <Link to="/blog/shower-door-installation-cost-las-vegas" className="text-primary underline hover:text-primary/80">shower door installation cost guide</Link>.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12">
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
              Ready to Schedule Your Measurement?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Baja Glass &amp; Mirror offers free in-home measurements and quotes. Learn more about our{" "}
              <Link to="/shower-door-installation-las-vegas" className="underline">shower door installation service</Link>{" "}
              or call (702) 383-0779.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default InstallationProcess;
