import APCStyleCalculator from "@/components/APCStyleCalculator";

export default function PensionsberegnerPage(){
  return (
    <main>
      <section className="section">
        <h1 className="text-4xl font-extrabold">Beregn din pension – og hvor meget mere du kan få</h1>
        <p className="mt-2 text-ink/70 max-w-2xl">
          Indtast dine tal og sammenlign dine nuværende omkostninger med en optimeret løsning.
          Så ser du, hvor meget der kan gå til dig selv.
        </p>
      </section>
      <APCStyleCalculator />
    </main>
  );
}
