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

/* ===================== REVIEWS SECTION ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const reviews = document.querySelectorAll('.review-card');

  reviews.forEach(card => {
    const readMoreBtn = card.querySelector('.read-more-btn');
    const reviewText = card.querySelector('.review-text');

    if (readMoreBtn && reviewText) {
      const fullText = reviewText.textContent.trim();
      const shortText = fullText.split(" ").slice(0, 20).join(" ") + "...";

      reviewText.textContent = shortText;

      readMoreBtn.addEventListener('click', () => {
        if (reviewText.classList.contains('expanded')) {
          reviewText.textContent = shortText;
          reviewText.classList.remove('expanded');
          readMoreBtn.textContent = "Read More";
        } else {
          reviewText.textContent = fullText;
          reviewText.classList.add('expanded');
          readMoreBtn.textContent = "Show Less";
        }
      });
    }
  });

  const showMoreBtn = document.getElementById("showMoreBtn");
  const moreReviews = document.querySelector(".more-reviews");

  if (showMoreBtn && moreReviews) {
    showMoreBtn.addEventListener("click", () => {
      moreReviews.classList.toggle("hidden");
      showMoreBtn.innerHTML = moreReviews.classList.contains("hidden")
        ? 'Show More Reviews <i class="fas fa-chevron-down"></i>'
        : 'Show Less Reviews <i class="fas fa-chevron-up"></i>';
    });
  }
});