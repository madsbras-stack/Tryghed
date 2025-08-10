'use client';
import { useMemo, useState } from 'react';

type Mix = { equities:number; bonds:number; alternatives:number; cash:number };
type Assumptions = {
  inflation:number; feePct:number;
  r_nominal:{ equities:number; bonds:number; alternatives:number; cash:number };
};
function clamp01(x:number){ return Math.max(0, Math.min(1, x)); }
function weightedReturn(m: Mix, r: Assumptions['r_nominal']){ const s=m.equities+m.bonds+m.alternatives+m.cash||1; return (m.equities/s*r.equities)+(m.bonds/s*r.bonds)+(m.alternatives/s*r.alternatives)+(m.cash/s*r.cash); }
function monthlyRateFromAnnualPct(pct:number){ return Math.pow(1 + pct/100, 1/12) - 1; }
function formatDKK(x:number){ return x.toLocaleString('da-DK', { style: 'currency', currency: 'DKK', maximumFractionDigits: 0 }); }

export default function PensionCalculator(){
  const [age,setAge]=useState(40);
  const [retAge,setRetAge]=useState(67);
  const [current,setCurrent]=useState(250_000);
  const [monthlyContrib,setMonthlyContrib]=useState(5_000);
  const [yearsPayout,setYearsPayout]=useState(25);
  const [mix,setMix]=useState<Mix>({ equities:0.6, bonds:0.3, alternatives:0.05, cash:0.05 });
  const [ass,setAss]=useState<Assumptions>({
    inflation:2.0, feePct:0.8,
    r_nominal:{ equities:6.0, bonds:3.0, alternatives:4.5, cash:1.5 }
  });
  const monthsToRet = Math.max(0,(retAge-age)*12);
  const nominal = weightedReturn(mix, ass.r_nominal);
  const realAfterFees = nominal - ass.inflation - ass.feePct;
  const r_m = monthlyRateFromAnnualPct(realAfterFees);
  const det = useMemo(()=>{
    let bal=current; const points:any[]=[];
    for(let m=0;m<=monthsToRet;m++){
      if(m>0){ bal = bal*(1+r_m) + monthlyContrib; }
      if(m%12===0){ points.push({ year: Math.floor(m/12), balance: Math.max(0,bal) }); }
    }
    return { points, end: points[points.length-1]?.balance ?? current };
  },[current,monthlyContrib,monthsToRet,r_m]);
  const realMonthlyPayout = useMemo(()=>{
    const n=yearsPayout*12; if(n===0) return 0; const i=r_m; return det.end*(i<=0?1/n:(i/(1-Math.pow(1+i,-n))));
  },[det.end,r_m,yearsPayout]);

  return (
    <div className="container py-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Indtast dine tal</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <Field label="Alder" value={age} onChange={setAge} min={18} max={75} />
            <Field label="Pensionsalder" value={retAge} onChange={setRetAge} min={55} max={75} />
            <MoneyField label="Nuværende depot" value={current} onChange={setCurrent} />
            <MoneyField label="Månedlig indbetaling" value={monthlyContrib} onChange={setMonthlyContrib} />
            <Field label="Udbetalingsperiode (år)" value={yearsPayout} onChange={setYearsPayout} min={5} max={35} />
          </div>

          <h4 className="mt-5 font-medium">Aktivmiks (i %)</h4>
          <div className="mt-2 grid sm:grid-cols-2 gap-3">
            <PctField label="Aktier" value={mix.equities*100} onChange={v=>setMix(m=>({...m,equities:clamp01(v/100)}))} />
            <PctField label="Obligationer" value={mix.bonds*100} onChange={v=>setMix(m=>({...m,bonds:clamp01(v/100)}))} />
            <PctField label="Alternativer" value={mix.alternatives*100} onChange={v=>setMix(m=>({...m,alternatives:clamp01(v/100)}))} />
            <PctField label="Kontant" value={mix.cash*100} onChange={v=>setMix(m=>({...m,cash:clamp01(v/100)}))} />
          </div>

          <h4 className="mt-5 font-medium">Antagelser (indsæt RfA-tal)</h4>
          <div className="mt-2 grid sm:grid-cols-2 gap-3">
            <PctField label="Inflation (årligt)" value={ass.inflation} onChange={v=>setAss(a=>({...a,inflation:v}))} />
            <PctField label="Omkostninger ÅOK/ÅOP (årligt)" value={ass.feePct} onChange={v=>setAss(a=>({...a,feePct:v}))} />
            <PctField label="Aktier – afkast (nom)" value={ass.r_nominal.equities} onChange={v=>setAss(a=>({...a,r_nominal:{...a.r_nominal,equities:v}}))} />
            <PctField label="Obl. – afkast (nom)" value={ass.r_nominal.bonds} onChange={v=>setAss(a=>({...a,r_nominal:{...a.r_nominal,bonds:v}}))} />
            <PctField label="Alt. – afkast (nom)" value={ass.r_nominal.alternatives} onChange={v=>setAss(a=>({...a,r_nominal:{...a.r_nominal,alternatives:v}}))} />
            <PctField label="Kontant – afkast (nom)" value={ass.r_nominal.cash} onChange={v=>setAss(a=>({...a,r_nominal:{...a.r_nominal,cash:v}}))} />
          </div>
          <p className="mt-3 text-xs text-black/60">* Resultater vises i realværdi (efter inflation) og efter valgte omkostninger. Indtast de seneste forventninger fra Rådet for Afkastforventninger (RfA).</p>
        </div>

        <div className="card p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <Stat label="Realt afkast (årligt)" value={realAfterFees.toFixed(2)+'%'} />
            <Stat label="Depot ved pension" value={formatDKK(det.end)} />
            <Stat label="Forventet udbet. pr. md." value={formatDKK(realMonthlyPayout)} />
          </div>
          <div className="mt-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-black/60"><th>År</th><th>Depot (realt)</th></tr></thead>
              <tbody>
                {det.points.map((p:any)=>(<tr key={p.year}><td className="py-1">{p.year}</td><td>{formatDKK(p.balance)}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({label,value,onChange,min=0,max=120}:{label:string;value:number;onChange:(v:number)=>void;min?:number;max?:number}){
  return (<label className="grid gap-1"><span>{label}: <span className="text-black/60">{value}</span></span><input type="range" min={min} max={max} value={value} onChange={e=>onChange(Number(e.target.value))} /><input type="number" className="px-2 py-1 border rounded border-black/10" value={value} onChange={e=>onChange(Number(e.target.value||0))} /></label>);
}
function PctField({label,value,onChange}:{label:string;value:number;onChange:(v:number)=>void}){
  return (<label className="grid gap-1"><span>{label}: <span className="text-black/60">{value.toFixed(2)}%</span></span><input type="range" min={0} max={15} step={0.1} value={value} onChange={e=>onChange(Number(e.target.value))} /><input type="number" step={0.1} className="px-2 py-1 border rounded border-black/10" value={value} onChange={e=>onChange(Number(e.target.value||0))} /></label>);
}
function MoneyField({label,value,onChange}:{label:string;value:number;onChange:(v:number)=>void}){
  return (<label className="grid gap-1"><span>{label}: <span className="text-black/60">{formatDKK(value)}</span></span><input type="number" className="px-2 py-1 border rounded border-black/10" value={value} onChange={e=>onChange(Number(e.target.value||0))} /></label>);
}
function Stat({label,value}:{label:string;value:string}){ return (<div className="p-4 rounded-lg border border-black/10"><div className="text-sm text-black/60">{label}</div><div className="text-xl font-bold">{value}</div></div>); }
