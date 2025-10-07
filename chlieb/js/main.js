// Basic JavaScript functionality for the website

document.addEventListener('DOMContentLoaded', function() {
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#667eea';
            link.style.borderRadius = '5px';
        }
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you, ${name}! Your message has been sent. Lorem ipsum dolor sit amet.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Add fade-in animation to sections when scrolling
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to content sections
    const sections = document.querySelectorAll('.content-section, .hero');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effects to service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
    }
    
    // Simple loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    console.log('XBrezonak website loaded successfully! Lorem ipsum dolor sit amet.');
});

// Utility function to generate more Lorem ipsum text
function generateLoremIpsum(words = 50) {
    const lorem = [
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
        'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
        'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
        'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
        'consequat', 'duis', 'aute', 'irure', 'reprehenderit', 'in', 'voluptate',
        'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
        'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
        'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
    ];
    
    let result = [];
    for (let i = 0; i < words; i++) {
        result.push(lorem[Math.floor(Math.random() * lorem.length)]);
    }
    
    return result.join(' ').charAt(0).toUpperCase() + result.join(' ').slice(1) + '.';
}
