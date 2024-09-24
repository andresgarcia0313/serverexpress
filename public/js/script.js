document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('mouseenter', () => {
            service.style.backgroundColor = '#e7f9e7';
        });
        service.addEventListener('mouseleave', () => {
            service.style.backgroundColor = 'white';
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Gracias por tu mensaje, ${name}! Nos pondremos en contacto pronto!`);
            contactForm.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
