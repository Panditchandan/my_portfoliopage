document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav a");

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // Prevent default behavior (smooth scroll instead of jump)
            e.preventDefault();

            // Scroll to the section smoothly
            const targetId = this.getAttribute("href").substring(1); // Remove '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            // Collapse the navbar after clicking
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarCollapse.classList.remove("show");
            }
        });
    });
});

/** Formm Validationn s ***/
// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform form validation
    const form = event.target;
    let isValid = true;

    // Check all inputs for required fields
    form.querySelectorAll("[required]").forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = "red"; // Highlight invalid input
        } else {
            input.style.borderColor = "#ddd"; // Reset valid input
        }
    });

    if (isValid) {
        // Show success message using SweetAlert2
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting us. We'll get back to you soon.",
            confirmButtonText: "OK",
            timer: 3000
        });

        // Optionally, clear the form after submission
        form.reset();
    } else {
        // Show error message
        Swal.fire({
            icon: "error",
            title: "Validation Error",
            text: "Please fill out all mandatory fields before submitting.",
            confirmButtonText: "OK"
        });
    }
});