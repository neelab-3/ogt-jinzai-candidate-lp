// Premium Professional Luxury Experience - Master Designer 3
// Interactive JavaScript for sophisticated user experience

class LuxuryExperience {
    constructor() {
        this.initializeExperience();
        this.setupInteractions();
        this.setupAnimations();
        this.setupFormHandling();
    }

    initializeExperience() {
        // Add luxury loading experience
        document.addEventListener('DOMContentLoaded', () => {
            this.addLuxuryTouchpoints();
            this.initializeScrollEffects();
            this.setupNavigationBehavior();
        });
    }

    addLuxuryTouchpoints() {
        // Add premium hover effects to cards
        const cards = document.querySelectorAll('.talent-card, .service-card, .mission-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            card.addEventListener('mouseleave', (e) => {
                e.target.style.transform = 'translateY(0)';
            });
        });

        // Add luxury button interactions
        const luxuryButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-luxury, .btn-exclusive');
        luxuryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.createRippleEffect(e);
                this.handlePremiumAction(e.target);
            });
        });
    }

    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    handlePremiumAction(button) {
        const buttonText = button.textContent.trim();

        if (buttonText.includes('相談') || buttonText.includes('キャリア')) {
            this.showConsultationModal();
        } else if (buttonText.includes('非公開') || buttonText.includes('ポジション')) {
            this.showExclusivePositions();
        }
    }

    showConsultationModal() {
        const modal = this.createLuxuryModal('consultation');
        document.body.appendChild(modal);

        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }

    showExclusivePositions() {
        const modal = this.createLuxuryModal('positions');
        document.body.appendChild(modal);

        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }

    createLuxuryModal(type) {
        const modal = document.createElement('div');
        modal.className = 'luxury-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(26, 35, 50, 0.9);
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const content = document.createElement('div');
        content.className = 'modal-content';
        content.style.cssText = `
            background: #fefcf7;
            padding: 3rem;
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            box-shadow: 0 30px 100px rgba(0, 0, 0, 0.3);
            border: 2px solid #d4af37;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

        if (type === 'consultation') {
            content.innerHTML = `
                <div style="margin-bottom: 2rem;">
                    <i class="fas fa-crown" style="font-size: 3rem; color: #d4af37; margin-bottom: 1rem;"></i>
                    <h2 style="color: #1a2332; font-family: 'Playfair Display', serif; margin-bottom: 1rem;">プレミアム・キャリア相談</h2>
                    <p style="color: #34495e; line-height: 1.6;">エグゼクティブ専用の個別相談を承ります。あなたの価値を最大化するキャリア戦略を共に構築しましょう。</p>
                </div>

                <form class="consultation-form">
                    <div style="margin-bottom: 1.5rem; text-align: left;">
                        <label style="display: block; margin-bottom: 0.5rem; color: #1a2332; font-weight: 600;">お名前</label>
                        <input type="text" name="name" style="width: 100%; padding: 1rem; border: 2px solid #e5e4e2; border-radius: 10px; font-size: 1rem;" required>
                    </div>

                    <div style="margin-bottom: 1.5rem; text-align: left;">
                        <label style="display: block; margin-bottom: 0.5rem; color: #1a2332; font-weight: 600;">メールアドレス</label>
                        <input type="email" name="email" style="width: 100%; padding: 1rem; border: 2px solid #e5e4e2; border-radius: 10px; font-size: 1rem;" required>
                    </div>

                    <div style="margin-bottom: 1.5rem; text-align: left;">
                        <label style="display: block; margin-bottom: 0.5rem; color: #1a2332; font-weight: 600;">現在のご職業</label>
                        <select name="position" style="width: 100%; padding: 1rem; border: 2px solid #e5e4e2; border-radius: 10px; font-size: 1rem;" required>
                            <option value="">選択してください</option>
                            <option value="executive">役員・経営陣</option>
                            <option value="manager">部長・課長クラス</option>
                            <option value="specialist">専門職・スペシャリスト</option>
                            <option value="consultant">コンサルタント</option>
                            <option value="other">その他</option>
                        </select>
                    </div>

                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button type="submit" style="flex: 1; background: #d4af37; color: #1a2332; border: none; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-calendar-check" style="margin-right: 0.5rem;"></i>
                            相談予約を確定
                        </button>
                        <button type="button" class="close-modal" style="background: transparent; color: #34495e; border: 2px solid #34495e; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                            キャンセル
                        </button>
                    </div>
                </form>
            `;
        } else {
            content.innerHTML = `
                <div style="margin-bottom: 2rem;">
                    <i class="fas fa-eye-slash" style="font-size: 3rem; color: #d4af37; margin-bottom: 1rem;"></i>
                    <h2 style="color: #1a2332; font-family: 'Playfair Display', serif; margin-bottom: 1rem;">厳選非公開ポジション</h2>
                    <p style="color: #34495e; line-height: 1.6;">プレミアム会員限定の非公開求人をご紹介いたします。</p>
                </div>

                <div style="background: linear-gradient(135deg, #1a2332, #2c3e50); padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
                    <h3 style="color: #d4af37; margin-bottom: 1rem;">現在の注目ポジション</h3>
                    <div style="color: #fefcf7; text-align: left; line-height: 1.8;">
                        <p><i class="fas fa-star" style="color: #d4af37; margin-right: 0.5rem;"></i>外資系戦略コンサルティング パートナー候補</p>
                        <p><i class="fas fa-star" style="color: #d4af37; margin-right: 0.5rem;"></i>テクノロジー企業 事業開発責任者</p>
                        <p><i class="fas fa-star" style="color: #d4af37; margin-right: 0.5rem;"></i>グローバル金融機関 アジア地域統括</p>
                        <p><i class="fas fa-star" style="color: #d4af37; margin-right: 0.5rem;"></i>上場企業 新規事業担当役員</p>
                    </div>
                </div>

                <form class="positions-form">
                    <div style="margin-bottom: 1.5rem; text-align: left;">
                        <label style="display: block; margin-bottom: 0.5rem; color: #1a2332; font-weight: 600;">メールアドレス</label>
                        <input type="email" name="email" style="width: 100%; padding: 1rem; border: 2px solid #e5e4e2; border-radius: 10px; font-size: 1rem;" required>
                    </div>

                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button type="submit" style="flex: 1; background: #1a2332; color: #fefcf7; border: none; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-lock-open" style="margin-right: 0.5rem;"></i>
                            非公開求人を受け取る
                        </button>
                        <button type="button" class="close-modal" style="background: transparent; color: #34495e; border: 2px solid #34495e; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                            後で
                        </button>
                    </div>
                </form>
            `;
        }

        modal.appendChild(content);

        // Close modal functionality
        const closeBtn = content.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0';
                setTimeout(() => modal.remove(), 300);
            }
        });

        // Form submission
        const form = content.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form, type);
        });

        return modal;
    }

    handleFormSubmission(form, type) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Show success message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-check" style="margin-right: 0.5rem;"></i>送信完了';
        submitBtn.style.background = '#27ae60';
        submitBtn.disabled = true;

        setTimeout(() => {
            const modal = form.closest('.luxury-modal');
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);

            // Show confirmation toast
            this.showSuccessToast(type);
        }, 1500);

        // In a real implementation, you would send this data to your backend
        console.log('Form submission:', { type, data });
    }

    showSuccessToast(type) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(39, 174, 96, 0.3);
            z-index: 3000;
            transform: translateX(400px);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 350px;
        `;

        const message = type === 'consultation'
            ? 'プレミアム相談のご予約を承りました。24時間以内にご連絡いたします。'
            : '非公開求人情報をお送りしました。メールをご確認ください。';

        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
                <div>
                    <h4 style="margin: 0 0 0.5rem 0; font-weight: 600;">送信完了</h4>
                    <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">${message}</p>
                </div>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    }

    setupNavigationBehavior() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Luxury navigation background on scroll
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.luxury-nav');
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                nav.style.boxShadow = '0 10px 30px rgba(26, 35, 50, 0.2)';
            } else {
                nav.style.boxShadow = 'none';
            }

            lastScrollY = currentScrollY;
        });
    }

    initializeScrollEffects() {
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

        // Observe elements for scroll animations
        const animatedElements = document.querySelectorAll('.talent-card, .service-card, .process-step, .mission-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });
    }

    setupInteractions() {
        // Add premium interactions to various elements
        this.setupCardInteractions();
        this.setupButtonInteractions();
        this.setupHoverEffects();
    }

    setupCardInteractions() {
        const cards = document.querySelectorAll('.talent-card, .service-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    setupButtonInteractions() {
        const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
    }

    setupHoverEffects() {
        // Add sophisticated hover effects for luxury feel
        const hoverElements = document.querySelectorAll('.talent-icon, .service-icon, .mission-icon');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'rotate(5deg) scale(1.1)';
                el.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'rotate(0deg) scale(1)';
            });
        });
    }

    setupAnimations() {
        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            @keyframes luxuryFadeIn {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .luxury-entrance {
                animation: luxuryFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);
            }
        `;
        document.head.appendChild(style);
    }

    setupFormHandling() {
        // Enhanced form handling for premium experience
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, select, textarea');

            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.borderColor = '#d4af37';
                    input.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                    input.style.transform = 'scale(1.02)';
                });

                input.addEventListener('blur', () => {
                    input.style.borderColor = '#e5e4e2';
                    input.style.boxShadow = 'none';
                    input.style.transform = 'scale(1)';
                });
            });
        });
    }
}

// Initialize the luxury experience
const luxuryExperience = new LuxuryExperience();

// Add additional premium touches
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';

        setTimeout(() => {
            heroContent.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }

    // Add staggered animation to trust indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.style.opacity = '0';
        indicator.style.transform = 'translateY(20px)';

        setTimeout(() => {
            indicator.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            indicator.style.opacity = '1';
            indicator.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
});