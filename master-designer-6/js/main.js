/**
 * Strategic JavaScript Framework - Master Designer 6
 * McKinsey-level Interactive Analytics and User Experience
 */

class StrategicAnalytics {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupFormAnalytics();
    }

    init() {
        // Strategic initialization
        this.trackPageLoad();
        this.setupScrollAnalytics();
        this.initializeMetrics();
        this.setupNavigationTracking();
    }

    trackPageLoad() {
        // Strategic page load analytics
        const loadTime = performance.now();
        console.log(`Strategic Analysis: Page loaded in ${loadTime.toFixed(2)}ms`);

        // Track user segment identification
        this.identifyUserSegment();
    }

    identifyUserSegment() {
        // Strategic user segmentation based on behavior
        const userAgent = navigator.userAgent;
        const screenSize = `${window.screen.width}x${window.screen.height}`;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const strategicProfile = {
            device: this.getDeviceType(),
            market: this.getMarketContext(timezone),
            engagement: 'initial',
            timestamp: new Date().toISOString()
        };

        // Store strategic profile for analytics
        localStorage.setItem('strategicProfile', JSON.stringify(strategicProfile));
    }

    getDeviceType() {
        const width = window.innerWidth;
        if (width >= 1200) return 'executive-desktop';
        if (width >= 768) return 'strategic-tablet';
        return 'mobile-professional';
    }

    getMarketContext(timezone) {
        if (timezone.includes('Tokyo') || timezone.includes('Japan')) return 'domestic-jp';
        if (timezone.includes('Asia')) return 'asia-pacific';
        if (timezone.includes('America')) return 'americas';
        if (timezone.includes('Europe')) return 'emea';
        return 'global-other';
    }

    setupScrollAnalytics() {
        let scrollDepth = 0;
        const sections = ['hero', 'mission', 'segments', 'value', 'methodology', 'assessment', 'final'];

        window.addEventListener('scroll', this.throttle(() => {
            const currentScroll = window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentDepth = Math.round((currentScroll / documentHeight) * 100);

            if (currentDepth > scrollDepth) {
                scrollDepth = currentDepth;
                this.trackScrollMilestone(scrollDepth);
            }

            // Section visibility tracking
            this.trackSectionVisibility();
        }, 250));
    }

    trackScrollMilestone(depth) {
        const milestones = [25, 50, 75, 90, 100];
        milestones.forEach(milestone => {
            if (depth >= milestone && !this.hasTrackedMilestone(milestone)) {
                console.log(`Strategic Engagement: ${milestone}% page depth achieved`);
                this.setMilestoneTracked(milestone);
            }
        });
    }

    hasTrackedMilestone(milestone) {
        const tracked = localStorage.getItem('scrollMilestones') || '[]';
        return JSON.parse(tracked).includes(milestone);
    }

    setMilestoneTracked(milestone) {
        const tracked = JSON.parse(localStorage.getItem('scrollMilestones') || '[]');
        tracked.push(milestone);
        localStorage.setItem('scrollMilestones', JSON.stringify(tracked));
    }

    trackSectionVisibility() {
        const sections = document.querySelectorAll('section[id], section[class*="strategic"]');
        const options = {
            threshold: 0.3,
            rootMargin: '-50px 0px'
        };

        if (!this.sectionObserver) {
            this.sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.id || entry.target.className.split(' ')[0];
                        this.trackSectionEngagement(sectionName);
                        this.animateSection(entry.target);
                    }
                });
            }, options);

            sections.forEach(section => this.sectionObserver.observe(section));
        }
    }

    trackSectionEngagement(sectionName) {
        const timestamp = Date.now();
        const engagementData = JSON.parse(localStorage.getItem('sectionEngagement') || '{}');

        if (!engagementData[sectionName]) {
            engagementData[sectionName] = {
                firstView: timestamp,
                viewCount: 1,
                timeSpent: 0
            };
        } else {
            engagementData[sectionName].viewCount++;
        }

        localStorage.setItem('sectionEngagement', JSON.stringify(engagementData));
        console.log(`Strategic Focus: Engaging with ${sectionName} section`);
    }

    animateSection(section) {
        // Strategic entrance animations
        const elements = section.querySelectorAll('.metric-item, .foundation-item, .segment-card, .value-pillar, .process-phase');

        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.6s ease';

                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100);
            }, index * 150);
        });
    }

    setupEventListeners() {
        // Strategic CTA tracking
        document.querySelectorAll('a[class*="cta"]').forEach(cta => {
            cta.addEventListener('click', (e) => {
                this.trackCTAEngagement(cta);
            });
        });

        // Navigation analytics
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackNavigation(link.getAttribute('href'));
            });
        });

        // Strategic form interactions
        this.setupFormAnalytics();

        // Mouse movement heatmap data
        this.setupHeatmapTracking();
    }

    trackCTAEngagement(cta) {
        const ctaData = {
            type: this.getCTAType(cta),
            text: cta.textContent.trim(),
            position: this.getElementPosition(cta),
            timestamp: new Date().toISOString(),
            userSegment: this.getCurrentUserSegment()
        };

        console.log('Strategic CTA Engagement:', ctaData);
        this.storeCTAData(ctaData);
    }

    getCTAType(element) {
        if (element.classList.contains('cta-primary')) return 'primary-action';
        if (element.classList.contains('cta-secondary')) return 'secondary-action';
        if (element.classList.contains('strategic-cta-nav')) return 'navigation-cta';
        return 'general-cta';
    }

    getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset,
            section: this.getContainingSection(element)
        };
    }

    getContainingSection(element) {
        const section = element.closest('section');
        return section ? (section.id || section.className.split(' ')[0]) : 'unknown';
    }

    storeCTAData(data) {
        const existingData = JSON.parse(localStorage.getItem('ctaEngagement') || '[]');
        existingData.push(data);
        localStorage.setItem('ctaEngagement', JSON.stringify(existingData));
    }

    setupFormAnalytics() {
        // Future form implementation tracking
        document.addEventListener('submit', (e) => {
            if (e.target.tagName === 'FORM') {
                this.trackFormSubmission(e.target);
            }
        });

        // Input focus analytics
        document.addEventListener('focusin', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                this.trackFieldFocus(e.target);
            }
        });
    }

    trackFormSubmission(form) {
        const formData = {
            formId: form.id || 'unnamed-form',
            fields: this.getFormFields(form),
            timestamp: new Date().toISOString(),
            userSegment: this.getCurrentUserSegment()
        };

        console.log('Strategic Form Submission:', formData);
    }

    getFormFields(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        return Array.from(inputs).map(input => ({
            name: input.name || input.id,
            type: input.type,
            hasValue: !!input.value
        }));
    }

    setupHeatmapTracking() {
        let mouseData = [];
        let lastRecorded = 0;

        document.addEventListener('mousemove', this.throttle((e) => {
            const now = Date.now();
            if (now - lastRecorded > 100) { // Record every 100ms
                mouseData.push({
                    x: e.clientX,
                    y: e.clientY + window.pageYOffset,
                    timestamp: now
                });
                lastRecorded = now;

                // Limit data size
                if (mouseData.length > 1000) {
                    mouseData = mouseData.slice(-500);
                }
            }
        }, 50));

        // Store heatmap data periodically
        setInterval(() => {
            if (mouseData.length > 0) {
                localStorage.setItem('mouseHeatmap', JSON.stringify(mouseData));
            }
        }, 10000); // Every 10 seconds
    }

    initializeMetrics() {
        // Animate strategic metrics on page load
        setTimeout(() => {
            this.animateMetrics();
        }, 1000);

        // Update progress bars in assessment section
        this.animateProgressBars();
    }

    animateMetrics() {
        const metrics = document.querySelectorAll('.metric-number');

        metrics.forEach(metric => {
            const finalValue = metric.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));

            if (!isNaN(numericValue)) {
                this.animateNumber(metric, 0, numericValue, finalValue);
            }
        });
    }

    animateNumber(element, start, end, suffix) {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(start + (end - start) * easeOut);

            element.textContent = currentValue + suffix.replace(/\d/g, '');

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');

        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.style.width;
                bar.style.width = '0%';
                bar.style.transition = 'width 1.5s ease-out';

                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }, index * 300);
        });
    }

    setupNavigationTracking() {
        // Smooth scroll with analytics
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));

                if (target) {
                    this.trackInternalNavigation(anchor.getAttribute('href'));
                    this.smoothScrollTo(target);
                }
            });
        });
    }

    trackInternalNavigation(target) {
        console.log(`Strategic Navigation: Moving to ${target}`);

        const navigationData = JSON.parse(localStorage.getItem('internalNavigation') || '[]');
        navigationData.push({
            target: target,
            timestamp: new Date().toISOString(),
            fromSection: this.getCurrentSection()
        });
        localStorage.setItem('internalNavigation', JSON.stringify(navigationData));
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.pageYOffset + window.innerHeight / 2;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.pageYOffset;
            const sectionBottom = sectionTop + rect.height;

            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                return section.id || section.className.split(' ')[0];
            }
        }
        return 'unknown';
    }

    smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 80; // Account for fixed nav
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let startTime = null;

        const animate = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function
            const ease = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    getCurrentUserSegment() {
        const profile = JSON.parse(localStorage.getItem('strategicProfile') || '{}');
        return profile.market || 'unknown';
    }

    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Strategic performance monitoring
    monitorPerformance() {
        // Monitor page performance metrics
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const metrics = {
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                    totalLoad: perfData.loadEventEnd - perfData.fetchStart
                };

                console.log('Strategic Performance Metrics:', metrics);
                localStorage.setItem('performanceMetrics', JSON.stringify(metrics));
            }, 0);
        });
    }

    // Strategic A/B testing framework
    initializeABTesting() {
        const testVariant = Math.random() < 0.5 ? 'A' : 'B';
        localStorage.setItem('abTestVariant', testVariant);

        // Apply variant-specific changes
        if (testVariant === 'B') {
            this.applyVariantB();
        }
    }

    applyVariantB() {
        // Example: Slightly different CTA text for testing
        const primaryCTAs = document.querySelectorAll('.cta-primary');
        primaryCTAs.forEach(cta => {
            if (cta.textContent.includes('Strategic Assessment')) {
                cta.innerHTML = cta.innerHTML.replace('Strategic Assessment', 'Executive Analysis');
            }
        });
    }

    // Export analytics data (for demo purposes)
    exportAnalyticsData() {
        const data = {
            profile: JSON.parse(localStorage.getItem('strategicProfile') || '{}'),
            scrollMilestones: JSON.parse(localStorage.getItem('scrollMilestones') || '[]'),
            sectionEngagement: JSON.parse(localStorage.getItem('sectionEngagement') || '{}'),
            ctaEngagement: JSON.parse(localStorage.getItem('ctaEngagement') || '[]'),
            navigation: JSON.parse(localStorage.getItem('internalNavigation') || '[]'),
            performance: JSON.parse(localStorage.getItem('performanceMetrics') || '{}')
        };

        console.log('Complete Strategic Analytics Data:', data);
        return data;
    }
}

