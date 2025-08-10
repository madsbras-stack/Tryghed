import Link from 'next/link';
export default function FeatureCard({ title, body, ctaHref, ctaLabel }:{title:string;body:string;ctaHref:string;ctaLabel:string;}){
  return (<div className="card p-6 flex flex-col"><h3 className="text-xl font-semibold text-[color:var(--ink)]">{title}</h3><p className="mt-2">{body}</p><div className="mt-4"><Link href={ctaHref} className="btn btn-ghost">{ctaLabel} →</Link></div></div>);
}
