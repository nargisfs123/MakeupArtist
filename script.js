// JavaScript for toggling the sidebar menu on smaller screens
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Toggle the sidebar menu on hamburger click
hamburger.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the click from closing the menu immediately
    menu.classList.toggle("hidden");
});

// Close the menu when clicking outside of it
document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.add("hidden");
    }
});

 // JavaScript to handle form submission using EmailJS
 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Replace these values with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = "service_9gssfav";
    const templateID = "template_vb6ul1h";

    // Send the email using EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Email sent successfully!");
            this.reset(); // Clear the form fields
        }, error => {
            alert("Failed to send email. Please try again.");
            console.error("Error:", error);
        });
});
