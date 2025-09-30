// OGT! 人才 - Institutional Grade Landing Page
// Author: Master Designer 2
// Purpose: Corporate Authority & Executive-Level Interactions

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.institutional-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navigation background on scroll
    const nav = document.querySelector('.institutional-nav');
    let lastScrollY = window.scrollY;

    function updateNavigation() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.boxShadow = '0 4px 20px rgba(26, 43, 76, 0.15)';
        } else {
            nav.style.background = '#ffffff';
            nav.style.backdropFilter = 'none';
            nav.style.boxShadow = '0 2px 10px rgba(26, 43, 76, 0.08)';
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', updateNavigation, { passive: true });

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply observer to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isYen = target.includes('¥');
            const isDays = target.includes('日');

            let numericValue;
            if (isYen) {
                numericValue = parseFloat(target.replace('¥', '').replace('M', ''));
            } else if (isPercentage) {
                numericValue = parseFloat(target.replace('%', ''));
            } else if (isDays) {
                numericValue = parseInt(target.replace('日', ''));
            } else {
                numericValue = parseFloat(target);
            }

            counter.textContent = '0';

            const increment = numericValue / 60;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;

                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }

                if (isYen) {
                    counter.textContent = `¥${current.toFixed(1)}M`;
                } else if (isPercentage) {
                    counter.textContent = `${current.toFixed(1)}%`;
                } else if (isDays) {
                    counter.textContent = `${Math.round(current)}日`;
                } else {
                    counter.textContent = current.toFixed(1);
                }
            }, 50);
        });
    }

    // Trigger counter animation when hero section is visible
    const heroSection = document.querySelector('.hero-section');
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(heroSection);

    // Progress bar for process steps
    function createProcessProgress() {
        const processSteps = document.querySelectorAll('.process-step');

        processSteps.forEach((step, index) => {
            const progressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const stepNumber = entry.target.querySelector('.step-number');
                        stepNumber.style.transform = 'scale(1.1)';
                        stepNumber.style.transition = 'all 0.3s ease';

                        setTimeout(() => {
                            stepNumber.style.transform = 'scale(1)';
                        }, 300);
                    }
                });
            }, { threshold: 0.7 });

            progressObserver.observe(step);
        });
    }

    createProcessProgress();

    // Parallax effect for hero section
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');

        if (heroContent && scrolled < window.innerHeight) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    }

    window.addEventListener('scroll', parallaxEffect, { passive: true });

    // Form handling for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Simulate form submission with professional feedback
            const originalText = this.textContent;
            this.style.opacity = '0.7';
            this.style.cursor = 'not-allowed';
            this.textContent = '処理中...';

            setTimeout(() => {
                this.textContent = '送信完了';
                this.style.background = 'var(--gold-accent)';

                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.opacity = '1';
                    this.style.cursor = 'pointer';
                    this.style.background = '';
                }, 2000);
            }, 1500);

            // In a real implementation, this would connect to a backend service
            console.log('Executive consultation request initiated');
        });
    });

    // Research paper download tracking
    const downloadLinks = document.querySelectorAll('.paper-download');

    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Simulate download initiation
            const paperTitle = this.closest('.research-paper').querySelector('h3').textContent;
            console.log(`Research download initiated: ${paperTitle}`);

            // Professional feedback
            this.style.color = 'var(--gold-light)';
            const originalText = this.innerHTML;
            this.innerHTML = 'ダウンロード中... <i class="fas fa-spinner fa-spin"></i>';

            setTimeout(() => {
                this.innerHTML = 'ダウンロード完了 <i class="fas fa-check"></i>';

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.color = '';
                }, 2000);
            }, 1000);
        });
    });

    // Executive-level keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Alt + C for consultation
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            document.querySelector('a[href="#consultation"]').click();
        }

        // Alt + R for research
        if (e.altKey && e.key === 'r') {
            e.preventDefault();
            document.querySelector('a[href="#research"]').scrollIntoView({ behavior: 'smooth' });
        }

        // Alt + M for mission
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            document.querySelector('a[href="#mission"]').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Advanced hover effects for institutional elements
    const institutionalCards = document.querySelectorAll('.mission-card, .focus-card, .commitment-card, .advisor-card');

    institutionalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(26, 43, 76, 0.2)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 10px rgba(26, 43, 76, 0.08)';
        });
    });

    // Professional loading state for page
    const pageContent = document.body;
    pageContent.style.opacity = '0';
    pageContent.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', function() {
        pageContent.style.opacity = '1';
    });

    // Analytics simulation for executive dashboard
    function trackExecutiveEngagement() {
        const engagementData = {
            timeOnPage: Date.now(),
            sectionsViewed: [],
            ctaInteractions: 0,
            researchDownloads: 0
        };

        // Track section views
        sections.forEach(section => {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        const sectionId = entry.target.id || 'hero';
                        if (!engagementData.sectionsViewed.includes(sectionId)) {
                            engagementData.sectionsViewed.push(sectionId);
                            console.log(`Executive engagement: ${sectionId} section viewed`);
                        }
                    }
                });
            }, { threshold: 0.5 });

            sectionObserver.observe(section);
        });

        return engagementData;
    }

    const executiveEngagement = trackExecutiveEngagement();

    // Professional print stylesheet activation
    function preparePrintVersion() {
        const mediaQuery = window.matchMedia('print');
        mediaQuery.addListener(function(mq) {
            if (mq.matches) {
                // Optimize for executive printing
                document.body.classList.add('print-mode');
                console.log('Executive print version activated');
            }
        });
    }

    preparePrintVersion();

    // Initialize all institutional-grade features
    console.log('OGT! 人才 - Institutional platform initialized');
    console.log('Executive-level features: Active');
    console.log('Corporate authority mode: Enabled');

});

// Advanced error handling for executive experience
window.addEventListener('error', function(e) {
    console.error('System integrity maintained despite:', e.error);
    // In production, this would send error data to monitoring service
});

// Performance monitoring for executive standards
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;

            if (loadTime > 3000) {
                console.warn('Performance below executive standards:', loadTime + 'ms');
            } else {
                console.log('Performance meets institutional requirements:', loadTime + 'ms');
            }
        }, 0);
    });
}