// ========================================
// SMOOTH SCROLL REVEAL ANIMATIONS
// ========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// ========================================
// NAVIGATION BAR SCROLL EFFECT
// ========================================

function handleNavScroll() {
    const nav = document.querySelector('.nav-bar');

    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
}

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// PARALLAX EFFECT FOR HERO SECTION
// ========================================

function handleParallax() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;

    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;

    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe individual cards and items
    document.querySelectorAll('.mission-card, .focus-card, .commitment-item, .process-step').forEach(item => {
        observer.observe(item);
    });
}

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(ripple);
}

function initButtonRipples() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// ========================================
// FOCUS CARD HOVER EFFECTS
// ========================================

function initFocusCardEffects() {
    const focusCards = document.querySelectorAll('.focus-card');

    focusCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// ========================================
// COUNTER ANIMATION FOR PROCESS STEPS
// ========================================

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toString().padStart(2, '0');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function initProcessStepCounters() {
    const processNumbers = document.querySelectorAll('.process-step-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const finalValue = parseInt(entry.target.textContent);
                entry.target.classList.add('animated');
                animateValue(entry.target, 0, finalValue, 1000);
            }
        });
    }, { threshold: 0.5 });

    processNumbers.forEach(number => {
        observer.observe(number);
    });
}

// ========================================
// COMMITMENT ITEMS STAGGER ANIMATION
// ========================================

function initCommitmentStagger() {
    const commitmentItems = document.querySelectorAll('.commitment-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    commitmentItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(to right, #0A1628, #C9A872);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = scrollPercent + '%';
}

// ========================================
// LAZY LOADING FOR IMAGES
// ========================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// CTA BUTTON ENHANCEMENTS
// ========================================

function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default for demo purposes
            e.preventDefault();

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Show a simple alert (in production, this would navigate or show a modal)
            const buttonText = this.textContent.trim();
            console.log(`CTA clicked: ${buttonText}`);

            // You could implement actual functionality here:
            // - Open a contact form modal
            // - Navigate to a consultation booking page
            // - Trigger analytics events
        });
    });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#mission';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -100px;
        left: 0;
        background: #0A1628;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-100px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add aria-labels to buttons without explicit text
    document.querySelectorAll('.btn').forEach(btn => {
        if (!btn.getAttribute('aria-label') && btn.textContent.trim()) {
            btn.setAttribute('aria-label', btn.textContent.trim());
        }
    });

    // Add focus visible class for keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    initSmoothScroll();
    initIntersectionObserver();
    initButtonRipples();
    initFocusCardEffects();
    initProcessStepCounters();
    initCommitmentStagger();
    initLazyLoading();
    initCTAButtons();
    initAccessibility();

    // Throttled scroll events for performance
    const throttledScroll = throttle(() => {
        revealOnScroll();
        handleNavScroll();
        handleParallax();
        updateScrollProgress();
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScroll);

    // Initial call
    revealOnScroll();
    handleNavScroll();

    // Add loaded class to body for CSS transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    console.log('OGT! 人才 landing page initialized successfully');
});

// ========================================
// FORM HANDLING (PLACEHOLDER)
// ========================================

// This would be expanded in production to handle actual form submissions
function handleFormSubmission(formData) {
    // Example: Send to backend API
    // fetch('/api/consultation', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });

    console.log('Form submission would be handled here:', formData);
}

// ========================================
// RESPONSIVE MENU TOGGLE (for mobile)
// ========================================

function initMobileMenu() {
    const nav = document.querySelector('.nav-menu');

    // Create mobile menu toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'mobile-menu-toggle';
    toggleButton.innerHTML = '☰';
    toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
    toggleButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #0A1628;
    `;

    // Add toggle functionality
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggleButton.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Insert before nav menu
    nav.parentElement.insertBefore(toggleButton, nav);

    // Show/hide based on screen size
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMediaChange(e) {
        if (e.matches) {
            toggleButton.style.display = 'block';
        } else {
            toggleButton.style.display = 'none';
            nav.classList.remove('active');
            toggleButton.innerHTML = '☰';
        }
    }
    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', initMobileMenu);