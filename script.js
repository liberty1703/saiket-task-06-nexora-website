// Select the Contact Form
const contactForm = document.getElementById("contact-form");

// Listen for Contact Form Submission
contactForm.addEventListener("submit", function(event) {

    // Prevent Default Form Submission
    event.preventDefault();

    // Get the Visitor's Information
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Select the Form Feedback Element
    const feedback = document.getElementById("form-feedback");

    // Check for Empty Spaces
    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {
        feedback.textContent = "Please fill in all fields.";
        return;
    }

    // Display Success Message
    feedback.textContent = `Thank you, ${name}! Your message has been received.`;

    // Clear the Form Fields
    contactForm.reset();

});
// Select the Mobile Menu Button
const menuToggle = document.getElementById("menu-toggle");

// Select the Navigation Links
const navLinks = document.getElementById("nav-links");

// Listen for Menu Button Click
menuToggle.addEventListener("click", function() {

    // Toggle the Navigation Menu
navLinks.classList.toggle("active");

// Check if the Menu is Open
const isExpanded = navLinks.classList.contains("active");

// Update Menu Accessibility State
menuToggle.setAttribute("aria-expanded", isExpanded);

// Change the Menu Icon
menuToggle.textContent = isExpanded ? "×" : "☰";

});
// Listen for Navigation Link Clicks
navLinks.addEventListener("click", function(event) {

    // Check if a Navigation Link Was Clicked
    if (event.target.tagName === "A") {

        // Close the Navigation Menu
        navLinks.classList.remove("active");

        // Update Menu Accessibility State
        menuToggle.setAttribute("aria-expanded", "false");

    }

});