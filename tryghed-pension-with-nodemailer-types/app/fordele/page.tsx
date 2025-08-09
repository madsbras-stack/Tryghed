import ValueGrid from "@/components/ValueGrid";
import CTA from "@/components/CTA";
import ImageBand from "@/components/ImageBand";

export default function FordelePage(){
  return (
    <main>
      <section className="section">
        <h1 className="text-4xl font-extrabold">Transparens & tryghed</h1>
        <p className="mt-2 text-ink/70 max-w-2xl">
          Vi gør pension enkelt og gennemsigtigt. Du får fuldt overblik over dine ordninger, omkostninger og dækninger – og en klar plan for at forbedre dem.
        </p>
      </section>
      <ImageBand />
      <ValueGrid />
      <CTA />
    </main>
  );
}
