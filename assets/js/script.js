// Initialize AOS animation
AOS.init({
    duration: 800,
    once: true,
    offset: 120
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Initialize project carousels
document.querySelectorAll('.carousel').forEach(carousel => {
    new bootstrap.Carousel(carousel, {
        interval: 3000,
        pause: 'hover',
        wrap: true
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Initialize lightGallery for project images
document.addEventListener('DOMContentLoaded', () => {
    lightGallery(document.body, {
        selector: '.project-card img',
        download: false,
        zoom: true,
        counter: false
    });
});

// GitHub link handler
document.querySelectorAll('.github-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent lightGallery from opening
        window.open(link.href, '_blank');
    });
});

// Tab switching for project types
const projectTabs = document.querySelectorAll('#pills-tab button');
projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        projectTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});