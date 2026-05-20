import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  /**
   * One or more JSON-LD structured-data objects.
   * Helps AI agents and search engines understand the page at a glance.
   */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector.replace(/[\[\]"]/g, "").split("=");
    el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SCHEMA_TAG_ID = "seo-jsonld-route";

/**
 * Lightweight SEO component — updates document title, meta tags, and
 * route-level JSON-LD structured data on mount. Use one per route/page.
 */
const SEO = ({ title, description, canonical, image, type = "website", keywords, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");

    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    if (image) {
      setMeta('meta[property="og:image"]', "content", image);
      setMeta('meta[name="twitter:image"]', "content", image);
    }

    const url = canonical ?? (typeof window !== "undefined" ? window.location.href : "");
    if (url) {
      setMeta('meta[property="og:url"]', "content", url);
      setLink("canonical", url);
    }

    // Inject route-scoped JSON-LD (removed on unmount so it never leaks across routes)
    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.id = SCHEMA_TAG_ID;
      scriptEl.text = JSON.stringify(payload.length === 1 ? payload[0] : payload);
      // Clean any stale instance first
      document.getElementById(SCHEMA_TAG_ID)?.remove();
      document.head.appendChild(scriptEl);
    }

    return () => {
      document.getElementById(SCHEMA_TAG_ID)?.remove();
    };
  }, [title, description, canonical, image, type, keywords, jsonLd]);

  return null;
};

export default SEO;
