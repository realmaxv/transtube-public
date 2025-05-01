import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Summary =
  | string
  | {
      überschrift: string;
      stichpunkte?: string[];
      wichtigeDetails?: string[];
    };

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const current = (location.state as { summary?: Summary })?.summary;

  const [summaries, setSummaries] = useState<Summary[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("summaries") || "[]");
    if (
      current &&
      !saved.some((s: Summary) => JSON.stringify(s) === JSON.stringify(current))
    ) {
      saved.push(current);
      localStorage.setItem("summaries", JSON.stringify(saved));
    }
    setSummaries(saved);
  }, [current]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 ">
      <h2 className="text-2xl font-bold mb-4">Zusammenfassungen</h2>

      {summaries.length === 0 ? (
        <p className="text-red-500 mb-6">
          Noch keine Zusammenfassungen gespeichert.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {summaries.map((summary, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded shadow p-6 relative overflow-x-auto"
            >
              <button
                onClick={() => {
                  const updatedSummaries = summaries.filter(
                    (_, i) => i !== index
                  );
                  setSummaries(updatedSummaries);
                  localStorage.setItem(
                    "summaries",
                    JSON.stringify(updatedSummaries)
                  );
                }}
                className="absolute bottom-2 right-2 text-sm px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Löschen
              </button>

              {typeof summary === "string" ? (
                (() => {
                  try {
                    const parsed = JSON.parse(
                      summary.replace(/^```json\n|```$/g, "")
                    );
                    return (
                      <>
                        <h3 className="text-xl font-semibold mb-2">
                          {parsed.überschrift}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {parsed.stichpunkte?.[0] ||
                            parsed.wichtigeDetails?.[0] ||
                            "Keine Vorschau verfügbar"}
                        </p>
                        {Array.isArray(parsed.stichpunkte) &&
                          parsed.stichpunkte.length > 0 && (
                            <>
                              <h4 className="font-semibold mt-4 mb-1">
                                Stichpunkte:
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {parsed.stichpunkte.map(
                                  (point: string, idx: number) => (
                                    <li key={idx}>{point}</li>
                                  )
                                )}
                              </ul>
                            </>
                          )}
                        {Array.isArray(parsed.wichtigeDetails) &&
                          parsed.wichtigeDetails.length > 0 && (
                            <>
                              <h4 className="font-semibold mt-4 mb-1">
                                Wichtige Details:
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {parsed.wichtigeDetails.map(
                                  (detail: string, idx: number) => (
                                    <li key={idx}>{detail}</li>
                                  )
                                )}
                              </ul>
                            </>
                          )}
                      </>
                    );
                  } catch {
                    return (
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {summary}
                      </p>
                    );
                  }
                })()
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-2">
                    {summary.überschrift}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {summary.stichpunkte?.[0] ||
                      summary.wichtigeDetails?.[0] ||
                      "Keine Vorschau verfügbar"}
                  </p>
                  {Array.isArray(summary.stichpunkte) &&
                    summary.stichpunkte.length > 0 && (
                      <>
                        <h4 className="font-semibold mt-4 mb-1">
                          Stichpunkte:
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {summary.stichpunkte.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  {Array.isArray(summary.wichtigeDetails) &&
                    summary.wichtigeDetails.length > 0 && (
                      <>
                        <h4 className="font-semibold mt-4 mb-1">
                          Wichtige Details:
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {summary.wichtigeDetails.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </>
                    )}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <button
          onClick={() => navigate("/analyze")}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Neue Webseite analysieren
        </button>
      </div>
    </div>
  );
}
