document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Review Form Submission
    const reviewForm = document.getElementById('reviewForm');
    
    reviewForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the data to your backend
        const formData = new FormData(reviewForm);
        
        // Show success message
        alert('Thank you for your review!');
        reviewForm.reset();
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== '#') {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on Scroll
    const reviewCards = document.querySelectorAll('.review-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    reviewCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});