// Advanced Strategic Features
class StrategicFeatures {
    constructor() {
        this.setupAdvancedInteractions();
        this.initializePersonalization();
    }

    setupAdvancedInteractions() {
        // Segment card hover effects with analytics
        document.querySelectorAll('.segment-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.trackSegmentInterest(card);
                this.enhanceSegmentDisplay(card);
            });
        });

        // Value pillar interactions
        document.querySelectorAll('.value-pillar').forEach(pillar => {
            pillar.addEventListener('click', () => {
                this.expandPillarDetails(pillar);
            });
        });

        // Assessment category interactions
        document.querySelectorAll('.assessment-category').forEach(category => {
            category.addEventListener('click', () => {
                this.triggerAssessmentModal(category);
            });
        });
    }

    trackSegmentInterest(card) {
        const segmentType = card.querySelector('h3').textContent;
        const interestData = JSON.parse(localStorage.getItem('segmentInterest') || '{}');

        if (!interestData[segmentType]) {
            interestData[segmentType] = 0;
        }
        interestData[segmentType]++;

        localStorage.setItem('segmentInterest', JSON.stringify(interestData));
        console.log(`Strategic Interest: ${segmentType} segment viewed ${interestData[segmentType]} times`);
    }

    enhanceSegmentDisplay(card) {
        // Add dynamic content based on user behavior
        const metrics = card.querySelectorAll('.metric-value');
        metrics.forEach(metric => {
            metric.style.transform = 'scale(1.1)';
            setTimeout(() => {
                metric.style.transform = 'scale(1)';
            }, 300);
        });
    }

    expandPillarDetails(pillar) {
        // Toggle expanded state
        const isExpanded = pillar.classList.contains('expanded');

        // Reset all pillars
        document.querySelectorAll('.value-pillar').forEach(p => {
            p.classList.remove('expanded');
        });

        if (!isExpanded) {
            pillar.classList.add('expanded');
            this.trackPillarExpansion(pillar);
        }
    }

    trackPillarExpansion(pillar) {
        const pillarTitle = pillar.querySelector('h3').textContent;
        console.log(`Strategic Deep Dive: Exploring ${pillarTitle}`);

        const expansionData = JSON.parse(localStorage.getItem('pillarExpansions') || '[]');
        expansionData.push({
            pillar: pillarTitle,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('pillarExpansions', JSON.stringify(expansionData));
    }

    triggerAssessmentModal(category) {
        const categoryName = category.querySelector('h3').textContent;
        console.log(`Strategic Assessment: Initiating ${categoryName} evaluation`);

        // This would trigger a more detailed assessment modal
        // For now, we'll just track the interest
        this.trackAssessmentInterest(categoryName);
    }

    trackAssessmentInterest(categoryName) {
        const assessmentData = JSON.parse(localStorage.getItem('assessmentInterest') || '{}');

        if (!assessmentData[categoryName]) {
            assessmentData[categoryName] = 0;
        }
        assessmentData[categoryName]++;

        localStorage.setItem('assessmentInterest', JSON.stringify(assessmentData));
    }

    initializePersonalization() {
        // Personalize content based on user behavior
        const profile = JSON.parse(localStorage.getItem('strategicProfile') || '{}');
        const segmentInterest = JSON.parse(localStorage.getItem('segmentInterest') || '{}');

        if (Object.keys(segmentInterest).length > 0) {
            this.personalizeContent(segmentInterest);
        }
    }

    personalizeContent(interests) {
        // Find the most interested segment
        const topSegment = Object.keys(interests).reduce((a, b) =>
            interests[a] > interests[b] ? a : b
        );

        // Highlight the most relevant segment
        const segmentCards = document.querySelectorAll('.segment-card');
        segmentCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent;
            if (cardTitle === topSegment) {
                card.style.border = '2px solid var(--strategic-gold)';
                card.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.2)';
            }
        });

        console.log(`Strategic Personalization: Highlighting ${topSegment} based on user interest`);
    }
}

