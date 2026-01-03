document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Video Slider
    const videos = document.querySelectorAll('.video');
    const dots = document.querySelectorAll('.dot');
    let currentVideo = 0;

    function showVideo(index) {
        videos.forEach(video => video.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        videos[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextVideo() {
        currentVideo = (currentVideo + 1) % videos.length;
        showVideo(currentVideo);
    }

    // Auto advance video slider
    setInterval(nextVideo, 5000);

    // Manual video navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentVideo = index;
            showVideo(currentVideo);
        });
    });

    // Guides Carousel
    const guidesContainer = document.querySelector('.guides-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const cardWidth = 350 + 32; // card width + gap

    let scrollPosition = 0;

    prevBtn.addEventListener('click', () => {
        scrollPosition = Math.min(scrollPosition + cardWidth, 0);
        guidesContainer.style.transform = `translateX(${scrollPosition}px)`;
        updateButtons();
    });

    nextBtn.addEventListener('click', () => {
        const maxScroll = -(guidesContainer.scrollWidth - guidesContainer.clientWidth);
        scrollPosition = Math.max(scrollPosition - cardWidth, maxScroll);
        guidesContainer.style.transform = `translateX(${scrollPosition}px)`;
        updateButtons();
    });

    function updateButtons() {
        prevBtn.disabled = scrollPosition >= 0;
        nextBtn.disabled = scrollPosition <= -(guidesContainer.scrollWidth - guidesContainer.clientWidth);
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }

    // Stats Animation
    const stats = document.querySelectorAll('.stat-circle');
    
    function animateNumber(element, target) {
        let current = 0;
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps

        function update() {
            current = Math.min(current + step, target);
            element.querySelector('.number').textContent = Math.floor(current);
            
            if (current < target) {
                requestAnimationFrame(update);
            }
        }

        update();
    }

    // Intersection Observer for stats animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.value);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    // Smooth Scroll for Navigation Links
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
                navLinks.classList.remove('active');
            }
        });
    });

    // Newsletter Form
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input').value;
            if (email) {
                alert('Thank you for subscribing!');
                subscribeForm.reset();
            }
        });
    }
});