import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    setError("");
    if (!url) {
      setError("Bitte gib eine gültige URL ein.");
      return;
    }

    setLoading(true);
    try {
      console.log("Sende an Backend:", { url, keyword });
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, keyword }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/results", { state: { summary: data.zusammenfassung } });
      } else {
        console.error("Fehlerhafte Antwort:", data);
        setError(data.fehler || "Es ist ein Fehler aufgetreten.");
      }
    } catch (err) {
      console.error(err);
      setError("Netzwerkfehler oder Server nicht erreichbar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">Webseite analysieren</h2>
      <p className="mb-6">
        Gib einen Link zu einer Webseite ein, deren Inhalt du zusammenfassen
        möchtest. Optional kannst du ein Stichwort angeben, um gezielt
        Informationen zu diesem Thema zu erhalten.
      </p>

      <input
        type="text"
        placeholder="https://beispielseite.de"
        className="w-full border rounded px-3 py-2 mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Stichwort (optional)"
        className="w-full border rounded px-3 py-2 mb-4"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Analysiere...
          </span>
        ) : (
          "Zusammenfassung erstellen"
        )}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {(url || keyword) && (
        <div className="mt-6 p-4 bg-white rounded shadow-md border border-gray-200 text-sm text-gray-800 space-y-2 transition-all duration-500 ease-in-out">
          <p className="font-semibold text-gray-900">Aktuelle Analyse:</p>
          {url && (
            <p className="break-words">
              <strong className="text-gray-600">URL:</strong> {url}
            </p>
          )}
          {keyword && (
            <p className="break-words">
              <strong className="text-gray-600">Stichwort:</strong> {keyword}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
