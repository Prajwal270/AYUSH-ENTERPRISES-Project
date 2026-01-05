const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
