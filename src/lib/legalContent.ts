export type LegalSection = {
  id: string;
  title: string;
  content: string;
};

export const TERMS_META = {
  effective: "June 2, 2026",
  lastUpdated: "June 1, 2026",
  version: "1.1",
};

export const PRIVACY_META = {
  effective: "June 2, 2026",
  lastUpdated: "June 2, 2026",
  version: "1.0",
};

export const termsSections: LegalSection[] = [
  {
    id: "welcome",
    title: "1. Welcome to IBloov",
    content: `These Terms of Service (“Terms”) govern your access to and use of the IBloov platform, including our dashboard, admin panel, Card Studio, public microsites, and all related tools (collectively, the “Services”). IBloov is a software platform designed for hospitality businesses to manage their online presence, customer engagement, and operations.

By creating an account, subscribing to a plan, or using any part of the Services, you (“Customer,” “you,” or “your”) agree to these Terms. If you are using IBloov on behalf of a business, you represent that you have authority to bind that business.`,
  },
  {
    id: "account",
    title: "2. Your Account & Who Can Use It",
    content: `2.1 Account Registration. You must provide accurate, current information when signing up. You are responsible for all activity under your account, including actions taken by team members you invite.

2.2 Team Members. You may invite employees or contractors to your account. You are responsible for assigning appropriate roles (Admin, Manager, Coordinator, Staff) and for any actions they take. IBloov provides role-based access controls, but you must manage who gets access.

2.3 Account Security. Keep your password and two-factor authentication safe. Tell us immediately if you suspect unauthorized access.

2.4 Eligibility. You must be at least 18 years old and legally able to enter contracts. IBloov is intended for business use, not personal consumer use.`,
  },
  {
    id: "subscription",
    title: "3. Subscription Plans, Trials & Billing",
    content: `3.1 Plans. IBloov offers three tiers: Spark (Free), Maverick ($79/month), and Supernova ($149/month). Features vary by tier and are described in your dashboard and in our documentation.

3.2 Free Trial. New accounts receive a 21-day free trial of Supernova. No credit card is required to start. When the trial ends, your account automatically downgrades to Spark (Free) unless you upgrade and enter payment information.

3.3 Billing. Paid subscriptions are billed monthly in advance. If you upgrade or downgrade, billing is prorated. You authorize us to charge your payment method on file.

3.4 No Refunds. Subscription fees are non-refundable except where required by law. Downgrading takes effect at the next billing cycle.

3.5 Trial Visibility. During your trial, a countdown banner is visible to you (the business owner) in your dashboard. Your public microsite may display an upgrade prompt if trial-exclusive features are active.

3.6 Spark (Free) Plan — Gift Card Commission. If you remain on the Spark (Free) plan and use the Gift Cards feature, IBloov will deduct a platform commission of 3% to 5% from each gift card sale before remitting the balance to you. The exact commission rate within this range will be displayed in your dashboard and may vary based on payment processing costs, transaction volume, or promotional programs. This commission is in addition to any fees charged by third-party payment processors (e.g., Stripe, Square). By selling gift cards on the Spark plan, you consent to this deduction.`,
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use",
    content: `4.1 Proper Use. You agree to use IBloov only for lawful hospitality business purposes. You may not use the platform to:
• Harass, defraud, or mislead customers;
• Sell illegal goods or services;
• Upload viruses, malware, or harmful code;
• Scrape, hack, or reverse-engineer the platform;
• Impersonate another business or person;
• Generate fake reviews or manipulate ratings.

4.2 Content You Upload. You retain ownership of your business content (menus, photos, staff profiles, logos, etc.). By uploading it, you give IBloov a license to host, display, and transmit it solely to operate your microsite and provide the Services. You represent that you have the right to use all content you upload — including permission from staff members whose photos or names appear on your public microsite.

4.3 Prohibited Content. Do not upload content that is defamatory, obscene, illegal, infringing on someone else’s intellectual property, contains hate speech or discrimination, or violates any third-party platform’s terms (e.g., Google, Yelp, TripAdvisor). We may remove content or suspend accounts that violate these rules.`,
  },
  {
    id: "microsite",
    title: "5. Your Public Microsite & Customer Interactions",
    content: `5.1 Your Microsite. IBloov provides the tools to build a public-facing mini-website. You control what appears via Card Studio. You are responsible for the accuracy of your business hours, menu prices, contact information, and event details.

5.2 Action Buttons. You configure phone numbers, SMS lines, addresses, emails, and reservation links. You confirm that all contact methods belong to you and comply with applicable laws (including telemarketing and texting rules).

5.3 Reviews. If you enable the Reviews card, you acknowledge that reviews are generated by real customers. IBloov aggregates or displays reviews but does not guarantee their accuracy. You agree not to post fake reviews, offer incentives for positive reviews in violation of platform policies, or use AI-generated review responses in a deceptive manner.

5.4 Accessibility. You are responsible for ensuring your microsite complies with applicable accessibility laws (such as the ADA and WCAG 2.1).`,
  },
  {
    id: "gift-cards",
    title: "6. Gift Cards",
    content: `6.1 Digital Gift Cards. IBloov enables you to sell digital gift cards through your microsite. You are responsible for setting valid denominations, honoring redemptions, and maintaining sufficient business operations to fulfill gift card obligations.

6.2 Payment Processing. Gift card transactions are processed by third-party payment processors. IBloov does not store full credit card numbers. You agree to the payment processor’s terms in addition to ours.

6.3 Spark Plan Commission. For customers on the Spark (Free) plan, IBloov charges a platform commission on each gift card sale as described in Section 3.6. Paid plans (Maverick and Supernova) do not incur this platform commission, though standard payment processor fees still apply.

6.4 Balances & Redemption. Gift card codes are generated by the platform. You are responsible for tracking balances, partial redemptions, and expired cards in accordance with your local laws on unclaimed property and gift card expiration.

6.5 Liability. IBloov is not liable for lost, stolen, or fraudulently used gift cards unless caused by our gross negligence.`,
  },
  {
    id: "loyalty",
    title: "7. Loyalty, Referrals & Gamification",
    content: `7.1 Loyalty Program. You may configure points, tiers, and rewards. You are responsible for ensuring your loyalty program complies with local consumer protection laws, tax regulations, and truth-in-advertising standards.

7.2 Referral Program. The Refer a Friend feature generates unique links for customers. You must ensure that referral rewards and communications comply with anti-spam laws (CAN-SPAM, CASL).

7.3 Gamification & Prizes. Freebie Games, spin-the-wheel, and scratch-card features are for engagement purposes. You are responsible for configuring prize pools, win probabilities, and rules in compliance with local laws.`,
  },
  {
    id: "affiliate",
    title: "8. Affiliate & Influencer Programs",
    content: `8.1 Affiliate Sign-Up. If you enable the Affiliate card, individuals may sign up to promote your business using unique promo codes. You are responsible for setting commission rates, tracking conversions, and managing payouts.

8.2 Influencer Management. You may use IBloov tools to track influencer campaigns. You are responsible for ensuring influencers disclose material connections in compliance with FTC guidelines.`,
  },
  {
    id: "ai",
    title: "9. AI Concierge & Automated Features",
    content: `9.1 AI Disclosure. If you enable the AI Concierge card, you agree to disclose to your customers that they are interacting with artificial intelligence, not a human employee, where required by law.

9.2 AI Limitations. AI-generated responses are automated and may not always be accurate or legally compliant. You must review and approve AI-generated content before it is published or sent to customers.

9.3 Data Use for AI. AI features may process customer inquiries and your business content to generate responses. This processing is governed by our Privacy Policy.`,
  },
  {
    id: "data-privacy",
    title: "10. Data, Privacy & Security",
    content: `10.1 Your Customer Data. You are the “data controller” under privacy laws like GDPR and CCPA; IBloov acts as your “data processor.”

10.2 Data Processing Agreement (DPA). Our DPA is incorporated by reference. If you require a signed DPA, contact us.

10.3 Privacy Policy. You must post a privacy policy on your microsite that accurately describes how you collect, use, and share customer data.

10.4 Security. IBloov implements industry-standard security measures. You are responsible for maintaining the security of your account credentials.`,
  },
  {
    id: "sms",
    title: "11. Text Messaging (SMS) & Communications",
    content: `11.1 SMS Compliance. If you use SMS features, you must comply with the TCPA, CAN-SPAM, CASL, and all similar laws. This includes obtaining proper consent before sending automated texts, maintaining opt-out lists, and honoring “STOP” requests immediately.

11.2 Your Responsibility. IBloov provides the technical capability to send messages. You are responsible for the content of those messages and ensuring legal permission to send them.`,
  },
  {
    id: "ip",
    title: "12. Intellectual Property",
    content: `12.1 IBloov IP. The platform, code, designs, logos, and documentation belong to IBloov. You receive a limited, non-exclusive license to use the platform during your subscription.

12.2 Your IP. You retain ownership of your business name, logo, and uploaded content.

12.3 Feedback. If you suggest improvements, we may use your feedback without obligation or compensation.`,
  },
  {
    id: "termination",
    title: "13. Termination & Suspension",
    content: `13.1 By You. You may cancel your account at any time. To fully delete your account and data, contact us.

13.2 By Us. We may suspend or terminate your account if you violate these Terms, fail to pay fees, or engage in illegal or harmful activity.

13.3 Data After Termination. Upon account deletion, we will delete or anonymize your data within a reasonable time, except where legally required to retain it.`,
  },
  {
    id: "disclaimers",
    title: "14. Disclaimers & Limitations of Liability",
    content: `14.1 “As Is” Basis. The Services are provided “as is” and “as available.” We do not guarantee that the platform will be uninterrupted, error-free, or completely secure.

14.2 No Business Guarantee. We do not guarantee increased revenue, foot traffic, positive reviews, or customer loyalty.

14.3 Liability Cap. IBloov’s total liability is limited to the amount you paid us in the 12 months preceding the claim, or $100 if you are on the free Spark plan.

14.4 Excluded Damages. We are not liable for indirect, incidental, special, consequential, or punitive damages.`,
  },
  {
    id: "indemnification",
    title: "15. Indemnification",
    content: `You agree to defend, indemnify, and hold harmless IBloov from any claims arising from:
• Your use of the Services in violation of these Terms;
• Your content uploaded to the platform;
• Your interactions with customers (including gift card disputes, food safety, or service issues);
• Your violation of any third-party rights or laws;
• Your misuse of AI-generated content or influencer campaigns.`,
  },
  {
    id: "governing-law",
    title: "16. Governing Law & Disputes",
    content: `16.1 Law. These Terms are governed by the laws of Delaware, USA.

16.2 Dispute Resolution. Any dispute that cannot be resolved informally will be resolved in the courts located in Delaware, USA.

16.3 Class Action Waiver. You agree to resolve disputes on an individual basis and not as part of a class action.`,
  },
  {
    id: "changes",
    title: "17. Changes to These Terms",
    content: `We may update these Terms as the platform evolves. If we make material changes, we will notify you by email or through your dashboard at least 30 days before they take effect.`,
  },
  {
    id: "general",
    title: "18. General & Contact",
    content: `These Terms, together with our Privacy Policy and DPA, constitute the entire agreement between you and IBloov. If any part is found invalid, the rest remains in effect.

For questions about these Terms, contact us at: legal@auralink.com`,
  },
];

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `IBloov (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share information when you use the IBloov platform and related services.

This policy applies to all users of IBloov, including business owners and the customers of those businesses who interact with IBloov-powered microsites, gift cards, loyalty programs, and other features.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: `2.1 Information You Provide Directly — Name, email, phone number, business name, address, category, payment information (processed securely by partners), uploaded content (menus, photos, staff profiles, logos), and communications you send to us.

