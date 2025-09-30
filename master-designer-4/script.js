// Master Designer 4 - Results-Driven Impact JavaScript
// High-Converting Executive Recruitment Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all conversion optimization features
    initCountdownTimers();
    initFloatingCTA();
    initFormValidation();
    initScrollTracking();
    initSocialProofAnimations();
    initScarcityIndicators();
    initClickTracking();
});

// Countdown Timer System for Urgency
function initCountdownTimers() {
    const countdownElements = [
        document.getElementById('countdown'),
        document.getElementById('consultation-countdown')
    ];

    // Set timer to 2 hours 47 minutes 33 seconds from now
    const endTime = new Date().getTime() + (2 * 60 * 60 + 47 * 60 + 33) * 1000;

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const timeString =
                (hours < 10 ? '0' + hours : hours) + ':' +
                (minutes < 10 ? '0' + minutes : minutes) + ':' +
                (seconds < 10 ? '0' + seconds : seconds);

            countdownElements.forEach(element => {
                if (element) element.textContent = timeString;
            });
        } else {
            // Timer expired - show urgency message
            countdownElements.forEach(element => {
                if (element) {
                    element.textContent = '期限切れ';
                    element.style.color = '#e53e3e';
                    element.style.fontWeight = 'bold';
                }
            });
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Floating CTA Management
function initFloatingCTA() {
    const floatingCta = document.getElementById('floatingCta');
    const heroSection = document.querySelector('.hero');
    const consultationSection = document.getElementById('consultation');

    let isVisible = false;

    function toggleFloatingCTA() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const consultationTop = consultationSection.offsetTop;
        const scrollY = window.scrollY;

        const shouldShow = scrollY > heroBottom && scrollY < consultationTop - 100;

        if (shouldShow && !isVisible) {
            floatingCta.classList.add('visible');
            isVisible = true;
        } else if (!shouldShow && isVisible) {
            floatingCta.classList.remove('visible');
            isVisible = false;
        }
    }

    window.addEventListener('scroll', toggleFloatingCTA);
    window.addEventListener('resize', toggleFloatingCTA);
}

// Advanced Form Validation & Conversion Optimization
function initFormValidation() {
    const form = document.getElementById('consultationForm');
    const submitButton = form.querySelector('button[type="submit"]');
    let isSubmitting = false;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (isSubmitting) return;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Client-side validation
        if (!validateForm(data)) {
            showFormError('必須項目を全て入力してください。');
            return;
        }

        isSubmitting = true;
        showSubmitProgress();

        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            showSuccessMessage();
            trackConversion('consultation_form_submit', data);
            isSubmitting = false;
        }, 2000);
    });

    // Real-time validation feedback
    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateForm(data) {
    return data.name && data.email && data.phone &&
           data.email.includes('@') && data.phone.length >= 10;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'この項目は必須です';
    } else if (field.type === 'email' && value && !value.includes('@')) {
        isValid = false;
        errorMessage = '有効なメールアドレスを入力してください';
    } else if (field.type === 'tel' && value && value.length < 10) {
        isValid = false;
        errorMessage = '有効な電話番号を入力してください';
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }

    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);

    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color: #e53e3e; font-size: 0.8rem; margin-top: 5px;';
    errorDiv.textContent = message;

    field.style.borderColor = '#e53e3e';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

function showFormError(message) {
    // Show error message near submit button
    const form = document.getElementById('consultationForm');
    const existing = form.querySelector('.form-error');
    if (existing) existing.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = 'background: #fed7d7; color: #e53e3e; padding: 10px; border-radius: 5px; margin-bottom: 15px; text-align: center;';
    errorDiv.textContent = message;

    form.insertBefore(errorDiv, form.querySelector('button[type="submit"]'));
}

function showSubmitProgress() {
    const submitButton = document.querySelector('#consultationForm button[type="submit"]');
    const originalText = submitButton.innerHTML;

    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';
}

