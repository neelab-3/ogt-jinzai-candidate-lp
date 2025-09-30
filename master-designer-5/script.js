/**
 * Master Designer 5 - Elite Partnership Strategic Consulting Platform
 * Professional JavaScript for sophisticated executive recruitment platform
 */

'use strict';

// Strategic Platform Controller
class ElitePartnershipPlatform {
    constructor() {
        this.isInitialized = false;
        this.navigationState = {
            isMenuOpen: false,
            activeSection: null,
            scrollPosition: 0
        };

        this.formState = {
            isSubmitting: false,
            validationErrors: new Map()
        };

        this.init();
    }

    init() {
        if (this.isInitialized) return;

        this.setupEventListeners();
        this.initializeComponents();
        this.handleInitialLoad();

        this.isInitialized = true;
        console.log('Elite Partnership Platform initialized');
    }

    setupEventListeners() {
        // Navigation events
        document.addEventListener('DOMContentLoaded', () => this.handleDOMReady());
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));

        // Navigation toggle for mobile
        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        }

        // Smooth scrolling for navigation links
        this.setupSmoothScrolling();

        // Form handling
        this.setupFormHandling();

        // Interactive elements
        this.setupInteractiveElements();
    }

    handleDOMReady() {
        // Add loading animations
        this.initializeLoadingAnimations();

        // Set initial active section
        this.updateActiveSection();

        // Initialize form validation
        this.initializeFormValidation();
    }

    initializeLoadingAnimations() {
        const elements = document.querySelectorAll('.loading, .hero-content, .section-title, .program-card, .insight-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        elements.forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
    }

    handleScroll() {
        this.navigationState.scrollPosition = window.pageYOffset;

        // Update navigation background opacity
        this.updateNavigationStyle();

        // Update active section
        this.updateActiveSection();

        // Handle scroll-based animations
        this.handleScrollAnimations();
    }

    updateNavigationStyle() {
        const nav = document.querySelector('.main-nav');
        if (!nav) return;

        const scrolled = this.navigationState.scrollPosition > 50;
        nav.style.background = scrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = scrolled ? 'blur(15px)' : 'blur(10px)';
    }

    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        let activeSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                activeSection = section.id;
            }
        });

        if (activeSection !== this.navigationState.activeSection) {
            this.navigationState.activeSection = activeSection;
            this.updateNavigationHighlight(activeSection);
        }
    }

    updateNavigationHighlight(activeSection) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.substring(1) === activeSection) {
                link.style.color = 'var(--sage-green)';
                link.style.fontWeight = '500';
            } else {
                link.style.color = 'var(--navy-primary)';
                link.style.fontWeight = '400';
            }
        });
    }

    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && this.navigationState.isMenuOpen) {
            this.closeMobileMenu();
        }

        // Recalculate layout-dependent elements
        this.recalculateLayout();
    }

    toggleMobileMenu() {
        this.navigationState.isMenuOpen = !this.navigationState.isMenuOpen;

        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');

        if (this.navigationState.isMenuOpen) {
            this.openMobileMenu(navMenu, navToggle);
        } else {
            this.closeMobileMenu(navMenu, navToggle);
        }
    }

    openMobileMenu(menu, toggle) {
        if (!menu || !toggle) return;

        menu.style.display = 'flex';
        menu.style.position = 'fixed';
        menu.style.top = '80px';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        menu.style.flexDirection = 'column';
        menu.style.padding = '2rem';
        menu.style.gap = '1rem';
        menu.style.borderTop = '1px solid var(--platinum)';
        menu.style.zIndex = '999';

        // Animate toggle button
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    }

    closeMobileMenu(menu, toggle) {
        const navMenu = menu || document.querySelector('.nav-menu');
        const navToggle = toggle || document.querySelector('.nav-toggle');

        if (navMenu && window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }

        if (navToggle) {
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }

        this.navigationState.isMenuOpen = false;
    }

    setupSmoothScrolling() {
        // Handle navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.smoothScrollTo(targetId);

                // Close mobile menu if open
                if (this.navigationState.isMenuOpen) {
                    this.closeMobileMenu();
                }
            });
        });

        // Handle CTA buttons
        const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
        ctaButtons.forEach(button => {
            if (button.hasAttribute('onclick')) return; // Skip if has inline handler

            button.addEventListener('click', (e) => {
                if (button.textContent.includes('Assessment') || button.textContent.includes('Begin')) {
                    e.preventDefault();
                    this.smoothScrollTo('contact');
                } else if (button.textContent.includes('Framework')) {
                    e.preventDefault();
                    this.smoothScrollTo('strategy');
                }
            });
        });
    }

    setupFormHandling() {
        const form = document.querySelector('.strategic-form');
        if (!form) return;

        form.addEventListener('submit', this.handleFormSubmit.bind(this));

        // Real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    setupInteractiveElements() {
        // Program cards hover effects
        this.setupCardInteractions();

        // Metric counters animation
        this.setupMetricCounters();

        // Timeline item animations
        this.setupTimelineAnimations();
    }

    setupCardInteractions() {
        const cards = document.querySelectorAll('.program-card, .insight-card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
                card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });
    }

    setupMetricCounters() {
        const metricNumbers = document.querySelectorAll('.metric-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateMetricCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        metricNumbers.forEach(metric => observer.observe(metric));
    }

    animateMetricCounter(element) {
        const text = element.textContent;
        const number = parseFloat(text.replace(/[^\d.]/g, ''));
        const suffix = text.replace(/[\d.]/g, '');

        if (isNaN(number)) return;

        let current = 0;
        const increment = number / 60; // 60 frames for 1 second at 60fps
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }

            let displayValue = current.toFixed(number % 1 === 0 ? 0 : 1);
            element.textContent = displayValue + suffix;
        }, 16); // ~60fps
    }

    setupTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                        entry.target.style.transition = 'all 0.6s ease-out';
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
            observer.observe(item);
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if (this.formState.isSubmitting) return;

        const form = e.target;
        if (!this.validateForm(form)) return;

        this.submitForm(form);
    }

    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        this.formState.validationErrors.clear();

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name || field.id;
        let error = null;

        // Clear previous error
        this.clearFieldError(field);

        // Required validation
        if (field.hasAttribute('required') && !value) {
            error = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value && !this.isValidEmail(value)) {
            error = 'Please enter a valid email address';
        }

        // Experience validation
        if (fieldName === 'experience' && !value) {
            error = 'Please select your experience level';
        }

        // Objectives validation (minimum length)
        if (fieldName === 'objectives' && value && value.length < 20) {
            error = 'Please provide more detailed objectives (minimum 20 characters)';
        }

        if (error) {
            this.showFieldError(field, error);
            this.formState.validationErrors.set(fieldName, error);
            return false;
        }

        return true;
    }

    showFieldError(field, message) {
        field.style.borderColor = '#e74c3c';

        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            field.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
    }

    clearFieldError(field) {
        field.style.borderColor = '';
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    async submitForm(form) {
        this.formState.isSubmitting = true;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Update button state
        submitButton.textContent = 'Processing Strategic Assessment...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';

        try {
            // Simulate form submission (replace with actual API call)
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            console.log('Strategic Assessment Request:', data);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Success handling
            this.handleFormSuccess(form);

        } catch (error) {
            console.error('Form submission error:', error);
            this.handleFormError(form, error.message || 'An error occurred. Please try again.');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.opacity = '';
            this.formState.isSubmitting = false;
        }
    }

    handleFormSuccess(form) {
        // Replace form with success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <div style="text-align: center; padding: 3rem 2rem; background: var(--white);">
                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--sage-green), var(--sage-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
                    <i class="fas fa-check" style="color: white; font-size: 2rem;"></i>
                </div>
                <h3 style="color: var(--navy-primary); margin-bottom: 1rem;">Strategic Assessment Request Received</h3>
                <p style="color: var(--charcoal); line-height: 1.6; margin-bottom: 1.5rem;">Thank you for your interest in our Elite Partnership program. Our strategic consulting team will review your profile and contact you within 48 hours to schedule your comprehensive assessment.</p>
                <p style="color: var(--sage-green); font-size: 0.95rem; font-style: italic;">We look forward to exploring how we can architect your strategic career transformation.</p>
            </div>
        `;

        form.parentNode.replaceChild(successMessage, form);

        // Track conversion (analytics placeholder)
        this.trackConversion('strategic_assessment_request');
    }

    handleFormError(form, message) {
        // Show error message above form
        let errorElement = form.parentNode.querySelector('.form-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'form-error';
            errorElement.style.background = '#fee';
            errorElement.style.border = '1px solid #fcc';
            errorElement.style.padding = '1rem';
            errorElement.style.marginBottom = '1rem';
            errorElement.style.borderRadius = '4px';
            errorElement.style.color = '#c33';
            form.parentNode.insertBefore(errorElement, form);
        }

        errorElement.innerHTML = `
            <strong>Submission Error:</strong> ${message}
            <br><small>Please check your information and try again, or contact us directly.</small>
        `;
    }

    // Utility functions
    smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const navHeight = document.querySelector('.main-nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    throttle(func, limit) {
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

    debounce(func, wait) {
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

    initializeComponents() {
        // Initialize any additional components
        this.setupAccessibility();
        this.setupAnalytics();
    }

    setupAccessibility() {
        // Add ARIA labels and improve accessibility
        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.setAttribute('aria-label', 'Toggle navigation menu');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        // Add skip link
        if (!document.querySelector('.skip-link')) {
            const skipLink = document.createElement('a');
            skipLink.className = 'skip-link';
            skipLink.href = '#main-content';
            skipLink.textContent = 'Skip to main content';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--navy-primary);
                color: white;
                padding: 8px;
                text-decoration: none;
                border-radius: 4px;
                opacity: 0;
                transition: all 0.3s;
                z-index: 1001;
            `;

            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '6px';
                skipLink.style.opacity = '1';
            });

            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
                skipLink.style.opacity = '0';
            });

            document.body.insertBefore(skipLink, document.body.firstChild);
        }
    }

    setupAnalytics() {
        // Analytics tracking setup (placeholder)
        this.analytics = {
            trackEvent: (category, action, label) => {
                console.log('Analytics Event:', { category, action, label });
                // Integrate with actual analytics service
            }
        };
    }

    trackConversion(type) {
        this.analytics.trackEvent('Conversion', type, 'Elite Partnership');
    }

    handleInitialLoad() {
        // Handle any URL hash on initial load
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            setTimeout(() => this.smoothScrollTo(targetId), 100);
        }
    }

    recalculateLayout() {
        // Recalculate any layout-dependent calculations
        // This is called on resize
    }

    handleScrollAnimations() {
        // Handle any scroll-based animations
        const scrollPercent = this.navigationState.scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);

        // Update progress indicator if it exists
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = `${scrollPercent * 100}%`;
        }
    }
}

// Global functions for inline event handlers
window.scrollToSection = function(sectionId) {
    if (window.elitePartnership) {
        window.elitePartnership.smoothScrollTo(sectionId);
    }
};

// Initialize the platform when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.elitePartnership = new ElitePartnershipPlatform();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Elite Partnership Platform paused');
    } else {
        console.log('Elite Partnership Platform resumed');
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Elite Partnership Platform Error:', e.error);
    // In production, send to error tracking service
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Elite Partnership Platform Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}