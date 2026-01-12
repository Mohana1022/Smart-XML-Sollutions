const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


//Footer Part

const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.querySelector("input").value;

  alert(`Subscribed successfully with: ${email}`);
  form.reset();
});

