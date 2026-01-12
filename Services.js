document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE MENU ================= */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });
  }

  /* ================= FOOTER ACTIVE LINKS ================= */
  const footerLinks = document.querySelectorAll("#footerLinks a");

  footerLinks.forEach(link => {
    link.addEventListener("click", () => {
      footerLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  /* ================= SCROLL REVEAL ================= */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.remove(
            "opacity-0",
            "-translate-x-20",
            "translate-x-20"
          );

          entry.target.classList.add(
            "opacity-100",
            "translate-x-0"
          );

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".reveal-left, .reveal-right")
    .forEach(el => observer.observe(el));

});
