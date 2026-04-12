import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Baja Glass & Mirror</title>
        <meta name="description" content="Privacy policy for Baja Glass & Mirror in Las Vegas. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://bajaglass.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 12, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Baja Glass & Mirror LLC ("we," "us," or "our") operates the website bajaglass.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are committed to protecting your privacy and handling your data transparently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Submit a contact form or request a quote (name, phone number, email address, project details)</li>
              <li>Call our business phone number</li>
              <li>Email us directly</li>
              <li>Interact with our website</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We also automatically collect certain technical information through cookies and similar technologies, including your IP address, browser type, pages visited, time spent on pages, and referring website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To respond to your inquiries and provide quotes for our glass and shower door services</li>
              <li>To schedule measurements, fabrication, and installation appointments</li>
              <li>To communicate about your project status and follow-up service</li>
              <li>To improve our website and services based on usage patterns</li>
              <li>To send occasional service-related communications (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the following third-party services that may collect data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Google Analytics (via Google Tag Manager)</strong> — We use Google Analytics to understand how visitors interact with our website. This service collects anonymized usage data including pages visited, session duration, and traffic sources. You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Google Analytics Opt-out Browser Add-on</a>.</li>
              <li><strong>Google Maps</strong> — We embed Google Maps to help you find our location. Google's privacy policy applies to data collected through the map embed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption for all data transmission. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>California Residents (CCPA):</strong> You have the right to know what personal information we collect, request deletion of your data, and opt out of the sale of personal information. We do not sell personal information.</li>
              <li><strong>Nevada Residents:</strong> Under Nevada law, you may opt out of the sale of certain personal information. We do not sell your personal information.</li>
              <li><strong>All Users:</strong> You may request access to, correction of, or deletion of your personal information by contacting us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website and services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
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

export default PrivacyPolicy;
