// theme.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const loader = document.getElementById("loader"); // select the loader
  const content = document.getElementById("content"); // your main content
  
  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Theme toggle
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Save user preference
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

});
