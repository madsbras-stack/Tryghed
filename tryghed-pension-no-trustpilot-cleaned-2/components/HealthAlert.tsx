import Link from "next/link";

export default function HealthAlert(){
  return (
    <section className="section">
      <div className="rounded-2xl px-6 py-8 md:px-10 md:py-12 bg-[color:var(--ink)] text-white flex flex-col md:flex-row items-start md:items-center gap-6 shadow-lg">
        <div className="flex-1">
          <div className="text-3xl md:text-4xl font-extrabold leading-tight">⏱ Hvert 12. minut</div>
          <p className="mt-2 text-white/90 text-lg md:text-xl">
            bliver en dansker diagnosticeret med kræft. <strong>Er du økonomisk forberedt?</strong>
          </p>
          <p className="mt-2 text-white/70 text-sm">
            Få styr på pension, forsikringer og begunstigelser – før uheldet er ude.
          </p>
        </div>
        <div className="flex gap-3 md:flex-col w-full md:w-auto">
          <Link href="https://calendly.com/madsbras" className="btn btn-primary w-full md:w-auto text-center">
            Få et gratis tjek i dag
          </Link>
          <a href="#ring-mig-op" className="btn btn-secondary w-full md:w-auto text-center">Ring mig op</a>
        </div>
      </div>
    </section>
  );
}
