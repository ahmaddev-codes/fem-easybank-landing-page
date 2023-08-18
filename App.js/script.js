/* Script for the Hamburger Menu */

// Get the header and hamburger elements
const Header = document.querySelector("header");
const Hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// Remove the open class from the header if it exists on user click,
// otherwise add it on click
Hamburger.addEventListener("click", () => {
  if (Header.classList.contains("open")) {
    Header.classList.remove("open");
  }
  else {
    Header.classList.add("open");
  }
});

// Close menu on link click
mobileMenu.addEventListener("click", () => {
  Header.classList.remove("open");
});