function showSuccessMessage() {
    const form = document.getElementById('consultationForm');

    // Create success overlay
    const successOverlay = document.createElement('div');
    successOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(56, 161, 105, 0.95);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        text-align: center;
        z-index: 1000;
    `;

    successOverlay.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 20px; color: #68d391;"></i>
        <h3 style="margin-bottom: 15px; color: white;">予約完了！</h3>
        <p style="margin-bottom: 20px; max-width: 300px; line-height: 1.5;">
            ご予約ありがとうございます。24時間以内に担当者よりご連絡いたします。
        </p>
        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px; font-size: 0.9rem;">
            <i class="fas fa-gift"></i> 特典: 市場価値診断レポート(5万円相当)を無料でプレゼント！
        </div>
    `;

    form.style.position = 'relative';
    form.appendChild(successOverlay);

    // Scroll to success message
    successOverlay.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Scroll-based Behavior Tracking
function initScrollTracking() {
    const sections = document.querySelectorAll('section');
    const milestones = [25, 50, 75, 90];
    let trackedMilestones = new Set();

    function trackScrollDepth() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;

        milestones.forEach(milestone => {
            if (scrollPercentage >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                trackEngagement('scroll_depth', { percentage: milestone });
            }
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                trackScrollDepth();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Social Proof Animations
function initSocialProofAnimations() {
    // Animate counters when they come into view
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent.trim();
    const number = parseInt(text.replace(/[^\d]/g, ''));

    if (isNaN(number)) return;

    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }

        // Format number back to original format
        let displayValue = Math.floor(current).toString();

        if (text.includes('万円')) {
            displayValue += '万円+';
        } else if (text.includes('%')) {
            displayValue += '%';
        } else if (text.includes('+')) {
            displayValue += '+';
        }

        element.textContent = displayValue;
    }, 16);
}

// Dynamic Scarcity Indicators
function initScarcityIndicators() {
    const spotsCountElement = document.querySelector('.spots-count');

    // Simulate decreasing availability
    let remainingSpots = 7;

    setInterval(() => {
        if (remainingSpots > 3 && Math.random() < 0.1) {
            remainingSpots--;
            spotsCountElement.textContent = remainingSpots;

            // Show notification when spots decrease
            showScarcityNotification(remainingSpots);

            // Track scarcity events
            trackEngagement('scarcity_update', { remaining_spots: remainingSpots });
        }
    }, 30000); // Check every 30 seconds
}

function showScarcityNotification(spots) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #e53e3e, #ff6b35);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(229, 62, 62, 0.4);
        z-index: 1002;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    notification.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        残り${spots}名に減少しました！
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Click Tracking for Conversion Optimization
function initClickTracking() {
    // Track all CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const section = this.closest('section')?.className || 'unknown';

            trackEngagement('cta_click', {
                button_text: buttonText,
                section: section,
                button_type: this.classList.contains('primary') ? 'primary' : 'secondary'
            });
        });
    });

    // Track testimonial interactions
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('h4')?.textContent || 'unknown';
            trackEngagement('testimonial_click', { testimonial_name: name });
        });
    });

    // Track value proposition card interactions
    document.querySelectorAll('.value-card, .talent-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const title = this.querySelector('h3')?.textContent || 'unknown';
            trackEngagement('card_hover', { card_title: title });
        });
    });
}

// Utility Functions
function scrollToConsultation() {
    const consultation = document.getElementById('consultation');
    consultation.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Add focus to first form field for better UX
    setTimeout(() => {
        const firstInput = consultation.querySelector('input');
        if (firstInput) firstInput.focus();
    }, 800);

    trackEngagement('scroll_to_consultation', { trigger: 'button_click' });
}

function scrollToTestimonials() {
    document.getElementById('testimonials').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    trackEngagement('scroll_to_testimonials', { trigger: 'button_click' });
}

