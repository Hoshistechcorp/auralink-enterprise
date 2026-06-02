import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Scale, Shield } from "lucide-react";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "welcome",
      title: "1. Welcome to AuraLink",
      content: `These Terms of Service (“Terms”) govern your access to and use of the AuraLink platform, including our dashboard, admin panel, Card Studio, public microsites, and all related tools (collectively, the “Services”). AuraLink is a software platform designed for hospitality businesses to manage their online presence, customer engagement, and operations.

By creating an account, subscribing to a plan, or using any part of the Services, you (“Customer,” “you,” or “your”) agree to these Terms. If you are using AuraLink on behalf of a business, you represent that you have authority to bind that business.`
    },
    {
      id: "account",
      title: "2. Your Account & Who Can Use It",
      content: `2.1 Account Registration. You must provide accurate, current information when signing up. You are responsible for all activity under your account, including actions taken by team members you invite.

2.2 Team Members. You may invite employees or contractors to your account. You are responsible for assigning appropriate roles (Admin, Manager, Coordinator, Staff) and for any actions they take. AuraLink provides role-based access controls, but you must manage who gets access.

2.3 Account Security. Keep your password and two-factor authentication safe. Tell us immediately if you suspect unauthorized access.

2.4 Eligibility. You must be at least 18 years old and legally able to enter contracts. AuraLink is intended for business use, not personal consumer use.`
    },
    {
      id: "subscription",
      title: "3. Subscription Plans, Trials & Billing",
      content: `3.1 Plans. AuraLink offers three tiers: Spark (Free), Maverick ($79/month), and Supernova ($149/month). Features vary by tier and are described in your dashboard and in our documentation.

3.2 Free Trial. New accounts receive a 21-day free trial of Supernova. No credit card is required to start. When the trial ends, your account automatically downgrades to Spark (Free) unless you upgrade and enter payment information.

3.3 Billing. Paid subscriptions are billed monthly in advance. If you upgrade or downgrade, billing is prorated. You authorize us to charge your payment method on file.

3.4 No Refunds. Subscription fees are non-refundable except where required by law. Downgrading takes effect at the next billing cycle.

3.5 Trial Visibility. During your trial, a countdown banner is visible to you (the business owner) in your dashboard. Your public microsite may display an upgrade prompt if trial-exclusive features are active.

3.6 Spark (Free) Plan — Gift Card Commission. If you remain on the Spark (Free) plan and use the Gift Cards feature, AuraLink will deduct a platform commission of 3% to 5% from each gift card sale before remitting the balance to you. The exact commission rate within this range will be displayed in your dashboard and may vary based on payment processing costs, transaction volume, or promotional programs. This commission is in addition to any fees charged by third-party payment processors (e.g., Stripe, Square). By selling gift cards on the Spark plan, you consent to this deduction.`
    },
    {
      id: "acceptable-use",
      title: "4. What You Can Do With AuraLink (Acceptable Use)",
      content: `4.1 Proper Use. You agree to use AuraLink only for lawful hospitality business purposes. You may not use the platform to:
• Harass, defraud, or mislead customers;
• Sell illegal goods or services;
• Upload viruses, malware, or harmful code;
• Scrape, hack, or reverse-engineer the platform;
• Impersonate another business or person;
• Generate fake reviews or manipulate ratings.

4.2 Content You Upload. You retain ownership of your business content (menus, photos, staff profiles, logos, etc.). By uploading it, you give AuraLink a license to host, display, and transmit it solely to operate your microsite and provide the Services. You represent that you have the right to use all content you upload — including permission from staff members whose photos or names appear on your public microsite.

4.3 Prohibited Content. Do not upload content that is:
• Defamatory, obscene, or illegal;
• Infringing on someone else’s intellectual property;
• Containing hate speech or discrimination;
• Violating any third-party platform’s terms (e.g., Google, Yelp, TripAdvisor).

We may remove content or suspend accounts that violate these rules.`
    },
    {
      id: "microsite",
      title: "5. Your Public Microsite & Customer Interactions",
      content: `5.1 Your Microsite. AuraLink provides the tools to build a public-facing mini-website. You control what appears via Card Studio. You are responsible for the accuracy of your business hours, menu prices, contact information, and event details.

5.2 Action Buttons. You configure phone numbers, SMS lines, addresses, emails, and reservation links. You confirm that all contact methods belong to you and comply with applicable laws (including telemarketing and texting rules).

5.3 Reviews. If you enable the Reviews card, you acknowledge that reviews are generated by real customers. AuraLink aggregates or displays reviews but does not guarantee their accuracy. You agree not to post fake reviews, offer incentives for positive reviews in violation of platform policies, or use AI-generated review responses in a deceptive manner.

5.4 Accessibility. You are responsible for ensuring your microsite complies with applicable accessibility laws (such as the ADA in the United States and WCAG 2.1 standards). AuraLink provides customizable themes and tools, but you choose the colors, fonts, and layout. We recommend testing your microsite with accessibility tools.`
    },
    {
      id: "gift-cards",
      title: "6. Gift Cards",
      content: `6.1 Digital Gift Cards. AuraLink enables you to sell digital gift cards through your microsite. You are responsible for setting valid denominations, honoring redemptions, and maintaining sufficient business operations to fulfill gift card obligations.

6.2 Payment Processing. Gift card transactions are processed by third-party payment processors (e.g., Stripe, Square). AuraLink does not store full credit card numbers. You agree to the payment processor’s terms in addition to ours.

6.3 Spark Plan Commission. For customers on the Spark (Free) plan, AuraLink charges a platform commission on each gift card sale as described in Section 3.6. This commission is deducted automatically at the time of sale. Paid plans (Maverick and Supernova) do not incur this platform commission, though standard payment processor fees still apply.

6.4 Balances & Redemption. Gift card codes (e.g., BV-GIFT-100B) are generated by the platform. You are responsible for tracking balances, partial redemptions, and expired cards in accordance with your local laws on unclaimed property and gift card expiration.

6.5 Liability. AuraLink is not liable for lost, stolen, or fraudulently used gift cards unless caused by our gross negligence. You agree to handle customer disputes related to gift cards.`
    },
    {
      id: "loyalty",
      title: "7. Loyalty, Referrals & Gamification",
      content: `7.1 Loyalty Program. You may configure points, tiers, and rewards. You are responsible for ensuring your loyalty program complies with local consumer protection laws, tax regulations, and truth-in-advertising standards.

7.2 Referral Program. The Refer a Friend feature generates unique links for customers. You must ensure that referral rewards and communications comply with anti-spam laws (CAN-SPAM, CASL) and that you have consent to contact referred individuals.

7.3 Gamification & Prizes. Freebie Games, spin-the-wheel, and scratch-card features are for engagement purposes. You are responsible for configuring prize pools, win probabilities, and rules in compliance with local laws regarding sweepstakes, contests, and gambling. AuraLink does not guarantee that any specific game mechanic is legal in your jurisdiction — you must verify this.`
    },
    {
      id: "affiliate",
      title: "8. Affiliate & Influencer Programs",
      content: `8.1 Affiliate Sign-Up. If you enable the Affiliate card, individuals may sign up to promote your business using unique promo codes. You are responsible for setting commission rates, tracking conversions, and managing payouts.

8.2 Influencer Management. You may use AuraLink tools to track influencer campaigns. You are responsible for ensuring influencers disclose material connections in compliance with FTC guidelines (or equivalent in your jurisdiction). AuraLink provides tracking tools but does not manage influencer contracts or legal compliance on your behalf.`
    },
    {
      id: "ai",
      title: "9. AI Concierge & Automated Features",
      content: `9.1 AI Disclosure. If you enable the AI Concierge card, you agree to disclose to your customers that they are interacting with artificial intelligence, not a human employee, where required by law. AuraLink may provide a default disclosure badge, but you are responsible for ensuring it is visible and accurate.

9.2 AI Limitations. AI-generated responses (including review reply suggestions) are automated and may not always be accurate, appropriate, or legally compliant. You must review and approve AI-generated content before it is published or sent to customers. AuraLink is not liable for errors, omissions, or offensive content generated by AI.

9.3 Data Use for AI. You acknowledge that AI features may process customer inquiries and your business content to generate responses. This processing is part of the Services and is governed by our Privacy Policy.`
    },
    {
      id: "data-privacy",
      title: "10. Data, Privacy & Security",
      content: `10.1 Your Customer Data. You may collect personal information from your customers through your microsite (names, emails, phone numbers, visit history, etc.). You are the “data controller” under privacy laws like GDPR and CCPA; AuraLink acts as your “data processor.” We process this data only to provide the Services and in accordance with your instructions.

10.2 Data Processing Agreement (DPA). Our Data Processing Agreement is incorporated by reference. If you require a signed DPA, contact us.

10.3 Privacy Policy. You must post a privacy policy on your microsite or website that accurately describes how you collect, use, and share customer data. You must obtain all necessary consents (including for SMS marketing, cookies, and data sharing).

10.4 Security. AuraLink implements industry-standard security measures. However, no system is 100% secure. You are responsible for maintaining the security of your account credentials and promptly reporting any suspected breach.`
    },
    {
      id: "sms",
      title: "11. Text Messaging (SMS) & Communications",
      content: `11.1 SMS Compliance. If you use SMS features (action buttons, loyalty notifications, referral invites), you must comply with the Telephone Consumer Protection Act (TCPA), CAN-SPAM, CASL, and all similar laws. This includes obtaining proper consent before sending automated texts, maintaining opt-out lists, and honoring “STOP” requests immediately.

11.2 Your Responsibility. AuraLink provides the technical capability to send messages. You are responsible for the content of those messages and for ensuring you have legal permission to send them. You agree to indemnify AuraLink against any claims arising from your SMS or email communications.`
    },
    {
      id: "ip",
      title: "12. Intellectual Property",
      content: `12.1 AuraLink IP. The platform, code, designs, logos, documentation, and all non-customer content belong to AuraLink or our licensors. You receive a limited, non-exclusive, non-transferable license to use the platform during your subscription.

12.2 Your IP. You retain ownership of your business name, logo, and uploaded content. We may use your name and logo in anonymized aggregate case studies or testimonials only with your permission.

12.3 Feedback. If you suggest improvements or features, we may use your feedback without obligation or compensation.`
    },
    {
      id: "third-party",
      title: "13. Third-Party Services & Integrations",
      content: `13.1 Integrations. AuraLink integrates with third parties (reservation providers, Google Maps, social media platforms, payment processors, review sites). These services are governed by their own terms. We are not responsible for their availability, changes, or data practices.

13.2 Review Platforms. Aggregating reviews from Google, Yelp, or TripAdvisor is subject to those platforms’ API terms. You may not use AuraLink to scrape reviews in violation of those terms.`
    },
    {
      id: "termination",
      title: "14. Termination & Suspension",
      content: `14.1 By You. You may cancel your account at any time. Your microsite will remain active on the free Spark tier unless you explicitly delete your account. To fully delete your account and data, contact us.

14.2 By Us. We may suspend or terminate your account if you violate these Terms, fail to pay fees, or engage in illegal or harmful activity. We will attempt to notify you before termination unless immediate action is required.

14.3 Data After Termination. Upon account deletion, we will delete or anonymize your data within a reasonable time, except where we are legally required to retain it. We are not obligated to provide data exports after termination unless required by law.`
    },
    {
      id: "disclaimers",
      title: "15. Disclaimers & Limitations of Liability",
      content: `15.1 “As Is” Basis. The Services are provided “as is” and “as available.” We do not guarantee that the platform will be uninterrupted, error-free, or completely secure. We continually improve the platform, but features may change or be discontinued.

15.2 No Business Guarantee. AuraLink provides tools for engagement, marketing, and operations. We do not guarantee increased revenue, foot traffic, positive reviews, or customer loyalty.

15.3 Liability Cap. To the maximum extent permitted by law, AuraLink’s total liability to you for any claim arising from these Terms or the Services is limited to the amount you paid us in the 12 months preceding the claim, or $100 if you are on the free Spark plan.

15.4 Excluded Damages. We are not liable for indirect, incidental, special, consequential, or punitive damages (including lost profits, data loss, or reputational harm), even if we were advised of the possibility.

15.5 Exceptions. The liability cap does not apply to our gross negligence, willful misconduct, fraud, or where prohibited by law.`
    },
    {
      id: "indemnification",
      title: "16. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless AuraLink and our officers, employees, and affiliates from any claims, damages, or costs (including reasonable attorneys’ fees) arising from:
• Your use of the Services in violation of these Terms;
• Your content uploaded to the platform;
• Your interactions with customers (including gift card disputes, food safety, or service issues);
• Your violation of any third-party rights or laws (including privacy, accessibility, TCPA, FTC, or gambling regulations);
• Your misuse of AI-generated content or influencer campaigns.`
    },
    {
      id: "governing-law",
      title: "17. Governing Law & Disputes",
      content: `17.1 Law. These Terms are governed by the laws of Delaware, USA, without regard to conflict of law principles.

17.2 Dispute Resolution. Before filing a claim, we ask that you contact us to attempt resolution informally. Any dispute that cannot be resolved informally will be resolved in the courts located in Delaware, USA.

17.3 Class Action Waiver. You agree to resolve disputes on an individual basis and not as part of a class action.`
    },
    {
      id: "changes",
      title: "18. Changes to These Terms",
      content: `We may update these Terms as the platform evolves. If we make material changes, we will notify you by email or through your dashboard at least 30 days before they take effect. Your continued use of the Services after the effective date constitutes acceptance. If you do not agree, you must cancel your account.`
    },
    {
      id: "general",
      title: "19. General",
      content: `19.1 Entire Agreement. These Terms, together with our Privacy Policy and DPA, constitute the entire agreement between you and AuraLink.

19.2 Severability. If any part of these Terms is found invalid, the rest remains in effect.

19.3 Waiver. Our failure to enforce any part of these Terms is not a waiver of our rights.

19.4 Assignment. You may not assign these Terms without our consent. AuraLink may assign them in connection with a merger, acquisition, or sale of assets.

19.5 Contact Us. For questions about these Terms, contact us at: legal@auralink.com`
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
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Legal</span>
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
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Terms of Service
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              AuraLink Platform
            </h1>
            <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              Please read these terms carefully before using our services. By accessing or using AuraLink, you agree to be bound by these terms.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted">
                <Shield className="w-3.5 h-3.5" />
                Effective: June 2, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted">
                Last Updated: June 1, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted">
                Version 1.1
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

            {/* Quick Reference Table */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="pt-6 border-t border-border"
            >
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Quick Reference: What You (The Customer) Are Responsible For
              </h2>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Area</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Your Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Content accuracy", "Menus, prices, hours, staff info"],
                      ["Staff consent", "Photos, names, ratings on public profiles"],
                      ["Customer data", "Obtaining consent, privacy policy, DPA compliance"],
                      ["SMS/Email", "TCPA opt-in, opt-out, CAN-SPAM compliance"],
                      ["Gift cards", "Redemption, balances, honoring purchases (Spark users: 3–5% platform commission applies)"],
                      ["Accessibility", "Choosing compliant themes, testing your microsite"],
                      ["AI chatbot", "Reviewing AI responses, disclosing AI use"],
                      ["Games/prizes", "Legal compliance in your jurisdiction"],
                      ["Influencers", "Contracts, FTC disclosure, payment"],
                      ["Reviews", "Authenticity, no fake or incentivized manipulation"],
                    ].map(([area, resp]) => (
                      <tr key={area} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{area}</td>
                        <td className="px-4 py-3 text-muted-foreground">{resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Footer note */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Legal Note:</strong> This document is designed for business discussion and product alignment. Before publishing or sending it to clients, have it reviewed by a qualified attorney licensed in your jurisdiction. The specific rules around gift cards, sweepstakes, AI disclosure, and data privacy vary significantly by country, state, and industry.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Document Owner: Legal / Product · Next Review Date: August 31, 2026
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:legal@auralink.com" className="text-primary font-medium hover:underline">
              legal@auralink.com
            </a>
          </p>
          <Link
            to="/privacy"
            className="text-sm font-medium text-primary hover:underline"
          >
            View Privacy Policy →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
