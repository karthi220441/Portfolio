// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Contact Form Validation =====
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }

    // Success message (replace with actual email handling if needed)
    alert('Message sent successfully!');
    form.reset();
});

// ===== Project Hover Animation =====
const projects = document.querySelectorAll('#projects li');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.03)';
        project.style.transition = 'transform 0.3s';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// ===== Back to Top Button =====

// Create the button dynamically
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.title = 'Go to top';
topBtn.innerText = '↑';
document.body.appendChild(topBtn);

// Button styles
topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.display = 'none';
topBtn.style.backgroundColor = '#2563eb';
topBtn.style.color = '#fff';
topBtn.style.border = 'none';
topBtn.style.padding = '10px 15px';
topBtn.style.borderRadius = '5px';
topBtn.style.cursor = 'pointer';
topBtn.style.fontSize = '18px';
topBtn.style.zIndex = '1000';

topBtn.addEventListener('mouseenter', () => {
    topBtn.style.backgroundColor = '#1e40af';
});
topBtn.addEventListener('mouseleave', () => {
    topBtn.style.backgroundColor = '#2563eb';
});

// Show button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

// Scroll to top on click
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
