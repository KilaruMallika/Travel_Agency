document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks?.classList.remove('active');
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add hover effect for initiative cards
    document.querySelectorAll('.initiative-card').forEach(card => {
        const icon = card.querySelector('.icon-wrapper');
        
        card.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });

    // Newsletter form submission
    const subscribeForm = document.querySelector('.subscribe-form');
    subscribeForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.querySelector('input').value;
        if (email) {
            alert('Thank you for subscribing!');
            subscribeForm.reset();
        }
    });
});