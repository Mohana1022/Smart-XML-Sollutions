const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// About us 
console.log("Smart XML About Page Loaded Successfully");

//Footer Part
const footerLinks = document.querySelectorAll("#footerLinks a");

footerLinks.forEach(link => {
  link.addEventListener("click", () => {
    footerLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
