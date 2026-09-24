import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PhoneNumber from "@/components/PhoneNumber";
import ServiceAreasBlock from "@/components/ServiceAreasBlock";

// Only facts confirmed by the owner are stated here. Mirror types, sizes, edge work,
// lighting and pricing are NOT confirmed — do not add them without sign-off.
const areasServed = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "North Las Vegas",
  "Paradise",
  "Spring Valley",
  "Enterprise",
  "Green Valley",
  "Centennial Hills",
  "Boulder City",
];

const CustomMirrors = () => {
  const faqs = [
    {
      question: "Do you make custom mirrors in Las Vegas?",
      answer: "Yes. Baja Glass & Mirror measures, custom-cuts and installs mirrors across the Las Vegas Valley, including Henderson, Summerlin, North Las Vegas and Boulder City. We have served Las Vegas since 2009."
    },
    {
      question: "Can you replace an old or damaged mirror?",
      answer: "Yes. Mirror replacement is part of our residential glass replacement service. We measure the space, cut the new mirror to fit and install it."
    },
    {
      question: "How do I get a quote for a custom mirror?",
      answer: "Call (702) 383-0779 or request a quote online. Measurements and quotes are free."
    },
    {
      question: "Do you serve areas outside Las Vegas?",
      answer: "Yes. We serve Las Vegas, Henderson, Summerlin, North Las Vegas, Paradise, Spring Valley, Enterprise, Green Valley, Centennial Hills and Boulder City."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. Baja Glass & Mirror LLC is licensed, bonded and insured, and is family-owned and first-responder-owned."
    }
  ];

  const steps = [
    { step: "1", title: "Free on-site measurement", detail: "We measure the wall or opening where the mirror will go, so the mirror is cut to the space rather than to a stock size." },
    { step: "2", title: "Design & quote", detail: "We confirm the size, shape and placement with you and provide a written quote." },
    { step: "3", title: "Custom cutting", detail: "Your mirror is custom-cut to the measurements taken on site." },
    { step: "4", title: "Installation", detail: "We install the mirror in the space it was measured for." }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Custom Mirror Installation",
            "name": "Custom Mirrors in Las Vegas",
            "description": "Custom-cut mirrors measured and installed across the Las Vegas Valley, plus mirror replacement, with free quotes.",
            "url": "https://bajaglass.com/glass-company-las-vegas/custom-mirrors",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://bajaglass.com/#localbusiness"
            },
            "areaServed": areasServed.map((name) => ({ "@type": "City", "name": name, "containedIn": "Clark County, NV" }))
          })}
        </script>
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

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="bg-white/15 text-white border-white/30 mb-4">Serving Las Vegas Since 2009</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Mirrors in Las Vegas</h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Baja Glass &amp; Mirror custom-cuts mirrors to your measurements and installs them across Las Vegas, Henderson and the surrounding valley. We also replace old or damaged mirrors. Call (702) 383-0779 or request a free quote online to schedule a measurement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+17023830779" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (702) 383-0779
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Free Mirror Quote</Link>
                </Button>
              </div>
            </div>
            <img
              src="/images/custom-bathroom-mirror-polished-edges.webp"
              alt="Frameless rectangular mirror mounted with standoff hardware above a marble bathroom vanity"
              className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[560px]"
              width="1440"
              height="1800"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Custom-Cut Mirrors, Measured and Installed</h2>
          <p className="text-lg text-muted-foreground mb-4">
            A custom mirror starts with the wall, not a catalog. We measure the space where the mirror will hang, cut the mirror to those measurements, and install it. That means the mirror fits the wall, vanity or room it was made for instead of leaving awkward gaps around a stock size.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Baja Glass &amp; Mirror is a family-owned, first-responder-owned glass company that has served Las Vegas since 2009. We are licensed, bonded and insured.
          </p>
          {/* TODO(Frank): confirm mirror types offered (bathroom/vanity, wall, gym, lighted) before listing them here. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Mirrors custom-cut to your measured space",
              "Professional installation",
              "Mirror replacement for old or damaged mirrors",
              "Free measurements and written quotes",
              "Licensed, bonded and insured"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mirror replacement */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Mirror Replacement</h2>
          <p className="text-lg text-muted-foreground mb-4">
            If a mirror is damaged, dated or simply the wrong size for a remodeled room, we can take it down and replace it with a new mirror cut to fit. Mirror replacement is handled together with our other{" "}
            <Link to="/glass-company-las-vegas/residential-glass-replacement" className="text-primary underline hover:text-primary/80">
              residential glass replacement
            </Link>{" "}
            services.
          </p>
          <p className="text-lg text-muted-foreground">
            Looking for other glass work? See everything we do on our{" "}
            <Link to="/glass-company-las-vegas" className="text-primary underline hover:text-primary/80">
              Las Vegas glass company
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How a Custom Mirror Project Works</h2>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{s.step}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Custom Mirrors Across Clark County</h2>
          <p className="text-lg text-muted-foreground">
            We measure and install custom mirrors in {areasServed.slice(0, -1).join(", ")} and {areasServed[areasServed.length - 1]}. Our shop is at 4280 W Reno Ave Ste A, Las Vegas, NV 89118.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Mirror FAQs</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get a Free Custom Mirror Quote</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Tell us where the mirror is going and we will schedule a free measurement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Quote</Link>
            </Button>
            <PhoneNumber location="custom_mirrors_cta" className="text-xl font-semibold" />
          </div>
        </div>
      </section>

      <ServiceAreasBlock />
    </div>
  );
};

export default CustomMirrors;
