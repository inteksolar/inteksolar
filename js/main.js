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
  // --- Expand/Collapse single FAQ ---
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      question.parentElement.classList.toggle("active");
    });
  });

  // --- Show More FAQs toggle ---
  const faqBtn = document.querySelector(".faq-btn");
  const moreFaqs = document.querySelectorAll(".hidden-faq");

  if (faqBtn) {
    faqBtn.addEventListener("click", () => {
      moreFaqs.forEach(faq => faq.classList.toggle("hidden-faq"));
      faqBtn.innerHTML = moreFaqs[0].classList.contains("hidden-faq")
        ? 'Show More FAQs <i class="fas fa-chevron-down"></i>'
        : 'Show Less FAQs <i class="fas fa-chevron-up"></i>';
    });
  }
});