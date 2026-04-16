<template>
<NavbarSection />

<!-- HERO SECTION -->
<section class="hero">
    <div class="bg-circle circle1"></div>
    <div class="bg-circle circle2"></div>

    <div class="hero-container">
        <div class="hero-text">
            <h1>Rule The Digital <span>World With A </span><br>Modern Website</h1>

            <p>
                A modern website is the foundation of expanding your customer base and making a lasting first
                impression on prospective clients.
            </p>

            <div class="hero-cta">
                <button class="main-btn" @click="showQuote">
                    <i class="fas fa-fire"></i>
                    Get Started
                </button>
            </div>

            <div class="trust-bar">
                <div class="avatars">
                    <img src="https://picsum.photos/id/64/52/52" alt="">
                    <img src="https://picsum.photos/id/201/52/52" alt="">
                    <img src="https://picsum.photos/id/1005/52/52" alt="">
                </div>
                <div class="count">5+</div>
                <span>Happy clients & growing every day</span>
            </div>
        </div>

        <div class="hero-visual">
            <div class="visual-card">
                <img src="/images/web1.webp" alt="Modern digital workspace" style="width:100%; height:auto;">
            </div>

            <i class="fas fa-globe floating-icon icon1"></i>
            <i class="fas fa-mobile-alt floating-icon icon2"></i>
            <i class="fas fa-shopping-cart floating-icon icon3"></i>
            <i class="fas fa-laptop-code floating-icon icon4"></i>
        </div>
    </div>
</section>

<!-- ==================== RECENT WORK SECTION ==================== -->
<section class="recent-work-section">
    <div class="recent-container">
        <div class="section-header">
            <h2>Recent <span>Work</span></h2>
            <p class="subtitle">Crafted with passion • Delivered with excellence</p>
        </div>

        <div class="slider-wrapper">
            <!-- Previous Arrow -->
            <button class="slider-arrow prev" id="prevBtn" aria-label="Previous slide">
                <i class="fas fa-chevron-left"></i>
            </button>

            <div class="projects-slider" id="projectsSlider">
                <!-- Project 1 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="/images/web2.jpg" alt="PortPro - Logistics Platform">
                        <div class="project-overlay">
                            <h3>PortPro - Logistics Platform</h3>
                            <p>Built exclusively for drayage carriers with real-time tracking and smart scheduling.
                            </p>
                            <a href="#" class="project-link">View Case Study <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="/images/web3.jpg" alt="School Bag E-commerce Store">
                        <div class="project-overlay">
                            <h3>School Bag E-commerce Store</h3>
                            <p>Personalized school bags store with vibrant design and seamless shopping experience.
                            </p>
                            <a href="#" class="project-link">View Case Study <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="/images/web4.jpg" alt="Driver Mobile App">
                        <div class="project-overlay">
                            <h3>Driver Mobile App</h3>
                            <p>Professional driver management app with messaging, leads, and document scanning.</p>
                            <a href="#" class="project-link">View Case Study <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="/images/web5.jpg" alt="School Bag E-commerce Store">
                        <div class="project-overlay">
                            <h3>School Bag E-commerce Store</h3>
                            <p>Personalized school bags store with vibrant design and seamless shopping experience.
                            </p>
                            <a href="#" class="project-link">View Case Study <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="/images/web6.jpg" alt="Driver Mobile App">
                        <div class="project-overlay">
                            <h3>Driver Mobile App</h3>
                            <p>Professional driver management app with messaging, leads, and document scanning.</p>
                            <a href="#" class="project-link">View Case Study <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Next Arrow -->
            <button class="slider-arrow next" id="nextBtn" aria-label="Next slide">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>

        <!-- Slider Dots -->
        <div class="slider-dots" id="sliderDots">
            <button class="slider-dot active" data-index="0" aria-label="Go to slide 1"></button>
            <button class="slider-dot" data-index="1" aria-label="Go to slide 2"></button>
            <button class="slider-dot" data-index="2" aria-label="Go to slide 3"></button>
        </div>

        <!-- Progress Bar -->
        <div class="slider-progress">
            <div class="slider-progress-bar" id="progressBar"></div>
        </div>

        <!-- Card Counter -->
        <div class="card-counter">
            <span id="currentSlide">1</span> / <span id="totalSlides">3</span>
        </div>
    </div>
</section>

<!-- ==================== WEB & APP INNOVATION SECTION ==================== -->
<section class="innovation-section">
    <div class="innovation-container">

        <!-- Left Content -->
        <div class="innovation-content">
            <h2>Web & App <span>Innovation</span></h2>
            <p class="description">
                Transform your business with bespoke digital solutions crafted for success.
                Our skilled developers create intuitive websites and mobile applications to drive growth.
            </p>

            <div class="features-grid">
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Adaptive Layouts</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>User Interface Design</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Cross-Platform Apps</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Vue.js Web Development</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Dynamic Scaling</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Angular Web Development</span>
                </div>
            </div>
        </div>

        <!-- Right Visual -->
        <div class="innovation-visual">
            <img src="/images/home4.webp" alt="Web & App Mockups" class="main-device">
        </div>
    </div>
</section>

<!-- ==================== WHY CHOOSE US SECTION ==================== -->
<section class="why-choose-section">
    <div class="why-container">
        <div class="why-header">
            <span class="label">WHY CHOOSE US</span>
            <h2>Why <span>Buy Dream Web</span> Stands Out For Your Business</h2>
            <button class="work-btn">
                <i class="fas fa-fire"></i> Work With Us
            </button>
        </div>

        <div class="why-content">
            <!-- Left Image -->
            <div class="why-image">
                <img src="/images/web7.webp" alt="Laptop with analytics">
            </div>

            <!-- Right Benefits -->
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="number">01</div>
                    <h3>Established Success</h3>
                    <p>A portfolio of impactful web solutions and delighted customers.</p>
                </div>
                <div class="benefit-card">
                    <div class="number">02</div>
                    <h3>Bespoke Approaches</h3>
                    <p>Personalized web design and development strategies to match your vision.</p>
                </div>
                <div class="benefit-card">
                    <div class="number">03</div>
                    <h3>Skilled Professionals</h3>
                    <p>Highly qualified experts with deep industry knowledge.</p>
                </div>
                <div class="benefit-card">
                    <div class="number">04</div>
                    <h3>Open Communication</h3>
                    <p>Comprehensive updates to ensure you're informed throughout the process.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- PRICING SECTION -->
<section class="pricing-section">
    <div class="pricing-container">
        <div class="section-title">
            <h2>Choose The <span>Pricing Plan</span></h2>
        </div>

        <div class="pricing-grid">
            <div class="pricing-card">
                <h3>Starter</h3>
                <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">210</span>
                    <span class="old-price">$250</span>
                </div>
                <button class="pricing-btn" @click="selectPlan('Starter')">
                    <i class="fas fa-fire"></i> Get Started
                </button>
                <ul class="features">
                    <li><i class="fas fa-check"></i> 3 Pages</li>
                    <li><i class="fas fa-check"></i> Modern & Responsive Design</li>
                    <li><i class="fas fa-check"></i> Contact Form Integration</li>
                </ul>
                <a href="#" class="view-more">View More</a>
            </div>

            <div class="pricing-card popular">
                <div class="popular-badge">Most Popular</div>
                <h3>Professional</h3>
                <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">520</span>
                    <span class="old-price">$590</span>
                </div>
                <button class="pricing-btn" @click="selectPlan('Professional')">
                    <i class="fas fa-fire"></i> Get Started
                </button>
                <ul class="features">
                    <li><i class="fas fa-check"></i> Up to 10 Pages</li>
                    <li><i class="fas fa-check"></i> Custom Design (Figma or PSD)</li>
                    <li><i class="fas fa-check"></i> Speed Optimization</li>
                </ul>
                <a href="#" class="view-more">View More</a>
            </div>

            <div class="pricing-card">
                <div class="recommended-badge">Recommended</div>
                <h3>Premium</h3>
                <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">1050</span>
                    <span class="old-price">$1150</span>
                </div>
                <button class="pricing-btn" @click="selectPlan('Premium')">
                    <i class="fas fa-fire"></i> Get Started
                </button>
                <ul class="features">
                    <li><i class="fas fa-check"></i> Unlimited Pages</li>
                    <li><i class="fas fa-check"></i> Full Custom UI/UX Design</li>
                    <li><i class="fas fa-check"></i> Blog Integration</li>
                </ul>
                <a href="#" class="view-more">View More</a>
            </div>
        </div>
    </div>
