import Link from 'next/link'
import FeatureCard from '@/components/FeatureCard'
import StatBand from '@/components/StatBand'
import Steps from '@/components/Steps'
import ValueGrid from '@/components/ValueGrid'
import ImageBand from '@/components/ImageBand'
import CTA from '@/components/CTA'
import Trustpilot from '@/components/Trustpilot'
import CTA from '@/components/CTA'
import Trustpilot from '@/components/Trustpilot'

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="badge">Uvildig rådgivning • Gratis intro • Danmark</div>
            <h1 className="mt-4">Mere pension. Mindre risiko. <span className="text-brand-700">Bedre nattesøvn.</span></h1>
            <p className="mt-3">TRYGHED Pension er en del af <strong>Söderberg & Partners</strong>. Vi finder forbedringer i dine ordninger og sikrer, at pengene ender hos de rigtige – med jura og økonomi i balance.</p>
            <div className="mt-6 flex gap-3">
              <Link href="https://calendly.com/madsbras" className="btn btn-primary">Book gratis tjek nu</Link>
              <Link href="/pensionsberegner" className="btn btn-ghost">Beregn din pension</Link>
            </div>
            <ul className="mt-6 text-sm text-black/70 space-y-1 list-disc pl-5">
              <li>Ofte højere udbetaling uden selskabsskifte</li>
              <li>Begunstigelser, testamente og fuldmagt i sync</li>
              <li>Uvildig – vi arbejder kun for dig</li>
            </ul>
          </div>
          <div className="card p-8">
            <div className="text-5xl font-extrabold text-[color:var(--ink)]">Top 5 fejl vi finder</div>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm">
              <li>For høje omkostninger (ÅOK/ÅOP)</li>
              <li>Forkert risikoprofil ift. tidshorisont</li>
              <li>Manglende dækninger ved sygdom/død</li>
              <li>Begunstigelser i konflikt med testamente</li>
              <li>Ingen plan for fremtidsfuldmagt</li>
            </ol>
            <div className="mt-4"><Link href="https://calendly.com/madsbras" className="btn btn-primary">Få det tjekket gratis</Link></div>
            <p className="mt-3 text-xs text-black/60">* Se dokumenterede kilder på siden "Hvorfor uvildig?".</p>
          </div>
        </div>
      </section>
      <StatBand />
      <section className="section grid md:grid-cols-3 gap-6">
        <FeatureCard title="PensionsTjek" body="Omkostninger, risiko, investering og dækninger – målet er mere pension for samme indbetaling." ctaHref="/hvorfor-uvildig" ctaLabel="Hvorfor uvildig?" />
        <FeatureCard title="Fremtidsfuldmagt" body="Hvem må hjælpe, hvis du ikke selv kan? Vi får det på plads, og sikrer samspil med bank og pension." ctaHref="/om-os" ctaLabel="Læs mere" />
        <FeatureCard title="Testamente & begunstigelser" body="Sørg for at værdierne lander rigtigt. Vi koordinerer juraen med dine pensioner." ctaHref="/hvorfor-uvildig#kilder" ctaLabel="Se kilder" />
      </section>
      <Steps />
      <CTA />
    <Trustpilot />
<ImageBand />
<ValueGrid />
<CTA />
</>
  )
}
