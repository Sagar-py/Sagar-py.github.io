// main.js

const toggle = document.getElementById("darkModeToggle");

// Check system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
