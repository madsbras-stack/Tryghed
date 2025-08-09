import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-ink text-white rounded-2xl px-8 py-10 md:px-12 md:py-14 mt-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Få et gratis, uvildigt pensionstjek
          </h2>
          <p className="mt-3 text-white/80 text-base md:text-lg">
            Vi gennemgår dine ordninger, begunstigelser og forsikringsdækninger.
            Målet er enkelt: Mere pension, mindre risiko – og ro i maven.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-white/80">
            <li>✔ Gennemgang af ÅOK/ÅOP og skjulte gebyrer</li>
            <li>✔ Tjek af risikoprofil og investeringsspor</li>
            <li>✔ Begunstigelser i sync med testamente</li>
            <li>✔ Forsikringer der passer til din økonomi</li>
          </ul>
        </div>
        <div className="flex md:justify-end items-start gap-3 md:flex-col">
          <Link
            href="https://calendly.com/madsbras"
            className="btn btn-primary w-full md:w-auto text-center"
          >
            Book gratis samtale
          </Link>
          <Link
            href="/kontakt"
            className="btn btn-secondary w-full md:w-auto text-center"
          >
            Skriv til os
          </Link>
        </div>
      </div>
    </section>
  );
}
