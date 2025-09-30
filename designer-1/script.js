/**
 * OGT! 人才 Landing Page - Interactive Behaviors
 * Designer-1: Subtle, elegant interactions with smooth transitions
 */

// ============================================
// Navigation Scroll Effects
// ============================================
class NavigationController {
    constructor() {
        this.nav = document.querySelector('.main-nav');
        this.lastScrollY = window.scrollY;
        this.ticking = false;

        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.lastScrollY = window.scrollY;

            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.updateNavigation();
                    this.ticking = false;
                });

                this.ticking = true;
            }
        });

        // Smooth scroll for navigation links
        this.setupSmoothScroll();
    }

    updateNavigation() {
        if (this.lastScrollY > 100) {
            this.nav.style.padding = '0.5rem 0';
            this.nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            this.nav.style.padding = '1rem 0';
            this.nav.style.boxShadow = 'none';
        }
    }

    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (href === '#' || !href) return;

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const offsetTop = target.offsetTop - 80;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ============================================
// Scroll Reveal Animations
// ============================================
class ScrollRevealController {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        // Select all elements to be revealed
        const selectors = [
            '.vision-card',
            '.focus-card',
            '.commitment-item',
            '.process-step'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                this.elements.push({
                    element: el,
                    delay: index * 100,
                    revealed: false
                });

                // Set initial state
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            });
        });

        // Setup intersection observer
        this.setupObserver();
    }

    setupObserver() {
        const options = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = this.elements.find(el => el.element === entry.target);

                    if (item && !item.revealed) {
                        setTimeout(() => {
                            this.revealElement(item.element);
                            item.revealed = true;
                        }, item.delay);
                    }
                }
            });
        }, options);

        this.elements.forEach(item => {
            observer.observe(item.element);
        });
    }

    revealElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }
}

// ============================================
// Parallax Effect for Hero
// ============================================
class ParallaxController {
    constructor() {
        this.heroImage = document.querySelector('.hero-image');
        this.hero = document.querySelector('.hero');
        this.ticking = false;

        if (this.heroImage && this.hero) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.updateParallax();
                    this.ticking = false;
                });

                this.ticking = true;
            }
        });
    }

    updateParallax() {
        const scrolled = window.scrollY;
        const heroHeight = this.hero.offsetHeight;

        if (scrolled < heroHeight) {
            const translateY = scrolled * 0.5;
            this.heroImage.style.transform = `translateY(${translateY}px)`;
        }
    }
}

// ============================================
// CTA Button Ripple Effect
// ============================================
class RippleEffect {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });
        });
    }

    createRipple(event, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        // Remove any existing ripples
        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Add ripple CSS dynamically
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// ============================================
// Number Counter Animation
// ============================================
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.counter');

        if (this.counters.length > 0) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }
}

// ============================================
// Image Lazy Loading Observer
// ============================================
class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            this.images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
}

// ============================================
// Focus Card Hover Effect
// ============================================
class FocusCardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.focus-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.handleMouseEnter(e, card);
            });

            card.addEventListener('mousemove', (e) => {
                this.handleMouseMove(e, card);
            });

            card.addEventListener('mouseleave', (e) => {
                this.handleMouseLeave(e, card);
            });
        });
    }

    handleMouseEnter(e, card) {
        card.style.transition = 'transform 0.3s ease';
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    handleMouseLeave(e, card) {
        card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
}

// ============================================
// Initialize All Controllers
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive features
    new NavigationController();
    new ScrollRevealController();
    new ParallaxController();
    new RippleEffect();
    new CounterAnimation();
    new LazyLoadImages();
    new FocusCardEffects();

    // Log initialization
    console.log('OGT! 人才 Landing Page initialized successfully');
});

// ============================================
// Performance Monitoring
// ============================================
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});