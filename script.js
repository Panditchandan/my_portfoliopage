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









document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // SweetAlert success message
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Optionally, you can reset the form after submission
        this.reset();
    });

