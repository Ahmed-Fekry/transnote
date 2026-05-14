# 🪟 TransNote — Transparent Notepad

A beautiful transparent notepad desktop app that floats above all your windows. Built with Electron.

![TransNote](https://img.shields.io/badge/Electron-Desktop-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🪟 **Fully transparent** glass design that floats above all apps
- 🎚️ **Adjustable opacity** — from 15% (nearly invisible) to 100% (solid)
- 📌 **Always on top** toggle — pin it or let it go behind other windows
- 🎨 **4 color themes** — Green, Warm, Cool, Rose
- **Aa** Font toggle — serif or monospace
- 💾 **Auto-saves** as you type — content survives restarts
- 📊 Word & character count
- 🗑 Clear button

## 🚀 Installation

### Requirements
- [Node.js](https://nodejs.org) v20 or higher

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/Ahmed-Fekry/transnote.git

# 2. Go into the folder
cd transnote

# 3. Install dependencies
npm install --save-dev electron@32

# 4. Run the app
npm start
```

## 🛠 Tech Stack

- [Electron](https://electronjs.org) — Desktop app framework
- Vanilla HTML/CSS/JS — No frontend framework needed
- localStorage — For saving notes and preferences

## 📁 Project Structure

```
transnote/
├── main.js       # Electron main process (window creation)
├── index.html    # App UI (notepad interface)
├── package.json  # Project config
└── README.md     # This file
```

## 📄 License

MIT
