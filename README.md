# 🎰 Lucky Drawer / Ticket Drawer

![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Oxlint](https://img.shields.io/badge/Oxlint-1.81-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

An interactive, sleek, and modern web application simulating a lucky ticket drawer slot machine. Built with **React 19**, **Vite**, and styled with custom **Glassmorphism UI** animations.

---

## ✨ Features

- 🎰 **Interactive Ticket Drawer UI**: Dynamic glassmorphism card design with smooth spin animation effects.
- 🎲 **Random 3-Digit Ticket Generation**: Click to draw a fresh set of numbers (0–9) instantly.
- 🏆 **Instant Jackpot Detection**: Winning state automatically triggered when all 3 numbers match (e.g. `7-7-7`).
- ⚡ **Ultra Fast**: Powered by Vite 8 for lighting-fast HMR and build speeds.
- 📱 **Fully Responsive**: Looks great on desktop, tablet, and mobile browsers.

---

## 🕹️ Game Rules & Winning Condition

1. Each ticket drawn consists of **3 digits** (`[0-9]`).
2. Click **"🎲 Draw New Ticket"** to generate a new random combination.
3. If all 3 digits are identical (e.g. `5-5-5`), you hit the **Jackpot 🎉**!
4. Keep drawing until you win!

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aniketpal15/Luckey-Drawer.git
   cd "Ticket Drawer"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🛠️ Scripts & Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with HMR. |
| `npm run build` | Builds the app for production in the `dist` directory. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs `oxlint` for fast code linting. |

---

## 📁 Project Structure

```text
Ticket Drawer/
├── public/
├── src/
│   ├── assets/
│   ├── App.css         # Styling & Glassmorphism design system
│   ├── App.jsx         # Core app logic & state management
│   ├── Display.css     # Ticket digit slot styles & animations
│   ├── Display.jsx     # Digit slot display component
│   ├── helper.js      # Array generation & condition checking helpers
│   ├── index.css       # Global baseline CSS
│   └── main.jsx        # React entrypoint
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Linting**: [Oxlint](https://oxc.rs/)
- **Styling**: Vanilla CSS (Glassmorphism, CSS Animations, Micro-interactions)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
