const Baustelle = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        🚧 Website im Aufbau
      </h1>
      <p className="text-lg max-w-xl">
        Diese Website befindet sich derzeit im Aufbau und dient ausschließlich
        Test- und Demonstrationszwecken. Es handelt sich um kein öffentliches
        Angebot im Sinne von § 5 TMG.
      </p>
      <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
        Bitte besuchen Sie uns zu einem späteren Zeitpunkt erneut.
      </p>
    </div>
  );
};

export default Baustelle;
