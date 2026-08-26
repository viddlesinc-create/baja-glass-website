import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://bajaglass.com/terms-of-service" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 12, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the bajaglass.com website and engaging Baja Glass & Mirror LLC ("we," "us," or "our") for services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Baja Glass & Mirror LLC provides glass installation services in the Las Vegas Valley, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Custom frameless, semi-frameless, and framed shower door installation</li>
              <li>Sliding and hinged shower door installation</li>
              <li>Custom shower enclosure design and installation</li>
              <li>Steam shower enclosure installation</li>
              <li>Mirror installation and removal</li>
              <li>Residential glass replacement</li>
              <li>Office and commercial glass enclosures</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All services are subject to a written estimate or proposal agreed upon by both parties before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Estimates & Pricing</h2>
            <p className="text-muted-foreground leading-relaxed">
              All estimates are provided free of charge and are valid for 30 days from the date of issue unless otherwise stated. Final pricing may vary from initial estimates if site conditions differ from what was observed during measurement, if the scope of work changes, or if material selections are modified. Any changes to the agreed scope of work will be communicated and approved by the customer before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Warranty</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Baja Glass & Mirror stands behind the quality of our work:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Workmanship Warranty:</strong> We warranty our installation workmanship. If any issue arises from our installation, we will return to correct it at no additional charge.</li>
              <li><strong>Glass Warranty:</strong> All tempered glass is manufactured to ANSI Z97.1 and CPSC 16 CFR 1201 safety standards. Glass defects present at the time of installation will be replaced at no cost.</li>
              <li><strong>Hardware Warranty:</strong> Hardware warranties vary by manufacturer. We use professional-grade hardware and will assist with any warranty claims.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Warranty does not cover damage caused by misuse, improper cleaning products, impact, or normal wear and tear. Warranty claims must be reported promptly by contacting our office.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms are outlined in your project proposal. We accept cash, checks, and major credit cards. A deposit may be required for custom fabrication orders. Final payment is due upon completion of installation and customer walkthrough. We reserve the right to charge interest on overdue balances as permitted by Nevada law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation & Rescheduling</h2>
            <p className="text-muted-foreground leading-relaxed">
              Customers may cancel or reschedule appointments with at least 24 hours' notice at no charge. For custom fabrication orders, cancellations after glass has been cut to size may be subject to a fabrication fee, as custom glass cannot be reused for other projects. We will communicate any applicable fees before fabrication begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Baja Glass & Mirror LLC's liability is limited to the cost of the services provided. We are not liable for indirect, incidental, or consequential damages. We carry comprehensive general liability insurance and are bonded as required by the State of Nevada. Our Nevada C8 Glass and Glazing License ensures all work meets state codes and standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Customer Responsibilities</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate information about the project scope and site conditions</li>
              <li>Ensure reasonable access to the work area on the scheduled installation date</li>
              <li>Remove personal items from the immediate work area prior to installation</li>
              <li>Follow care and maintenance instructions provided after installation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on bajaglass.com—including text, images, logos, and design—is the property of Baja Glass & Mirror LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service are governed by the laws of the State of Nevada. Any disputes arising from these terms or our services shall be resolved in the courts of Clark County, Nevada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes take effect when posted on this page. Continued use of our website or services after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 text-muted-foreground space-y-1">
              <p><strong>Baja Glass & Mirror LLC</strong></p>
              <p>4280 W Reno Ave, Ste A</p>
              <p>Las Vegas, NV 89118</p>
              <p>Phone: <a href="tel:+17023830779" className="text-primary underline hover:text-primary/80">(702) 383-0779</a></p>
              <p>Email: <a href="mailto:info@bajaglass.com" className="text-primary underline hover:text-primary/80">info@bajaglass.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
