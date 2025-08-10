'use client';
import { useState } from 'react';
const endpointURL = 'https://script.google.com/macros/s/AKfycbw0FPqgiZbjbK7Rz3h9y12Wn_Ijd04-Za2jpCl4BUUBNtmHqRHsy8BQrmnkLkLYq1PD/exec';
export default function ContactForm(){ 
  const [status,setStatus]=useState<null|'ok'|'err'|'loading'>(null);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){ e.preventDefault(); setStatus('loading'); const payload=Object.fromEntries(new FormData(e.currentTarget).entries());
    try{ const res=await fetch(endpointURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); if(!res.ok) throw new Error('bad'); setStatus('ok'); (e.currentTarget as HTMLFormElement).reset(); }catch{ setStatus('err'); }
  }
  return (<form onSubmit={onSubmit} className="mt-8 card p-6 grid gap-4 max-w-xl">
    <label className="grid gap-1"><span>Navn</span><input name="name" required className="px-3 py-2 rounded border border-black/10" /></label>
    <label className="grid gap-1"><span>Email</span><input name="email" type="email" required className="px-3 py-2 rounded border border-black/10" /></label>
    <label className="grid gap-1"><span>Besked</span><textarea name="message" rows={4} className="px-3 py-2 rounded border border-black/10" /></label>
    <button className="btn btn-primary w-fit" disabled={status==='loading'}>{status==='loading'?'Sender…':'Send'}</button>
    {status==='ok' && <p className="text-sm text-green-700">Tak! Din besked er sendt.</p>}
    {status==='err' && <p className="text-sm text-red-700">Noget gik galt. Prøv igen.</p>}
    <p className="text-xs text-black/60">Data gemmes i vores Google Sheet til opfølgning.</p>
  </form>); 
}
