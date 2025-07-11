# 🔍 Search Dashboard with Debounce & Throttle

Welcome to my **Search Dashboard** project! This is a simple but powerful web app that allows you to search from a large list of names in real-time while also demonstrating performance optimization techniques like **debouncing** and **throttling**.

---

## 📌 Project Overview

In this project, I built a responsive dashboard where:

- You can **search from 250+ names** using a search box.
- The results **update in real-time**, but intelligently — thanks to debouncing.
- A **"Back to Top"** button appears when you scroll down, handled efficiently using throttling.
- It also tracks your **typing stats** like total keystrokes and how many times the debounced search was triggered.
- Bonus: A **loader** shows while you're typing and **highlighting** makes matching parts easy to spot!

---

## 🧠 What I Learned

This project taught me a lot about frontend optimization techniques that are **super useful in real-world apps**:

### 🔁 Debounce

Debouncing helped me **avoid unnecessary searches** on every keystroke. Instead, the app waits until the user stops typing for 1 second — then it runs the search once. This makes the app **faster and smoother**, especially when working with larger datasets or APIs.

### ⚡ Throttle

Throttling was used for the scroll event. Instead of checking the scroll position on **every tiny pixel move**, I limited it to **once every 500ms**. This ensures the browser doesn’t get overwhelmed and improves performance.

### 🧩 DOM Manipulation

I practiced working directly with the **DOM using vanilla JavaScript**, including:

- Dynamically building lists
- Updating counters
- Adding/removing elements and styles
- Using event listeners and efficient updates

---

## ▶️ How to Run the Project

### ✅ Live Link

 [Click here to open the live app]()

### 💻 Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Sowmya-Angajala/SearchDashboard.git