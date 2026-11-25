<!-- ===================== HEADER ===================== -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:2c5364&height=220&section=header&text=Andrin%20Brem&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Portfolio%20Website&descAlignY=58&descSize=20" width="100%" alt="Header Banner"/>

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=36BCF7&center=true&vCenter=true&width=600&lines=Frontend+Developer+%F0%9F%92%BB;Vue+%2B+TypeScript+Enthusiast+%E2%9A%A1;Willkommen+in+meinem+Portfolio+%F0%9F%91%8B" alt="Typing SVG" />
</a>

<br/>

<a href="https://dein-link.dev">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-Besuchen-36BCF7?style=for-the-badge" alt="Live Demo"/>
</a>
<a href="#-erste-schritte">
  <img src="https://img.shields.io/badge/⚙️_Setup-Anleitung-2c5364?style=for-the-badge" alt="Setup"/>
</a>
<a href="#-kontakt">
  <img src="https://img.shields.io/badge/📬_Kontakt-Schreib_mir-0f2027?style=for-the-badge" alt="Kontakt"/>
</a>

<br/><br/>

<img src="https://img.shields.io/github/last-commit/DEIN-USERNAME/REPO-NAME?style=flat-square&color=36BCF7" alt="Last Commit"/>
<img src="https://img.shields.io/github/repo-size/DEIN-USERNAME/REPO-NAME?style=flat-square&color=36BCF7" alt="Repo Size"/>
<img src="https://img.shields.io/github/license/DEIN-USERNAME/REPO-NAME?style=flat-square&color=36BCF7" alt="License"/>
<img src="https://img.shields.io/github/stars/DEIN-USERNAME/REPO-NAME?style=flat-square&color=36BCF7" alt="Stars"/>

</div>

<br/>

<!-- ===================== PREVIEW ===================== -->
<div align="center">
  <img src="./docs/preview.gif" width="85%" alt="Vorschau der Website"/>
  <br/>
  <sub>✨ Vorschau der Website</sub>
</div>

<br/>

---

## 🧠 Über das Projekt

```ts
const portfolio = {
  owner:    "Andrin Brem",
  purpose:  "Meine Projekte, Skills & Erfahrungen präsentieren",
  builtWith: ["Vue 3", "TypeScript", "Vite"],
  status:   "🟢 Aktiv in Entwicklung",
  motto:    "Learning by building 🚀",
};
```

---

## ✨ Features

<table>
  <tr>
    <td align="center" width="33%">
      <h3>📱</h3>
      <b>Responsive</b><br/>
      <sub>Läuft auf jedem Gerät</sub>
    </td>
    <td align="center" width="33%">
      <h3>⚡</h3>
      <b>Blitzschnell</b><br/>
      <sub>Powered by Vite</sub>
    </td>
    <td align="center" width="33%">
      <h3>🌙</h3>
      <b>Dark Mode</b><br/>
      <sub>Schont die Augen</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>🗂️</h3>
      <b>Projekt-Showcase</b><br/>
      <sub>Mit Tags & Links</sub>
    </td>
    <td align="center">
      <h3>🎨</h3>
      <b>Animationen</b><br/>
      <sub>Smooth Transitions</sub>
    </td>
    <td align="center">
      <h3>♿</h3>
      <b>Barrierearm</b><br/>
      <sub>Semantisches HTML</sub>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=vue,ts,vite,html,css,tailwind,nodejs,git,github,vscode&perline=10" alt="Tech Stack"/>

<br/><br/>

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## 🚀 Erste Schritte

> **Voraussetzung:** [Node.js](https://nodejs.org/) (LTS) ist installiert.

```bash
# 1️⃣ Repository klonen
git clone https://github.com/DEIN-USERNAME/REPO-NAME.git

# 2️⃣ In den Ordner wechseln
cd REPO-NAME

# 3️⃣ Dependencies installieren
npm install

# 4️⃣ Dev-Server starten
npm run dev
```

🌐 Danach läuft die Seite auf **http://localhost:5173**

<details>
<summary><b>📜 Alle verfügbaren Befehle</b></summary>
<br/>

| Befehl            | Beschreibung                        |
|-------------------|-------------------------------------|
| `npm run dev`     | 🔧 Startet den Entwicklungsserver   |
| `npm run build`   | 📦 Erstellt den Production-Build    |
| `npm run preview` | 👀 Zeigt den Build lokal an         |
| `npm run lint`    | 🧹 Prüft den Code                   |

</details>

---

## 📁 Projektstruktur

<details>
<summary><b>📂 Ordnerstruktur anzeigen</b></summary>
<br/>

```
📦 portfolio
 ┣ 📂 public
 ┃ ┗ 🖼️ favicon.ico
 ┣ 📂 src
 ┃ ┣ 📂 assets        → Bilder, Fonts, Styles
 ┃ ┣ 📂 components    → Wiederverwendbare Komponenten
 ┃ ┣ 📂 views         → Seiten (Home, Projekte, Kontakt)
 ┃ ┣ 📂 router        → Routing
 ┃ ┣ 📂 data          → Projektdaten
 ┃ ┣ 📜 App.vue
 ┃ ┗ 📜 main.ts
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 vite.config.ts
```

</details>

---

## 🗺️ Roadmap

- [x] Grundlayout & Navigation
- [x] Projektübersicht
- [x] Responsive Design
- [ ] Dark / Light Mode Toggle
- [ ] Mehrsprachigkeit (DE / EN)
- [ ] Blog-Bereich

---

## 📬 Kontakt

<div align="center">

<a href="https://linkedin.com/in/DEIN-PROFIL">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/DEIN-USERNAME">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="mailto:DEINE@EMAIL.CH">
  <img src="https://img.shields.io/badge/E--Mail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="E-Mail"/>
</a>

</div>

---

<div align="center">

### ⭐ Gefällt dir das Projekt? Lass einen Stern da!

<sub>Mit ❤️ und viel ☕ gebaut von <b>Andrin Brem</b> · © 2026 · MIT License</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2c5364,50:203a43,100:0f2027&height=120&section=footer" width="100%" alt="Footer"/>

</div>

