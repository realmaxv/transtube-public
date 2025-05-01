const Datenschutz = () => {
  return (
    <div className="PlayFair p-6 md:p-10 text-left max-w-4xl mx-auto font-mono text-sm text-stone-800 dark:text-stone-100">
      <h1 className="text-xl font-bold mb-4">Datenschutzerklärung</h1>

      <p>Stand: 01. Mai 2025</p>

      <p className="mt-4">
        Diese Website dient ausschließlich zu privaten Forschungs- und
        Demonstrationszwecken im Rahmen eines nicht-kommerziellen Projekts. Es
        werden keine personenbezogenen Daten dauerhaft gespeichert oder
        ausgewertet.
      </p>

      <h2 className="mt-6 font-bold">1. Verantwortliche Stelle</h2>
      <p>
        Max Voßgätter
        <br />
        E-Mail: max.vossgaetter@transtube.org
      </p>

      <h2 className="mt-6 font-bold">2. Zugriffsdaten</h2>
      <p>
        Beim Besuch dieser Website werden technisch bedingt automatisch Daten
        wie IP-Adresse, Datum/Uhrzeit, Browsertyp, Betriebssystem und Referrer
        vom Webserver erfasst. Diese Daten werden ausschließlich zur
        Sicherstellung des technischen Betriebs verwendet und nicht dauerhaft
        gespeichert.
      </p>

      <h2 className="mt-6 font-bold">3. Drittanbieter</h2>
      <p>
        Diese Website bindet testweise folgende externe Dienste ein, ohne
        personenbezogene Daten dauerhaft zu speichern:
      </p>
      <ul className="list-disc list-inside">
        <li>
          OpenAI API (zur Demonstration automatisierter Textverarbeitung, Server
          USA, Standardvertragsklauseln)
        </li>
        <li>Supabase (temporäre Datenhaltung für Tests, Server in der EU)</li>
        <li>
          YouTube API (optional, falls eingebunden – es gelten die
          Datenschutzrichtlinien von Google)
        </li>
      </ul>

      <h2 className="mt-6 font-bold">4. Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
        Widerspruch und Datenübertragbarkeit. Kontaktieren Sie uns unter
        max.vossgaetter@transtube.org.
      </p>

      <h2 className="mt-6 font-bold">5. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt SSL-Verschlüsselung. Sie erkennen dies an „https://“
        in der Adresszeile.
      </p>
    </div>
  );
};

export default Datenschutz;
