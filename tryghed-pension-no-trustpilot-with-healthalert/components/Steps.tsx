export default function Steps(){
  const steps=[{title:'1) Kort intro',text:'15 min. uforpligtende kald om dine ønsker og situation.'},{title:'2) Data & analyse',text:'Vi gennemgår ordninger, omkostninger, dækninger og jura.'},{title:'3) Plan & handling',text:'Du får konkrete anbefalinger – vi hjælper med at udføre dem.'},];
  return (<section className="section"><div className="card p-8"><h2>Sådan foregår det</h2><div className="mt-6 grid md:grid-cols-3 gap-6">{steps.map((s,i)=>(<div key={i} className="p-4 rounded-lg border border-black/10"><div className="font-semibold text-[color:var(--ink)]">{s.title}</div><p className="mt-2">{s.text}</p></div>))}</div></div></section>);
}
