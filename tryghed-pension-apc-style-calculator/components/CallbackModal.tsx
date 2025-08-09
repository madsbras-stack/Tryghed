'use client';
import { useState } from "react";

export default function CallbackModal(){
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");

  async function submit(e: React.FormEvent){
    e.preventDefault();
    setStatus("sending");
    try{
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if(res.ok){ setStatus("ok"); }
      else{ setStatus("error"); }
    }catch{
      setStatus("error");
    }
  }

  return (
    <>
      {/* Sticky button on mobile */}
      <button
        id="ring-mig-op"
        onClick={()=>setOpen(true)}
        className="fixed md:hidden bottom-4 right-4 btn btn-primary flex items-center gap-2 z-40"
        aria-label="Ring mig op"
      >
        📞 Ring mig op
      </button>

      {/* Optional desktop header button could be added by importing this component in Navbar too */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
            <div className="text-xl font-semibold">Vi ringer dig op inden for 24 timer</div>
            <p className="text-sm text-ink/70 mt-1">Skriv dit navn og telefonnummer – så ringer vi hurtigst muligt.</p>

            {status==="ok" ? (
              <div className="mt-4 p-4 rounded-lg bg-green-50 text-green-800">
                Tak! Vi har modtaget dine oplysninger. Vi ringer til dig inden for 24 timer.
              </div>
            ) : (
              <form onSubmit={submit} className="mt-4 grid gap-3">
                <label className="block">
                  <div className="text-sm text-ink/70">Navn</div>
                  <input
                    type="text"
                    className="input w-full"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <div className="text-sm text-ink/70">Telefon</div>
                  <input
                    type="tel"
                    className="input w-full"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    required
                  />
                </label>
                <div className="flex gap-3 mt-2">
                  <button type="submit" className="btn btn-primary" disabled={status==="sending"}>
                    {status==="sending" ? "Sender..." : "Send"}
                  </button>
                  <button type="button" className="btn" onClick={()=>setOpen(false)}>Luk</button>
                </div>
                {status==="error" && <div className="text-sm text-red-600">Noget gik galt. Prøv igen.</div>}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
