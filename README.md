# 🧠 TransTube – Webseiten-Zusammenfassung mit GPT

**TransTube** ist eine elegante, KI-gestützte Web-App, die lange Webseiten analysiert und in klarer, verständlicher Sprache zusammenfasst – unabhängig von der Originalsprache.

## ✨ Features

- 📰 **Webseiten-Zusammenfassung** – KI-gestützte Analyse und verständliche Zusammenfassung langer Online-Artikel
- 🌍 **Sprachenübergreifend** – Funktioniert unabhängig von der Sprache der Webseite
- 🎯 **Themen-Fokus** – Filtere Inhalte nach Stichwörtern, um gezielt zu analysieren
- 🌙 **Dark Mode** – Stilvoll und augenschonend
- 💻 **Responsive Design** – Optimiert für Desktop und Mobilgeräte

## ⚙️ Tech Stack

**Frontend**

- React + TypeScript
- TailwindCSS
- Vite
- React Router

**Hinweis:** Dieses Repository enthält ausschließlich den öffentlichen Frontend-Code. API-Zugänge und Backend-Logik (z. B. OpenAI, Supabase) sind ausgelagert und nicht enthalten.

## 🚀 Lokale Entwicklung

### 🔧 Frontend starten

```bash
cd TransTube
npm install
npm run dev
```

## 🛡️ Datenschutz & Sicherheit

- Kein Nutzer-Tracking
- Keine Speicherung auf Servern durch dieses Frontend – Datenverarbeitung erfolgt über externe APIs
- GPT-Anfragen direkt über OpenAI API
- Das Backend läuft abgeschottet auf einem privaten Server und ist nicht öffentlich aufrufbar

## 📚 Code-Dokumentation

Der Code ist übersichtlich und modular aufgebaut, mit Kommentaren zur Orientierung in den wichtigsten Modulen:

- `frontend/` – React-Komponenten, Zustand, Routen und UI-Logik
- Diese Public-Version enthält keine API-Keys oder Umgebungsvariablen
- Um den Einstieg zu erleichtern, sind zentrale Funktionen im Code kommentiert.

Weitere technische Details sind direkt im Code dokumentiert.

## 🤝 Mitwirken

Pull Requests, Feedback und neue Ideen sind herzlich willkommen!

## 📝 Lizenz

MIT – frei verwendbar & anpassbar.