2.2 Information We Collect Automatically — Device and browser information, IP address, usage data, location data (if enabled), cookies and similar tracking technologies.

2.3 Customer Data — As a business using IBloov, you may collect personal information from your own customers through your microsite. You are the “data controller” for this information; IBloov acts as your “data processor.”`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use the information we collect to provide, operate, and maintain the IBloov platform; process payments and manage subscriptions; send transactional emails and service updates; provide customer support; improve and develop new features; ensure security and prevent fraud; and comply with legal obligations.

For Customer Data collected through your microsite, we process it solely to deliver the Services to you and in accordance with your instructions.`,
  },
  {
    id: "legal-bases",
    title: "4. Legal Bases for Processing",
    content: `Depending on your location, we rely on contractual necessity, legitimate interests, consent (where required by law), and legal obligation. If you are in the EEA, UK, or a jurisdiction with similar requirements, you have rights described in Section 12.`,
  },
  {
    id: "sharing",
    title: "5. How We Share Information",
    content: `5.1 Service Providers — Cloud hosting, payment processors, email/notification services, and analytics providers, contractually obligated to protect your data.

5.2 Business Customers — Microsite visitor data is shared with you (the business owner) so you can manage reservations, loyalty, gift cards, and customer relationships.

5.3 Legal Requirements — We may disclose information if required by law, subpoena, or government request.

5.4 Business Transfers — If IBloov is involved in a merger or acquisition, your information may be transferred as part of that transaction.`,
  },
  {
    id: "ai-data",
    title: "6. AI Features & Data Processing",
    content: `When you enable AI-powered features (AI Concierge, automated review reply suggestions), customer inquiries and your business content may be processed by AI models to generate responses. We do not use customer data to train general-purpose AI models without your consent. You are responsible for reviewing AI-generated content before it is published.`,
  },
  {
    id: "data-retention",
    title: "7. Data Retention & Deletion",
    content: `We retain your personal data for as long as your account is active or as needed to provide the Services. Once you cancel your account, we will delete or anonymize your data within a reasonable time, except where legally required to retain it.`,
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking Technologies",
    content: `We use cookies for authentication, preferences, analytics, and to deliver relevant content. You can manage cookie preferences through your browser. As a business using IBloov, you are responsible for ensuring your microsite complies with applicable cookie consent laws.`,
  },
  {
    id: "security",
    title: "9. Security Measures",
    content: `We implement industry-standard measures including TLS/SSL encryption in transit and at rest, regular security audits, role-based access controls, and monitoring for suspicious activity. No system is 100% secure — you are responsible for maintaining the security of your account credentials.`,
  },
  {
    id: "third-party",
    title: "10. Third-Party Links & Integrations",
    content: `IBloov integrates with third-party services such as Google Maps, social media platforms, reservation providers, and review sites. This Privacy Policy does not cover the data practices of those third parties.`,
  },
  {
    id: "children",
    title: "11. Children’s Privacy",
    content: `IBloov is not intended for use by individuals under the age of 18, and we do not knowingly collect personal data from children.`,
  },
  {
    id: "your-rights",
    title: "12. Your Privacy Rights",
    content: `You may have rights to access, correct, delete, restrict, port, object to processing, or withdraw consent. To exercise these rights, contact us at privacy@auralink.com.`,
  },
  {
    id: "dpa",
    title: "13. Data Processing Agreement (DPA)",
    content: `For business customers subject to GDPR, CCPA, or similar regulations, IBloov acts as a data processor. Our DPA is incorporated by reference into our Terms of Service. If you require a signed DPA, contact privacy@auralink.com.`,
  },
  {
    id: "international",
    title: "14. International Data Transfers",
    content: `IBloov is based in the United States. If you access the Services from outside the United States, your data may be transferred to, stored, and processed in the United States. We use appropriate safeguards such as Standard Contractual Clauses.`,
  },
  {
    id: "changes",
    title: "15. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through your dashboard at least 30 days before they take effect.`,
  },
  {
    id: "contact",
    title: "16. Contact Us",
    content: `Email: privacy@auralink.com
Address: IBloov Legal, [Business Address — to be updated]`,
  },
];
