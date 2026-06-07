# OTF-SoS 🏋️‍♂️🔥

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.0-blue)
![Vite](https://img.shields.io/badge/Vite-8.0-purple)

A premium, mobile-friendly web application designed to track **Orangetheory's Season of Strength** foundation lifts. Built with React and Vite, the app offers a sleek dark-mode aesthetic with glassmorphism effects and dynamic micro-animations.

[🚀 **View Live Demo**](https://m0k0ut.github.io/OTF-SoS/)

## ✨ Features

- **Foundation Lifts Tracking**: Log your Weight and Reps for Deadlifts, Chest Presses, Single-Arm Low Rows, and Squats.
- **Local Storage Persistence**: Your lifting history is saved locally in your browser, meaning your data stays private and persists across sessions without needing a database.
- **Responsive Design**: Carefully optimized to look fantastic on both desktop monitors and mobile devices.
- **Premium Aesthetics**: Features a modern dark-mode design system with vibrant orange accents to match the Orangetheory brand style.

## 📲 How to Use

1. **Pick a lift** from the top navigation — Deadlift, Chest Press, Single-Arm Low Row, or Squat.
2. **Log a set** by entering your weight and reps, then tapping **Add Log**.
3. **Review your history** for the selected lift, sorted newest-first, and remove any entry with the trash icon.

> 💾 All entries are stored in your browser's `localStorage`. Your data stays private to the device it was logged on — it is never uploaded, but it also won't sync across devices or browsers, and clearing your browser data will remove it.

## 🛠 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Grid/Flexbox, Glassmorphism)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages

## 💻 Local Development

To run this project locally on your machine, follow these steps:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/m0k0ut/OTF-SoS.git
   cd OTF-SoS
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`.

## 🚢 Deployment

This project is configured to automatically deploy to GitHub Pages. To publish a new version:

1. Build the production application and push to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
2. Verify that GitHub Pages is pointing to the `gh-pages` branch in your repository settings.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, modify, and use it for your own personal fitness tracking!
