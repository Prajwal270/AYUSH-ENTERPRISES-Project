const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle) {
  const icon = toggle.querySelector("i");
  toggle.addEventListener("click", () => {
    if (navLinks) navLinks.classList.toggle("show");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  });
}
