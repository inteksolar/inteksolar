/* ===================== QUOTE POPUP ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const quoteBtn = document.getElementById('quoteBtn');
  const quotePopup = document.getElementById('quotePopup');
  const quoteCloseBtn = document.getElementById('quoteCloseBtn');
  const quoteForm = document.getElementById('quoteForm');

  if (quoteBtn && quotePopup && quoteCloseBtn && quoteForm) {
    quotePopup.style.display = 'none'; // initially hide

    quoteBtn.addEventListener('click', () => {
      quotePopup.style.display = 'flex'; // show popup
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
          const data = await response.json();
          alert(data.error || "⚠️ Something went wrong. Please try again.");
        }
      } catch (err) {
        alert("⚠️ Something went wrong. Please try again.");
      }
    });
  }
});

/* ===================== MOBILE MENU ===================== */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ===================== FAQ SECTION ===================== */
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  const showMoreFaqBtn = document.getElementById("showMoreFaqBtn");
  const hiddenFaqs = document.querySelectorAll(".hidden-faq");
  if(showMoreFaqBtn && hiddenFaqs.length) {
    let isExpanded = false;

    showMoreFaqBtn.addEventListener("click", () => {
      hiddenFaqs.forEach(faq => {
        faq.style.display = isExpanded ? "none" : "block";
      });
      isExpanded = !isExpanded;
      showMoreFaqBtn.innerHTML = isExpanded
        ? 'Show Less FAQs <i class="fas fa-chevron-up"></i>'
        : 'Show More FAQs <i class="fas fa-chevron-down"></i>';
    });
  }
});


// ================= Reviews Section =================
document.addEventListener('DOMContentLoaded', () => {
  // --- Read More toggle per review ---
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const reviewText = btn.previousElementSibling;
      reviewText.classList.toggle('expanded');
      btn.textContent = reviewText.classList.contains('expanded')
        ? "Read Less"
        : "Read More";
    });
  });

  // --- Show More Reviews toggle ---
  const showMoreBtn = document.querySelector(".show-more-btn");
  const moreReviews = document.querySelectorAll(".more-reviews");

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      moreReviews.forEach(item => item.classList.toggle("hidden"));
      showMoreBtn.innerHTML = moreReviews[0].classList.contains("hidden")
        ? 'Show More Reviews <i class="fas fa-chevron-down"></i>'
        : 'Show Less Reviews <i class="fas fa-chevron-up"></i>';
    });
  }

  // ================= FAQ Section =================
document.addEventListener("DOMContentLoaded", () => {
  // --- Accordion Expand/Collapse ---
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const parent = question.parentElement;

      // Close all other open FAQs
      document.querySelectorAll(".faq-item.active").forEach(item => {
        if (item !== parent) {
          item.classList.remove("active");
          const icon = item.querySelector(".faq-toggle");
          if (icon) icon.textContent = "+";
        }
      });

      // Toggle clicked FAQ
      parent.classList.toggle("active");
      const toggleIcon = question.querySelector(".faq-toggle");
      if (toggleIcon) {
        toggleIcon.textContent = parent.classList.contains("active") ? "−" : "+";
      }
    });
  });

  // --- Show More FAQs toggle ---
  const faqBtn = document.querySelector(".faq-btn");
  const moreFaqs = document.querySelectorAll(".hidden-faq");

  if (faqBtn) {
    faqBtn.addEventListener("click", () => {
      moreFaqs.forEach(faq => faq.classList.toggle("hidden-faq"));

      // Button text & arrow update
      if (moreFaqs[0].classList.contains("hidden-faq")) {
        faqBtn.innerHTML = 'Show More FAQs <i class="fas fa-chevron-down"></i>';
      } else {
        faqBtn.innerHTML = 'Show Less FAQs <i class="fas fa-chevron-up"></i>';
      }
    });
  }
});

// ===================== Underline Animation Script =====================
window.addEventListener("scroll", function () {
  const underline = document.querySelector(".title-underline");
  if (!underline) return; // safety check

  const position = underline.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight - 100) {
    underline.classList.add("visible");
  }
});