export const metadata = { title: "Hvorfor uvildig? – TRYGHED Pension" };
export default function Page(){
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1>Hvorfor uvildig pensionsrådgivning?</h1>
          <p className="mt-3">Som en del af <strong>Söderberg & Partners</strong> arbejder vi uvildigt for dig. Vi optimerer på tværs af selskaber, omkostninger, dækninger og jura – uden salgspres.</p>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li><strong>Mere værdi:</strong> Pres ÅOP/ÅOK og justér risiko til din tidshorisont.</li>
            <li><strong>Rigtige personer får pengene:</strong> Begunstigelser og testamente i synch.</li>
            <li><strong>Tryghed ved sygdom/død:</strong> Dækninger baseret på økonomi og familie.</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2>Tal der viser behovet</h2>
          <ul className="mt-3 space-y-2 text-black/80">
            <li>• <strong>~33%</strong> får kræft inden 75 år i Danmark.*</li>
            <li>• <strong>Begunstigelse går uden om boet</strong> – pensioner udbetales ikke efter testamente.**</li>
            <li>• <strong>Omkostninger varierer</strong> og påvirker din slut-udbetaling.***</li>
          </ul>
          <p className="mt-3 text-sm text-black/60">* **Kilder** ligger nederst på siden.</p>
        </div>
      </div>

      <div className="mt-12 card p-6" id="kilder">
        <h2>Kilder</h2>
        <ol className="list-decimal pl-6 text-sm space-y-2">
          <li>Kræftens Bekæmpelse / Nordcan – risiko for at få kræft inden 75 år ca. en tredjedel. Se <a href="https://www.cancer.dk/nyheder-og-fortaellinger/2024/nye-nordiske-tal-risikoen-for-at-faa-kraeft-i-2022-var-stort-set-den-samme-som-10-aar-tidligere/" target="_blank" rel="noopener noreferrer">artikel</a> og <a href="https://www.sundhed.dk/borger/patienthaandbogen/kraeft/om-kraeft/hvad-er-kraeft/" target="_blank" rel="noopener noreferrer">sundhed.dk</a>.</li>
          <li>Begunstigelse går forud for testamente for pensioner/forsikringer (udbetaling uden om boet): <a href="https://www.ret-raad.dk/specialer/testamente-arv/pensioner-forsikring/begunstigelse/" target="_blank" rel="noopener noreferrer">Ret&Råd</a> og <a href="https://pka.dk/forsikringer/begunstigelse" target="_blank" rel="noopener noreferrer">PKA</a>.</li>
          <li>Omkostninger (ÅOP/ÅOK) varierer og betyder noget for slutudbetaling: <a href="https://www.finanstilsynet.dk/Media/638610314353926038/Markedsudvikling%202023%20.pdf" target="_blank" rel="noopener noreferrer">Finanstilsynet – Markedsudvikling</a> samt <a href="https://kfst.dk/media/se2ctyza/20210806-pensionsselskabernes-priser-og-afkast.pdf" target="_blank" rel="noopener noreferrer">Konkurrence- og Forbrugerstyrelsen</a>.</li>
        </ol>
      </div>
    </section>
  )
}
