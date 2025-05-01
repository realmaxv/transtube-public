import { Link } from "react-router";

const Home = () => {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center px-4 py-20 mx-auto max-w-7xl ">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight dark:text-stone-100 sm:text-5xl md:text-6xl">
            TransTube: Verstehe Webseiten smarter
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-stone-300">
            Analysiere, übersetze und fasse Webseitenartikel sofort zusammen.
          </p>
          <div className="mt-8">
            <Link
              to="/analyze"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500  px-6 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Loslegen
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 animate-fadeIn">
          <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm text-center hover:scale-102 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 ">Artikel erfassen</h2>
            <p className="text-stone-700 dark:text-gray-300">
              Texte einer beliebigen Webseite sofort abrufen.
            </p>
          </div>
          <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm text-center hover:scale-102 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3">Sofort übersetzen</h2>
            <p className="text-stone-700 dark:text-gray-300">
              Erhalte sofortige Übersetzungen durch KI.
            </p>
          </div>
          <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm text-center hover:scale-102 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3">
              Schnell zusammenfassen
            </h2>
            <p className="text-gray-700 dark:text-stone-300">
              Verstehe Inhalte schneller dank intelligenter Zusammenfassungen.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
