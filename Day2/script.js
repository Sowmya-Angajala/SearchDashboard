// Generate 250+ fake names
const NAMES = [];
const firstNames = ["Aarav", "Saanvi", "Vihaan", "Diya", "Arjun"];
const lastNames  = ["Kumar", "Sharma", "Patel", "Reddy", "Gupta"];

for (let i = 0; i < 10; i++) {
  firstNames.forEach(f =>
    lastNames.forEach(l =>
      NAMES.push(`${f} ${l} ${i}`)
    )
  );
}

// DOM references
const input = document.getElementById("search");
const list = document.getElementById("results");
const loader = document.getElementById("loader");
const totalKeys = document.getElementById("totalKeys");
const debCountEl = document.getElementById("debCount");
const backToTop = document.getElementById("backToTop");

let totalKeystrokes = 0;
let debouncedCalls = 0;

// Debounce function
function debounce(fn, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    loader.style.display = "block"; // show loader
    timer = setTimeout(() => {
      loader.style.display = "none";
      fn.apply(this, args);
    }, delay);
  };
}

// Throttle function
function throttle(fn, limit = 500) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Search + highlight function
function renderResults(query) {
  debouncedCalls++;
  debCountEl.textContent = debouncedCalls;

  const filtered = NAMES.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    list.innerHTML = `<li>No results found</li>`;
    return;
  }

  const re = new RegExp(`(${query})`, "ig");

  const html = filtered.map(name => {
    const highlighted = name.replace(re, `<span class="highlight">$1</span>`);
    return `<li>${highlighted}</li>`;
  }).join("");

  list.innerHTML = html;
}

// Wrap with debounce
const debouncedSearch = debounce(renderResults, 1000);

// Listen for input
input.addEventListener("keyup", (e) => {
  totalKeystrokes++;
  totalKeys.textContent = totalKeystrokes;
  debouncedSearch(e.target.value.trim());
});

// Throttled scroll listener
window.addEventListener("scroll", throttle(() => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}, 500));

// Back to top action
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
