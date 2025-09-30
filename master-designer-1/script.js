// Master Designer 1 - Executive Trust Builder JavaScript
// Sophisticated interactions for C-suite professionals

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Professional navbar behavior
    function initNavbarBehavior() {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateNavbar() {
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Add subtle scroll-based opacity changes
            if (scrollY > lastScrollY && scrollY > 200) {
                // Scrolling down
                navbar.style.transform = 'translateY(-5px)';
                navbar.style.opacity = '0.95';
            } else {
                // Scrolling up or at top
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);
    }

    // Professional loading animation for stats
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalText = target.textContent;

                    // Extract number and suffix
                    const match = finalText.match(/^([¥\d,]+)([%万+]*)/);
                    if (match) {
                        const numberPart = match[1];
                        const suffix = match[2];
                        const numValue = parseInt(numberPart.replace(/[¥,万]/g, ''));

                        if (!isNaN(numValue)) {
                            animateNumber(target, numValue, suffix, finalText);
                        }
                    }
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    }

    function animateNumber(element, targetNumber, suffix, finalText) {
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Use easing function for professional feel
            const eased = easeOutCubic(progress);
            const current = Math.floor(targetNumber * eased);

            // Format the number appropriately
            let displayText;
            if (finalText.includes('¥')) {
                displayText = `¥${current}${suffix}`;
            } else if (finalText.includes('%')) {
                displayText = `${current}%`;
            } else {
                displayText = `${current}${suffix}`;
            }

            element.textContent = displayText;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = finalText; // Ensure final value is exact
            }
        }

        requestAnimationFrame(update);
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // Professional hover effects for interactive elements
    function initInteractiveEffects() {
        // CTA button sophisticated hover
        const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

        ctaButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Professional card hover effects
        const cards = document.querySelectorAll('.focus-item, .value-item, .team-member, .testimonial');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Professional form interaction (if forms are added later)
    function initFormEnhancements() {
        const inputs = document.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            // Add professional focus effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                if (this.value.trim() !== '') {
                    this.parentElement.classList.add('filled');
                } else {
                    this.parentElement.classList.remove('filled');
                }
            });
        });
    }

    // Professional scroll-triggered animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.focus-item, .value-item, .process-step, .team-member');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered animation for professional feel
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            // Set initial state
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        });
    }

    // Track professional user engagement metrics
    function initAnalytics() {
        // Track scroll depth for engagement analytics
        let maxScroll = 0;
        const trackingPoints = [25, 50, 75, 90, 100];
        const tracked = new Set();

        function trackScrollDepth() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const scrollPercent = Math.round((scrolled / documentHeight) * 100);

            maxScroll = Math.max(maxScroll, scrollPercent);

            trackingPoints.forEach(point => {
                if (scrollPercent >= point && !tracked.has(point)) {
                    tracked.add(point);
                    // Professional analytics tracking would go here
                    console.log(`Professional engagement: ${point}% scroll depth reached`);
                }
            });
        }

        window.addEventListener('scroll', throttle(trackScrollDepth, 100));

        // Track CTA interactions
        const ctaElements = document.querySelectorAll('[href="#consultation"], [href="#positions"]');
        ctaElements.forEach(cta => {
            cta.addEventListener('click', function() {
                console.log('Professional CTA engagement:', this.textContent.trim());
            });
        });
    }

    // Utility function for performance
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

    // Professional error handling
    function initErrorHandling() {
        window.addEventListener('error', function(e) {
            console.error('Professional site error:', e.error);
            // In production, this would send to analytics
        });
    }

    // Professional accessibility enhancements
    function initAccessibility() {
        // Keyboard navigation for CTA buttons
        const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');

        focusableElements.forEach(el => {
            el.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && this.tagName === 'A') {
                    this.click();
                }
            });
        });

        // High contrast mode detection
        if (window.matchMedia('(prefers-contrast: high)').matches) {
            document.body.classList.add('high-contrast');
        }

        // Reduced motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduced-motion');
        }
    }

    // Professional performance monitoring
    function initPerformanceMonitoring() {
        // Monitor Core Web Vitals for executive-grade performance
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('Professional LCP:', lastEntry.startTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log('Professional FID:', entry.processingStart - entry.startTime);
                }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        }
    }

    // Initialize all professional features
    function init() {
        initSmoothScrolling();
        initNavbarBehavior();
        initInteractiveEffects();
        initFormEnhancements();
        initScrollAnimations();
        initAnalytics();
        initErrorHandling();
        initAccessibility();
        initPerformanceMonitoring();

        // Animate stats after a short delay for professional timing
        setTimeout(animateStats, 500);

        console.log('Professional OGT! 人材 landing page initialized');
    }

    // Professional initialization
    init();

    // Handle professional resize events
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Professional responsive adjustments
            console.log('Professional layout adapted for:', window.innerWidth);
        }, 250);
    });

    // Professional page visibility handling
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            console.log('Professional page hidden - pausing non-essential operations');
        } else {
            console.log('Professional page visible - resuming operations');
        }
    });
});