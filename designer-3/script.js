// ===================================
// OGT! 人才 Landing Page - JavaScript
// Dynamic, Visual-Focused Design with Parallax Effects
// ===================================

(function() {
    'use strict';

    // ===================================
    // Navigation Scroll Effects
    // ===================================

    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Handle navigation background on scroll
    function handleNavScroll() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll);

    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Parallax Scrolling Effects
    // ===================================

    const parallaxElements = document.querySelectorAll('.parallax-bg');

    function handleParallax() {
        parallaxElements.forEach(element => {
            const section = element.closest('.parallax-section');
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;

            // Only apply parallax when section is in viewport
            if (scrollPosition + window.innerHeight > sectionTop &&
                scrollPosition < sectionTop + sectionHeight) {
                const yPos = (scrollPosition - sectionTop) * 0.5;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // Throttle parallax for better performance
    let parallaxTicking = false;

    function requestParallaxUpdate() {
        if (!parallaxTicking) {
            window.requestAnimationFrame(() => {
                handleParallax();
                parallaxTicking = false;
            });
            parallaxTicking = true;
        }
    }

    window.addEventListener('scroll', requestParallaxUpdate);

    // ===================================
    // Scroll-Triggered Fade-In Animations
    // ===================================

    const fadeInElements = document.querySelectorAll('.fade-in-up');

    function handleFadeIn() {
        fadeInElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Trigger animation when element enters viewport (increased to 90% for faster appearance)
            if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
                // Reduced stagger delay for faster sequential animations
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 50); // Reduced from 100ms to 50ms
            }
        });
    }

    // Throttle fade-in checks
    let fadeInTicking = false;

    function requestFadeInUpdate() {
        if (!fadeInTicking) {
            window.requestAnimationFrame(() => {
                handleFadeIn();
                fadeInTicking = false;
            });
            fadeInTicking = true;
        }
    }

    window.addEventListener('scroll', requestFadeInUpdate);

    // Trigger initial check for elements already in viewport
    handleFadeIn();

    // ===================================
    // Statistics Counter Animation
    // ===================================

    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        const aboutSection = document.getElementById('about');
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (aboutTop < windowHeight * 0.6) {
            countersAnimated = true;

            statNumbers.forEach(stat => {
                const target = stat.textContent;
                const isPercentage = target.includes('%');
                const isPlus = target.includes('+');
                const numericValue = parseInt(target.replace(/[^0-9]/g, ''));

                let current = 0;
                const increment = numericValue / 60; // 60 frames for smooth animation
                const duration = 2000;
                const frameTime = duration / 60;

                const counter = setInterval(() => {
                    current += increment;

                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(counter);
                    }

                    let displayValue = Math.floor(current);
                    if (isPercentage) {
                        stat.textContent = displayValue + '%';
                    } else if (isPlus) {
                        stat.textContent = displayValue.toLocaleString() + '+';
                    } else {
                        stat.textContent = displayValue.toLocaleString();
                    }
                }, frameTime);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);

    // ===================================
    // Value Cards Hover Effects
    // ===================================

    const valueCards = document.querySelectorAll('.value-card');

    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // Case Cards Hover Effects
    // ===================================

    const caseCards = document.querySelectorAll('.case-card');

    caseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // Form Validation and Submission
    // ===================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                age: document.getElementById('age').value,
                industry: document.getElementById('industry').value,
                position: document.getElementById('position').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showNotification('必須項目を入力してください。', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showNotification('有効なメールアドレスを入力してください。', 'error');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                console.log('Form submitted:', formData);
                showNotification('お問い合わせありがとうございます。担当者より24時間以内にご連絡いたします。', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // ===================================
    // Notification System
    // ===================================

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Apply styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1.5rem 2rem',
            backgroundColor: type === 'success' ? '#c9a961' : type === 'error' ? '#d32f2f' : '#1a2332',
            color: '#ffffff',
            borderRadius: '4px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            zIndex: '10000',
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            maxWidth: '400px',
            animation: 'slideInRight 0.4s ease',
            opacity: '0',
            transform: 'translateX(400px)'
        });

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
            notification.style.transition = 'all 0.4s ease';
        }, 10);

        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 400);
        }, 5000);
    }

    // ===================================
    // Scroll Progress Indicator
    // ===================================

    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';

        Object.assign(progressBar.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '0%',
            height: '3px',
            backgroundColor: '#c9a961',
            zIndex: '10001',
            transition: 'width 0.1s ease'
        });

        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    createScrollProgress();

    // ===================================
    // Process Timeline Animation
    // ===================================

    const processSteps = document.querySelectorAll('.process-step');

    function animateProcessTimeline() {
        processSteps.forEach((step, index) => {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (stepTop < windowHeight * 0.85) {
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }

    // Set initial state for process steps
    processSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-30px)';
        step.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateProcessTimeline);

    // ===================================
    // Scroll Indicator Auto-Hide
    // ===================================

    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '0.7';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });

        // Make scroll indicator clickable
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            const navHeight = nav.offsetHeight;
            const targetPosition = aboutSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });

        scrollIndicator.style.cursor = 'pointer';
    }

    // ===================================
    // Image Lazy Loading Enhancement
    // ===================================

    function setupLazyLoading() {
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
        }, {
            rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
    }

    setupLazyLoading();

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // ===================================
    // Button Ripple Effect
    // ===================================

    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();

        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - rect.left - radius}px`;
        ripple.style.top = `${event.clientY - rect.top - radius}px`;
        ripple.classList.add('ripple');

        Object.assign(ripple.style, {
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            transform: 'scale(0)',
            animation: 'ripple-animation 0.6s ease-out',
            pointerEvents: 'none'
        });

        const rippleAnimation = `
            @keyframes ripple-animation {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;

        // Add animation to document if not already present
        if (!document.querySelector('#ripple-animation-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation-style';
            style.textContent = rippleAnimation;
            document.head.appendChild(style);
        }

        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', createRipple);
    });

    // ===================================
    // Performance Optimization
    // ===================================

    // Debounce function for resize events
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

    // Handle window resize
    const handleResize = debounce(() => {
        // Recalculate positions and animations
        handleFadeIn();
        handleParallax();
    }, 250);

    window.addEventListener('resize', handleResize);

    // ===================================
    // Accessibility Enhancements
    // ===================================

    // Keyboard navigation for cards
    const interactiveCards = document.querySelectorAll('.value-card, .case-card');

    interactiveCards.forEach(card => {
        card.setAttribute('tabindex', '0');

        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                card.click();
            }
        });
    });

    // Focus visible for keyboard users
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // ===================================
    // Console Welcome Message
    // ===================================

    console.log('%c OGT! 人才 人才 ', 'background: #1a2332; color: #c9a961; font-size: 24px; font-weight: bold; padding: 10px;');
    console.log('%c エグゼクティブキャリアコンサルティング ', 'background: #c9a961; color: #1a2332; font-size: 14px; padding: 5px;');
    console.log('%c あなたの可能性を、次のステージへ ', 'color: #2c3e50; font-size: 12px; padding: 5px;');

    // ===================================
    // Initialize All Features
    // ===================================

    console.log('✓ Navigation initialized');
    console.log('✓ Parallax effects initialized');
    console.log('✓ Scroll animations initialized');
    console.log('✓ Form validation initialized');
    console.log('✓ All interactive features loaded');

})();