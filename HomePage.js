
  document.addEventListener("DOMContentLoaded", () => {

    /* ===== Mobile menu ===== */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("hidden");
      });
    }

    /* ===== HERO BACKGROUND SLIDER ===== */
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let index = 0;
    const SLIDE_DURATION = 2000; // 2 seconds

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.style.opacity = idx === i ? "1" : "0";
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle("bg-accent", idx === i);
        dot.classList.toggle("bg-white/40", idx !== i);
      });
    }

    if (slides.length > 0) {
      showSlide(index);
      setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
      }, SLIDE_DURATION);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    /* ===== CORE SERVICES ANIMATION ===== */
    const serviceCards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceCards.forEach(card => {
      card.classList.add(
        "opacity-0",
        "translate-y-6",
        "transition",
        "duration-700"
      );
      observer.observe(card);

      // Optional: entire card clickable
      card.addEventListener("click", () => {
        window.location.href = "Services.html";
      });
    });

  });

  /* ===== WHY CHOOSE US: STATS COUNTER ===== */
  const counters = document.querySelectorAll(".stat-number");
  let counterStarted = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const target = parseFloat(counter.dataset.target);
      const increment = target / 80;
      let value = 0;

      const update = () => {
        value += increment;
        if (value < target) {
          counter.textContent =
            target % 1 === 0 ? Math.floor(value) : value.toFixed(1);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
        }
      };
      update();
    });
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
          startCounters();
          counterStarted = true;
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".stat-card").forEach(card => {
    observer.observe(card);
  });


  /* ===== INDUSTRIES PILL HOVER & SCROLL ANIMATION ===== */


  const industryPills = document.querySelectorAll(".industry-pill");

  // Apply base styles via JS (guarantees visibility)
  industryPills.forEach(pill => {
    pill.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "px-6",
      "py-4",
      "rounded-xl",
      "border",
      "border-slate-200",
      "bg-white",
      "text-slate-700",
      "font-medium",
      "shadow-sm",
      "cursor-pointer",
      "transition",
      "duration-300",
      "hover:-translate-y-1",
      "hover:shadow-lg",
      "hover:border-primary"
    );

    pill.querySelector("i").classList.add(
      "text-primary",
      "text-lg"
    );
  });

  // Simple fade-up animation (non-blocking)
  const pillObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeUp");
        }
      });
    },
    { threshold: 0.2 }
  );

  industryPills.forEach(pill => {
    pillObserver.observe(pill);
  });


  /* ===== CTA SECTION ANIMATION ===== */

  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".cta-title");
    const text = document.querySelector(".cta-text");

    if (!title || !text) return;

    title.style.opacity = "0";
    title.style.transform = "translateY(16px)";
    text.style.opacity = "0";
    text.style.transform = "translateY(16px)";

    setTimeout(() => {
      title.style.transition = "all 0.6s ease";
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 150);

    setTimeout(() => {
      text.style.transition = "all 0.6s ease";
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    }, 300);
  });


document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");

  if (heroTitle) {
    setTimeout(() => {
      heroTitle.classList.add("show");
    }, 300); // smooth professional delay
  }
});
