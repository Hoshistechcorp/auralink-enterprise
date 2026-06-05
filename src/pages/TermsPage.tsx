import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Sparkles, Mail, ChevronRight } from "lucide-react";
import { termsSections, TERMS_META } from "@/lib/legalContent";
import { ReadingProgress } from "@/components/legal/ReadingProgress";

const TermsPage = () => {
  const [activeId, setActiveId] = useState(termsSections[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    termsSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to IBloov
          </Link>
          <Link
            to="/privacy"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:inline-flex items-center gap-1"
          >
            Privacy Policy <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Legal · v{TERMS_META.version}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-[1.05] tracking-tight">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              The ground rules for using IBloov — written plainly so you know exactly what you're agreeing to.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">Effective</span>
                <span className="font-medium text-foreground">{TERMS_META.effective}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                <span className="text-muted-foreground">Updated</span>
                <span className="font-medium text-foreground">{TERMS_META.lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Contents
                </span>
              </div>
              <ul className="space-y-0.5 max-h-[70vh] overflow-y-auto pr-2">
                {termsSections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`relative block text-xs py-2 pl-3 pr-2 rounded-md transition-all ${
                          active
                            ? "text-foreground font-medium bg-primary/5"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-r" />
                        )}
                        {s.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <article className="min-w-0">
            <div className="space-y-12">
              {termsSections.map((section, i) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                  className="scroll-mt-24 group"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-xs font-mono font-bold text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground leading-tight">
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </h2>
                  </div>
                  <div className="pl-10 text-sm md:text-[15px] text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.section>
              ))}

              {/* Quick reference card */}
              <motion.section
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mt-16 p-6 md:p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <h3 className="text-lg font-display font-semibold mb-1 text-foreground">
                  At-a-glance: your responsibilities
                </h3>
                <p className="text-xs text-muted-foreground mb-5">
                  A non-exhaustive summary — the full terms above always apply.
                </p>
                <div className="divide-y divide-border/60">
                  {[
                    ["Content accuracy", "Menus, prices, hours, staff info"],
                    ["Staff consent", "Photos, names, ratings on public profiles"],
                    ["Customer data", "Consent, privacy policy, DPA compliance"],
                    ["SMS / Email", "TCPA opt-in, opt-out, CAN-SPAM"],
                    ["Gift cards", "Redemption & balances (Spark: 3–5% platform fee)"],
                    ["Accessibility", "Testing your microsite for WCAG / ADA"],
                    ["AI chatbot", "Reviewing AI responses, disclosing AI use"],
                    ["Games / prizes", "Local sweepstakes & gaming compliance"],
                    ["Influencers", "Contracts, FTC disclosure, payment"],
                    ["Reviews", "Authenticity, no fake or paid manipulation"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-4 py-3">
                      <div className="text-xs font-semibold text-foreground">{k}</div>
                      <div className="text-xs text-muted-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Legal note */}
              <div className="pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> This document is provided for transparency. Local rules around gift cards, sweepstakes, AI disclosure, and data privacy vary — consult a qualified attorney in your jurisdiction before relying on it.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer CTA */}
      <section className="border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-4.5 h-4.5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Questions about these terms?</p>
              <a
                href="mailto:legal@auralink.com"
                className="text-sm text-primary hover:underline"
              >
                legal@auralink.com
              </a>
            </div>
          </div>
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            View Privacy Policy
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
