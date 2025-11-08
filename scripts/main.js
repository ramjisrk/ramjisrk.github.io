// main.js - simple enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Highlight current menu link
  const currentPath = window.location.pathname;
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  // Example: you can add more interactions here
});
