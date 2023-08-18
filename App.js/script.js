/* Script for the Hamburger Menu */

// Get the header and hamburger elements
const Header = document.querySelector("header");
const Hamburger = document.querySelector(".hamburger");
const Overlay = document.querySelector(".overlay");
const MobileMenu = document.querySelector(".mobile-menu");
const Body = document.querySelector("body");

// Remove the open class from the header if it exists on user click,
// otherwise add it on click
Hamburger.addEventListener("click", () => {
  if (Header.classList.contains("open")) {
    Header.classList.remove("open");
    Overlay.classList.remove("fade-in");
    MobileMenu.classList.remove("fade-in");
    Body.classList.remove("no-scroll");

    // Add the fade-out class to the overlay and mobile menu
    Overlay.classList.add("fade-out");
    MobileMenu.classList.add("fade-out");
  }

  else {
    Header.classList.add("open");
    Overlay.classList.remove("fade-out");
    MobileMenu.classList.remove("fade-out");
    Body.classList.add("no-scroll");

    // Add the fade-in class to the overlay and mobile menu
    Overlay.classList.add("fade-in");
    MobileMenu.classList.add("fade-in");
  }
});

// Remove the open class from the header if it exists on link click,
MobileMenu.addEventListener("click", () => {
  Header.classList.remove("open");
  Overlay.classList.remove("fade-in");
  MobileMenu.classList.remove("fade-in");
  Body.classList.remove("no-scroll");

  // Add the fade-out class to the overlay and mobile menu
  Overlay.classList.add("fade-out");
  MobileMenu.classList.add("fade-out");
});