const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark" ||
   (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


  // Wait for the page content to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Select all <details> elements within the playlist sidebar
    const allDetails = document.querySelectorAll('.playlist-sidebar .playlist-details');

    // Loop through each one and remove the 'open' attribute
    allDetails.forEach(detail => {
      detail.removeAttribute('open');
    });
  });

