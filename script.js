// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.dataset.theme);
});

// Load saved theme
document.body.dataset.theme = localStorage.getItem('theme') || 'light';
themeToggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Here you can add your form submission logic
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    } catch (error) {
        showNotification('Error sending message. Please try again.', 'error');
    }
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
