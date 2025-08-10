import Image from "next/image";

const photos = [
  { src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop", alt: "Rådgivning ved bordet" },
  { src: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop", alt: "Gennemskuelige tal" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop", alt: "Møde med kunde" },
];

export default function ImageBand(){
  return (
    <section className="section">
      <div className="grid md:grid-cols-3 gap-4">
        {photos.map((p) => (
          <div key={p.src} className="relative overflow-hidden rounded-2xl h-60">
            <Image src={p.src} alt={p.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        ))}
      </div>
    </section>
  );
}
