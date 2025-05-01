# 🎬 TransTube.org – Webseiten-Analyzer mit GPT

**TransTube** ist eine moderne, KI-gestützte Web-App, die Webseiten analysiert und präzise zusammenfasst – auf Deutsch und in verständlicher Sprache.

## ✨ Features

- 🌐 **Webseiten-Zusammenfassung** – Fasst Webseiten-Artikel, Dokumentationen oder Blogs strukturiert zusammen
- 🧠 **Stichwortsuche** – Ergebnisse lassen sich auf ein bestimmtes Thema fokussieren
- 💾 **Lokale Speicherung** – Analysen werden automatisch im Browser gespeichert
- 🌙 **Dark Mode Support** – Augenfreundlich und modern
- 📱 **Responsives Design** – Für alle Geräte optimiert

## ⚙️ Tech Stack

**Frontend**

- React + TypeScript
- TailwindCSS
- Vite
- React Router

**Backend**

- Node.js + Express (läuft aus Sicherheitsgründen separat und ist nicht öffentlich zugänglich)
- TypeScript (ESModules)
- OpenAI API (GPT-4/3.5)
- JSDOM (für Webseitenanalyse)

**Deployment**

- Frontend: [Netlify](https://netlify.com)
- Backend: Separat gehostet, Zugriff über Umgebungsvariable gesteuert (nicht öffentlich sichtbar im Code)

## 🚀 Lokale Entwicklung

### 🔧 Frontend starten

```bash
cd TransTube
npm install
npm run dev
```

### 🧪 Backend starten

```bash
cd transtube-backend
npm install
npm run dev
```

> `.env` Datei mit `OPENAI_API_KEY` erforderlich

> Hinweis: Die Datei `.env` darf **nicht** in ein öffentliches Repository gepusht werden. Sie sollte in `.gitignore` eingetragen sein.

## 🛡️ Datenschutz & Sicherheit

- Kein Nutzer-Tracking
- Keine Speicherung auf Servern – alle Daten verbleiben im Local Storage
- GPT-Anfragen direkt über OpenAI API
- Das Backend läuft abgeschottet auf einem privaten Server und ist nicht öffentlich aufrufbar

## 📚 Code-Dokumentation

Der Code ist übersichtlich und modular aufgebaut, mit Kommentaren zur Orientierung in den wichtigsten Modulen:

- `frontend/` – React-Komponenten, Zustand, Routen und UI-Logik
- `backend/` – API-Endpunkte, OpenAI-Logik und DOM-Auswertung
- `.env.example` – Vorlage für Umgebungsvariablen, damit Entwickler:innen lokale Umgebungen korrekt einrichten können
- Um den Einstieg zu erleichtern, sind zentrale Funktionen im Code kommentiert.

Weitere technische Details sind direkt im Code dokumentiert.

## 🤝 Mitwirken

Pull Requests, Feedback und neue Ideen sind herzlich willkommen!

## 📝 Lizenz

MIT – frei verwendbar & anpassbar.
