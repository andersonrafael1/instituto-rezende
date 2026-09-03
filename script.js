// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Schedule button functionality
const scheduleButtons = document.querySelectorAll('.schedule-btn, .btn-primary');
scheduleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        showScheduleModal();
    });
});

// Chat button functionality
const chatButton = document.querySelector('.chat-button');
chatButton.addEventListener('click', function() {
    openChat();
});

// Modal for scheduling
function showScheduleModal() {
    alert('Redirecionando para agendamento...\n\nEm breve, integre com seu sistema de agendamento.');
}

// Chat function
function openChat() {
    alert('Abrir chat com a equipe...\n\nIntegre com seu sistema de chat preferido.');
}

// Add scroll animations
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

// Observe all cards
document.querySelectorAll('.diferencial-card, .diferencial-card-2').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar active link highlight
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-purple);
        font-weight: 700;
        border-bottom: 2px solid var(--primary-purple);
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Form validation (if you add forms later)
function validateForm(formData) {
    const { name, email, phone } = formData;
    
    if (!name || name.trim().length === 0) {
        return { valid: false, message: 'Por favor, insira seu nome.' };
    }
    
    if (!email || !isValidEmail(email)) {
        return { valid: false, message: 'Por favor, insira um email válido.' };
    }
    
    if (!phone || phone.trim().length === 0) {
        return { valid: false, message: 'Por favor, insira seu telefone.' };
    }
    
    return { valid: true, message: 'Formulário válido!' };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Instituto REZENDE - Landing Page Carregada com Sucesso!');
    
    // Add subtle fade-in animation to header
    const navbar = document.querySelector('.navbar');
    navbar.style.animation = 'fadeIn 0.6s ease-in';
});

// Define fade-in animation
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Mobile menu toggle (if you add hamburger menu)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Utility function to print to console
function logPageInfo() {
    console.log('=== Instituto REZENDE ===');
    console.log('Landing Page v1.0');
    console.log('Reabilitação Infantil Especializada');
    console.log('Desenvolvido com HTML, CSS e JavaScript puro');
}

logPageInfo();