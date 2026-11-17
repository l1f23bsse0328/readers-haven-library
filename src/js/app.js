
// ==================================
// READERS HAVEN - JAVASCRIPT
// ==================================

// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle mobile menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const isExpanded = navLinks.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu after clicking a navigation link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Console message for development verification
console.log("Readers Haven website JavaScript loaded successfully!");

// Contact Form Demo
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        formMessage.textContent =
            `Thank you, ${name}! Your message has been received in this demo.`;

        contactForm.reset();
    });
}