</section>

<!-- ==================== NUMBERS + STRATEGY SECTION ==================== -->
<section class="success-section">
    <div class="success-container">

        <!-- Numbers Behind Success -->
        <div class="numbers-box">
            <h2>The Numbers Behind Our Success</h2>

            <div class="stats-grid">
                <div class="stat-card">
                    <i class="fas fa-chart-line stat-icon"></i>
                    <div class="stat-number">500+</div>
                    <div class="stat-label">SEO Campaign</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-sync stat-icon"></i>
                    <div class="stat-number">92%</div>
                    <div class="stat-label">Retention Rate</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-globe stat-icon"></i>
                    <div class="stat-number">120%</div>
                    <div class="stat-label">Average Increase</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-bullseye stat-icon"></i>
                    <div class="stat-number">80%</div>
                    <div class="stat-label">On Page SEO</div>
                </div>
            </div>
        </div>

        <!-- Strategy To Success -->
        <div class="strategy-section">
            <div class="strategy-header">
                <p class="journey">Your Journey to a Stellar Online Presence</p>
                <h2>Strategy To <span>Success</span></h2>
            </div>

            <div class="strategy-content">
                <!-- Left Steps -->
                <div class="steps-list">
                    <div class="step-card">
                        <i class="fas fa-search step-icon"></i>
                        <div>
                            <h3>Initial Assessment</h3>
                            <p>We begin by evaluating your digital footprint, uncovering opportunities for
                                enhancement.</p>
                        </div>
                    </div>
                    <div class="step-card">
                        <i class="fas fa-map step-icon"></i>
                        <div>
                            <h3>Creative Blueprint</h3>
                            <p>We design a tailored roadmap, blending innovation with your unique business goals.
                            </p>
                        </div>
                    </div>
                    <div class="step-card">
                        <i class="fas fa-rocket step-icon"></i>
                        <div>
                            <h3>Performance Optimization</h3>
                            <p>We refine and boost your website's efficiency, ensuring peak performance and
                                visibility.</p>
                        </div>
                    </div>
                    <div class="step-card">
                        <i class="fas fa-sync-alt step-icon"></i>
                        <div>
                            <h3>Continuous Improvement</h3>
                            <p>We monitor progress and adapt strategies to maximize your online growth and impact.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Visual -->
                <div class="strategy-visual">
                    <img src="/images/web8.webp" alt="Strategy Success" class="visual-image">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== TESTIMONIALS SECTION ==================== -->
<section class="testimonials-section">
    <div class="testimonials-container">

        <!-- Header -->
        <div class="testimonials-header">
            <span class="label">TESTIMONIALS</span>
            <h2>Proven Success Through <span>Our Clients' Words</span></h2>
            <button class="contact-btn">
                <i class="fas fa-fire"></i> Get In Touch With Us
            </button>
        </div>

        <div class="testimonials-wrapper">

            <!-- Testimonials List -->
            <div class="testimonials-list">

                <!-- Testimonial 1 -->
                <div class="testimonial-card">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">
                        "Buy Dream Web's web design agency created a breathtaking e-commerce website design for my
                        store. Traffic doubled within months!"
                    </p>
                    <div class="client-info">
                        <div class="client-avatar">
                            <img src="/images/tes1.webp" alt="John D">
                        </div>
                        <div class="client-details">
                            <h4>John D</h4>
                            <p class="role">E-commerce Owner</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="testimonial-card">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">
                        "Thanks to their website design company, my site now ranks top for web design firms.
                        Exceptional UI/UX designing!"
                    </p>
                    <div class="client-info">
                        <div class="client-avatar">
                            <img src="/images/tes2.webp" alt="Lisa K">
                        </div>
                        <div class="client-details">
                            <h4>Lisa K</h4>
                            <p class="role">E-commerce Owner</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="testimonial-card">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">
                        "Their web development agency delivered a custom website design and development solution
                        that exceeded expectations. Highly recommend!"
                    </p>
                    <div class="client-info">
                        <div class="client-avatar">
                            <img src="/images/tes3.webp" alt="Mark T">
                        </div>
                        <div class="client-details">
                            <h4>Mark T</h4>
                            <p class="role">Startup Founder</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Visual -->
            <div class="testimonial-visual">
                <div class="visual-wrapper">
                    <img src="/images/web7.jpg" alt="Happy Clients">
                    <div class="visual-overlay">
                        <div class="rating-badge">
                            <i class="fas fa-star"></i>
                            <span>4.9/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== CONTACT US SECTION ==================== -->
<section class="contact-section">
    <div class="contact-container">

        <!-- Left Content -->
        <div class="contact-content">
            <span class="label">CONTACT US</span>
            <h2>Let's <span>Work Together</span></h2>
            <p class="description">
                Ready to elevate your online presence with a world-class web design company or website design firm?
                Contact Buy Dream Web today for a free consultation. Together, we'll craft a web design and
                development
                strategy that delivers real results and positions your brand for success.
            </p>

            <form class="contact-form" @submit.prevent="handleContactSubmit">
                <input type="text" placeholder="Enter your full name" v-model="contactForm.full_name" required>
                <input type="email" placeholder="Enter your email" v-model="contactForm.email" required>
                <input type="tel" placeholder="Enter your phone number" v-model="contactForm.phone">
                <input type="text" placeholder="Company name (optional)" v-model="contactForm.company">
                <textarea placeholder="Tell us about your project..." v-model="contactForm.notes" rows="3"></textarea>

                <button type="submit" class="quote-btn" :disabled="isSubmitting">
                    <template v-if="isSubmitting">
                        <i class="fas fa-spinner fa-spin"></i>
                        Submitting...
                    </template>
                    <template v-else>
                        <i class="fas fa-fire"></i>
                        Get Price Quote
                    </template>
                </button>
            </form>
        </div>

        <!-- Right Visual -->
        <div class="contact-visual">
            <img src="/images/web9.webp" alt="Team Meeting" class="visual-image">
        </div>
    </div>
</section>