function showJobBoard() {
    // Simulate job board modal or redirect
    const modal = createModal('非公開求人一覧', `
        <div style="text-align: center; padding: 20px;">
            <i class="fas fa-briefcase" style="font-size: 3rem; color: #ff6b35; margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px; color: #1a365d;">厳選された非公開求人</h3>
            <p style="margin-bottom: 20px; line-height: 1.6;">
                現在、あなたのプロフィールに最適な<strong>234件</strong>の非公開求人をご用意しています。<br>
                詳細をご覧いただくには、まずキャリア相談にお申し込みください。
            </p>
            <div style="background: #f7fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; text-align: left; font-size: 0.9rem;">
                    <div><i class="fas fa-check" style="color: #38a169;"></i> 外資系企業 78件</div>
                    <div><i class="fas fa-check" style="color: #38a169;"></i> IT企業 56件</div>
                    <div><i class="fas fa-check" style="color: #38a169;"></i> コンサルティング 34件</div>
                    <div><i class="fas fa-check" style="color: #38a169;"></i> 金融業界 45件</div>
                </div>
            </div>
            <button onclick="closeModal(); scrollToConsultation();"
                    style="background: linear-gradient(135deg, #ff6b35, #ff4500); color: white; border: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem;">
                <i class="fas fa-calendar-check"></i> 今すぐ相談予約して求人を見る
            </button>
        </div>
    `);

    trackEngagement('job_board_interest', { trigger: 'button_click' });
}

function createModal(title, content) {
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 15px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    `;

    modalContent.innerHTML = `
        <div style="padding: 30px;">
            <button onclick="closeModal()"
                    style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #718096;">
                <i class="fas fa-times"></i>
            </button>
            <h2 style="margin-bottom: 20px; color: #1a365d;">${title}</h2>
            ${content}
        </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    return modal;
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.remove();
}

// Analytics & Conversion Tracking
function trackEngagement(eventName, properties = {}) {
    // Integration point for analytics tools (Google Analytics, Mixpanel, etc.)
    console.log('Engagement Event:', eventName, properties);

    // Example Google Analytics 4 integration
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            event_category: 'engagement',
            event_label: properties.section || 'unknown',
            custom_properties: properties
        });
    }

    // Example Facebook Pixel integration
    if (typeof fbq !== 'undefined') {
        fbq('track', 'CustomEvent', {
            event_name: eventName,
            ...properties
        });
    }
}

function trackConversion(conversionType, formData) {
    console.log('Conversion Event:', conversionType, formData);

    // Track high-value conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
            event_category: 'lead_generation',
            event_label: conversionType,
            value: 200000, // Estimated value in yen
            currency: 'JPY'
        });
    }

    // Facebook Conversion API
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            value: 200000,
            currency: 'JPY',
            content_name: 'Executive Career Consultation',
            content_category: 'consultation_booking'
        });
    }
}

// Performance Optimization
// Lazy load images when they come into viewport
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// A/B Testing Framework
function initABTesting() {
    // Simple A/B test for CTA button text
    const variants = {
        'A': '今すぐ相談予約',
        'B': '無料で相談する',
        'C': '限定相談に申込む'
    };

    const variant = getABTestVariant('cta_button_text', Object.keys(variants));
    const ctaButtons = document.querySelectorAll('.cta-button.primary');

    ctaButtons.forEach(button => {
        if (button.textContent.includes('相談予約')) {
            button.innerHTML = button.innerHTML.replace('今すぐ相談予約', variants[variant]);
        }
    });

    // Track which variant is shown
    trackEngagement('ab_test_variant', {
        test_name: 'cta_button_text',
        variant: variant,
        button_text: variants[variant]
    });
}

function getABTestVariant(testName, variants) {
    // Check if variant is stored in localStorage
    const storedVariant = localStorage.getItem(`ab_test_${testName}`);
    if (storedVariant && variants.includes(storedVariant)) {
        return storedVariant;
    }

    // Assign random variant
    const variant = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(`ab_test_${testName}`, variant);
    return variant;
}

// Initialize A/B testing (commented out for production)
// initABTesting();

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Track errors for debugging
    trackEngagement('javascript_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
    });
});

// Accessibility Improvements
function initAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#consultation';
    skipLink.textContent = 'メインコンテンツに進む';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 999;
        border-radius: 4px;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
initAccessibility();