document.addEventListener('DOMContentLoaded', () => {
  // Insert current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for internal anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const targetId = anchor.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});