<!-- ==================== FAQ SECTION ==================== -->
<section class="faq-section">
    <div class="faq-container">

        <!-- Left Title -->
        <div class="faq-title">
            <span class="label">FAQ</span>
            <h2>FAQ About <span>Website Design Service</span></h2>
        </div>

        <!-- FAQ Accordion -->
        <div class="faq-accordion">

            <!-- Question 1 -->
            <div class="faq-item">
                <button class="faq-question" @click="toggleFAQ">
                    What are your best website development services?
                    <span class="arrow">▼</span>
                </button>
                <div class="faq-answer">
                    Our best website development services include custom web design services, custom WordPress web
                    development services, and best web application development services company solutions.
                    We cater to clients seeking the best website development company in the UK, ensuring responsive
                    and SEO-optimized sites.
                </div>
            </div>

            <!-- Question 2 -->
            <div class="faq-item">
                <button class="faq-question" @click="toggleFAQ">
                    Do you offer custom website development for e-commerce?
                    <span class="arrow">▼</span>
                </button>
                <div class="faq-answer">
                    Yes! We specialize in custom e-commerce website development services. Our team builds
                    user-friendly, secure, and scalable online stores tailored to your business needs, making us a
                    top website development company for e-commerce solutions.
                </div>
            </div>

            <!-- Question 3 -->
            <div class="faq-item">
                <button class="faq-question" @click="toggleFAQ">
                    How long does it take to build a website?
                    <span class="arrow">▼</span>
                </button>
                <div class="faq-answer">
                    The timeline depends on complexity. A basic site takes 2–4 weeks, while a custom web
                    development services project may take 6–12 weeks. As a reliable web development agency, we
                    ensure timely delivery without compromising quality.
                </div>
            </div>

            <!-- Question 4 -->
            <div class="faq-item">
                <button class="faq-question" @click="toggleFAQ">
                    Do you provide ongoing support and maintenance?
                    <span class="arrow">▼</span>
                </button>
                <div class="faq-answer">
                    Absolutely! We offer ongoing website maintenance and support packages to keep your site secure,
                    updated, and performing at its best. Our website development services company ensures long-term
                    success.
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
export default {
    name: 'WebsiteDesignPage',
    components: {
        NavbarSection,
        FooterSection
    },
    data() {
        return {
            currentIndex: 0,
            cardWidth: 0,
            isDragging: false,
            startPos: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationID: null,
            scrollTimeout: null,
            contactForm: {
                full_name: '',
                email: '',
                phone: '',
                company: '',
                notes: ''
            },
            isSubmitting: false
        }
    },
    mounted() {
        this.initSlider();
    },
    methods: {
        async handleContactSubmit() {
            this.isSubmitting = true;
            try {
                const response = await fetch('https://jaexlfmjjzpahdmlvhii.supabase.co/functions/v1/submit-lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.contactForm)
                });
                const result = await response.json();
                if (result.success) {
                    this.showNotification('Thank you! We\'ll be in touch soon.', 'success');
                    this.contactForm = {
                        full_name: '',
                        email: '',
                        phone: '',
                        company: '',
                        notes: ''
                    };
                } else {
                    this.showNotification('Something went wrong. Please try again.', 'error');
                }
            } catch (error) {
                this.showNotification('Network error. Please try again.', 'error');
            } finally {
                this.isSubmitting = false;
            }
        },
        showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                    <span>${message}</span>
                </div>
            `;
            document.body.appendChild(notification);
            setTimeout(() => notification.classList.add('show'), 10);
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 4000);
        },
        toggleFAQ(element) {
            const answer = element.target.nextElementSibling;
            const isActive = element.target.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            if (!isActive) {
                element.target.classList.add('active');
                answer.classList.add('active');
            }
        },
        selectPlan(plan) {
            alert(`You selected the ${plan} plan!`);
        },
        showQuote() {
            alert('Get Started clicked!');
        },
        initSlider() {
            const slider = document.getElementById('projectsSlider');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const dots = document.querySelectorAll('.slider-dot');
            const progressBar = document.getElementById('progressBar');
            const currentSlideEl = document.getElementById('currentSlide');
            const totalSlidesEl = document.getElementById('totalSlides');

            const cards = document.querySelectorAll('.project-card');
            const totalCards = cards.length;

            // Calculate card width including gap
            const updateCardWidth = () => {
                const gap = 30;
                this.cardWidth = cards[0].offsetWidth + gap;
            };

            // Update slider position
            const updateSliderPosition = () => {
                updateCardWidth();
                const scrollAmount = this.currentIndex * this.cardWidth;
                slider.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                updateUI();
            };

            // Update UI elements (dots, progress, counter)
            const updateUI = () => {
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentIndex);
                });

                // Update progress bar
                const progress = ((this.currentIndex + 1) / totalCards) * 100;
                progressBar.style.width = `${progress}%`;

                // Update counter
                currentSlideEl.textContent = this.currentIndex + 1;
                totalSlidesEl.textContent = totalCards;

                // Update arrow states
                prevBtn.disabled = this.currentIndex === 0;
                nextBtn.disabled = this.currentIndex === totalCards - 1;
            };

            // Go to specific slide
            const goToSlide = (index) => {
                if (index >= 0 && index < totalCards) {
                    this.currentIndex = index;
                    updateSliderPosition();
                }
            };

            // Next slide
            const nextSlide = () => {
                if (this.currentIndex < totalCards - 1) {
                    this.currentIndex++;
                    updateSliderPosition();
                }
            };

            // Previous slide
            const prevSlide = () => {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    updateSliderPosition();
                }
            };

            // Event listeners for buttons
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);

            // Event listeners for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(index));
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            });

            // Touch/Mouse drag functionality
            const getPositionX = (event) => {
                return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            };

            const dragStart = (event) => {
                this.isDragging = true;
                this.startPos = getPositionX(event);
                slider.classList.add('dragging');
                this.animationID = requestAnimationFrame(animation);
            };

            const drag = (event) => {
                if (this.isDragging) {
                    const currentPosition = getPositionX(event);
                    this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
                }
            };

            const dragEnd = () => {
                this.isDragging = false;
                cancelAnimationFrame(this.animationID);
                slider.classList.remove('dragging');

                const movedBy = this.currentTranslate - this.prevTranslate;

                // Determine if swipe was significant enough to change slide
                if (movedBy < -100 && this.currentIndex < totalCards - 1) {
                    this.currentIndex++;
                } else if (movedBy > 100 && this.currentIndex > 0) {
                    this.currentIndex--;
                }

                updateSliderPosition();
                this.prevTranslate = this.currentIndex * this.cardWidth;
                this.currentTranslate = this.prevTranslate;
            };

            const animation = () => {
                if (this.isDragging) {
                    slider.scrollLeft = this.prevTranslate - this.currentTranslate;
                    this.animationID = requestAnimationFrame(animation);
                }
            };

            // Mouse events
            slider.addEventListener('mousedown', dragStart);
            slider.addEventListener('mousemove', drag);
            slider.addEventListener('mouseup', dragEnd);
            slider.addEventListener('mouseleave', () => {
                if (this.isDragging) dragEnd();
            });

            // Touch events
            slider.addEventListener('touchstart', dragStart, {
                passive: true
            });
            slider.addEventListener('touchmove', drag, {
                passive: true
            });
            slider.addEventListener('touchend', dragEnd);

            // Update on window resize
            window.addEventListener('resize', () => {
                updateCardWidth();
                updateSliderPosition();
            });

            // Initialize
            updateCardWidth();
            updateUI();

            // Sync UI when user manually scrolls
            slider.addEventListener('scroll', () => {
                clearTimeout(this.scrollTimeout);
                this.scrollTimeout = setTimeout(() => {
                    updateCardWidth();
                    const newIndex = Math.round(slider.scrollLeft / this.cardWidth);
                    if (newIndex !== this.currentIndex && newIndex >= 0 && newIndex < totalCards) {
                        this.currentIndex = newIndex;
                        updateUI();
                    }
                }, 100);
            });
        }
    }
}
</script>

<style scoped>
:root {
    --primary: #a855f7;
    --accent: #22d3ee;
    --dark: #0f172a;
    --light: #f8fafc;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', system-ui, sans-serif;
    background: var(--light);
    color: var(--dark);
    line-height: 1.6;
    overflow-x: hidden;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.recent-work-section {
    padding: 120px 6% 100px;
    background: linear-gradient(135deg, #f8fafc 0%, #fdf4ff 100%);
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
}

.recent-work-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.recent-container {
    max-width: 1380px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.section-header {
    margin-bottom: 70px;
}

.section-header h2 {
    font-size: 3.6rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-header h2 span {
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    text-align: center;
    color: #64748b;
    font-size: 1.3rem;
    margin-bottom: 0;
    font-weight: 400;
}

/* Slider Container */
.slider-wrapper {
    position: relative;
    padding: 0 60px;
}

.projects-slider {
    display: flex;
    gap: 30px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    padding: 20px 0 40px;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.projects-slider::-webkit-scrollbar {
    display: none;
}

.projects-slider.dragging {
    scroll-behavior: auto;
    cursor: grabbing;
}

.projects-slider.dragging .project-card {
    pointer-events: none;
    user-select: none;
}

/* Project Cards */
.project-card {
    min-width: 420px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.12);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    flex-shrink: 0;
    background: white;
}

.project-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 35px 70px rgba(168, 85, 247, 0.25);
}

.project-image {
    position: relative;
    height: 320px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image img {
    transform: scale(1.15);
}

.project-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.95) 100%);
    color: white;
    padding: 60px 30px 30px;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-overlay {
    transform: translateY(0);
    opacity: 1;
}

.project-overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    font-weight: 600;
    letter-spacing: -0.02em;
}

.project-overlay p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 20px;
    opacity: 0.9;
    font-weight: 300;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #a855f7;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.project-link:hover {
    color: #ec4899;
    gap: 12px;
}

.project-link i {
    font-size: 0.85rem;
    transition: transform 0.3s ease;
}

.project-link:hover i {
    transform: translateX(4px);
}

/* Slider Navigation Arrows */
.slider-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: white;
    border: none;
    color: #475569;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.slider-arrow:hover {
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    color: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 35px rgba(168, 85, 247, 0.35);
}

.slider-arrow:active {
    transform: translateY(-50%) scale(0.95);
}

.slider-arrow:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
}

.slider-arrow:disabled:hover {
    background: white;
    color: #475569;
    transform: translateY(-50%) scale(1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.slider-arrow.prev {
    left: 0;
}

.slider-arrow.next {
    right: 0;
}

/* Slider Dots */
.slider-dots {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 40px;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e2e8f0;
    border: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.slider-dot::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(168, 85, 247, 0.2);
    transition: transform 0.3s ease;
}

.slider-dot:hover::before {
    transform: translate(-50%, -50%) scale(1);
}

.slider-dot:hover {
    background: #c4b5fd;
}

.slider-dot.active {
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    transform: scale(1.3);
}

.slider-dot.active::before {
    transform: translate(-50%, -50%) scale(1);
    background: rgba(168, 85, 247, 0.15);
}

/* Progress Bar */
.slider-progress {
    width: 200px;
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    margin: 25px auto 0;
    overflow: hidden;
}

.slider-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #a855f7 0%, #ec4899 100%);
    border-radius: 2px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    width: 33.33%;
}

/* Card Counter */
.card-counter {
    text-align: center;
    margin-top: 20px;
    color: #64748b;
    font-size: 0.95rem;
    font-weight: 500;
}

.card-counter span {
    color: #a855f7;
    font-weight: 600;
}

/* Responsive */
@media (max-width: 1200px) {
    .project-card {
        min-width: 380px;
    }
}

@media (max-width: 1024px) {
    .slider-wrapper {
        padding: 0 50px;
    }

    .project-card {
        min-width: 340px;
    }

    .section-header h2 {
        font-size: 3rem;
    }
}

@media (max-width: 768px) {
    .recent-work-section {
        padding: 80px 4% 60px;
    }

    .slider-wrapper {
        padding: 0 40px;
    }

    .project-card {
        min-width: 300px;
    }

    .section-header h2 {
        font-size: 2.4rem;
    }

    .subtitle {
        font-size: 1.1rem;
    }

    .slider-arrow {
        width: 48px;
        height: 48px;
        font-size: 1rem;
    }

    .project-image {
        height: 260px;
    }
}

@media (max-width: 480px) {
    .slider-wrapper {
        padding: 0 30px;
    }

    .project-card {
        min-width: 280px;
    }

    .section-header h2 {
        font-size: 2rem;
    }

    .slider-arrow {
        width: 42px;
        height: 42px;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section-header {
    animation: fadeInUp 0.8s ease-out;
}

.project-card {
    animation: fadeInUp 0.8s ease-out;
    animation-fill-mode: both;
}

.project-card:nth-child(1) {
    animation-delay: 0.1s;
}

.project-card:nth-child(2) {
    animation-delay: 0.2s;
}

.project-card:nth-child(3) {
    animation-delay: 0.3s;
}

/* ==================== HERO SECTION (TOTALLY NEW & ADVANCED) ==================== */
.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #f1f5f9 0%, #fdf4ff 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 6%;
}

.hero-container {
    max-width: 1380px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.hero-text {
    z-index: 2;
}

.hero-text h1 {
    font-size: 4.2rem;
    line-height: 1.05;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 24px;
}

.hero-text h1 span {
    background: linear-gradient(90deg, var(--accent), var(--primary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-text p {
    font-size: 1.35rem;
    color: #64748b;
    max-width: 520px;
    margin-bottom: 42px;
}

.hero-cta {
    display: flex;
    align-items: center;
    gap: 18px;
}

.hero-cta .main-btn {
    background: linear-gradient(90deg, #ec4899, #a855f7);
    color: white;
    border: none;
    padding: 18px 38px;
    border-radius: 9999px;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 15px 35px -5px rgba(236, 72, 153, 0.4);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-cta .main-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 25px 45px -5px rgba(168, 85, 247, 0.5);
}

.trust-bar {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-top: 60px;
}

.trust-bar .avatars {
    display: flex;
}

.trust-bar .avatars img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    object-fit: cover;
}

.trust-bar .avatars img:not(:first-child) {
    margin-left: -22px;
}

.trust-bar .count {
    width: 52px;
    height: 52px;
    background: linear-gradient(90deg, #facc15, #ec4899);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.3rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    margin-left: -22px;
}

.trust-bar span {
    font-size: 1.1rem;
    font-weight: 500;
    color: #64748b;
}

/* Right Visual - Advanced Floating Card Design */
.hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
}

.visual-card {
    width: 100%;
    max-width: 460px;
    background: white;
    border-radius: 32px;
    padding: 20px;
    box-shadow:
        0 30px 60px -20px rgba(168, 85, 247, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.6) inset;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.visual-card img {
    width: 100%;
    border-radius: 22px;
    filter: brightness(1.05);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
}

/* Floating tech icons around the card */
.floating-icon {
    position: absolute;
    font-size: 2.2rem;
    color: var(--accent);
    animation: floatIcon 8s ease-in-out infinite;
    z-index: 3;
    filter: drop-shadow(0 10px 15px rgba(34, 211, 238, 0.3));
}

.icon1 {
    top: -25px;
    left: -30px;
    animation-delay: 0s;
}

.icon2 {
    top: 120px;
    right: -40px;
    animation-delay: 2s;
    color: var(--primary);
}

.icon3 {
    bottom: -30px;
    left: 40px;
    animation-delay: 4s;
}

.icon4 {
    top: 60px;
    left: -50px;
    animation-delay: 1.5s;
}

@keyframes floatIcon {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-35px) rotate(18deg);
    }
}

/* Background subtle elements */
.bg-circle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
    z-index: 1;
    animation: pulse 15s infinite ease-in-out;
}

.circle1 {
    width: 420px;
    height: 420px;
    top: 10%;
    right: 5%;
}

.circle2 {
    width: 280px;
    height: 280px;
    bottom: 15%;
    left: 8%;
    animation-delay: 4s;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1200px) {
    .nav-menu {
        gap: 24px;
    }

    .nav-menu a {
        font-size: 0.95rem;
    }
}

@media (max-width: 1024px) {
    .hero-text h1 {
        font-size: 3.4rem;
    }

    .nav-menu {
        gap: 20px;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 0.95rem;
    }
}

@media (max-width: 900px) {
    nav {
        padding: 16px 5%;
    }

    .nav-menu {
        gap: 16px;
    }

    .nav-menu a {
        font-size: 0.9rem;
    }

    .logo .tag {
        display: none;
    }
}

@media (max-width: 768px) {
    nav {
        padding: 14px 5%;
    }

    .nav-menu {
        display: none;
    }

    .cta-button {
        display: none;
    }

    .hamburger {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
    }

    .hero-container {
        grid-template-columns: 1fr;
        gap: 50px;
        text-align: center;
        margin-top: 100px;
    }

    .hero-text h1 {
        font-size: 2.6rem;
    }

    .hero-text p {
        font-size: 1.15rem;
    }

    .hero-visual {
        margin: 0 auto;
    }

    .visual-card {
        max-width: 340px;
    }

    .trust-bar {
        justify-content: center;
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 85%;
        max-width: 360px;
        height: 100vh;
        background: white;
        padding: 80px 24px 32px;
        flex-direction: column;
        gap: 4px;
        z-index: 998;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        overflow-y: auto;
        box-shadow: -10px 0 40px rgba(168, 85, 247, 0.15);
    }

    .mobile-menu.active {
        transform: translateX(0);
    }

    .mobile-menu a {
        font-size: 1.05rem;
        padding: 14px 16px;
        color: var(--dark);
        font-weight: 500;
        transition: all 0.3s ease;
        transform: translateX(20px);
        opacity: 0;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .mobile-menu.active a {
        transform: translateX(0);
        opacity: 1;
    }

    .mobile-menu a:nth-child(1) {
        transition-delay: 0.08s;
    }

    .mobile-menu a:nth-child(2) {
        transition-delay: 0.12s;
    }

    .mobile-menu a:nth-child(3) {
        transition-delay: 0.16s;
    }

    .mobile-menu a:nth-child(4) {
        transition-delay: 0.2s;
    }

    .mobile-menu a:nth-child(5) {
        transition-delay: 0.24s;
    }

    .mobile-menu a:nth-child(6) {
        transition-delay: 0.28s;
    }

    .mobile-menu a:nth-child(7) {
        transition-delay: 0.32s;
    }

    .mobile-menu a:hover {
        background: rgba(168, 85, 247, 0.06);
        color: var(--primary);
    }

    .mobile-menu a.active {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.1));
        color: var(--primary);
        font-weight: 600;
    }

    .mobile-menu .cta-button {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        padding: 14px 24px;
        font-size: 1rem;
        transform: translateY(20px);
        opacity: 0;
        border-radius: 14px;
    }

    .mobile-menu.active .cta-button {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 0.4s;
    }

    /* Mobile menu overlay */
    .mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        z-index: 997;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
    }

    .mobile-overlay.active {
        opacity: 1;
        visibility: visible;
    }
}

@media (max-width: 480px) {
    nav {
        padding: 12px 4%;
    }

    .logo .icon {
        font-size: 2.2rem;
    }

    .logo .name {
        font-size: 1.4rem;
    }

    .hero-text h1 {
        font-size: 2.2rem;
    }

    .hero-text p {
        font-size: 1rem;
    }

    .hero-cta .main-btn {
        padding: 14px 28px;
        font-size: 1rem;
    }

    .visual-card {
        max-width: 300px;
    }

    .mobile-menu {
        width: 90%;
        padding: 80px 20px 24px;
    }

    .mobile-menu a {
        font-size: 1rem;
        padding: 12px 14px;
    }
}

/* ==================== INNOVATION SECTION ==================== */
.innovation-section {
    padding: 120px 6% 80px;
    background: #f8fafc;
}

.innovation-container {
    max-width: 1380px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: center;
}

.innovation-content h2 {
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 24px;
}

.innovation-content h2 span {
    color: #22d3ee;
}

.description {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.75;
    margin-bottom: 40px;
}

.features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    background: white;
    padding: 16px 20px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.feature-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
}

.feature-item:hover::before {
    left: 100%;
}

.feature-item:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.3);
}

.feature-item i {
    color: #22d3ee;
    font-size: 1.4rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}

.feature-item:hover i {
    color: #a855f7;
    transform: scale(1.2) rotate(10deg);
}

.feature-item span {
    font-weight: 500;
    color: #334155;
    transition: all 0.4s ease;
    z-index: 1;
}

.feature-item:hover span {
    color: #1e293b;
    font-weight: 600;
}

.feature-item:active {
    transform: translateY(-4px) scale(0.98);
}

.main-device {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.floating-phone {
    position: absolute;
    bottom: 60px;
    left: 40px;
    width: 38%;
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

/* Innovation Section Responsive */
@media (max-width: 1200px) {
    .innovation-content h2 {
        font-size: 3rem;
    }

    .innovation-container {
        gap: 60px;
    }
}

@media (max-width: 1024px) {
    .innovation-section {
        padding: 80px 4% 60px;
    }

    .innovation-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .innovation-content h2 {
        font-size: 2.6rem;
        text-align: center;
    }

    .description {
        font-size: 1.15rem;
        text-align: center;
    }

    .features-grid {
        gap: 14px;
    }

    .innovation-visual {
        order: -1;
        max-width: 500px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .innovation-section {
        padding: 60px 4% 50px;
    }

    .innovation-content h2 {
        font-size: 2.2rem;
    }

    .description {
        font-size: 1.05rem;
        margin-bottom: 30px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .feature-item {
        padding: 14px 16px;
    }

    .feature-item i {
        font-size: 1.2rem;
    }

    .feature-item span {
        font-size: 0.95rem;
    }

    .main-device {
        border-radius: 14px;
    }

    .floating-phone {
        bottom: 30px;
        left: 20px;
        width: 35%;
    }
}

@media (max-width: 480px) {
    .innovation-section {
        padding: 50px 4% 40px;
    }

    .innovation-content h2 {
        font-size: 1.85rem;
    }

    .description {
        font-size: 1rem;
    }

    .feature-item {
        padding: 12px 14px;
        gap: 10px;
    }

    .feature-item i {
        font-size: 1.1rem;
    }

    .feature-item span {
        font-size: 0.9rem;
    }
}

/* ==================== WHY CHOOSE US SECTION ==================== */
.why-choose-section {
    padding: 120px 6% 140px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    position: relative;
    overflow: hidden;
}

.why-choose-section::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.why-choose-section::after {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.why-container {
    max-width: 1380px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.why-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
    flex-wrap: wrap;
    gap: 30px;
}

.label {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    color: #a855f7;
    padding: 10px 24px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
    animation: fadeInUp 0.6s ease-out;
}

.why-header h2 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.15;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.6s ease-out 0.1s both;
}

.why-header h2 span {
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.work-btn {
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
    color: white;
    border: none;
    padding: 18px 40px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
    animation: fadeInUp 0.6s ease-out 0.2s both;
}

.work-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.4);
}

.work-btn:active {
    transform: translateY(-2px) scale(0.98);
}

.work-btn i {
    font-size: 1.1rem;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }
}

.why-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.why-image {
    position: relative;
    animation: fadeInLeft 0.8s ease-out;
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.why-image img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.why-image:hover img {
    transform: scale(1.03) translateY(-10px);
    box-shadow: 0 40px 90px rgba(0, 0, 0, 0.25);
}

.why-image::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%);
    border-radius: 24px;
    z-index: -1;
    transition: all 0.5s ease;
}

.why-image:hover::before {
    top: -30px;
    left: -30px;
    opacity: 0.8;
}

.benefits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    animation: fadeInRight 0.8s ease-out;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.benefit-card {
    background: white;
    padding: 32px 28px;
    border-radius: 20px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
    cursor: pointer;
}

.benefit-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #22d3ee 0%, #a855f7 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefit-card:hover::before {
    transform: scaleX(1);
}

.benefit-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.benefit-card:hover::after {
    opacity: 1;
}

.benefit-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.2);
}

.number {
    font-size: 2.4rem;
    font-weight: 800;
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
    transition: all 0.4s ease;
    z-index: 1;
    position: relative;
}

.benefit-card:hover .number {
    transform: scale(1.1);
}

.benefit-card h3 {
    font-size: 1.35rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 12px;
    transition: all 0.4s ease;
    z-index: 1;
    position: relative;
}

.benefit-card:hover h3 {
    color: #0f172a;
}

.benefit-card p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.7;
    transition: all 0.4s ease;
    z-index: 1;
    position: relative;
}

.benefit-card:hover p {
    color: #475569;
}

.benefit-card:active {
    transform: translateY(-6px) scale(0.98);
}

/* Staggered animation for benefit cards */
.benefit-card:nth-child(1) {
    animation: fadeInUp 0.6s ease-out 0.1s both;
}

.benefit-card:nth-child(2) {
    animation: fadeInUp 0.6s ease-out 0.2s both;
}

.benefit-card:nth-child(3) {
    animation: fadeInUp 0.6s ease-out 0.3s both;
}

.benefit-card:nth-child(4) {
    animation: fadeInUp 0.6s ease-out 0.4s both;
}

/* Responsive */
@media (max-width: 1200px) {
    .why-header h2 {
        font-size: 2.8rem;
    }

    .why-content {
        gap: 60px;
    }
}

@media (max-width: 1024px) {
    .why-choose-section {
        padding: 80px 4% 100px;
    }

    .why-header {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 50px;
    }

    .why-header h2 {
        font-size: 2.5rem;
    }

    .why-content {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .why-image {
        order: -1;
    }

    .benefits-grid {
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .why-header h2 {
        font-size: 2rem;
    }

    .work-btn {
        padding: 14px 32px;
        font-size: 0.95rem;
    }

    .benefits-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .benefit-card {
        padding: 24px 20px;
    }

    .number {
        font-size: 2rem;
    }

    .benefit-card h3 {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .why-choose-section {
        padding: 60px 4% 80px;
    }

    .why-header h2 {
        font-size: 1.75rem;
    }

    .label {
        font-size: 0.75rem;
        padding: 8px 18px;
    }
}

/* ====================== PRICING ====================== */
.pricing-section {
    padding: 100px 6% 120px;
    background: #ffffff;
}

.pricing-container {
    max-width: 1280px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    margin-bottom: 70px;
}

.section-title h2 {
    font-size: 3rem;
    font-weight: 700;
}

.section-title span {
    color: #ae54ef;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 30px;
}

.pricing-card {
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 28px;
    padding: 50px 36px 40px;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
}

.pricing-card.popular {
    border-color: #a855f7;
    transform: scale(1.05);
    box-shadow: 0 25px 60px rgba(168, 85, 247, 0.2);
}

.pricing-card:hover {
    border-color: #a855f7;
    transform: translateY(-10px);
}

.popular-badge,
.recommended-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: #a855f7;
    color: white;
    padding: 6px 24px;
    border-radius: 9999px;
    font-size: 0.95rem;
    font-weight: 600;
}

.recommended-badge {
    background: #14b8a6;
}

.pricing-card h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #0f172a;
}

.price {
    margin-bottom: 30px;
}

.currency {
    font-size: 2rem;
    vertical-align: super;
    color: #64748b;
}

.amount {
    font-size: 3.8rem;
    font-weight: 700;
    color: #0f172a;
}

.old-price {
    text-decoration: line-through;
    color: #94a3b8;
    font-size: 1.4rem;
    margin-left: 10px;
}

.pricing-btn {
    background: linear-gradient(90deg, #ec4899, #a855f7);
    color: white;
    border: none;
    padding: 16px 40px;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;
    margin-bottom: 40px;
    cursor: pointer;
    transition: all 0.4s ease;
}

.pricing-btn:hover {
    transform: scale(1.05);
}

.features {
    list-style: none;
    text-align: left;
    margin-bottom: 30px;
}

.features li {
    padding: 10px 0;
    color: #475569;
    display: flex;
    align-items: center;
    gap: 12px;
}

.features i {
    color: #22d3ee;
}

.view-more {
    color: #a855f7;
    text-decoration: none;
    font-weight: 500;
}

.success-section {
    padding: 120px 6% 140px;
    background: linear-gradient(180deg, #f8fafc 0%, #f0f9ff 50%, #fdf4ff 100%);
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
}

.success-section::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.success-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.success-container {
    max-width: 1380px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* Numbers Box */
.numbers-box {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%);
    color: white;
    border-radius: 28px;
    padding: 60px 40px;
    text-align: center;
    margin-bottom: 100px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(168, 85, 247, 0.35);
}

.numbers-box::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
    border-radius: 50%;
}

.numbers-box::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
}

.numbers-box h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
    z-index: 1;
}

.stat-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 32px 24px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.stat-card:hover::before {
    opacity: 1;
}

.stat-card:hover {
    transform: translateY(-12px) scale(1.05);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.stat-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    opacity: 0.95;
    transition: all 0.4s ease;
}

.stat-card:hover .stat-icon {
    transform: scale(1.15) rotate(5deg);
}

.stat-number {
    font-size: 2.6rem;
    font-weight: 800;
    margin-bottom: 8px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    color: #ffffff;
}

.stat-label {
    font-size: 1.05rem;
    opacity: 0.9;
    font-weight: 500;
    color: #ffffff;

}

/* Strategy Section */
.strategy-section {
    max-width: 1380px;
    margin: 0 auto;
}

.strategy-header {
    text-align: center;
    margin-bottom: 70px;
}

.journey {
    color: #64748b;
    font-weight: 500;
    margin-bottom: 12px;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}

.strategy-header h2 {
    font-size: 3.4rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.strategy-header h2 span {
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.strategy-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.step-card {
    background: white;
    padding: 32px 36px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.07);
    display: flex;
    gap: 24px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.step-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #22d3ee 0%, #a855f7 100%);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-card:hover::before {
    transform: scaleY(1);
}

.step-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.step-card:hover::after {
    opacity: 1;
}

.step-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 60px rgba(168, 85, 247, 0.18);
    border-color: rgba(168, 85, 247, 0.2);
}

.step-icon {
    font-size: 2.6rem;
    color: #22d3ee;
    flex-shrink: 0;
    width: 60px;
    transition: all 0.4s ease;
    z-index: 1;
}

.step-card:hover .step-icon {
    color: #a855f7;
    transform: scale(1.1);
}

.step-card h3 {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: #0f172a;
    font-weight: 600;
    transition: all 0.4s ease;
    z-index: 1;
}

.step-card:hover h3 {
    color: #1e293b;
}

.step-card p {
    color: #64748b;
    line-height: 1.7;
    transition: all 0.4s ease;
    z-index: 1;
}

.step-card:hover p {
    color: #475569;
}

.visual-image {
    width: 100%;
    border-radius: 28px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.visual-image:hover {
    transform: scale(1.03) translateY(-10px);
    box-shadow: 0 40px 90px rgba(0, 0, 0, 0.25);
}

/* Staggered animations for step cards */
.step-card:nth-child(1) {
    animation: fadeInUp 0.6s ease-out 0.1s both;
}

.step-card:nth-child(2) {
    animation: fadeInUp 0.6s ease-out 0.2s both;
}

.step-card:nth-child(3) {
    animation: fadeInUp 0.6s ease-out 0.3s both;
}

.step-card:nth-child(4) {
    animation: fadeInUp 0.6s ease-out 0.4s both;
}

/* Responsive */
@media (max-width: 1200px) {
    .numbers-box h2 {
        font-size: 2.4rem;
    }

    .strategy-header h2 {
        font-size: 3rem;
    }
}

@media (max-width: 1024px) {
    .success-section {
        padding: 80px 4% 100px;
    }

    .numbers-box {
        padding: 50px 30px;
        margin-bottom: 80px;
    }

    .numbers-box h2 {
        font-size: 2.2rem;
        margin-bottom: 40px;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .stat-card {
        padding: 28px 20px;
    }

    .strategy-header h2 {
        font-size: 2.6rem;
    }

    .strategy-content {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .step-card {
        padding: 28px 24px;
    }
}

@media (max-width: 768px) {
    .success-section {
        padding: 60px 4% 80px;
    }

    .numbers-box {
        padding: 40px 24px;
        border-radius: 20px;
        margin-bottom: 60px;
    }

    .numbers-box h2 {
        font-size: 1.9rem;
        margin-bottom: 30px;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    .stat-card {
        padding: 24px 16px;
        border-radius: 16px;
    }

    .stat-icon {
        font-size: 2.4rem;
        margin-bottom: 14px;
    }

    .stat-number {
        font-size: 2rem;
    }

    .stat-label {
        font-size: 0.95rem;
    }

    .strategy-header h2 {
        font-size: 2.2rem;
    }

    .steps-list {
        gap: 20px;
    }

    .step-card {
        padding: 24px 20px;
        gap: 20px;
    }

    .step-icon {
        font-size: 2.2rem;
        width: 50px;
    }

    .step-card h3 {
        font-size: 1.25rem;
    }

    .visual-image {
        border-radius: 20px;
    }
}

@media (max-width: 480px) {
    .success-section {
        padding: 50px 4% 60px;
    }

    .numbers-box {
        padding: 32px 20px;
        margin-bottom: 50px;
    }

    .numbers-box h2 {
        font-size: 1.6rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .stat-card {
        padding: 20px 16px;
    }

    .stat-icon {
        font-size: 2rem;
    }

    .stat-number {
        font-size: 1.8rem;
    }

    .strategy-header h2 {
        font-size: 1.85rem;
    }

    .step-card {
        padding: 20px 16px;
        flex-direction: column;
        gap: 16px;
    }

    .step-icon {
        width: 100%;
        text-align: center;
    }
}

.testimonials-section {
    padding: 120px 6% 100px;
    background: linear-gradient(180deg, #f8fafc 0%, #fdf4ff 50%, #ffffff 100%);
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
}

.testimonials-section::before {
    content: '';
    position: absolute;
    top: -150px;
    right: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.testimonials-section::after {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.testimonials-container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.testimonials-header {
    text-align: center;
    margin-bottom: 60px;
}

.testimonials-header .label {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%);
    color: #a855f7;
    padding: 12px 28px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.testimonials-header h2 {
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 1.15;
    color: #1e293b;
    margin-bottom: 32px;
}

.testimonials-header h2 span {
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.testimonials-wrapper {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
}

.testimonials-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.testimonial-card {
    background: white;
    border-radius: 24px;
    padding: 36px 32px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.testimonial-card:nth-child(3) {
    grid-column: span 2;
    max-width: calc(100% - 24px);
}

.testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #22d3ee 0%, #a855f7 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover::before {
    transform: scaleX(1);
}

.testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(168, 85, 247, 0.18);
    border-color: rgba(168, 85, 247, 0.15);
}

.quote-icon {
    position: absolute;
    top: 24px;
    right: 28px;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a855f7;
    font-size: 1.2rem;
}

.stars {
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
}

.stars i {
    color: #fbbf24;
    font-size: 0.9rem;
}

.testimonial-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 24px;
    font-style: italic;
}

.client-info {
    display: flex;
    align-items: center;
    gap: 14px;
    border-top: 1px solid #f1f5f9;
    padding-top: 20px;
}

.client-avatar {
    position: relative;
}

.client-avatar img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
}

.testimonial-card:hover .client-avatar img {
    transform: scale(1.05);
    border-color: #a855f7;
}

.client-details h4 {
    margin: 0;
    font-size: 1.15rem;
    color: #0f172a;
    font-weight: 600;
}

.client-details .role {
    margin: 4px 0 0;
    color: #64748b;
    font-size: 0.9rem;
    font-weight: 500;
}

.testimonial-visual {
    position: relative;
}

.visual-wrapper {
    position: relative;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 0 30px 70px rgba(168, 85, 247, 0.25);
}

.visual-wrapper img {
    width: 100%;
    height: auto;
    display: block;
}

.visual-overlay {
    position: absolute;
    bottom: 24px;
    left: 24px;
    right: 24px;
}

.rating-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: white;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.rating-badge i {
    color: #fbbf24;
    font-size: 1rem;
}

.rating-badge span {
    font-weight: 700;
    color: #0f172a;
    font-size: 1rem;
}

.contact-btn {
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
    color: white;
    border: none;
    padding: 18px 40px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}

.contact-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.4);
}

.contact-btn:active {
    transform: translateY(-2px) scale(0.98);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.testimonial-card:nth-child(1) {
    animation: fadeInUp 0.6s ease-out 0.1s both;
}

.testimonial-card:nth-child(2) {
    animation: fadeInUp 0.6s ease-out 0.2s both;
}

.testimonial-card:nth-child(3) {
    animation: fadeInUp 0.6s ease-out 0.3s both;
}

.visual-wrapper {
    animation: fadeInUp 0.8s ease-out 0.4s both;
}

/* Responsive */
@media (max-width: 1200px) {
    .testimonials-header h2 {
        font-size: 3rem;
    }

    .testimonials-wrapper {
        gap: 50px;
    }

    .testimonial-card {
        padding: 32px 28px;
    }
}

@media (max-width: 1024px) {
    .testimonials-section {
        padding: 80px 4% 60px;
    }

    .testimonials-wrapper {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .testimonials-list {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .testimonial-card:nth-child(3) {
        grid-column: span 1;
        max-width: 100%;
    }

    .testimonials-header h2 {
        font-size: 2.6rem;
    }

    .testimonial-visual {
        order: -1;
        max-width: 600px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .testimonials-section {
        padding: 60px 4% 50px;
    }

    .testimonials-header {
        margin-bottom: 40px;
    }

    .testimonials-header h2 {
        font-size: 2.2rem;
    }

    .testimonial-card {
        padding: 28px 24px;
        border-radius: 20px;
    }

    .quote-icon {
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }

    .stars {
        margin-bottom: 12px;
    }

    .stars i {
        font-size: 0.8rem;
    }

    .testimonial-text {
        font-size: 1rem;
        margin-bottom: 20px;
    }

    .client-info {
        padding-top: 16px;
    }

    .client-avatar img {
        width: 48px;
        height: 48px;
    }

    .client-details h4 {
        font-size: 1.1rem;
    }

    .client-details .role {
        font-size: 0.85rem;
    }

    .contact-btn {
        padding: 14px 32px;
        font-size: 0.95rem;
    }

    .visual-wrapper {
        border-radius: 24px;
    }

    .rating-badge {
        padding: 10px 20px;
    }
}

@media (max-width: 480px) {
    .testimonials-section {
        padding: 50px 4% 40px;
    }

    .testimonials-header .label {
        font-size: 0.75rem;
        padding: 10px 20px;
    }

    .testimonials-header h2 {
        font-size: 1.85rem;
    }

    .testimonial-card {
        padding: 24px 20px;
    }

    .testimonial-text {
        font-size: 0.95rem;
        line-height: 1.7;
    }

    .client-info {
        gap: 12px;
    }

    .client-avatar img {
        width: 44px;
        height: 44px;
    }

    .client-details h4 {
        font-size: 1rem;
    }

    .contact-btn {
        padding: 12px 28px;
        font-size: 0.9rem;
        width: 100%;
        justify-content: center;
    }

    .visual-wrapper {
        border-radius: 20px;
    }

    .rating-badge {
        padding: 8px 16px;
        bottom: 16px;
        left: 16px;
    }

    .rating-badge span {
        font-size: 0.9rem;
    }
}

@media (max-width: 360px) {
    .testimonials-section {
        padding: 40px 3% 30px;
    }

    .testimonials-header h2 {
        font-size: 1.6rem;
    }

    .testimonial-card {
        padding: 20px 16px;
        border-radius: 16px;
    }

    .quote-icon {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
    }
}

.contact-section {
    padding: 120px 6% 100px;
    background: linear-gradient(180deg, #f8fafc 0%, #f0f9ff 50%, #fdf4ff 100%);
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
}

.contact-section::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.contact-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.contact-container {
    max-width: 1380px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: center;
    position: relative;
    z-index: 1;
}

/* Left Content */
.contact-content .label {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    color: #a855f7;
    padding: 10px 24px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.contact-content h2 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.contact-content h2 span {
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.description {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.75;
    margin-bottom: 50px;
    max-width: 520px;
}

/* Form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 460px;
}

.contact-form input {
    padding: 20px 26px;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    font-size: 1.05rem;
    font-family: 'Poppins', sans-serif;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: white;
}

.contact-form input:focus {
    border-color: #a855f7;
    outline: none;
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.15);
    transform: translateY(-2px);
}

.contact-form input::placeholder {
    color: #94a3b8;
}

.quote-btn {
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
    color: white;
    border: none;
    padding: 20px 44px;
    border-radius: 50px;
    font-size: 1.15rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.quote-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.4);
}

.quote-btn:active {
    transform: translateY(-2px) scale(0.98);
}

.quote-btn i {
    font-size: 1.1rem;
}

/* Right Visual */
.contact-visual {
    position: relative;
}

.contact-visual img {
    width: 100%;
    border-radius: 32px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-visual:hover img {
    transform: scale(1.03) translateY(-10px);
    box-shadow: 0 40px 90px rgba(0, 0, 0, 0.25);
}

.contact-visual::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
    border-radius: 32px;
    z-index: -1;
    transition: all 0.5s ease;
}

.contact-visual:hover::before {
    top: -30px;
    left: -30px;
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 1200px) {
    .contact-content h2 {
        font-size: 3.2rem;
    }

    .contact-container {
        gap: 70px;
    }
}

@media (max-width: 1024px) {
    .contact-section {
        padding: 80px 4% 60px;
    }

    .contact-container {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .contact-content h2 {
        font-size: 2.8rem;
        text-align: center;
    }

    .contact-content .label {
        display: block;
        text-align: center;
        margin: 0 auto 20px;
        width: fit-content;
    }

    .description {
        text-align: center;
        margin: 0 auto 40px;
    }

    .contact-form {
        margin: 0 auto;
    }

    .contact-visual {
        order: -1;
        max-width: 500px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .contact-section {
        padding: 60px 4% 50px;
    }

    .contact-content h2 {
        font-size: 2.2rem;
    }

    .description {
        font-size: 1.1rem;
        margin-bottom: 30px;
    }

    .contact-form {
        gap: 16px;
    }

    .contact-form input {
        padding: 16px 20px;
        font-size: 1rem;
        border-radius: 14px;
    }

    .quote-btn {
        padding: 16px 36px;
        font-size: 1.05rem;
    }

    .contact-visual img {
        border-radius: 24px;
    }
}

@media (max-width: 480px) {
    .contact-section {
        padding: 50px 4% 40px;
    }

    .contact-content h2 {
        font-size: 1.85rem;
    }

    .contact-content .label {
        font-size: 0.75rem;
        padding: 8px 18px;
    }

    .description {
        font-size: 1rem;
    }

    .contact-form input {
        padding: 14px 18px;
        font-size: 0.95rem;
    }

    .quote-btn {
        padding: 14px 32px;
        font-size: 1rem;
    }
}

.faq-section {
    padding: 120px 6% 100px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #fdf4ff 100%);
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
}

.faq-section::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.faq-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.faq-container {
    max-width: 1380px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 100px;
    align-items: start;
    position: relative;
    z-index: 1;
}

/* Left Title */
.faq-title .label {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    color: #a855f7;
    padding: 10px 24px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.faq-title h2 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.15;
    margin-top: 20px;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.faq-title h2 span {
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* FAQ Accordion */
.faq-accordion {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.faq-item {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
}

.faq-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.15);
    border-color: rgba(168, 85, 247, 0.2);
}

.faq-item.active {
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.3);
}

.faq-question {
    width: 100%;
    padding: 28px 32px;
    background: none;
    border: none;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 600;
    color: #0f172a;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
}

.faq-question:hover {
    color: #a855f7;
}

.faq-question.active {
    color: #a855f7;
}

.faq-answer {
    padding: 0 32px 32px;
    color: #64748b;
    line-height: 1.8;
    display: none;
    font-size: 1.05rem;
    animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.faq-answer.active {
    display: block;
}

.arrow {
    font-size: 1.4rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: #64748b;
}

.faq-question:hover .arrow {
    color: #a855f7;
}

.faq-question.active .arrow {
    transform: rotate(180deg);
    color: #a855f7;
}

/* Staggered animations for FAQ items */
.faq-item:nth-child(1) {
    animation: fadeInUp 0.6s ease-out 0.1s both;
}

.faq-item:nth-child(2) {
    animation: fadeInUp 0.6s ease-out 0.2s both;
}

.faq-item:nth-child(3) {
    animation: fadeInUp 0.6s ease-out 0.3s both;
}

.faq-item:nth-child(4) {
    animation: fadeInUp 0.6s ease-out 0.4s both;
}

.faq-item:nth-child(5) {
    animation: fadeInUp 0.6s ease-out 0.5s both;
}

/* Responsive */
@media (max-width: 1200px) {
    .faq-title h2 {
        font-size: 3.2rem;
    }

    .faq-container {
        gap: 80px;
    }
}

@media (max-width: 1024px) {
    .faq-section {
        padding: 80px 4% 60px;
    }

    .faq-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .faq-title h2 {
        font-size: 2.8rem;
        text-align: center;
    }

    .faq-title .label {
        display: block;
        text-align: center;
        margin: 0 auto;
    }

    .faq-accordion {
        gap: 16px;
    }

    .faq-item {
        border-radius: 16px;
    }

    .faq-question {
        padding: 24px 28px;
        font-size: 1.15rem;
    }

    .faq-answer {
        padding: 0 28px 28px;
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    .faq-section {
        padding: 60px 4% 50px;
    }

    .faq-title h2 {
        font-size: 2.4rem;
    }

    .faq-accordion {
        gap: 14px;
    }

    .faq-question {
        padding: 20px 24px;
        font-size: 1.1rem;
    }

    .faq-answer {
        padding: 0 24px 24px;
        font-size: 0.95rem;
    }

    .arrow {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .faq-section {
        padding: 50px 4% 40px;
    }

    .faq-title h2 {
        font-size: 2rem;
    }

    .faq-title .label {
        font-size: 0.75rem;
        padding: 8px 18px;
    }

    .faq-item {
        border-radius: 14px;
    }

    .faq-question {
        padding: 18px 20px;
        font-size: 1rem;
    }

    .faq-answer {
        padding: 0 20px 20px;
        font-size: 0.9rem;
        line-height: 1.7;
    }
}

@media (max-width: 480px) {
    .testimonial-card {
        min-height: 100%;
    }
}

/* Textarea styles */
.contact-form textarea {
    padding: 20px 26px;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    font-size: 1.05rem;
    font-family: 'Poppins', sans-serif;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: white;
    resize: vertical;
    min-height: 100px;
}

.contact-form textarea:focus {
    border-color: #a855f7;
    outline: none;
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.15);
    transform: translateY(-2px);
}

.contact-form textarea::placeholder {
    color: #94a3b8;
}

/* Disabled button state */
.quote-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
}

.quote-btn:disabled:hover {
    transform: none !important;
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}

/* Notification styles */
.notification {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 9999;
    transform: translateX(400px);
    transition: transform 0.3s ease;
}

.notification.show {
    transform: translateX(0);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
    border-radius: 12px;
    font-weight: 500;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.notification-success {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
}

.notification-success .notification-content i {
    font-size: 1.2rem;
}

.notification-error {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
}

.notification-error .notification-content i {
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .notification {
        top: 20px;
        right: 20px;
        left: 20px;
        transform: translateY(-100px);
    }
    
    .notification.show {
        transform: translateY(0);
    }
}
</style>
