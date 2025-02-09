document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('errorMessage');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessage.textContent = '';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '') {
            errorMessage.textContent = 'Name is required.';
        } else if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
        } else if (message.length < 10) {
            errorMessage.textContent = 'Message must be at least 10 characters long.';
        } else {
            console.log('Form submitted successfully.');
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});