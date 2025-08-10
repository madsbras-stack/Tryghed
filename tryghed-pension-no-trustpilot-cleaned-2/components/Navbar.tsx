'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Hjem' },
  { href: '/hvorfor-uvildig', label: 'Hvorfor uvildig?' },
  { href: '/pensionsberegner', label: 'Pensionsberegner' },
  { href: '/om-os', label: 'Om os' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar(){
  const pathname = usePathname();
  const [open,setOpen]=useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-lg text-[color:var(--ink)]">TRYGHED <span className="text-brand-700">Pension</span></Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l=> (<Link key={l.href} href={l.href} className={`nav-link ${pathname===l.href?'text-black':''}`}>{l.label}</Link>))}
          <Link href="https://calendly.com/madsbras" className="btn btn-primary">Book gratis tjek</Link>
        </nav>
        <button className="md:hidden btn btn-ghost px-3 py-2" onClick={()=>setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l=> (<Link key={l.href} href={l.href} className="nav-link" onClick={()=>setOpen(false)}>{l.label}</Link>))}
            <Link href="https://calendly.com/madsbras" className="btn btn-primary w-full" onClick={()=>setOpen(false)}>Book gratis tjek</Link>
          </div>
        </div>
      )}
    </header>
  )
}
