'use client';
import { useMemo, useState } from "react";

export default function SimpleCalculator() {
  // Minimalistisk: 3 input + tidshorisont
  const [balance, setBalance] = useState(200000);  // kr.
  const [monthly, setMonthly] = useState(2000);    // kr./md
  const [netReturn, setNetReturn] = useState(4.0); // nettoafkast p.a. i % (afkast minus omkostninger)
  const [years, setYears] = useState(25);          // år til pension

  const res = useMemo(() => {
    const months = years * 12;
    const mRate = Math.pow(1 + netReturn/100, 1/12) - 1;
    const fv0 = balance * Math.pow(1 + mRate, months);
    const fvAnnuity = monthly * ((Math.pow(1 + mRate, months) - 1) / (mRate || 1));
    const fv = fv0 + fvAnnuity;
    const paid = balance + monthly * months;
    return { fv, paid, gain: fv - paid, mRate };
  }, [balance, monthly, netReturn, years]);

  const fmt = (x:number) => x.toLocaleString('da-DK', { style:'currency', currency:'DKK', maximumFractionDigits:0 });

  return (
    <section className="section">
      <div className="max-w-3xl mx-auto">
        <div className="card p-6">
          <h2 className="text-2xl font-bold">Hurtig pensionsberegner</h2>
          <p className="text-sm text-ink/70 mt-1">Indtast dine tal og få et enkelt overslag. Nettoafkast = forventet afkast minus omkostninger.</p>

          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <Field label="Nuværende opsparing (kr.)" value={balance} onChange={setBalance} step={5000} />
            <Field label="Månedligt indskud (kr.)" value={monthly} onChange={setMonthly} step={250} />
            <PctField label="Nettoafkast p.a." value={netReturn} onChange={setNetReturn} />
            <RangeField label="År til pension" value={years} onChange={setYears} min={1} max={45} />
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <KPI label="Forventet værdi" value={fmt(res.fv)} />
            <KPI label="Indsat i alt" value={fmt(res.paid)} />
            <KPI label="Forventet afkast" value={fmt(res.gain)} />
          </div>

          <p className="text-xs text-ink/60 mt-4">
            Beregningen er vejledende og tager ikke højde for skat, inflation eller garantier. Book et gratis opkald for en uvildig gennemgang.
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