// Strategic Consultation Scheduler (Demo)
class ConsultationScheduler {
    constructor() {
        this.setupSchedulerModal();
    }

    setupSchedulerModal() {
        // Add click event to consultation CTAs
        document.querySelectorAll('a[href="#consultation"], a[href="#assessment"]').forEach(cta => {
            cta.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSchedulerModal();
            });
        });
    }

    showSchedulerModal() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'strategic-modal-overlay';
        modal.innerHTML = `
            <div class="strategic-modal">
                <div class="modal-header">
                    <h3>Strategic Career Consultation</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-content">
                    <p>Thank you for your interest in our strategic career consultation.</p>
                    <p>Our executive consultants will contact you within 24 hours to schedule your personalized session.</p>
                    <div class="consultation-form">
                        <input type="text" placeholder="Full Name" required>
                        <input type="email" placeholder="Email Address" required>
                        <input type="tel" placeholder="Phone Number" required>
                        <select required>
                            <option value="">Select Your Level</option>
                            <option value="senior">Senior Executive</option>
                            <option value="director">Director Level</option>
                            <option value="manager">Manager Level</option>
                            <option value="specialist">Specialist</option>
                        </select>
                        <textarea placeholder="Brief description of your career objectives"></textarea>
                        <button class="cta-primary">Schedule Strategic Consultation</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        this.addModalStyles();

        // Setup modal interactions
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Track modal appearance
        console.log('Strategic Modal: Consultation scheduler displayed');
    }

    addModalStyles() {
        if (!document.getElementById('modal-styles')) {
            const styles = document.createElement('style');
            styles.id = 'modal-styles';
            styles.textContent = `
                .strategic-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(26, 35, 50, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }
                .strategic-modal {
                    background: white;
                    border-radius: 12px;
                    max-width: 500px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    border-bottom: 1px solid #e9ecef;
                }
                .modal-close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #6c757d;
                }
                .modal-content {
                    padding: 1.5rem;
                }
                .consultation-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .consultation-form input,
                .consultation-form select,
                .consultation-form textarea {
                    padding: 0.75rem;
                    border: 1px solid #e9ecef;
                    border-radius: 4px;
                    font-family: inherit;
                }
                .consultation-form textarea {
                    min-height: 80px;
                    resize: vertical;
                }
            `;
            document.head.appendChild(styles);
        }
    }
}

// Initialize Strategic Platform
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all strategic components
    const analytics = new StrategicAnalytics();
    const features = new StrategicFeatures();
    const scheduler = new ConsultationScheduler();

    // Setup strategic keyboard shortcuts for power users
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'd':
                    e.preventDefault();
                    analytics.exportAnalyticsData();
                    break;
                case 's':
                    e.preventDefault();
                    scheduler.showSchedulerModal();
                    break;
            }
        }
    });

    // Strategic console commands for testing
    window.strategicConsole = {
        analytics: analytics,
        features: features,
        scheduler: scheduler,
        exportData: () => analytics.exportAnalyticsData(),
        clearData: () => {
            localStorage.clear();
            console.log('Strategic data cleared');
        }
    };

    console.log('🎯 Strategic Platform Initialized - Master Designer 6');
    console.log('Available commands: strategicConsole.exportData(), strategicConsole.clearData()');
});

// Strategic Performance Observer
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        const perfEntries = list.getEntries();
        perfEntries.forEach(entry => {
            if (entry.entryType === 'measure') {
                console.log(`Strategic Performance: ${entry.name} took ${entry.duration.toFixed(2)}ms`);
            }
        });
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });
}

// Strategic Error Handling
window.addEventListener('error', (e) => {
    console.error('Strategic Error:', {
        message: e.message,
        filename: e.filename,
        line: e.lineno,
        column: e.colno
    });
});

// Strategic Unload Tracking
window.addEventListener('beforeunload', () => {
    const sessionData = {
        duration: Date.now() - performance.timing.navigationStart,
        endTime: new Date().toISOString(),
        finalSection: document.querySelector('.strategic-analytics')?.getCurrentSection() || 'unknown'
    };

    localStorage.setItem('lastSession', JSON.stringify(sessionData));
});