// contact.js

// ===== Contact Form Toast =====
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // You can add AJAX / Formspree submission here if needed
  // For now, just showing toast and resetting form
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
  contactForm.reset();
});

// ===== Quote Popup =====
const quoteBtn = document.getElementById('quoteBtn');
const quotePopup = document.getElementById('quotePopup');
const quoteCloseBtn = document.getElementById('quoteCloseBtn');

quoteBtn.addEventListener('click', () => {
  quotePopup.style.display = 'flex';
});

quoteCloseBtn.addEventListener('click', () => {
  quotePopup.style.display = 'none';
});

// ===== Optional: Click outside popup to close =====
window.addEventListener('click', (e) => {
  if (e.target === quotePopup) {
    quotePopup.style.display = 'none';
  }
});

// ===== Optional: Navbar Toggle (if used in this page) =====
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}