import Link from 'next/link';
export default function Footer(){
  const y = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-black/10 bg-white">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-black/70">
        <div className="md:col-span-2">
          <div className="font-extrabold text-[color:var(--ink)] text-lg">TRYGHED <span className="text-brand-700">Pension</span></div>
          <p className="mt-3 text-sm">Uvildig rådgivning om pension, begunstigelser og juridisk tryghed. Vi er en del af <strong>Söderberg & Partners</strong>.</p>
        </div>
        <div>
          <div className="font-semibold mb-3 text-[color:var(--ink)]">Links</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hvorfor-uvildig" className="hover:text-black">Hvorfor uvildig?</Link></li>
            <li><Link href="/pensionsberegner" className="hover:text-black">Pensionsberegner</Link></li>
            <li><Link href="/cookiepolitik" className="hover:text-black">Cookiepolitik</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 text-[color:var(--ink)]">Tillid</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://dk.trustpilot.com/review/www.soderbergpartners.dk" target="_blank" rel="noopener noreferrer" className="hover:text-black">Söderberg & Partners på Trustpilot</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10"><div className="container py-6 text-xs text-black/60">© {y} TRYGHED Pension ApS</div></div>
    </footer>
  )
}
