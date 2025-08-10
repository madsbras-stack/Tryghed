'use client';
import { useState } from 'react';
const endpointURL = 'https://script.google.com/macros/s/AKfycbw0FPqgiZbjbK7Rz3h9y12Wn_Ijd04-Za2jpCl4BUUBNtmHqRHsy8BQrmnkLkLYq1PD/exec';
export default function StickyCall(){ 
  const [open,setOpen]=useState(false); const [status,setStatus]=useState<null|'ok'|'err'>(null);
  async function send(e:React.FormEvent<HTMLFormElement>){ e.preventDefault(); const payload=Object.fromEntries(new FormData(e.currentTarget).entries());
    try{ const res=await fetch(endpointURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,type:'callback'})}); if(!res.ok) throw new Error('bad'); setStatus('ok'); (e.currentTarget as HTMLFormElement).reset(); setOpen(false); }catch{ setStatus('err'); }
    setTimeout(()=>setStatus(null),3000);
  }
  return (<>
    <div className="sticky-call"><button onClick={()=>setOpen(true)} className="btn btn-primary w-full">Bliv ringet op</button></div>
    {open && (<div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4" onClick={()=>setOpen(false)}>
      <div className="card p-6 w-full max-w-sm" onClick={e=>e.stopPropagation()}>
        <div className="text-lg font-semibold">Bliv ringet op</div>
        <form className="mt-4 grid gap-3" onSubmit={send}>
          <input name="name" required placeholder="Dit navn" className="px-3 py-2 rounded border border-black/10" />
          <input name="phone" required placeholder="Telefon" className="px-3 py-2 rounded border border-black/10" />
          <button className="btn btn-primary">Send</button>
          {status==='ok' && <p className="text-sm text-green-700">Tak! Vi ringer dig op.</p>}
          {status==='err' && <p className="text-sm text-red-700">Kunne ikke sende. Prøv igen.</p>}
        </form>
      </div>
    </div>)}
  </>); 
}
