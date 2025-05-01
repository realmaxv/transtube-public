const Impressum = () => {
  return (
    <div className="PlayFair p-6 md:p-10 text-left max-w-4xl mx-auto font-mono text-sm text-stone-800 dark:text-stone-100">
      <h1 className="text-xl font-bold mb-4">Impressum</h1>

      <p>Angaben gemäß § 5 TMG:</p>
      <p className="mt-2">
        Hinweis: Diese Website befindet sich im Aufbau und stellt kein
        öffentliches Angebot gemäß §5 TMG dar.
        <br />
        Ein vollständiges Impressum wird zum offiziellen Launch ergänzt.
      </p>

      <p className="mt-4">E-Mail: max.vossgaetter@transtube.org</p>

      <p className="mt-6">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        <br />
        Max Voßgätter
      </p>

      <p className="mt-6 text-xs italic text-stone-500 dark:text-stone-400">
        Dieses Impressum gilt auch für die Social-Media-Profile, soweit
        vorhanden.
      </p>
    </div>
  );
};

export default Impressum;
