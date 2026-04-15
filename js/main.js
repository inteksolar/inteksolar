/* ===================== MAIN SCRIPT ===================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===================== QUOTE POPUP ===================== */
  const quoteBtn = document.getElementById('quoteBtn');
  const quotePopup = document.getElementById('quotePopup');
  const quoteCloseBtn = document.getElementById('quoteCloseBtn');
  const quoteForm = document.getElementById('quoteForm');

  if (quoteBtn && quotePopup && quoteCloseBtn && quoteForm) {
    quotePopup.style.display = 'none';

    quoteBtn.addEventListener('click', () => {
      quotePopup.style.display = 'flex';
    });

    quoteCloseBtn.addEventListener('click', () => {
      quotePopup.style.display = 'none';
    });

    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(quoteForm);

      try {
        const response = await fetch(quoteForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          quoteForm.reset();
          alert("✅ Your quote request has been sent successfully!");
          quotePopup.style.display = 'none';
        } else {
          alert("⚠️ Something went wrong. Please try again.");
        }
      } catch {
        alert("⚠️ Network error. Please try again.");
      }
    });
  }

/* ===================== MOBILE MENU ===================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

// Toggle Menu
window.toggleMenu = function () {
  const isOpen = navLinks.classList.toggle("show");

  overlay.classList.toggle("active", isOpen);
  menuBtn.classList.toggle("active", isOpen);

  // ✅ Proper scroll control
  document.body.classList.toggle("menu-open", isOpen);
};

// Overlay click → close menu
overlay.addEventListener("click", closeMenu);

// Auto close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// ✅ Central close function (IMPORTANT)
function closeMenu() {
  navLinks.classList.remove("show");
  overlay.classList.remove("active");
  menuBtn.classList.remove("active");
  document.body.classList.remove("menu-open");
}

/* ===================== DROPDOWN (MOBILE) ===================== */

document.querySelectorAll(".menu-title").forEach(item => {
  item.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      const parent = this.parentElement;

      document.querySelectorAll(".menu-item").forEach(el => {
        if (el !== parent) el.classList.remove("active");
      });

      parent.classList.toggle("active");
    }
  });
});
  
  /* ===================== FAQ SECTION ===================== */
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const parent = question.parentElement;

      document.querySelectorAll(".faq-item.active").forEach(item => {
        if (item !== parent) item.classList.remove("active");
      });

      parent.classList.toggle("active");

      const icon = question.querySelector(".faq-toggle");
      if (icon) {
        icon.textContent = parent.classList.contains("active") ? "−" : "+";
      }
    });
  });

  // Show More FAQs
  const faqBtn = document.querySelector(".faq-btn");
  const moreFaqs = document.querySelectorAll(".hidden-faq");

  if (faqBtn && moreFaqs.length) {
    faqBtn.addEventListener("click", () => {
      moreFaqs.forEach(faq => faq.classList.toggle("hidden-faq"));
      faqBtn.innerHTML = moreFaqs[0].classList.contains("hidden-faq")
        ? 'Show More FAQs <i class="fas fa-chevron-down"></i>'
        : 'Show Less FAQs <i class="fas fa-chevron-up"></i>';
    });
  }

  /* ===================== REVIEWS SECTION ===================== */
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const reviewText = btn.previousElementSibling;
      reviewText.classList.toggle('expanded');
      btn.textContent = reviewText.classList.contains('expanded')
        ? "Read Less"
        : "Read More";
    });
  });

  const showMoreBtn = document.querySelector(".show-more-btn");
  const moreReviews = document.querySelectorAll(".more-reviews");

  if (showMoreBtn && moreReviews.length) {
    showMoreBtn.addEventListener("click", () => {
      moreReviews.forEach(item => item.classList.toggle("hidden"));
      showMoreBtn.innerHTML = moreReviews[0].classList.contains("hidden")
        ? 'Show More Reviews <i class="fas fa-chevron-down"></i>'
        : 'Show Less Reviews <i class="fas fa-chevron-up"></i>';
    });
  }

});

/* ===================== SCROLL ANIMATION ===================== */
window.addEventListener("scroll", () => {
  const underline = document.querySelector(".title-underline");
  if (!underline) return;

  const position = underline.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight - 100) {
    underline.classList.add("visible");
  }
});
