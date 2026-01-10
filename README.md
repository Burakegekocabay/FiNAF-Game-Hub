# 🎮 FiNAF-Game-Hub
"Fun() is not a Function" Game Hub 
<p>
  <a href="https://github.com/Burakegekocabay/FiNAF-Game-Hub"><b>📂 GitHub Repository</b></a>
<br>
  <a href="https://burakegekocabay.com/FiNAF/"><b>🚀 Live Demo</b></a>
</p>

## 🧐 What is this?
**FiNAF-Game-Hub** is a tribute to the most famous error in JavaScript history: `TypeError: Fun is not a function`. 

This is a collection of mini-games built strictly using the **Holy Trinity** of Frontend: **HTML, CSS, and JavaScript**. No React, no Vue, no jQuery—just pure, unadulterated, and occasionally chaotic source code.

---

## 🎮 Game Modules

### 1. 🔢 Number Guesser
A logic-based game testing input validation and conditional rendering.
* **Logic:** Validates if input is `NaN` or out of range (1-100).
* **Feedback:** Provides visual cues (Red/Green) based on the guess accuracy.

### 2. 📱 Pokedex (Async API)
Fetches real-time data from the external PokeAPI.
* **Tech:** Uses `fetch()`, `async/await`, and JSON parsing.
* **Features:** Handles errors (MissingNo), and dynamic DOM injection for stats.

### 3. 🎰 Roulette
A betting simulation with balance management and animation loops.
* **Betting System:** Supports **Color Bets** (Red/Black) and **Number Bets** (0-36).
* **Simulation:** Uses `setInterval` to create a spinning animation effect before settling on a winner.
* **Math:** Calculates payouts (x2 for colors, x35 for numbers) and updates the user's wallet dynamically.

### 4. 🍺 Never Have I Ever
A social party game generator.
* **Logic:** Randomly selects questions from a predefined array.
* **Interaction:** Simple click-event flow to cycle through content endlessly.