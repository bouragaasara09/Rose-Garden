/* 
   rose-script.js — Shared site-wide JavaScript
   Included on every page via <script src="../js/rose-script.js">
  */

// --- Mobile nav toggle ---
// Guard against pages that don't include the burger element
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger) {
    // Toggle the slide-in drawer and animate the burger icon to an X
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// Close the mobile menu automatically when any nav link is clicked
// (keeps navigation feeling snappy on single-page-style flows)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});
