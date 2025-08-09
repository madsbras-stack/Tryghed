import PensionCalculator from "@/components/PensionCalculator";
import Link from "next/link";

export default function PensionsberegnerPage(){
  return (
    <main>
      <section className="section">
        <h1 className="text-4xl font-extrabold">Hvor meget kan din pension vokse?</h1>
        <p className="mt-2 text-ink/70 max-w-2xl">
          Indtast dine tal og få et hurtigt overslag. Beregningen er vejledende – vil du have en uvildig gennemgang,
          kan du få et gratis opkald inden for 24 timer.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="https://calendly.com/madsbras" className="btn btn-primary">Book gratis gennemgang</Link>
          <a href="#ring-mig-op" className="btn btn-secondary">Ring mig op</a>
        </div>
      </section>
      <PensionCalculator />
    </main>
  );
}
