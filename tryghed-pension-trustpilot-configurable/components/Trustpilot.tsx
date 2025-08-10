'use client';
import { useEffect, useState } from 'react';

/**
 * Trustpilot TrustBox loader (Carousel). Requires:
 *  - NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID set in env (Vercel -> Settings -> Environment Variables)
 *  - Domænet whitelisted i Trustpilot Business (Domains)
 */
export default function Trustpilot() {
  const [ready, setReady] = useState(false);
  const buid = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID;

  useEffect(() => {
    // Inject script once
    const existing = document.querySelector('script[src*="tp.widget.bootstrap.min.js"]') as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      s.async = true;
      s.onload = () => setReady(true);
      document.body.appendChild(s);
    } else {
      setReady(true);
      // @ts-ignore
      if (window.Trustpilot && typeof window.Trustpilot.loadFromElement === 'function') {
        document.querySelectorAll('.trustpilot-widget').forEach((el) => {
          // @ts-ignore
          window.Trustpilot.loadFromElement(el);
        });
      }
    }
  }, []);

  if (!buid) {
    return (
      <section className="section">
        <div className="card p-6">
          <div className="text-ink/70 text-sm">
            Trustpilot er ikke konfigureret endnu. Sæt <code>NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID</code> i Vercel
            (Project → Settings → Environment Variables) og whitelist domænet i Trustpilot.
          </div>
        </div>
      </section>
    );
  }

  // Carousel template id fra Trustpilot
  const templateId = '53aa8807dec7e10d38f59f36';

  return (
    <section className="section">
      <div className="card p-6">
        <div
          className="trustpilot-widget"
          data-locale="da-DK"
          data-template-id={templateId}
          data-businessunit-id={buid}
          data-style-height="280px"
          data-style-width="100%"
          data-theme="light"
          data-stars="4,5"
        >
          <a href="https://dk.trustpilot.com/review" target="_blank" rel="noopener noreferrer">Trustpilot</a>
        </div>
      </div>
    </section>
  );
}
