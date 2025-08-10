export default function ValueGrid() {
  const items = [
    { title: "Transparens & tryghed", body: "Du får fuldt indblik i omkostninger, risiko og dækninger. Vi viser hvad du betaler i dag – og hvad du kan spare – før du beslutter noget." },
    { title: "Uvildighed", body: "Vi er kun på din side. Ingen provisioner, ingen skjulte incitamenter. Vores råd er uafhængige og baseret på dine mål." },
    { title: "Enkle priser", body: "Fast pris på gennemgang – og mulighed for løbende AUM, hvis du ønsker det. Ingen binding, du kan stoppe når som helst." },
    { title: "Gennemgang af begunstigelser", body: "Begunstigelse, testamente og fremtidsfuldmagt skal spille sammen – ellers ender pengene ofte hos den forkerte." },
    { title: "Mere pension, mindre risiko", body: "Vi skærer omkostninger, retter risikoprofilen til din tidshorisont og finder dækninger der passer til din økonomi." },
    { title: "Klar plan – på én side", body: "Du får en handlingsplan med konkrete ændringer og fordele i kroner og øre." },
  ];
  return (
    <section className="section">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Fordele ved TRYGHED Pension</h2>
        <p className="text-ink/70 mt-2">Inspireret af branchens bedste praksis – leveret uvildigt.</p>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="card p-6 text-ink">
            <div className="text-xl font-semibold">{it.title}</div>
            <p className="text-sm text-ink/70 mt-2">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
