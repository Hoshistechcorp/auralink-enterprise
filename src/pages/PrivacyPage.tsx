import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Lock, Eye, Cookie, Mail, Database, UserX, Globe } from "lucide-react";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `IBloov (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share information when you use the IBloov platform and related services (collectively, the “Services”).

This policy applies to all users of IBloov, including business owners (our “Customers”) and the customers of those businesses who interact with IBloov-powered microsites, gift cards, loyalty programs, and other features.

By using the Services, you acknowledge that you have read and understood this Privacy Policy.`
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: `2.1 Information You Provide Directly
When you sign up for an IBloov account, we collect:
• Name, email address, and phone number;
• Business name, address, and category;
• Payment information (processed securely by our payment partners; we do not store full credit card numbers);
• Content you upload, including menus, photos, staff profiles, logos, and event details;
• Communications you send to us, including support requests and feedback.

2.2 Information We Collect Automatically
When you or your customers use a microsite or dashboard, we may automatically collect:
• Device and browser information (IP address, browser type, operating system);
• Usage data (pages visited, features used, time spent);
• Location data (if enabled by the user);
• Cookies and similar tracking technologies (see Section 8).

2.3 Customer Data
As a business using IBloov, you may collect personal information from your own customers through your microsite — such as names, emails, phone numbers, reservation details, loyalty points, visit history, and gift card purchases. You are the “data controller” for this information; IBloov acts as your “data processor.”`
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: `We use the information we collect to:
• Provide, operate, and maintain the IBloov platform;
• Process payments and manage subscriptions;
• Send transactional emails, account notifications, and service updates;
• Provide customer support and respond to inquiries;
• Improve and develop new features based on usage patterns;
• Ensure security, prevent fraud, and enforce our Terms of Service;
• Comply with legal obligations.

For Customer Data collected through your microsite, we process it solely to deliver the Services to you and in accordance with your instructions. We do not use your customers’ personal data for our own marketing without explicit consent.`
    },
    {
      id: "legal-bases",
      title: "4. Legal Bases for Processing",
      content: `Depending on your location, we rely on one or more of the following legal bases to process personal data:
• Contractual necessity — to fulfill our obligations under the Terms of Service;
• Legitimate interests — to improve our platform, ensure security, and prevent fraud;
• Consent — where required by law (e.g., for marketing communications or cookies);
• Legal obligation — to comply with applicable laws and regulations.

If you are in the European Economic Area (EEA), United Kingdom, or a jurisdiction with similar requirements, you have rights regarding your personal data as described in Section 12.`
    },
    {
      id: "sharing",
      title: "5. How We Share Information",
      content: `5.1 Service Providers. We share data with trusted third-party vendors who help us operate the Services, including:
• Cloud hosting providers (e.g., AWS);
• Payment processors (e.g., Stripe, Square);
• Email and notification services;
• Analytics providers.
These providers are contractually obligated to protect your data and use it only for the purposes we specify.

5.2 Business Customers. When an individual interacts with your microsite, their data is shared with you (the business owner) so you can manage reservations, loyalty programs, gift cards, and customer relationships.

5.3 Legal Requirements. We may disclose information if required by law, subpoena, or government request, or when we believe disclosure is necessary to protect our rights, property, or safety, or that of our users.

5.4 Business Transfers. If IBloov is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.`
    },
    {
      id: "ai-data",
      title: "6. AI Features & Data Processing",
      content: `IBloov offers AI-powered features, including the AI Concierge and automated review reply suggestions. When you enable these features:
• Customer inquiries and your business content may be processed by AI models to generate responses;
• We do not use customer data to train general-purpose AI models without your consent;
• You are responsible for reviewing AI-generated content before it is published or sent to customers;
• We recommend disclosing the use of AI to your customers where required by law.

For more details, see Section 9 of our Terms of Service.`
    },
    {
      id: "data-retention",
      title: "7. Data Retention & Deletion",
      content: `We retain your personal data for as long as your account is active or as needed to provide the Services. Once you cancel your account, we will delete or anonymize your data within a reasonable time, except where we are legally required to retain it.

If you are a business customer, you are responsible for determining appropriate retention periods for your own customers’ data and for honoring deletion requests in accordance with applicable privacy laws.`
    },
    {
      id: "cookies",
      title: "8. Cookies & Tracking Technologies",
      content: `IBloov and our partners use cookies and similar technologies to:
• Authenticate users and maintain sessions;
• Remember preferences and settings;
• Analyze usage and improve the platform;
• Deliver relevant content and features.

You can manage cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of the Services.

As a business using IBloov, you are responsible for ensuring your microsite complies with applicable cookie consent laws (such as the EU Cookie Directive) if you serve visitors from those jurisdictions.`
    },
    {
      id: "security",
      title: "9. Security Measures",
      content: `IBloov implements industry-standard security measures to protect your data, including:
• Encryption of data in transit (TLS/SSL) and at rest;
• Regular security audits and vulnerability assessments;
• Role-based access controls for team accounts;
• Monitoring for suspicious activity and unauthorized access.

However, no system is 100% secure. You are responsible for maintaining the security of your account credentials and promptly reporting any suspected breach.`
    },
    {
      id: "third-party",
      title: "10. Third-Party Links & Integrations",
      content: `IBloov integrates with third-party services such as Google Maps, social media platforms, reservation providers, and review sites. This Privacy Policy does not cover the data practices of those third parties. We encourage you to review their privacy policies before connecting them to your IBloov account.

We are not responsible for the privacy practices or content of third-party websites or services linked from your microsite.`
    },
    {
      id: "children",
      title: "11. Children’s Privacy",
      content: `IBloov is not intended for use by individuals under the age of 18, and we do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately so we can delete it.`
    },
    {
      id: "your-rights",
      title: "12. Your Privacy Rights",
      content: `Depending on your location, you may have the following rights regarding your personal data:
• Access — request a copy of the data we hold about you;
• Correction — request that we correct inaccurate or incomplete data;
• Deletion — request that we delete your personal data;
• Restriction — request that we limit how we use your data;
• Portability — request that we transfer your data to another service;
• Objection — object to certain types of processing (e.g., direct marketing);
• Withdraw Consent — withdraw consent where processing is based on consent.

To exercise these rights, contact us at privacy@auralink.com. We will respond within the timeframe required by applicable law.`
    },
    {
      id: "dpa",
      title: "13. Data Processing Agreement (DPA)",
      content: `For business customers subject to GDPR, CCPA, or similar regulations, IBloov acts as a data processor for Customer Data collected through your microsite. Our Data Processing Agreement (DPA) is incorporated by reference into our Terms of Service.

If you require a signed DPA for your records, please contact us at privacy@auralink.com and we will provide one.`
    },
    {
      id: "international",
      title: "14. International Data Transfers",
      content: `IBloov is based in the United States. If you access the Services from outside the United States, your data may be transferred to, stored, and processed in the United States or other countries where our service providers operate.

We use appropriate safeguards (such as Standard Contractual Clauses) to ensure your data receives an adequate level of protection when transferred internationally.`
    },
    {
      id: "changes",
      title: "15. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through your dashboard at least 30 days before they take effect. Your continued use of the Services after the effective date constitutes acceptance.`
    },
    {
      id: "contact",
      title: "16. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

• Email: privacy@auralink.com
• Address: IBloov Legal, [Business Address — to be updated]`
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Privacy</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              Your Data, Your Control
            </h1>
            <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              We take privacy seriously. This policy explains what we collect, how we use it, and the choices you have over your information.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted">
                <ShieldCheck className="w-3.5 h-3.5" />
                Effective: June 2, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted">
                Last Updated: June 2, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted">
                Version 1.0
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Table of contents */}
          <nav className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Contents
              </h3>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground py-1 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Sections */}
          <div className="flex-1 space-y-10">
            {sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.section>
            ))}

            {/* Data use summary */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="pt-6 border-t border-border"
            >
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                At a Glance: How We Handle Your Data
              </h2>
              <div className="grid gap-3">
                {[
                  { icon: Eye, label: "What we see", text: "Name, email, business info, uploaded content, and usage analytics." },
                  { icon: Database, label: "What we store", text: "Account data, microsite content, and Customer Data you collect through your microsite." },
                  { icon: Cookie, label: "Cookies", text: "We use cookies for authentication, preferences, and analytics. You can manage these in your browser." },
                  { icon: Mail, label: "Marketing", text: "We only send marketing emails with your consent. You can unsubscribe anytime." },
                  { icon: Globe, label: "Third parties", text: "We share data only with service providers who help us run the platform, and with you (the business owner)." },
                  { icon: UserX, label: "Your rights", text: "You can access, correct, delete, or export your data. Contact privacy@auralink.com." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/20"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Questions about your privacy? Contact us at{" "}
            <a href="mailto:privacy@auralink.com" className="text-primary font-medium hover:underline">
              privacy@auralink.com
            </a>
          </p>
          <Link
            to="/terms"
            className="text-sm font-medium text-primary hover:underline"
          >
            View Terms of Service →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
