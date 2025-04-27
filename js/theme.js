// theme.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
  
    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  
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