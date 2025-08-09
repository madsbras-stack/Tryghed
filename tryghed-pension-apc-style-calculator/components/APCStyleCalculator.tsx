'use client';
import { useMemo, useState } from "react";

/**
 * APC‑stil beregner (sammenligning): viser hvor meget mere der kan ende hos kunden
 * ved lavere omkostninger. Antager samme bruttoafkast i begge scenarier.
 */
export default function APCStyleCalculator(){
  const [balance, setBalance] = useState(250000);     // nuværende opsparing (kr.)
  const [monthly, setMonthly] = useState(2500);       // indbetaling pr. måned (kr.)
  const [years, setYears] = useState(25);             // år til pension
  const [grossReturn, setGrossReturn] = useState(6);  // forventet bruttoafkast p.a. (%)
  const [feeNow, setFeeNow] = useState(1.2);          // ÅOK/ÅOP i dag (% p.a.)
  const [feeAfter, setFeeAfter] = useState(0.6);      // ÅOK/ÅOP efter optimering (% p.a.)

  const res = useMemo(()=>{
    const months = years * 12;
    const rGross = grossReturn/100;
    const rNow = Math.pow(1 + (rGross - feeNow/100), 1/12) - 1;
    const rAfter = Math.pow(1 + (rGross - feeAfter/100), 1/12) - 1;

    const fv_now = balance * Math.pow(1+rNow, months) + monthly * ((Math.pow(1+rNow, months)-1)/(rNow || 1));
    const fv_after = balance * Math.pow(1+rAfter, months) + monthly * ((Math.pow(1+rAfter, months)-1)/(rAfter || 1));
    const diff = fv_after - fv_now;
    const paid = balance + monthly * months;

    return { fv_now, fv_after, diff, paid };
  }, [balance, monthly, years, grossReturn, feeNow, feeAfter]);

  const fmt = (x:number) => x.toLocaleString('da-DK', { style:'currency', currency:'DKK', maximumFractionDigits:0 });

  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="card p-6">
          <h2 className="text-2xl font-extrabold">Beregn din pension</h2>
          <p className="text-sm text-ink/70 mt-1">Se hvor meget mere du kan få ved lavere omkostninger.</p>

          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <Field label="Nuværende opsparing (kr.)" value={balance} onChange={setBalance} step={5000} />
            <Field label="Månedlig indbetaling (kr.)" value={monthly} onChange={setMonthly} step={250} />
            <RangeField label="År til pension" value={years} onChange={setYears} min={1} max={45} />
            <PctField label="Forventet bruttoafkast p.a." value={grossReturn} onChange={setGrossReturn} />
            <PctField label="ÅOK/ÅOP i dag" value={feeNow} onChange={setFeeNow} />
            <PctField label="ÅOK/ÅOP efter optimering" value={feeAfter} onChange={setFeeAfter} />
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold">Resultat</h3>
          <div className="mt-4 grid gap-3">
            <KPI label="Værdi ved pension – i dag" value={fmt(res.fv_now)} />
            <KPI label="Værdi ved pension – efter optimering" value={fmt(res.fv_after)} />
            <KPIPrimary label="Mere til dig" value={fmt(res.diff)} />
          </div>
          <p className="text-xs text-ink/60 mt-4">
            Vejledende beregning. Samme bruttoafkast i begge scenarier – forskellen skyldes lavere omkostninger.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://calendly.com/madsbras" className="btn btn-primary">Book gratis gennemgang</a>
            <a href="#ring-mig-op" className="btn btn-secondary">Ring mig op</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, step=1000 }:{ label:string; value:number; onChange:(v:number)=>void; step?:number }){
  return (
    <label className="block">
      <div className="text-sm text-ink/70">{label}</div>
      <input type="number" className="input mt-1 w-full" value={value}
        onChange={e=>onChange(Number(e.target.value||0))} step={step} min={0} />
    </label>
  );
}
function PctField({ label, value, onChange }:{ label:string; value:number; onChange:(v:number)=>void; }){
  return (
    <label className="block">
      <div className="text-sm text-ink/70">{label}</div>
      <div className="flex items-center gap-2 mt-1">
        <input type="number" className="input w-full" value={value}
          onChange={e=>onChange(Number(e.target.value||0))} step={0.1} />
        <span className="text-sm text-ink/60">%</span>
      </div>
    </label>
  );
}
function RangeField({ label, value, onChange, min=1, max=45 }:{ label:string; value:number; onChange:(v:number)=>void; min?:number; max?:number; }){
  return (
    <label className="block">
      <div className="flex justify-between text-sm text-ink/70">
        <span>{label}</span>
        <strong>{value} år</strong>
      </div>
      <input type="range" className="w-full" min={min} max={max} value={value}
        onChange={e=>onChange(Number(e.target.value))} />
    </label>
  );
}
function KPI({ label, value }:{ label:string; value:string; }){
  return (
    <div className="p-4 rounded-2xl bg-[color:var(--paper)] border border-black/5">
      <div className="text-xs uppercase tracking-wide text-ink/60">{label}</div>
      <div className="text-2xl font-extrabold mt-1 text-[color:var(--ink)]">{value}</div>
    </div>
  );
}
function KPIPrimary({ label, value }:{ label:string; value:string; }){
  return (
    <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200">
      <div className="text-xs uppercase tracking-wide text-brand-700">{label}</div>
      <div className="text-2xl font-extrabold mt-1 text-brand-700">{value}</div>
    </div>
  );
}
