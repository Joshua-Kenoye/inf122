// ========================================
// NAVIGATION MENU TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// ========================================
// SCROLL TO MODULES
// ========================================

function scrollToModules() {
    const modulesSection = document.getElementById('modules');
    if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// FORM SUBMISSION HANDLER
// ========================================

function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const startdate = document.getElementById('startdate').value;
    const experience = document.getElementById('experience').value;

    // Validate form
    if (!fullname || !email || !course || !startdate) {
        alert('Please fill in all required fields!');
        return;
    }

    // Show success message
    alert(`Thank you, ${fullname}! Your registration has been submitted successfully.\n\nWe will review your information and contact you soon.`);

    // Reset form
    event.target.reset();
}

// ========================================
// CONTACT FORM SUBMISSION
// ========================================

function handleContactSubmit(event) {
    event.preventDefault();

    // Get form data
    const visitorName = document.getElementById('visitor-name').value;
    const visitorPhone = document.getElementById('visitor-phone').value;
    const visitorSubject = document.getElementById('visitor-subject').value;
    const visitorComments = document.getElementById('visitor-comments').value;

    // Validate form
    if (!visitorName || !visitorPhone || !visitorSubject || !visitorComments) {
        showFormMessage('Please fill in all required fields!', 'error');
        return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(visitorPhone)) {
        showFormMessage('Please enter a valid phone number!', 'error');
        return;
    }

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    console.log('Form Data:', {
        name: visitorName,
        phone: visitorPhone,
        subject: visitorSubject,
        comments: visitorComments,
        timestamp: new Date().toLocaleString()
    });

    // Show success message
    showFormMessage(
        `Thank you, ${visitorName}! Your message has been received. We will get back to you soon at ${visitorPhone}.`,
        'success'
    );

    // Reset form
    event.target.reset();
}

// ========================================
// DISPLAY FORM MESSAGE
// ========================================

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ANIMATION ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content sections
document.querySelectorAll('.content-section, .module-card, .feature-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// ACTIVE NAV LINK INDICATOR
// ========================================

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
updateActiveNavLink();

// ========================================
// FORM INPUT VALIDATION
// ========================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

// Add real-time validation to email inputs
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = 'var(--error-color)';
            this.title = 'Please enter a valid email address';
        } else {
            this.style.borderColor = 'var(--border-color)';
            this.title = '';
        }
    });
});

// Add real-time validation to phone inputs
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = 'var(--warning-color)';
            this.title = 'Please enter a valid phone number';
        } else {
            this.style.borderColor = 'var(--border-color)';
            this.title = '';
        }
    });
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', function(event) {
    // Alt + H: Go to home
    if (event.altKey && event.key === 'h') {
        window.location.href = 'index.html';
    }
    // Alt + C: Go to contact
    if (event.altKey && event.key === 'c') {
        window.location.href = 'contact.html';
    }
});

// ========================================
// PRINT FRIENDLY STYLES
// ========================================

window.addEventListener('beforeprint', function() {
    document.body.style.backgroundColor = 'white';
});

// ========================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT
// ========================================

const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});

skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});

// Add skip link to body if not already present
if (!document.querySelector('a[href="#main-content"]')) {
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ========================================
// PERFORMANCE: LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// THEME TOGGLE (OPTIONAL)
// ========================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================

console.log('%c🎓 Welcome to Web Programming Course Hub!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cThis website was built with HTML, CSS, and JavaScript.', 'color: #764ba2; font-size: 12px;');
console.log('%cLearn more about web development by exploring the modules!', 'color: #667eea; font-size: 12px;');
