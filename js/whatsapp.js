document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919370520423";

    const whatsappMessage = 
      `Hello Ayush Enterprises,%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Phone: ${phone}%0A%0A` +
      `Message:%0A${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });