export default function StatBand(){
  const stats=[
    {value:'1 ud af 3',label:'får kræft inden 75 år*'},
    {value:'≈ 50 %',label:'har ikke valgt begunstiget aktivt*'},
    {value:'10–30 %',label:'potentiel omkostningsbesparelse*'},
  ];
  return (<section className="mt-12 bg-white border-y border-black/10"><div className="container py-8 grid sm:grid-cols-3 gap-6 text-center">{stats.map((s,i)=>(<div key={i}><div className="text-2xl font-extrabold text-[color:var(--ink)]">{s.value}</div><p className="text-sm text-black/70">{s.label}</p></div>))}</div><div className="container pb-6"><small>*Kilder nederst på siden "Hvorfor uvildig?".</small></div></section>);
}
