import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, HelpCircle, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
import { trackPhoneClick } from "@/lib/analytics";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Frameless Shower Doors",
      href: "/shower-doors-las-vegas/frameless",
      faqs: [
        {
          question: "What makes a shower door 'frameless'?",
          answer: "Frameless doors use thicker tempered glass (3/8\" or 1/2\") with minimal metal hardware—just clips, hinges, and handles—creating a clean, open look without full metal framing."
        },
        {
          question: "Is 3/8\" or 1/2\" glass better for my shower?",
          answer: "3/8\" offers excellent strength and clarity for most doors. 1/2\" adds rigidity and a luxury feel—especially useful for larger spans and when you want maximum durability."
        },
        {
          question: "Do frameless doors leak?",
          answer: "When properly measured and installed with correct seals and sweeps, frameless doors are very effective at containing water. We focus on precise fit and quality sealing."
        },
        {
          question: "Can I get low-iron glass for clearer edges?",
          answer: "Yes! Low-iron glass reduces the green tint you see on standard glass edges, creating an ultra-clear, premium appearance that many homeowners prefer."
        },
        {
          question: "How do you keep the door from hitting fixtures?",
          answer: "During measurement, we account for all fixtures, handles, and obstacles to ensure proper door swing clearance and optimal placement of hardware."
        },
        {
          question: "Do you handle custom angles and notches?",
          answer: "Absolutely. We can create custom cutouts, notches, and angled cuts for towel bars, fixtures, benches, and unique architectural features."
        }
      ]
    },
    {
      category: "Semi-Frameless & Framed Doors",
      href: "/shower-doors-las-vegas/semi-frameless-framed",
      faqs: [
        {
          question: "What's the difference between semi-frameless and fully framed doors?",
          answer: "Semi-frameless doors use minimal metal framing around the glass with strategic support points, offering a balance between the clean look of frameless and the structural support of fully framed systems."
        },
        {
          question: "Do framed doors seal better than frameless?",
          answer: "Both can seal excellently when properly installed. Framed doors use the metal framework to create consistent seal points, while frameless doors rely on precision fit and quality seals."
        },
        {
          question: "Which frame finish options are available?",
          answer: "We offer matte black, polished chrome, brushed nickel, and brass finishes to match your bathroom fixtures and design preferences."
        },
        {
          question: "Can you install on tubs as well as showers?",
          answer: "Yes! We install semi-frameless and framed systems on both shower-only installations and tub/shower combinations with proper sealing for each application."
        },
        {
          question: "Are patterned or frosted glass options available?",
          answer: "Absolutely! We offer clear, frosted, rain, and various patterned glass options to provide privacy or decorative elements while maintaining the structural benefits of framed systems."
        }
      ]
    },
    {
      category: "Sliding Shower Doors",
      href: "/shower-doors-las-vegas/sliding",
      faqs: [
        {
          question: "What's the difference between single sliding and bypass?",
          answer: "Single sliding has one moving panel that slides along a fixed panel. Bypass systems have two panels that slide past each other, providing wider access options."
        },
        {
          question: "Can sliding doors work on tubs and showers?",
          answer: "Yes! We install sliding systems on both shower-only and tub/shower combinations, with proper sealing and hardware for each application."
        },
        {
          question: "Do sliding doors seal as well as hinged doors?",
          answer: "When properly installed with quality rollers, tracks, and seals, sliding doors provide excellent water containment and smooth operation."
        },
        {
          question: "Are soft-close systems available?",
          answer: "Yes, we offer soft-close roller systems that prevent slamming and provide smooth, controlled door movement for a premium feel."
        },
        {
          question: "Can I choose different handle styles?",
          answer: "Absolutely! We offer various handle styles including ladder pulls, compact handles, and integrated towel bars in multiple finishes."
        }
      ]
    },
    {
      category: "Hinged & Pivot Doors",
      href: "/shower-doors-las-vegas/hinged",
      faqs: [
        {
          question: "What's the difference between a hinged and pivot door?",
          answer: "Hinged doors use traditional hinges mounted to the wall or glass panel. Pivot doors rotate on pivot points at the top and bottom, allowing for larger, heavier glass panels."
        },
        {
          question: "Which way should my shower door swing?",
          answer: "Doors typically swing outward for safety and easier access. We'll assess your bathroom layout to determine the optimal swing direction during measurement."
        },
        {
          question: "Can hinged doors work in small bathrooms?",
          answer: "Yes! We carefully measure clearances and can recommend space-saving solutions like pivot doors or alternative layouts that maximize your available space."
        },
        {
          question: "Do hinged doors seal better than sliding doors?",
          answer: "Both can seal excellently when properly installed. Hinged doors use compression seals that create tight closure, while sliding doors use sweep seals and proper track alignment."
        },
        {
          question: "Are there handle and hinge finish options?",
          answer: "Absolutely! We offer matte black, polished chrome, brushed nickel, and brass finishes to match your bathroom fixtures and personal style."
        }
      ]
    },
    {
      category: "Custom Enclosures",
      href: "/shower-doors-las-vegas/custom-enclosures",
      faqs: [
        {
          question: "Can you handle neo-angle and steam enclosures?",
          answer: "Absolutely! We specialize in complex layouts including neo-angle corners, steam-ready designs with proper sealing, and unique architectural challenges."
        },
        {
          question: "What glass thickness should I consider for custom enclosures?",
          answer: "For most custom enclosures, 3/8\" provides excellent strength. For larger spans or steam applications, 1/2\" offers added rigidity and premium feel."
        },
        {
          question: "How do you manage uneven walls or kneewalls?",
          answer: "We use precise laser measurement and custom templating to account for out-of-plumb walls, varying heights, and unique structural elements."
        },
        {
          question: "Are there hardware finish and handle options?",
          answer: "Yes! We offer matte black, polished chrome, brushed nickel, and brass finishes with various handle styles to match your design preferences."
        },
        {
          question: "What's included in the measurement and installation process?",
          answer: "We provide complete service: initial consultation, precise measurement, custom fabrication, professional installation, and final walkthrough with care instructions."
        }
      ]
    },
    {
      category: "Steam Shower Enclosures",
      href: "/shower-doors-las-vegas/steam-enclosures",
      faqs: [
        {
          question: "Do I need an operable transom on a steam shower?",
          answer: "Yes, an operable transom window is essential for steam showers. It allows you to control ventilation, release excess steam, and regulate temperature for comfort and safety."
        },
        {
          question: "How do you keep steam from escaping around the door?",
          answer: "We use specialized clear gaskets, precise door alignment, and comprehensive sealing around all edges. The enclosure is designed as a complete system to contain steam effectively."
        },
        {
          question: "What glass thickness is recommended for steam enclosures?",
          answer: "We typically recommend 1/2\" tempered glass for steam applications due to the larger spans often required and the additional structural integrity needed for steam containment."
        },
        {
          question: "Can you use low-iron glass in a steam shower?",
          answer: "Absolutely! Low-iron glass provides exceptional clarity and works perfectly in steam applications. The ultra-clear appearance enhances the spa-like experience."
        },
        {
          question: "How are gaskets and seals maintained over time?",
          answer: "Steam shower seals should be inspected periodically and cleaned with mild soap. We provide detailed maintenance instructions and can replace seals as needed to maintain optimal performance."
        },
        {
          question: "Can you convert my existing shower into a steam shower enclosure?",
          answer: "In many cases, yes! We evaluate the existing space, plumbing, and structural requirements to determine feasibility and provide solutions for steam shower conversion."
        }
      ]
    },
    {
      category: "Shower Enclosures Las Vegas",
      href: "/shower-enclosures-las-vegas",
      faqs: [
        {
          question: "What types of shower enclosures are available in Las Vegas?",
          answer: "We offer inline, corner, neo-angle, steam, walk-in, and alcove shower enclosures in Las Vegas. Each type comes in frameless, semi-frameless, or framed options with various glass thicknesses and hardware finishes."
        },
        {
          question: "How much do glass shower enclosures cost in Las Vegas, NV?",
          answer: "Glass shower enclosures in Las Vegas range from $800 for basic semi-frameless alcove units to $4,500+ for custom frameless steam enclosures. Pricing depends on size, glass type, hardware finish, and configuration complexity."
        },
        {
          question: "Can you install custom shower enclosures for unusual bathroom layouts?",
          answer: "Absolutely! We specialize in custom shower enclosures for non-standard spaces including angled walls, kneewalls, benches, and unique architectural features throughout Henderson, Summerlin, and Las Vegas."
        },
        {
          question: "What's the best shower enclosure for a small bathroom?",
          answer: "Corner and neo-angle shower enclosures maximize space in smaller bathrooms. Sliding doors also work well as they don't require door swing clearance. Frameless glass creates an open feel that makes small bathrooms appear larger."
        },
        {
          question: "Do you offer shower enclosure installation in Henderson and Summerlin?",
          answer: "Yes! We install shower enclosures throughout the Las Vegas Valley including Henderson, Summerlin, Paradise, Spring Valley, Enterprise, Green Valley, and North Las Vegas."
        },
        {
          question: "How long does shower enclosure installation take?",
          answer: "Most standard shower enclosure installations are completed in 2-4 hours. Custom enclosures with multiple panels or complex configurations may take 4-6 hours. We complete most projects in a single visit."
        }
      ]
    },
    {
      category: "Shower Door Replacement",
      href: "/shower-doors-las-vegas",
      faqs: [
        {
          question: "Can you replace a cracked shower door?",
          answer: "Yes! Cracked tempered glass must be replaced for safety. We provide fast replacement with matching or upgraded glass and hardware to restore your shower quickly."
        },
        {
          question: "How quickly can you replace broken shower glass?",
          answer: "For emergency situations, we offer same-day or next-day service. Standard replacements are typically scheduled within 2-3 business days."
        },
        {
          question: "Can you upgrade my shower door hardware?",
          answer: "Absolutely! We replace hinges, handles, rollers, tracks, and seals with premium options. Often a full door upgrade delivers a dramatically better result than patchwork fixes."
        },
        {
          question: "What causes shower doors to shatter?",
          answer: "Tempered glass can shatter from edge damage, manufacturing defects, or extreme temperature changes. We inspect the cause and recommend a quality replacement to prevent future issues."
        }
      ]
    },
    {
      category: "Shower Door Installation",
      href: "/shower-doors-las-vegas",
      faqs: [
        {
          question: "Where can I find frameless shower door installers near me?",
          answer: "Baja Glass provides professional frameless shower door installation throughout Las Vegas, Henderson, Summerlin, and the entire valley. We're locally owned and operated with over 20 years of experience. Call (702) 383-0779 for a free quote."
        },
        {
          question: "What is the cost of shower door installation in Las Vegas?",
          answer: "Shower door installation costs in Las Vegas range from $600-$3,000+ depending on door type, glass thickness, and configuration. Frameless doors typically cost more than semi-frameless or framed options. We provide free in-home quotes with exact pricing."
        },
        {
          question: "Do you offer same-day shower door installation near me?",
          answer: "For urgent needs, we offer expedited scheduling when possible. Most standard installations are scheduled within 1-2 weeks from measurement to completion. Call us to discuss your timeline."
        },
        {
          question: "How do I find glass shower enclosure installation near me?",
          answer: "Baja Glass serves the entire Las Vegas Valley with professional glass shower enclosure installation. We provide free in-home consultations and measurements. Contact us at (702) 383-0779."
        },
        {
          question: "Are your shower door installers licensed and insured?",
          answer: "Yes! Baja Glass is fully licensed, bonded, and insured in Nevada. Our installers are trained professionals with years of experience in shower door and glass enclosure installation."
        }
      ]
    },
    {
      category: "Custom Shower Doors",
      href: "/custom-shower-doors-las-vegas",
      faqs: [
        {
          question: "How do I find custom shower doors near me in Las Vegas?",
          answer: "Baja Glass provides custom shower door design and installation throughout Las Vegas, Henderson, Summerlin, and the entire valley. We offer free in-home consultations where we measure your space and discuss design options. Call (702) 383-0779 to schedule."
        },
        {
          question: "What makes a shower door 'custom' vs. standard?",
          answer: "Custom shower doors are made-to-measure for your specific space, unlike pre-fabricated standard sizes. This includes unique dimensions, angled cuts, notches for fixtures, and specialized hardware placement to fit your bathroom perfectly."
        },
        {
          question: "Can you create custom shower doors for unusual bathroom layouts?",
          answer: "Absolutely! We specialize in custom solutions for non-standard spaces including angled walls, kneewalls, benches, sloped ceilings, and unique architectural features throughout Las Vegas homes."
        },
        {
          question: "What's the cost of custom shower doors in Las Vegas?",
          answer: "Custom shower doors in Las Vegas range from $1,200-$4,500+ depending on size, glass type, and hardware. Frameless custom doors with low-iron glass and premium hardware are at the higher end. We provide free detailed quotes."
        }
      ]
    },
    {
      category: "Pricing & Installation",
      href: "/blog/shower-door-installation-cost-las-vegas",
      faqs: [
        {
          question: "How much does shower door installation cost in Las Vegas?",
          answer: "Shower door installation in Las Vegas typically ranges from $600-$1,500 for semi-frameless doors, $1,200-$3,000 for frameless doors, and $2,500-$5,000+ for custom enclosures. Pricing depends on size, glass thickness, and hardware choices."
        },
        {
          question: "How long does shower door installation take?",
          answer: "Most single door installations take 1-2 hours. Full enclosures may take 2-4 hours. Custom and complex installations could require 4-6 hours. We complete most jobs in a single visit."
        },
        {
          question: "Do you provide free estimates?",
          answer: "Yes! We offer free in-home consultations and estimates. Our team will measure your space, discuss options, and provide a detailed quote with no obligation."
        },
        {
          question: "What's your service area?",
          answer: "We serve the entire Las Vegas Valley including Henderson, Summerlin, Paradise, Spring Valley, Enterprise, Green Valley, North Las Vegas, and surrounding communities."
        }
      ]
    }
  ];

  // Flatten all FAQs for schema
  const allFaqs = faqCategories.flatMap(category => category.faqs);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Shower Door FAQ | Baja Glass & Mirror Las Vegas</title>
        <meta name="description" content="Find answers to common questions about shower doors, glass enclosures, installation, pricing, and replacement services in Las Vegas. Expert advice from Baja Glass & Mirror." />
        <link rel="canonical" href="https://bajaglass.com/faq" />
        {/* FAQPage Schema with all FAQs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Baja Glass & Mirror LLC",
            "url": "https://bajaglass.com",
            "logo": "https://bajaglass.com/lovable-uploads/54a1a8b1-33ac-4549-bc66-3c91c62ef596.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-702-383-0779",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["English", "Spanish"]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal via-primary to-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-white/10 mb-6">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 mb-8">
              Expert answers about shower doors, glass enclosures, installation, and repair services in Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Free Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("faq")}>
                  <Phone className="h-5 w-5" />
                  (702) 383-0779
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="px-4 py-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div 
                key={category.category} 
                id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                className="scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                  <Link 
                    to={category.href} 
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.category}-${index}`}
                      className="bg-secondary/30 rounded-lg px-4 border-none"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized advice about your shower door project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="tel:+17023830779" className="flex items-center gap-2" onClick={() => trackPhoneClick("faq")}>
                <Phone className="h-5 w-5" />
                Call Now: (702) 383-0779
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
