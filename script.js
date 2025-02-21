// Initialize AOS animations with custom settings
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Theme toggle with smooth transitions
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.body.dataset.theme = theme;
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
}

// Initialize theme based on user preference or stored value
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Enhanced form handling with validation and feedback
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form data
    if (!validateForm(data)) {
        showNotification('Please fill all fields correctly', 'error');
        return;
    }
    
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    } catch (error) {
        showNotification('Error sending message. Please try again.', 'error');
    }
});

// Form validation
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return data.name.length > 0 && 
           emailRegex.test(data.email) && 
           data.message.length > 0;
}

// Modern notification system with animations
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
