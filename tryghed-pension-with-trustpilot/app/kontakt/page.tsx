import ContactForm from '@/components/ContactForm';
export const metadata = { title: "Kontakt – TRYGHED Pension" };
export default function Page(){
  return (
    <section className="section">
      <h1>Kontakt</h1>
      <p className="mt-3">Book et gratis møde via Calendly – eller skriv til os her, så vender vi hurtigt tilbage.</p>
      <div className="mt-4"><a className="btn btn-primary" href="https://calendly.com/madsbras" target="_blank">Book via Calendly</a></div>
      <ContactForm />
    </section>
  )
}
