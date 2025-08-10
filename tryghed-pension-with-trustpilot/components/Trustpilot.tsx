'use client';
import { useEffect } from 'react';

/**
 * Trustpilot TrustBox – Carousel style.
 * Set NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID in your env on Vercel.
 * Replace templateId if you want a different widget (see Trustpilot's widget gallery).
 */
export default function Trustpilot() {
  const businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID || 'YOUR_BUSINESS_UNIT_ID';
  // Common carousel template id from Trustpilot (may vary by account / plan)
  const templateId = '53aa8807dec7e10d38f59f36'; // Carousel

  useEffect(() => {
    // Load script once
    if (!document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Re-render any TrustBox present
      // @ts-ignore
      window.Trustpilot && window.Trustpilot.loadFromElement && document.querySelectorAll('.trustpilot-widget').forEach((el) => {
        // @ts-ignore
        window.Trustpilot.loadFromElement(el);
      });
    }
  }, []);

  return (
    <section className="section">
      <div className="card p-6">
        <div
          className="trustpilot-widget"
          data-locale="da-DK"
          data-template-id={templateId}
          data-businessunit-id={businessUnitId}
          data-style-height="260px"
          data-style-width="100%"
          data-theme="light"
          data-stars="4,5"
        >
          <a href="https://dk.trustpilot.com/" target="_blank" rel="noopener noreferrer">
            Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
