<template>
    <NavbarSection />
  <!-- HERO SECTION -->
  <section class="hero">
    <div class="bg-circle circle1"></div>
    <div class="bg-circle circle2"></div>

    <div class="hero-container">
      <div class="hero-text">
        <h1>Build Smarter <span>Websites & Apps</span><br>That Grow Your Business</h1>
        
        <p>
          From sleek websites to powerful e-commerce solutions, we craft digital 
          experiences that engage customers and drive results. Let us transform 
          your ideas into reality with expert design and development services.
        </p>

        <div class="hero-cta">
          <button class="main-btn" @click="showQuote">
            <i class="fas fa-fire"></i>
            Get Your Free Quote
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
          <div class="visual-image-wrapper">
            <img src="/images/home1.webp" alt="Modern digital workspace">
          </div>
          <div class="visual-overlay"></div>
        </div>
        
        <i class="fas fa-globe floating-icon icon1"></i>
        <i class="fas fa-mobile-alt floating-icon icon2"></i>
        <i class="fas fa-shopping-cart floating-icon icon3"></i>
        <i class="fas fa-laptop-code floating-icon icon4"></i>
      </div>
    </div>
  </section>

  <!-- All other sections remain exactly the same as in your HTML -->
  <!-- TRUSTED PARTNER SECTION -->
  <section class="trusted-section">
    <div class="trusted-container">
      <div class="trusted-text">
        <h2>Your Trusted Partner In <span>Digital Success</span></h2>
        
        <p>
          We are a full-service web development agency helping startups, SMEs, 
          and enterprises thrive online. With years of expertise in website design, 
          custom web development, and mobile app solutions, we deliver projects 
          that blend creativity, functionality, and measurable performance.
        </p>

        <div class="services-grid">
          <div class="service-card">
            <i class="fas fa-globe"></i>
            <h3>Custom Website Development</h3>
          </div>
          <div class="service-card">
            <i class="fas fa-shopping-cart"></i>
            <h3>E-Commerce Solutions</h3>
          </div>
          <div class="service-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Mobile App Development</h3>
          </div>
          <div class="service-card">
            <i class="fas fa-paint-brush"></i>
            <h3>UI/UX & Website Design</h3>
          </div>
          <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Digital Marketing Services</h3>
          </div>
          <div class="service-card">
            <i class="fas fa-palette"></i>
            <h3>Brand Identity & Logo Design</h3>
          </div>
        </div>
      </div>

      <div class="visual-container">
        <div class="hero-showcase">
          <div class="showcase-main">
            <img src="/images/home2.webp" alt="Digital Solutions">
            <div class="showcase-overlay"></div>
          </div>
          <div class="showcase-floating-card card-1">
            <div class="floating-icon-wrap">
              <i class="fas fa-globe"></i>
            </div>
            <div class="floating-text">
              <span class="floating-number">500+</span>
              <span class="floating-label">Websites</span>
            </div>
          </div>
          <div class="showcase-floating-card card-2">
            <div class="floating-icon-wrap">
              <i class="fas fa-smile"></i>
            </div>
            <div class="floating-text">
              <span class="floating-number">200+</span>
              <span class="floating-label">Happy Clients</span>
            </div>
          </div>
          <div class="showcase-floating-card card-3">
            <div class="floating-icon-wrap">
              <i class="fas fa-award"></i>
            </div>
            <div class="floating-text">
              <span class="floating-number">15+</span>
              <span class="floating-label">Awards</span>
            </div>
          </div>
          <div class="showcase-badge">
            <i class="fas fa-check-circle"></i>
            <span>#1 Web Agency</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-banner">
      <h3>Let's Begin The Book Publishing Process Today!</h3>
      <div class="cta-buttons">
        <button class="btn-touch" @click="getInTouch">
          <i class="fas fa-fire"></i>
          Get In Touch
        </button>
        <a href="tel:+44757822382" class="btn-phone">
          <i class="fas fa-phone"></i>
          +44 7578 22382
        </a>
      </div>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section class="services-section">
    <div class="services-bg-pattern"></div>
    <div class="services-container">
      <div class="services-header">
        <span class="services-badge">Our Services</span>
        <h2>Comprehensive <span>Digital Solutions</span> For Your Business</h2>
        <p>We deliver end-to-end web and marketing solutions tailored to help your business thrive in the digital landscape.</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon-wrap">
            <i class="fas fa-store"></i>
          </div>
          <h3>E-commerce Solutions</h3>
          <p>Our complete e-commerce solutions provide your online store intuitive interfaces, secure payment gateways, and scalable structures to improve conversions and client loyalty.</p>
          <div class="service-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap">
            <i class="fas fa-laptop-code"></i>
          </div>
          <h3>Custom Website Development</h3>
          <p>We build custom websites with responsive designs and user-centric features to boost your brand's online visibility and performance.</p>
          <div class="service-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Mobile App Development</h3>
          <p>We create captivating iOS and Android apps with powerful functionality, and seamless integration to accelerate your mobile app development business.</p>
          <div class="service-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Digital Marketing Services</h3>
          <p>Our data-driven digital marketing firm uses customised campaigns and analytics to help you reach consumers and measure ROI.</p>
          <div class="service-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DELIVERING EXCELLENCE SECTION -->
  <section class="excellence-section">
    <div class="excellence-bg-elements">
      <div class="excellence-circle circle-1"></div>
      <div class="excellence-circle circle-2"></div>
    </div>
    <div class="excellence-container">
      <div class="excellence-left">
        <span class="excellence-badge">Why Choose Us</span>
        <h2>Delivering <span>Unparalleled Client Excellence</span></h2>
        <p>We prioritize your success by providing tailored solutions that exceed expectations, fostering long-term partnerships built on trust, transparency, and tangible results in every facet of digital transformation.</p>
        <div class="excellence-stats">
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">Client Satisfaction</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">15+</span>
            <span class="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div class="excellence-right">
        <div class="excellence-card">
          <div class="excellence-icon">
            <i class="fas fa-search"></i>
          </div>
          <div class="excellence-content">
            <h3>SEO Services Company</h3>
            <p>As a premier SEO services company, we optimize your online visibility through strategic keyword integration, on-page enhancements, and link-building, driving organic traffic and higher search rankings for sustained growth.</p>
          </div>
          <div class="excellence-card-bg"></div>
        </div>

        <div class="excellence-card">
          <div class="excellence-icon">
            <i class="fas fa-pen-nib"></i>
          </div>
          <div class="excellence-content">
            <h3>Logo Design Services</h3>
            <p>Our logo design services create memorable brand identities that resonate with your audience, blending creativity with simplicity to deliver versatile visuals that strengthen your market positioning and recognition.</p>
          </div>
          <div class="excellence-card-bg"></div>
        </div>

        <div class="excellence-card">
          <div class="excellence-icon">
            <i class="fas fa-share-alt"></i>
          </div>
          <div class="excellence-content">
            <h3>Social Media Marketing Agency</h3>
            <p>Functioning as your dedicated social media marketing agency, we curate engaging content and run precision-targeted ads across platforms, enhancing community interaction and converting followers into loyal advocates.</p>
          </div>
          <div class="excellence-card-bg"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->
  <section class="why-choose-section">
    <div class="why-bg-pattern"></div>
    <div class="why-container">
      <div class="section-header">
        <span class="why-badge">Our Advantages</span>
        <h2>Why <span>Choose Us</span></h2>
        <p>We don't just build websites - we build solutions that fuel your business growth.</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon-wrap">
            <i class="fas fa-search"></i>
          </div>
          <div class="why-number">01</div>
          <h3>SEO-Focused Development</h3>
          <p>Every site is optimised for higher Google rankings and better visibility.</p>
        </div>
        <div class="why-card">
          <div class="why-icon-wrap">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div class="why-number">02</div>
          <h3>Mobile-Responsive Designs</h3>
          <p>Seamless experience across all devices and screen sizes.</p>
        </div>
        <div class="why-card">
          <div class="why-icon-wrap">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="why-number">03</div>
          <h3>Proven Track Record</h3>
          <p>Trusted by startups and established businesses alike.</p>
        </div>
        <div class="why-card">
          <div class="why-icon-wrap">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="why-number">04</div>
          <h3>Fast Turnaround</h3>
          <p>Delivering quality projects without unnecessary delays.</p>
        </div>
        <div class="why-card">
          <div class="why-icon-wrap">
            <i class="fas fa-file-invoice-dollar"></i>
          </div>
          <div class="why-number">05</div>
          <h3>Transparent Pricing</h3>
          <p>No hidden charges, only clear value for your investment.</p>
        </div>
        <div class="why-card">
          <div class="why-icon-wrap">
            <i class="fas fa-headset"></i>
          </div>
          <div class="why-number">06</div>
          <h3>Ongoing Support</h3>
          <p>From launch to growth, we're here for you every step.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS SECTION -->
  <section class="testimonials-section">
    <div class="testimonials-bg-pattern"></div>
    <div class="testimonials-container">
      <div class="testimonials-header">
        <span class="testimonials-badge">Testimonials</span>
        <h2>What Our <span>Clients Say</span> About Us</h2>
        <p>Don't just take our word for it - hear from our satisfied clients worldwide.</p>
      </div>

      <div class="testimonials-slider-wrapper">
        <div class="testimonials-slider">
          <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <!-- Slide 1 -->
            <div class="testimonials-slide">
              <div class="testimonials-grid">
                <div class="testimonial-card">
                  <div class="testimonial-card-inner">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="testimonial-text">"The custom website development from their team is outstanding. They delivered a stunning, responsive website that has significantly improved our online presence and conversions."</p>
                    <div class="client-info">
                      <img src="/images/testo1.webp" alt="Jordan Lee">
                      <div>
                        <h4>Jordan Lee</h4>
                        <p>Marketing Director, Global Reach Enterprises</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-inner">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="testimonial-text">"Their digital marketing services agency delivered campaigns that exceeded our expectations. Our ROI has increased by 150% and the team is always responsive and professional."</p>
                    <div class="client-info">
                      <img src="/images/testo2.webp" alt="Taylor Morgan">
                      <div>
                        <h4>Taylor Morgan</h4>
                        <p>Operations Manager, Visionary Ventures</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="testimonials-slide">
              <div class="testimonials-grid">
                <div class="testimonial-card">
                  <div class="testimonial-card-inner">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="testimonial-text">"Working with this team transformed our e-commerce presence. Sales increased by 200% within the first month. Their expertise in WooCommerce is unmatched."</p>
                    <div class="client-info">
                      <img src="/images/testo3.webp" alt="Alex Chen">
                      <div>
                        <h4>Alex Chen</h4>
                        <p>Founder, TechStart Innovations</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-inner">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="testimonial-text">"The mobile app they developed exceeded all expectations. Beautiful design, smooth performance, and excellent ongoing support. Highly recommended!"</p>
                    <div class="client-info">
                      <img src="https://picsum.photos/id/338/60/60" alt="Sarah Williams">
                      <div>
                        <h4>Sarah Williams</h4>
                        <p>CEO, Digital Dynamics Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="testimonials-slide">
              <div class="testimonials-grid">
                <div class="testimonial-card">
                  <div class="testimonial-card-inner">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="testimonial-text">"Their SEO services helped us rank #1 for our key terms within 6 months. Traffic to our site has tripled. Incredible results!"</p>
                    <div class="client-info">
                      <img src="https://picsum.photos/id/447/60/60" alt="Michael Brown">
                      <div>
                        <h4>Michael Brown</h4>
                        <p>Director, SearchFlow Agency</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-inner">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="testimonial-text">"The logo design was phenomenal. They captured our brand essence perfectly. The entire process was smooth and professional from start to finish."</p>
                    <div class="client-info">
                      <img src="https://picsum.photos/id/453/60/60" alt="Emily Davis">
                      <div>
                        <h4>Emily Davis</h4>
                        <p>Brand Manager, Creative Studios</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-controls">
          <button class="slider-btn prev" @click="prevSlide" aria-label="Previous slide">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="slider-dots">
            <button 
              v-for="(dot, index) in 3" 
              :key="index" 
              class="slider-dot" 
              :class="{ active: currentSlide === index }" 
              @click="goToSlide(index)"
              :aria-label="`Go to slide ${index + 1}`"
            ></button>
          </div>
          <button class="slider-btn next" @click="nextSlide" aria-label="Next slide">
            <i class="fas fa-chevron-right"></i>
          </button>
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

       <!-- Loading State -->
       <div v-if="pricingLoading" class="loading-state">
         <div class="spinner"></div>
         <p>Loading packages...</p>
       </div>

       <!-- Error State -->
       <div v-else-if="pricingError" class="error-state">
         <i class="fas fa-exclamation-triangle"></i>
         <p>{{ pricingError }}</p>
       </div>

       <!-- Pricing Grid -->
       <div v-else class="pricing-grid">
         <div 
           v-for="(pkg, index) in overviewPackages" 
           :key="pkg.id || index"
           class="pricing-card"
           :class="{ popular: pkg.popular }">
            <div v-if="pkg.badge" :class="pkg.badgeType">
              {{ pkg.badge }}
            </div>
           <h3>{{ pkg.name }}</h3>
           <div class="price">
             <span class="currency">$</span>
             <span class="amount">{{ pkg.price }}</span>
             <span v-if="pkg.oldPrice" class="old-price">${{ pkg.oldPrice }}</span>
           </div>
            <button class="pricing-btn" @click="selectPlan(pkg)">
              <i class="fas fa-fire"></i> Get Started
            </button>
           <ul class="features">
             <li v-for="(feature, fIndex) in pkg.features" :key="fIndex">
               <i class="fas fa-check"></i> {{ feature }}
             </li>
           </ul>
           <a 
             v-if="pkg.checkout_url && pkg.checkout_url !== '#'"
             :href="pkg.checkout_url" 
             target="_blank"
             class="view-more">
             Checkout <i class="fas fa-arrow-right"></i>
           </a>
           <a v-else href="#" class="view-more">
             View More <i class="fas fa-arrow-right"></i>
           </a>
         </div>
       </div>
     </div>
   </section>

  <!-- FINAL CTA SECTION -->
  <section class="final-cta-section">
    <div class="final-cta-bg">
      <div class="cta-glow cta-glow-1"></div>
      <div class="cta-glow cta-glow-2"></div>
    </div>
    <div class="final-cta-container">
      <div class="cta-visual">
        <div class="devices-wrapper">
          <div class="desktop-frame">
            <img src="/images/home4.webp" alt="Desktop" class="desktop">
            <div class="browser-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="mobile-frame">
            <img src="/images/home2.webp" alt="Mobile" class="mobile">
          </div>
          <div class="floating-badge">
            <i class="fas fa-award"></i>
            <span>#1 Agency 2025</span>
          </div>
        </div>
      </div>

      <div class="cta-content">
        <span class="cta-badge">Award Winning</span>
        <h2>Voted The Top Digital Marketing Agency UK by Clutch 2025</h2>
        <h3>Design. Develop. Market. <span>Dominate.</span></h3>
        <h4>One Agency. Unlimited Growth.</h4>
        
        <p>Welcome to Buy Dream Web, a multi-award-winning UK digital marketing agency specialising in high-performance web design, web development and fully integrated digital marketing. What makes us different is our unique Digital 360 Service approach.</p>
        
        <div class="cta-features">
          <div class="cta-feature">
            <i class="fas fa-check-circle"></i>
            <span>500+ Projects Delivered</span>
          </div>
          <div class="cta-feature">
            <i class="fas fa-check-circle"></i>
            <span>98% Client Satisfaction</span>
          </div>
          <div class="cta-feature">
            <i class="fas fa-check-circle"></i>
            <span>24/7 Support Available</span>
          </div>
        </div>
        
        <button class="cta-main-btn" @click="startJourney">
          <i class="fas fa-rocket"></i>
          Start Your Digital Journey Today
        </button>
      </div>
    </div>
  </section>

  <!-- MEET OUR EXPERTS -->
  <section class="experts-section">
    <div class="experts-bg-pattern"></div>
    <div class="experts-container">
      <div class="experts-header">
        <span class="experts-badge">Our Team</span>
        <h2>Meet Our Experts <span>Always Ready To Help You</span></h2>
        <p>Our talented team of professionals is dedicated to delivering exceptional results for your business.</p>
      </div>

      <div class="experts-grid">
        <div class="expert-card">
          <div class="expert-image-wrapper">
            <img src="/images/team1.webp" alt="William James">
            <div class="expert-overlay">
              <div class="expert-social">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div class="expert-info">
            <h3>William James</h3>
            <p class="role">Co-Founder</p>
            <div class="expert-specialty">
              <i class="fas fa-crown"></i>
              <span>Strategy Lead</span>
            </div>
          </div>
        </div>

        <div class="expert-card">
          <div class="expert-image-wrapper">
            <img src="/images/team2.webp" alt="Sarah Taylor">
            <div class="expert-overlay">
              <div class="expert-social">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div class="expert-info">
            <h3>Sarah Taylor</h3>
            <p class="role">Team Lead</p>
            <div class="expert-specialty">
              <i class="fas fa-project-diagram"></i>
              <span>Project Manager</span>
            </div>
          </div>
        </div>

        <div class="expert-card">
          <div class="expert-image-wrapper">
            <img src="/images/team3.webp" alt="Emma Ava">
            <div class="expert-overlay">
              <div class="expert-social">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div class="expert-info">
            <h3>Emma Ava</h3>
            <p class="role">Mobile Developer</p>
            <div class="expert-specialty">
              <i class="fas fa-mobile-alt"></i>
              <span>iOS & Android</span>
            </div>
          </div>
        </div>

        <div class="expert-card">
          <div class="expert-image-wrapper">
            <img src="/images/team4.webp" alt="John Trent">
            <div class="expert-overlay">
              <div class="expert-social">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div class="expert-info">
            <h3>John Trent</h3>
            <p class="role">Marketing Manager</p>
            <div class="expert-specialty">
              <i class="fas fa-chart-line"></i>
              <span>Growth Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- QUOTE FORM SECTION -->
  <section class="close-to-you-section">
    <div class="close-container">
      <h2>We Always Try To Be As Close To You As Possible</h2>
      <p>Get a free consultation and quote for your project. Our team is ready to help you succeed.</p>
      
      <form class="quote-form" @submit.prevent="handleQuoteSubmit">
        <div class="form-row">
          <div class="input-group">
            <i class="fas fa-user input-icon"></i>
            <input type="text" placeholder="Enter your full name" v-model="quoteForm.full_name" required>
          </div>
          <div class="input-group">
            <i class="fas fa-envelope input-icon"></i>
            <input type="email" placeholder="Enter your email" v-model="quoteForm.email" required>
          </div>
          <div class="input-group">
            <i class="fas fa-phone input-icon"></i>
            <input type="tel" placeholder="Enter your phone number" v-model="quoteForm.phone">
          </div>
          <div class="input-group">
            <i class="fas fa-building input-icon"></i>
            <input type="text" placeholder="Company name (optional)" v-model="quoteForm.company">
          </div>
        </div>
        <div class="input-group textarea-group">
          <i class="fas fa-comment-dots input-icon"></i>
          <textarea placeholder="Tell us about your project..." v-model="quoteForm.notes" rows="3"></textarea>
        </div>
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
  </section>

  <!-- ABOUT & FAQ SECTION -->
  <section class="about-faq-section">
    <div class="about-faq-bg">
      <div class="about-circle about-circle-1"></div>
      <div class="about-circle about-circle-2"></div>
    </div>
    <div class="about-faq-container">
      <div class="about-content">
        <span class="about-badge">About Us</span>
        <h2>Get To Know About <span>Buy Dream Web</span></h2>
        
        <div class="about-intro">
          <p>We are a leading digital agency helping businesses transform their online presence with cutting-edge web solutions.</p>
        </div>

        <div class="faq-accordion">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-question" @click="toggleFAQ(index)">
              <span class="faq-question-text">{{ faq.question }}</span>
              <span class="arrow" :class="{ active: openFaq === index }">
                <i class="fas fa-chevron-down"></i>
              </span>
            </button>
            <div class="faq-answer" :class="{ active: openFaq === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-image-wrapper">
        <img src="/images/home3.webp" alt="FAQ">
        <div class="faq-image-overlay"></div>
        <div class="faq-stats">
          <div class="faq-stat">
            <span class="stat-num">500+</span>
            <span class="stat-text">Projects</span>
          </div>
          <div class="faq-stat">
            <span class="stat-num">98%</span>
            <span class="stat-text">Satisfaction</span>
          </div>
          <div class="faq-stat">
            <span class="stat-num">24/7</span>
            <span class="stat-text">Support</span>
          </div>
        </div>
      </div>
    </div>
  </section>

<FooterSection />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FooterSection from '../../components/FooterSection.vue'
import NavbarSection from '../../components/NavbarSection.vue'

const currentSlide = ref(0)
const progressWidth = ref(0)
const openFaq = ref(null)
const quoteForm = ref({ full_name: '', email: '', phone: '', company: '', notes: '' })
const isSubmitting = ref(false)

// Pricing state
const overviewPackages = ref([])
const pricingLoading = ref(true)
const pricingError = ref(null)

// Fetch Overview packages from API
onMounted(async () => {
  try {
    const response = await fetch('https://jaexlfmjjzpahdmlvhii.supabase.co/functions/v1/get-services')
    const data = await response.json()
    
    if (data.success && data.services) {
      // Filter only Overview category packages
      overviewPackages.value = data.services
        .filter(pkg => pkg.category && pkg.category.toLowerCase() === 'overview')
        .map(pkg => ({
          id: pkg.id,
          name: pkg.name,
          description: pkg.description,
          price: pkg.sale_price || pkg.price,
          regular_price: pkg.regular_price,
          oldPrice: pkg.regular_price && pkg.regular_price > (pkg.sale_price || pkg.price) ? pkg.regular_price : null,
          popular: pkg.is_popular || false,
          recommended: pkg.is_recommended || false,
          badge: pkg.is_popular ? 'Most Popular' : (pkg.is_recommended ? 'Recommended' : null),
           badgeType: pkg.is_popular ? 'popular-badge' : (pkg.is_recommended ? 'recommended-badge' : ''),
          features: pkg.features || [], 
          category: pkg.category || 'General',
          checkout_url: pkg.checkout_url || '#'
        }))
    }
  } catch (err) {
    pricingError.value = err.message
    console.error('Failed to fetch packages:', err)
  } finally {
    pricingLoading.value = false
  }
})

const faqs = ref([
  {
    question: "What services does Buy Dream Web provide?",
    answer: "We provide complete web design, custom website development, mobile app development, e-commerce solutions, UI/UX design, digital marketing, and brand identity services."
  },
  {
    question: "How can I get started with your services?",
    answer: "Simply fill out the form above or contact us directly. Our team will schedule a free consultation to understand your requirements and propose the best solution."
  },
  {
    question: "What makes Buy Dream Web different from other providers?",
    answer: "We combine creativity with technical excellence, deliver fast turnaround, offer transparent pricing, and provide ongoing support even after project completion."
  }
])

// Quote Functions
const showQuote = () => {
  // ... (same notification logic as original)
  // You can keep the original DOM notification or convert to Vue toast later
  alert("🎉 Your free quote request is on the way!\nWe'll get back to you within 24 hours.")
}

const getInTouch = () => {
  alert("🎉 Great choice! Our team will contact you shortly.")
}

const selectPlan = (pkg) => {
  if (pkg.checkout_url && pkg.checkout_url !== '#') {
    window.open(pkg.checkout_url, '_blank')
  } else {
    alert(`🎉 You selected the ${pkg.name} Plan!\n\nOur team will contact you shortly to discuss your project.`)
  }
}

const startJourney = () => {
  alert("🚀 Your digital journey starts here! We'll get in touch soon.")
}

// Testimonials Slider Logic
// Note: autoplayInterval and progressInterval removed as they were unused

const goToSlide = (index) => {
  currentSlide.value = index
  resetProgressBar()
}

const nextSlide = () => goToSlide((currentSlide.value + 1) % 3)
const prevSlide = () => goToSlide((currentSlide.value - 1 + 3) % 3)

const resetProgressBar = () => {
  progressWidth.value = 0
  // You can enhance this with setInterval if needed
}

// FAQ
const toggleFAQ = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

// Form Handlers
const handleQuoteSubmit = async () => {
  isSubmitting.value = true
  try {
    const response = await fetch('https://jaexlfmjjzpahdmlvhii.supabase.co/functions/v1/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quoteForm.value)
    })
    const result = await response.json()
    if (result.success) {
      showNotification('Thank you! We\'ll be in touch soon.', 'success')
      quoteForm.value = { full_name: '', email: '', phone: '', company: '', notes: '' }
    } else {
      showNotification('Something went wrong. Please try again.', 'error')
    }
  } catch (error) {
    showNotification('Network error. Please try again.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

const showNotification = (message, type) => {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `
  document.body.appendChild(notification)
  setTimeout(() => notification.classList.add('show'), 10)
  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => notification.remove(), 300)
  }, 4000)
}

// Cleanup
onMounted(() => {
  console.log('%c✅ Buy Dream Web - Vue 3 Version Loaded Successfully!', 'color:#a855f7; font-size:16px; font-weight:600')
})
</script>

<style>
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

      

        /* ==================== HERO SECTION (TOTALLY NEW & ADVANCED) ==================== */
        .hero {
            min-height: 100vh;
            background: linear-gradient(135deg, #f1f5f9 0%, #fdf4ff 100%);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 80px 6%;
        }

        .hero-container {
            max-width: 1380px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            margin-top: 100px;
        }

        .hero-text {
            z-index: 2;
        }

        .hero-text h1 {
            font-size: 4rem;
            line-height: 1.08;
            font-weight: 800;
            color: var(--dark);
            margin-bottom: 24px;
            letter-spacing: -0.02em;
        }

        .hero-text h1 span {
            background: linear-gradient(135deg, #a855f7, #22d3ee);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .hero-text p {
            font-size: 1.25rem;
            color: #64748b;
            max-width: 540px;
            margin-bottom: 36px;
            line-height: 1.7;
        }

        .hero-cta {
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
        }

        .hero-cta .main-btn {
            background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
            color: white;
            border: none;
            padding: 18px 38px;
            border-radius: 9999px;
            font-size: 1.15rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 15px 35px -5px rgba(168, 85, 247, 0.45);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            text-decoration: none;
            animation: btnPulse 3s ease-in-out infinite;
        }

        @keyframes btnPulse {
            0%, 100% { box-shadow: 0 15px 35px -5px rgba(168, 85, 247, 0.45); }
            50% { box-shadow: 0 20px 45px -5px rgba(236, 72, 153, 0.55); }
        }

        .hero-cta .main-btn:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 25px 45px -5px rgba(236, 72, 153, 0.5);
            animation: none;
        }

        .hero-cta .main-btn i {
            font-size: 1.1rem;
        }

        .trust-bar {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-top: 48px;
            flex-wrap: wrap;
        }

        .trust-bar .avatars {
            display: flex;
        }

        .trust-bar .avatars img {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
            object-fit: cover;
        }

        .trust-bar .avatars img:not(:first-child) {
            margin-left: -18px;
        }

        .trust-bar .count {
            width: 52px;
            height: 52px;
            background: linear-gradient(135deg, #facc15, #ec4899);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.2rem;
            box-shadow: 0 6px 16px rgba(236, 72, 153, 0.3);
            margin-left: -18px;
        }

        .trust-bar span {
            font-size: 1rem;
            font-weight: 500;
            color: #64748b;
        }

        /* Right Visual - Advanced Floating Card Design */
        .hero-visual {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .visual-card {
            width: 100%;
            max-width: 520px;
            background: white;
            border-radius: 32px;
            padding: 18px;
            box-shadow: 
                0 30px 60px -20px rgba(168, 85, 247, 0.3),
                0 0 0 1px rgba(255,255,255,0.6) inset;
            position: relative;
            z-index: 2;
            overflow: hidden;
        }

        .visual-image-wrapper {
            width: 100%;
            height: 380px;
            border-radius: 24px;
            overflow: hidden;
            position: relative;
        }

        .visual-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(1.05);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
            transition: transform 0.5s ease;
        }

        .visual-card:hover .visual-image-wrapper img {
            transform: scale(1.05);
        }

        .visual-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: linear-gradient(to top, rgba(255,255,255,0.9), transparent);
            pointer-events: none;
        }

        /* Floating tech icons around the card */
        .floating-icon {
            position: absolute;
            font-size: 2.4rem;
            color: var(--primary);
            animation: floatIcon 6s ease-in-out infinite;
            z-index: 3;
            filter: drop-shadow(0 12px 20px rgba(168, 85, 247, 0.35));
            background: white;
            width: 60px;
            height: 60px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 15px 35px rgba(168, 85, 247, 0.25);
        }

        .icon1 { top: -20px; left: -25px; animation-delay: 0s; color: var(--primary); }
        .icon2 { top: 50%; right: -35px; animation-delay: 1.5s; color: var(--accent); }
        .icon3 { bottom: -25px; left: 30px; animation-delay: 3s; color: #ec4899; }
        .icon4 { top: 35%; left: -40px; animation-delay: 4.5s; color: #14b8a6; }

        @keyframes floatIcon {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-35px) rotate(18deg); }
        }

        /* Background subtle elements */
        .bg-circle {
            position: absolute;
            border-radius: 50%;
            z-index: 1;
        }

        .circle1 {
            width: 500px;
            height: 500px;
            top: -120px;
            right: -80px;
            background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%);
            animation: pulse 20s infinite ease-in-out;
        }

        .circle2 {
            width: 350px;
            height: 350px;
            bottom: -80px;
            left: -60px;
            background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.04) 40%, transparent 70%);
            animation: pulse 20s infinite ease-in-out;
            animation-delay: 5s;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
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
                font-size: 3rem;
            }
            
            .hero-text p {
                font-size: 1.2rem;
                max-width: 100%;
            }
            
            .hero-container {
                gap: 50px;
            }

            .visual-card {
                max-width: 440px;
            }

            .visual-image-wrapper {
                height: 320px;
            }

            .floating-icon {
                width: 50px;
                height: 50px;
                font-size: 1.8rem;
            }

            .icon2 { right: -30px; }
            .icon4 { left: -35px; }
        }

        @media (max-width: 768px) {
            .hero {
                min-height: auto;
                padding: 60px 5% 80px;
            }
            
            .hero-container {
                grid-template-columns: 1fr;
                gap: 50px;
                text-align: center;
                margin-top: 60px;
            }
            
            .hero-text h1 {
                font-size: 2.4rem;
            }
            
            .hero-text p {
                font-size: 1.05rem;
                margin: 0 auto 32px;
            }
            
            .hero-cta {
                justify-content: center;
            }
            
            .hero-visual {
                margin: 0 auto;
                order: -1;
            }
            
            .visual-card {
                max-width: 360px;
            }

            .visual-image-wrapper {
                height: 260px;
            }
            
            .trust-bar {
                justify-content: center;
                flex-wrap: wrap;
            }

            .floating-icon {
                display: none;
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
            
            .mobile-menu a:nth-child(1) { transition-delay: 0.08s; }
            .mobile-menu a:nth-child(2) { transition-delay: 0.12s; }
            .mobile-menu a:nth-child(3) { transition-delay: 0.16s; }
            .mobile-menu a:nth-child(4) { transition-delay: 0.2s; }
            .mobile-menu a:nth-child(5) { transition-delay: 0.24s; }
            .mobile-menu a:nth-child(6) { transition-delay: 0.28s; }
            .mobile-menu a:nth-child(7) { transition-delay: 0.32s; }
            
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

        /* ==================== HERO 480px ==================== */
        @media (max-width: 480px) {
            .hero {
                padding: 50px 4% 60px;
            }

            .hero-text h1 {
                font-size: 2rem;
                margin-bottom: 18px;
            }
            
            .hero-text p {
                font-size: 0.95rem;
                margin-bottom: 24px;
            }
            
            .hero-cta .main-btn {
                padding: 14px 26px;
                font-size: 0.95rem;
                width: 100%;
                justify-content: center;
            }

            .visual-card {
                max-width: 300px;
                padding: 14px;
            }

            .visual-image-wrapper {
                height: 200px;
                border-radius: 18px;
            }

            .trust-bar {
                gap: 16px;
            }

            .trust-bar .avatars img {
                width: 40px;
                height: 40px;
                border-width: 2px;
            }

            .trust-bar .count {
                width: 40px;
                height: 40px;
                font-size: 1rem;
                margin-left: -14px;
            }

            .trust-bar .avatars img:not(:first-child) {
                margin-left: -14px;
            }

            .trust-bar span {
                font-size: 0.85rem;
                width: 100%;
                text-align: center;
                margin-top: 8px;
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

        /* ==================== TRUSTED PARTNER SECTION ==================== */
        .trusted-section {
            padding: 140px 6% 120px;
            background: linear-gradient(180deg, #f8fafc 0%, #fdf4ff 50%, #f0f9ff 100%);
            position: relative;
            overflow: hidden;
        }

        .trusted-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #a855f7, #22d3ee, #ec4899);
        }

        .trusted-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 100px;
            align-items: center;
        }

        /* Left Content */
        .trusted-text {
            position: relative;
        }

        .trusted-text h2 {
            font-size: 3.4rem;
            line-height: 1.08;
            font-weight: 800;
            color: var(--dark);
            margin-bottom: 28px;
            letter-spacing: -0.02em;
        }

        .trusted-text h2 span {
            background: linear-gradient(135deg, #a855f7, #22d3ee);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .trusted-text p {
            font-size: 1.3rem;
            color: #64748b;
            line-height: 1.8;
            max-width: 560px;
            margin-bottom: 48px;
        }

        /* Services Grid */
        .trusted-section .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .trusted-section .service-card {
            background: white;
            border-radius: 20px;
            padding: 28px 24px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(168, 85, 247, 0.06);
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }

        .trusted-section .service-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(168, 85, 247, 0.12);
            border-color: rgba(168, 85, 247, 0.2);
        }

        .trusted-section .service-card i {
            font-size: 1.6rem;
            color: #a855f7;
            margin-bottom: 0;
            display: flex;
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.1));
            border-radius: 12px;
        }

        .trusted-section .service-card:hover i {
            color: #ec4899;
            transform: scale(1.1);
            transition: all 0.3s ease;
        }

        .trusted-section .service-card h3 {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--dark);
            margin-bottom: 0;
            line-height: 1.4;
        }

        .trusted-section .service-card p {
            display: none;
        }

        /* Right Visual - Phone Collage */
        .visual-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
        }

        .hero-showcase {
            position: relative;
            width: 100%;
            max-width: 520px;
        }

        .showcase-main {
            position: relative;
            width: 100%;
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 
                0 35px 70px -20px rgba(168, 85, 247, 0.35),
                0 20px 40px -10px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            z-index: 2;
        }

        .showcase-main img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
        }

        .showcase-main:hover img {
            transform: scale(1.03);
        }

        .showcase-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                transparent 0%,
                transparent 60%,
                rgba(168, 85, 247, 0.1) 100%
            );
            pointer-events: none;
        }

        .showcase-floating-card {
            position: absolute;
            background: white;
            border-radius: 16px;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            box-shadow: 
                0 15px 35px -10px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(168, 85, 247, 0.1);
            z-index: 3;
            animation: floatCard 6s ease-in-out infinite;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .showcase-floating-card:hover {
            transform: translateY(-5px);
            box-shadow: 
                0 20px 40px -10px rgba(168, 85, 247, 0.25),
                0 0 0 2px rgba(168, 85, 247, 0.2);
        }

        .floating-icon-wrap {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
        }

        .card-1 .floating-icon-wrap {
            background: linear-gradient(135deg, #a855f7, #d8b4fe);
            color: white;
        }

        .card-2 .floating-icon-wrap {
            background: linear-gradient(135deg, #22d3ee, #67e8f9);
            color: white;
        }

        .card-3 .floating-icon-wrap {
            background: linear-gradient(135deg, #f472b6, #f9a8d4);
            color: white;
        }

        .floating-text {
            display: flex;
            flex-direction: column;
        }

        .floating-number {
            font-size: 1.4rem;
            font-weight: 800;
            color: #0f172a;
            line-height: 1.1;
        }

        .floating-label {
            font-size: 0.75rem;
            color: #64748b;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .card-1 {
            top: -25px;
            right: -20px;
            animation-delay: 0s;
        }

        .card-2 {
            bottom: 40px;
            left: -35px;
            animation-delay: 2s;
        }

        .card-3 {
            bottom: -20px;
            right: 30px;
            animation-delay: 4s;
        }

        @keyframes floatCard {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }

        .showcase-badge {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.95), rgba(236, 72, 153, 0.95));
            color: white;
            padding: 14px 24px;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 0.95rem;
            box-shadow: 0 15px 35px -10px rgba(168, 85, 247, 0.5);
            z-index: 4;
            animation: badgePulse 3s ease-in-out infinite;
        }

        .showcase-badge i {
            font-size: 1.1rem;
        }

        @keyframes badgePulse {
            0%, 100% { box-shadow: 0 15px 35px -10px rgba(168, 85, 247, 0.5); }
            50% { box-shadow: 0 20px 45px -10px rgba(236, 72, 153, 0.6); }
        }

        /* CTA Banner */
        .cta-banner {
            margin-top: 120px;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            border-radius: 32px;
            padding: 60px 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
            box-shadow: 
                0 25px 60px -20px rgba(15, 23, 42, 0.5),
                0 0 0 1px rgba(168, 85, 247, 0.1) inset;
            position: relative;
            overflow: hidden;
        }

        .cta-banner::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
            pointer-events: none;
        }

        .cta-banner::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: 10%;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%);
            pointer-events: none;
        }

        .cta-banner h3 {
            font-size: 2.2rem;
            font-weight: 700;
            max-width: 540px;
            line-height: 1.3;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;
        }

        .btn-touch {
            background: linear-gradient(135deg, #a855f7, #ec4899);
            color: white;
            border: none;
            padding: 18px 38px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.4);
        }

        .btn-touch:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 20px 35px -5px rgba(236, 72, 153, 0.5);
        }

        .btn-phone {
            background: rgba(255,255,255,0.1);
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
            padding: 18px 32px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            transition: all 0.4s ease;
        }

        .btn-phone:hover {
            background: white;
            color: #0f172a;
            border-color: white;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .trusted-container {
                gap: 70px;
            }

            .trusted-text h2 {
                font-size: 2.8rem;
            }

            .hero-showcase {
                max-width: 420px;
                margin: 0 auto;
            }

            .showcase-floating-card {
                padding: 12px 16px;
            }

            .floating-icon-wrap {
                width: 40px;
                height: 40px;
                font-size: 1.1rem;
            }

            .floating-number {
                font-size: 1.2rem;
            }

            .floating-label {
                font-size: 0.65rem;
            }

            .showcase-badge {
                padding: 12px 20px;
                font-size: 0.85rem;
            }
        }

        @media (max-width: 1024px) {
            .trusted-container {
                grid-template-columns: 1fr;
                gap: 60px;
                text-align: center;
            }

            .trusted-text p {
                margin: 0 auto 40px;
            }

            .trusted-section .services-grid {
                max-width: 500px;
                margin: 0 auto;
            }

            .hero-showcase {
                margin: 0 auto;
            }
        }

        @media (max-width: 768px) {
            .trusted-section {
                padding: 80px 5% 70px;
            }

            .trusted-text h2 {
                font-size: 2.4rem;
            }

            .trusted-text p {
                font-size: 1.05rem;
            }

            .trusted-section .services-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }

            .trusted-section .service-card {
                padding: 20px 18px;
                flex-direction: row;
                align-items: center;
                text-align: left;
            }

            .trusted-section .service-card i {
                width: 40px;
                height: 40px;
                font-size: 1.4rem;
                border-radius: 10px;
            }

            .trusted-section .service-card h3 {
                font-size: 1rem;
            }

            .hero-showcase {
                width: 100%;
                max-width: 340px;
            }

            .showcase-floating-card {
                padding: 10px 14px;
                gap: 10px;
            }

            .floating-icon-wrap {
                width: 36px;
                height: 36px;
                font-size: 1rem;
                border-radius: 10px;
            }

            .floating-number {
                font-size: 1.1rem;
            }

            .floating-label {
                font-size: 0.6rem;
            }

            .card-1 {
                top: -15px;
                right: -10px;
            }

            .card-2 {
                bottom: 30px;
                left: -20px;
            }

            .card-3 {
                bottom: -10px;
                right: 20px;
            }

            .showcase-badge {
                padding: 10px 18px;
                font-size: 0.8rem;
                gap: 8px;
            }

            .cta-banner {
                flex-direction: column;
                text-align: center;
                gap: 28px;
                padding: 40px 28px;
                margin-top: 80px;
                border-radius: 24px;
            }

            .cta-banner h3 {
                font-size: 1.5rem;
            }

            .cta-buttons {
                justify-content: center;
            }

            .btn-touch, .btn-phone {
                padding: 14px 28px;
                font-size: 1rem;
            }
        }

        @media (max-width: 480px) {
            .trusted-section {
                padding: 60px 4% 50px;
            }

            .trusted-container {
                gap: 40px;
            }

            .trusted-text h2 {
                font-size: 1.9rem;
                margin-bottom: 20px;
            }

            .trusted-text p {
                font-size: 0.95rem;
                margin-bottom: 30px;
            }

            .trusted-section .service-card {
                padding: 16px 14px;
                gap: 12px;
            }

            .trusted-section .service-card i {
                width: 36px;
                height: 36px;
                font-size: 1.2rem;
            }

            .trusted-section .service-card h3 {
                font-size: 0.9rem;
            }

            .hero-showcase {
                max-width: 280px;
            }

            .showcase-floating-card {
                padding: 8px 12px;
                gap: 8px;
            }

            .floating-icon-wrap {
                width: 32px;
                height: 32px;
                font-size: 0.9rem;
                border-radius: 8px;
            }

            .floating-number {
                font-size: 1rem;
            }

            .floating-label {
                font-size: 0.55rem;
            }

            .card-1 {
                top: -10px;
                right: -5px;
            }

            .card-2 {
                bottom: 20px;
                left: -15px;
            }

            .card-3 {
                bottom: -5px;
                right: 15px;
            }

            .showcase-badge {
                padding: 8px 14px;
                font-size: 0.7rem;
                gap: 6px;
            }

            .showcase-badge i {
                font-size: 0.8rem;
            }

            .cta-banner {
                margin-top: 60px;
                padding: 32px 20px;
            }

            .cta-banner h3 {
                font-size: 1.25rem;
            }

            .btn-touch, .btn-phone {
                width: 100%;
                justify-content: center;
            }
        }
        
        @media (max-width: 480px) {
            .trusted-section {
                padding: 60px 4% 50px;
            }
            
            .trusted-container {
                gap: 40px;
            }
            
            .trusted-text h2 {
                font-size: 2rem;
            }
            
            .trusted-text p {
                font-size: 1rem;
                margin-bottom: 30px;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .service-card {
                padding: 18px 20px;
                border-radius: 16px;
            }
            
            .service-card i {
                font-size: 1.8rem;
            }
            
            .service-card h3 {
                font-size: 1.1rem;
            }
            
            .phones-collage {
                max-width: 320px;
                height: 320px;
            }
            
            .phone1 {
                width: 110px !important;
                top: 10px;
                left: 5px;
            }
            
            .phone2 {
                width: 125px !important;
                top: 35px;
                right: 10px;
            }
            
            .phone3 {
                width: 100px !important;
                bottom: 30px;
                left: 35px;
            }
            
            .phone4 {
                width: 115px !important;
                bottom: 10px;
                right: 15px;
            }
            
            .cta-banner {
                padding: 30px 20px;
                margin-top: 40px;
                border-radius: 20px;
            }
            
            .cta-banner h3 {
                font-size: 1.35rem;
            }
            
            .btn-touch,
            .btn-phone {
                padding: 14px 28px;
                font-size: 1rem;
            }
        }

        /* ==================== SERVICES SECTION ==================== */
        .services-section {
            padding: 120px 6% 100px;
            background: linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%);
            position: relative;
            overflow: hidden;
        }

        .services-bg-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.08) 0%, transparent 50%);
            pointer-events: none;
        }

        .services-container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .services-header {
            text-align: center;
            margin-bottom: 70px;
        }

        .services-badge {
            display: inline-block;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.15));
            color: #a855f7;
            padding: 10px 24px;
            border-radius: 9999px;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        .services-header h2 {
            font-size: 3.2rem;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 20px;
            line-height: 1.15;
        }

        .services-header h2 span {
            background: linear-gradient(135deg, #a855f7, #22d3ee);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .services-header p {
            font-size: 1.2rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.7;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
        }

        .service-card {
            background: white;
            border-radius: 24px;
            padding: 40px 28px;
            box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(168, 85, 247, 0.08);
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #a855f7, #22d3ee);
            transform: scaleX(0);
            transition: transform 0.4s ease;
            transform-origin: left;
        }

        .service-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(168, 85, 247, 0.15);
            border-color: rgba(168, 85, 247, 0.2);
        }

        .service-card:hover::before {
            transform: scaleX(1);
        }

        .service-icon-wrap {
            width: 70px;
            height: 70px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 24px;
            transition: all 0.4s ease;
        }

        .service-card:nth-child(1) .service-icon-wrap {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05));
            color: #a855f7;
        }

        .service-card:nth-child(2) .service-icon-wrap {
            background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(34, 211, 238, 0.05));
            color: #22d3ee;
        }

        .service-card:nth-child(3) .service-icon-wrap {
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05));
            color: #ec4899;
        }

        .service-card:nth-child(4) .service-icon-wrap {
            background: linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.05));
            color: #14b8a6;
        }

        .service-card:hover .service-icon-wrap {
            transform: scale(1.1) rotate(5deg);
        }

        .service-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 14px;
            line-height: 1.4;
        }

        .service-card p {
            color: #64748b;
            line-height: 1.7;
            font-size: 0.95rem;
            margin-bottom: 20px;
        }

        .service-arrow {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            color: #a855f7;
            font-size: 0.9rem;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.4s ease;
        }

        .service-card:hover .service-arrow {
            opacity: 1;
            transform: translateX(0);
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .services-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .services-section {
                padding: 80px 5% 70px;
            }

            .services-header {
                margin-bottom: 50px;
            }

            .services-badge {
                padding: 8px 18px;
                font-size: 0.8rem;
            }

            .services-header h2 {
                font-size: 2.2rem;
            }

            .services-header p {
                font-size: 1rem;
            }

            .services-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .service-card {
                padding: 32px 24px;
            }

            .service-icon-wrap {
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
                margin-bottom: 20px;
            }

            .service-card h3 {
                font-size: 1.15rem;
            }

            .service-card p {
                font-size: 0.9rem;
                margin-bottom: 16px;
            }
        }

        @media (max-width: 480px) {
            .services-section {
                padding: 60px 4% 50px;
            }

            .services-header h2 {
                font-size: 1.8rem;
            }

            .services-header p {
                font-size: 0.9rem;
            }

            .service-card {
                padding: 24px 20px;
            }

            .service-icon-wrap {
                width: 50px;
                height: 50px;
                font-size: 1.3rem;
                border-radius: 14px;
            }

            .service-card h3 {
                font-size: 1.05rem;
            }

            .service-card p {
                font-size: 0.85rem;
            }
        }

/* ====================== EXCELLENCE SECTION ====================== */
.excellence-section {
    padding: 140px 6% 120px;
    background: linear-gradient(180deg, #f0f9ff 0%, #fdf4ff 50%, #f8fafc 100%);
    position: relative;
    overflow: hidden;
}

.excellence-bg-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.excellence-circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
}

.circle-1 {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
}

.circle-2 {
    width: 300px;
    height: 300px;
    bottom: -50px;
    left: -50px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%);
}

.excellence-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: start;
    position: relative;
    z-index: 1;
}

.excellence-left {
    position: sticky;
    top: 120px;
}

.excellence-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1));
    color: #a855f7;
    padding: 10px 22px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 24px;
}

.excellence-left h2 {
    font-size: 3.4rem;
    line-height: 1.1;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
}

.excellence-left h2 span {
    background: linear-gradient(135deg, #a855f7, #22d3ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.excellence-left p {
    font-size: 1.2rem;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 40px;
}

.excellence-stats {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 2.8rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.stat-label {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
    margin-top: 8px;
}

.excellence-right {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.excellence-card {
    background: white;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(168, 85, 247, 0.08);
    display: flex;
    align-items: flex-start;
    gap: 24px;
    position: relative;
    overflow: hidden;
}

.excellence-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 25px 50px rgba(168, 85, 247, 0.12);
    border-color: rgba(168, 85, 247, 0.2);
}

.excellence-card-bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.03));
    pointer-events: none;
}

.excellence-icon {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    flex-shrink: 0;
    transition: all 0.4s ease;
}

.excellence-card:nth-child(1) .excellence-icon {
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(34, 211, 238, 0.05));
    color: #22d3ee;
}

.excellence-card:nth-child(2) .excellence-icon {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05));
    color: #a855f7;
}

.excellence-card:nth-child(3) .excellence-icon {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05));
    color: #ec4899;
}

.excellence-card:hover .excellence-icon {
    transform: scale(1.1) rotate(5deg);
}

.excellence-content {
    flex: 1;
}

.excellence-content h3 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: #0f172a;
}

.excellence-content p {
    color: #64748b;
    line-height: 1.7;
    font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1200px) {
    .excellence-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .excellence-left {
        position: static;
        text-align: center;
    }

    .excellence-stats {
        justify-content: center;
    }

    .excellence-left p {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .excellence-section {
        padding: 80px 5% 70px;
    }

    .excellence-badge {
        padding: 8px 18px;
        font-size: 0.75rem;
    }

    .excellence-left h2 {
        font-size: 2.4rem;
    }

    .excellence-left p {
        font-size: 1rem;
    }

    .excellence-stats {
        gap: 30px;
    }

    .stat-item {
        flex: 1;
        min-width: 100px;
    }

    .stat-number {
        font-size: 2.2rem;
    }

    .stat-label {
        font-size: 0.8rem;
    }

    .excellence-card {
        flex-direction: column;
        padding: 24px;
        gap: 20px;
    }

    .excellence-icon {
        width: 56px;
        height: 56px;
        font-size: 1.4rem;
    }

    .excellence-content h3 {
        font-size: 1.15rem;
    }

    .excellence-content p {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .excellence-section {
        padding: 60px 4% 50px;
    }

    .excellence-left h2 {
        font-size: 1.9rem;
    }

    .excellence-stats {
        flex-direction: column;
        gap: 20px;
    }

    .stat-item {
        flex-direction: row;
        align-items: center;
        gap: 12px;
        justify-content: center;
    }

    .stat-number {
        font-size: 2rem;
    }

    .stat-label {
        margin-top: 0;
    }

    .excellence-card {
        padding: 20px;
    }

    .excellence-icon {
        width: 48px;
        height: 48px;
        font-size: 1.2rem;
    }
}

/* ====================== WHY CHOOSE US SECTION ====================== */
.why-choose-section {
    padding: 140px 6% 120px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    position: relative;
    overflow: hidden;
}

.why-bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.06) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(34, 211, 238, 0.06) 0%, transparent 40%);
    pointer-events: none;
}

.why-container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.section-header {
    text-align: center;
    margin-bottom: 70px;
}

.why-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(168, 85, 247, 0.1));
    color: #22d3ee;
    padding: 10px 24px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.section-header h2 {
    font-size: 3.4rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.section-header h2 span {
    background: linear-gradient(135deg, #22d3ee, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.section-header p {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 550px;
    margin: 0 auto;
    line-height: 1.7;
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.why-card {
    background: white;
    border-radius: 24px;
    padding: 40px 32px;
    text-align: center;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(168, 85, 247, 0.06);
    position: relative;
    overflow: hidden;
}

.why-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #22d3ee, #a855f7);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
}

.why-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(168, 85, 247, 0.12);
    border-color: rgba(168, 85, 247, 0.15);
}

.why-card:hover::before {
    transform: scaleX(1);
}

.why-icon-wrap {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    transition: all 0.4s ease;
}

.why-card:nth-child(1) .why-icon-wrap {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05));
    color: #a855f7;
}

.why-card:nth-child(2) .why-icon-wrap {
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(34, 211, 238, 0.05));
    color: #22d3ee;
}

.why-card:nth-child(3) .why-icon-wrap {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05));
    color: #f59e0b;
}

.why-card:nth-child(4) .why-icon-wrap {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05));
    color: #ec4899;
}

.why-card:nth-child(5) .why-icon-wrap {
    background: linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.05));
    color: #14b8a6;
}

.why-card:nth-child(6) .why-icon-wrap {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.05));
    color: #6366f1;
}

.why-card:hover .why-icon-wrap {
    transform: scale(1.1) rotate(5deg);
}

.why-number {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 3rem;
    font-weight: 800;
    color: rgba(168, 85, 247, 0.08);
    line-height: 1;
    font-family: 'Poppins', sans-serif;
}

.why-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: #0f172a;
    position: relative;
    z-index: 1;
}

.why-card p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.7;
    position: relative;
    z-index: 1;
}

.why-card-hover {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #22d3ee);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.9rem;
    transition: all 0.4s ease;
}

.why-card:hover .why-card-hover {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}

/* Responsive */
@media (max-width: 1200px) {
    .why-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .why-choose-section {
        padding: 80px 5% 70px;
    }

    .why-badge {
        padding: 8px 18px;
        font-size: 0.75rem;
    }

    .section-header h2 {
        font-size: 2.4rem;
    }

    .section-header p {
        font-size: 1rem;
    }

    .why-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .why-card {
        padding: 32px 24px;
    }

    .why-icon-wrap {
        width: 70px;
        height: 70px;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .why-card h3 {
        font-size: 1.15rem;
    }

    .why-card p {
        font-size: 0.9rem;
    }

    .why-number {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .why-choose-section {
        padding: 60px 4% 50px;
    }

    .section-header {
        margin-bottom: 50px;
    }

    .section-header h2 {
        font-size: 1.9rem;
    }

    .section-header p {
        font-size: 0.9rem;
    }

    .why-card {
        padding: 24px 20px;
    }

    .why-icon-wrap {
        width: 60px;
        height: 60px;
        font-size: 1.3rem;
        border-radius: 18px;
    }

    .why-card h3 {
        font-size: 1.05rem;
    }

    .why-card p {
        font-size: 0.85rem;
    }
}

/* ====================== RESPONSIVE ====================== */
@media (max-width: 992px) {
    .excellence-container {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .excellence-left {
        text-align: center;
    }
    
    .excellence-left p {
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .services-section, .excellence-section, .why-choose-section {
        padding: 80px 5%;
    }
    
    .services-grid, .why-grid {
        grid-template-columns: 1fr;
    }
}

/* ====================== TESTIMONIALS SLIDER ====================== */
.testimonials-section {
    padding: 140px 6% 120px;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.testimonials-bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.15) 0%, transparent 50%);
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

.testimonials-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.15));
    color: #d8b4fe;
    padding: 10px 24px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.testimonials-header h2 {
    font-size: 3.4rem;
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.testimonials-header h2 span {
    background: linear-gradient(135deg, #22d3ee, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.testimonials-header p {
    font-size: 1.2rem;
    color: #94a3b8;
    max-width: 500px;
    margin: 0 auto;
}

.testimonials-slider-wrapper {
    position: relative;
}

.testimonials-slider {
    overflow: hidden;
    border-radius: 24px;
}

.testimonials-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonials-slide {
    min-width: 100%;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 20px;
}

.testimonial-card {
    background: white;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
}

.testimonial-card-inner {
    position: relative;
    z-index: 1;
}

.testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #a855f7, #22d3ee);
}

.stars {
    color: #fbbf24;
    font-size: 1rem;
    margin-bottom: 20px;
    letter-spacing: 4px;
}

.stars i {
    margin-right: 2px;
}

.testimonial-text {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #334155;
}

.client-info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.client-info img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #e2e8f0;
}

.client-info h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 4px 0;
}

.client-info p {
    font-size: 0.85rem;
    color: #64748b;
    margin: 0;
}

.quote-icon {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 3rem;
    color: rgba(168, 85, 247, 0.1);
}

/* Slider Controls */
.slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
}

.slider-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-btn:hover {
    background: linear-gradient(135deg, #a855f7, #ec4899);
    border-color: transparent;
    transform: scale(1.1);
}

.slider-btn:active {
    transform: scale(0.95);
}

.slider-dots {
    display: flex;
    gap: 12px;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
}

.slider-dot:hover {
    background: rgba(255, 255, 255, 0.4);
}

.slider-dot.active {
    background: white;
    width: 40px;
    border-radius: 6px;
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
}

/* Responsive */
@media (max-width: 1200px) {
    .testimonials-grid {
        gap: 20px;
    }

    .testimonial-card {
        padding: 32px;
    }
}

@media (max-width: 768px) {
    .testimonials-section {
        padding: 80px 5% 70px;
    }

    .testimonials-badge {
        padding: 8px 18px;
        font-size: 0.75rem;
    }

    .testimonials-header h2 {
        font-size: 2.2rem;
    }

    .testimonials-header p {
        font-size: 1rem;
    }

    .testimonials-grid {
        grid-template-columns: 1fr;
        padding: 10px;
        gap: 20px;
    }

    .testimonial-card {
        padding: 28px;
    }

    .testimonial-text {
        font-size: 0.95rem;
    }

    .client-info img {
        width: 48px;
        height: 48px;
    }

    .client-info h4 {
        font-size: 1rem;
    }

    .slider-controls {
        gap: 20px;
        margin-top: 30px;
    }

    .slider-btn {
        width: 48px;
        height: 48px;
    }
}

@media (max-width: 480px) {
    .testimonials-section {
        padding: 60px 4% 50px;
    }

    .testimonials-header h2 {
        font-size: 1.8rem;
    }

    .testimonials-header p {
        font-size: 0.9rem;
    }

    .testimonial-card {
        padding: 24px 20px;
    }

    .quote-icon {
        font-size: 2rem;
        top: 20px;
        right: 20px;
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

.popular-badge, .recommended-badge {
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

/* Pricing Loading & Error States */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
}

.loading-state p, .error-state p {
  color: #64748b;
  margin-top: 20px;
  font-size: 1.1rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(168, 85, 247, 0.1);
  border-top: 4px solid #a855f7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state i {
  font-size: 3rem;
  color: #ef4444;
  margin-bottom: 16px;
}

.error-state p {
  color: #ef4444 !important;
}

/* ====================== FINAL CTA ====================== */
.final-cta-section {
    padding: 140px 6% 120px;
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.final-cta-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.cta-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
}

.cta-glow-1 {
    width: 500px;
    height: 500px;
    top: -150px;
    right: -100px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
}

.cta-glow-2 {
    width: 400px;
    height: 400px;
    bottom: -100px;
    left: -100px;
    background: linear-gradient(135deg, #22d3ee, #06b6d4);
}

.final-cta-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.cta-visual {
    position: relative;
}

.devices-wrapper {
    position: relative;
    padding: 20px;
}

.desktop-frame {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 
        0 35px 70px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    background: #1e293b;
}

.desktop {
    width: 100%;
    display: block;
}

.browser-dots {
    position: absolute;
    top: 10px;
    left: 15px;
    display: flex;
    gap: 8px;
}

.browser-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.browser-dots span:nth-child(1) { background: #ef4444; }
.browser-dots span:nth-child(2) { background: #f59e0b; }
.browser-dots span:nth-child(3) { background: #22c55e; }

.mobile-frame {
    position: absolute;
    bottom: -30px;
    left: -40px;
    width: 140px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.5),
        0 0 0 4px #1e293b;
    background: #1e293b;
    padding: 6px;
}

.mobile {
    width: 100%;
    border-radius: 14px;
    display: block;
}

.floating-badge {
    position: absolute;
    top: 20px;
    right: -20px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    padding: 14px 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: 0 15px 30px rgba(168, 85, 247, 0.4);
    animation: floatBadge 4s ease-in-out infinite;
}

@keyframes floatBadge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.floating-badge i {
    font-size: 1.1rem;
}

.cta-content {
    position: relative;
    z-index: 1;
}

.cta-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(168, 85, 247, 0.1));
    color: #22d3ee;
    padding: 10px 22px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 24px;
}

.cta-content h2 {
    color: #67e8f9;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: 0.5px;
}

.cta-content h3 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.cta-content h3 span {
    background: linear-gradient(135deg, #a855f7, #22d3ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.cta-content h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #94a3b8;
    margin-bottom: 24px;
}

.cta-content p {
    color: #94a3b8;
    line-height: 1.8;
    font-size: 1.05rem;
    margin-bottom: 32px;
    max-width: 500px;
}

.cta-features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 36px;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #e2e8f0;
    font-size: 0.95rem;
    font-weight: 500;
}

.cta-feature i {
    color: #22d3ee;
    font-size: 1rem;
}

.cta-main-btn {
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    color: white;
    border: none;
    padding: 20px 44px;
    border-radius: 9999px;
    font-size: 1.15rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.4s ease;
    box-shadow: 0 15px 35px -5px rgba(168, 85, 247, 0.45);
}

.cta-main-btn:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 50px -5px rgba(236, 72, 153, 0.5);
}

.cta-main-btn i {
    font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 1200px) {
    .final-cta-container {
        gap: 60px;
    }

    .cta-content h3 {
        font-size: 2.6rem;
    }
}

@media (max-width: 1024px) {
    .final-cta-container {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }

    .cta-visual {
        order: -1;
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-content p {
        max-width: 100%;
    }

    .cta-features {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .final-cta-section {
        padding: 80px 5% 70px;
    }

    .cta-badge {
        padding: 8px 18px;
        font-size: 0.75rem;
    }

    .cta-content h2 {
        font-size: 1rem;
    }

    .cta-content h3 {
        font-size: 2rem;
    }

    .cta-content h4 {
        font-size: 1.2rem;
    }

    .cta-content p {
        font-size: 0.95rem;
    }

    .cta-features {
        flex-direction: column;
        gap: 12px;
    }

    .cta-feature {
        justify-content: center;
    }

    .cta-main-btn {
        padding: 16px 32px;
        font-size: 1rem;
    }

    .mobile-frame {
        width: 100px;
        left: -20px;
        bottom: -20px;
    }

    .floating-badge {
        padding: 10px 16px;
        font-size: 0.75rem;
        right: 0;
        top: 10px;
    }
}

@media (max-width: 480px) {
    .final-cta-section {
        padding: 60px 4% 50px;
    }

    .cta-content h3 {
        font-size: 1.7rem;
    }

    .cta-content h4 {
        font-size: 1.1rem;
    }

    .cta-content p {
        font-size: 0.9rem;
        margin-bottom: 24px;
    }

    .cta-main-btn {
        width: 100%;
        justify-content: center;
    }
}

/* Responsive */
@media (max-width: 992px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
    
    .testimonial-card {
        min-height: 280px;
    }
    
    .slider-btn {
        width: 48px;
        height: 48px;
        font-size: 1rem;
    }
    
    .final-cta-container {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }
    
    .mobile {
        position: static;
        margin: 30px auto 0;
        display: block;
    }
}

@media (max-width: 768px) {
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title h2 {
        font-size: 2.5rem;
        margin-bottom: 40px;
    }
    
    .testimonials-section {
        padding: 70px 5% 60px;
    }
    
    .testimonial-card {
        padding: 30px 24px;
        min-height: 320px;
        border-radius: 20px;
    }
    
    .stars {
        font-size: 1.3rem;
    }
    
    .testimonial-text {
        font-size: 1.05rem;
        margin-bottom: 30px;
    }
    
    .client-info img {
        width: 50px;
        height: 50px;
    }
    
    .client-info h4 {
        font-size: 1.05rem;
    }
    
    .client-info p {
        font-size: 0.85rem;
    }
    
    .quote-mark {
        font-size: 3.5rem;
        bottom: 20px;
        right: 24px;
    }
    
    .slider-nav {
        margin-top: 35px;
    }
    
    .slider-btn {
        width: 44px;
        height: 44px;
    }
    
    .slider-dots {
        margin-top: 20px;
    }
}

@media (max-width: 480px) {
    .testimonials-section {
        padding: 50px 4% 50px;
    }
    
    .section-title h2 {
        font-size: 2rem;
    }
    
    .testimonial-card {
        padding: 24px 20px;
        min-height: 350px;
        border-radius: 16px;
    }
    
    .stars {
        font-size: 1.2rem;
        margin-bottom: 15px;
    }
    
    .testimonial-text {
        font-size: 0.98rem;
        line-height: 1.7;
    }
    
    .client-info {
        gap: 12px;
    }
    
    .client-info img {
        width: 48px;
        height: 48px;
        border-width: 2px;
    }
    
    .client-info h4 {
        font-size: 1rem;
    }
    
    .client-info p {
        font-size: 0.8rem;
    }
    
    .quote-mark {
        font-size: 3rem;
    }
    
    .slider-nav {
        gap: 16px;
    }
    
    .slider-btn {
        width: 40px;
        height: 40px;
        font-size: 0.9rem;
    }
    
    .slider-dot {
        width: 10px;
        height: 10px;
    }
    
    .slider-dot.active {
        width: 28px;
    }
}
/* ====================== EXPERTS SECTION ====================== */
.experts-section {
    padding: 140px 6% 120px;
    background: linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%);
    position: relative;
    overflow: hidden;
}

.experts-bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 15% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 85% 75%, rgba(34, 211, 238, 0.08) 0%, transparent 40%);
    pointer-events: none;
}

.experts-container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.experts-header {
    text-align: center;
    margin-bottom: 70px;
}

.experts-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.1));
    color: #a855f7;
    padding: 10px 24px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.experts-header h2 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.experts-header h2 span {
    background: linear-gradient(135deg, #22d3ee, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.experts-header p {
    font-size: 1.15rem;
    color: #64748b;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.7;
}

.experts-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.expert-card {
    text-align: center;
    transition: all 0.5s ease;
}

.expert-card:hover {
    transform: translateY(-10px);
}

.expert-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 4px solid white;
}

.expert-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.expert-card:hover .expert-image-wrapper img {
    transform: scale(1.1);
}

.expert-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(168, 85, 247, 0.85) 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.expert-card:hover .expert-overlay {
    opacity: 1;
}

.expert-social {
    display: flex;
    gap: 12px;
}

.expert-social a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a855f7;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.expert-social a:hover {
    transform: scale(1.15);
    background: #22d3ee;
    color: white;
}

.expert-info h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 6px;
}

.expert-info .role {
    color: #a855f7;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 12px;
}

.expert-specialty {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.05));
    padding: 8px 16px;
    border-radius: 9999px;
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 500;
}

.expert-specialty i {
    color: #22d3ee;
    font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 1200px) {
    .experts-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
}

@media (max-width: 768px) {
    .experts-section {
        padding: 80px 5% 70px;
    }

    .experts-badge {
        padding: 8px 18px;
        font-size: 0.75rem;
    }

    .experts-header h2 {
        font-size: 2.2rem;
    }

    .experts-header p {
        font-size: 1rem;
    }

    .experts-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .expert-image-wrapper {
        border-radius: 20px;
        margin-bottom: 16px;
    }

    .expert-info h3 {
        font-size: 1.1rem;
    }

    .expert-info .role {
        font-size: 0.9rem;
    }

    .expert-specialty {
        padding: 6px 12px;
        font-size: 0.7rem;
    }
}

@media (max-width: 480px) {
    .experts-section {
        padding: 60px 4% 50px;
    }

    .experts-header {
        margin-bottom: 50px;
    }

    .experts-header h2 {
        font-size: 1.8rem;
    }

    .experts-header p {
        font-size: 0.9rem;
    }

    .experts-grid {
        grid-template-columns: 1fr;
        max-width: 300px;
        margin: 0 auto;
    }

    .expert-card {
        max-width: 280px;
        margin: 0 auto;
    }
}

/* ====================== CLOSE TO YOU SECTION ====================== */
.close-to-you-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    padding: 120px 6%;
    color: white;
    position: relative;
    overflow: hidden;
}

.close-to-you-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 50%);
    animation: pulse 15s ease-in-out infinite;
}

.close-to-you-section::after {
    content: '';
    position: absolute;
    bottom: -30%;
    right: -30%;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
    animation: pulse 18s ease-in-out infinite reverse;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
}

.close-container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
}

.close-container h2 {
    font-size: 3.2rem;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.15;
    background: linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.close-container p {
    font-size: 1.2rem;
    color: #94a3b8;
    margin-bottom: 56px;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}

.quote-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: rgba(255, 255, 255, 0.03);
    padding: 48px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.input-group {
    position: relative;
}

.input-group.textarea-group {
    grid-column: 1 / -1;
}

.input-icon {
    position: absolute;
    left: 20px;
    top: 22px;
    color: #64748b;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    z-index: 1;
    pointer-events: none;
}

.quote-form input,
.quote-form textarea {
    width: 100%;
    padding: 18px 20px 18px 54px;
    border: 2px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    background: rgba(15, 23, 42, 0.5);
    color: #f8fafc;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
}

.quote-form textarea {
    min-height: 120px;
    resize: vertical;
    line-height: 1.6;
}

.quote-form input::placeholder,
.quote-form textarea::placeholder {
    color: #64748b;
    transition: all 0.3s ease;
}

.quote-form input:focus,
.quote-form textarea:focus {
    border-color: #22d3ee;
    background: rgba(15, 23, 42, 0.7);
    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.12), 0 8px 25px rgba(0, 0, 0, 0.2);
}

.quote-form input:focus + .input-icon,
.quote-form textarea:focus + .input-icon,
.input-group:focus-within .input-icon {
    color: #22d3ee;
    transform: translateY(-2px);
}

.quote-form input:not(:placeholder-shown),
.quote-form textarea:not(:placeholder-shown) {
    border-color: rgba(255, 255, 255, 0.12);
}

.quote-btn {
    background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
    color: white;
    border: none;
    padding: 20px 52px;
    border-radius: 14px;
    font-weight: 600;
    font-size: 1.1rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 35px rgba(236, 72, 153, 0.35);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 8px auto 0;
}

.quote-btn:hover:not(:disabled) {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 55px rgba(236, 72, 153, 0.45);
}

.quote-btn:active:not(:disabled) {
    transform: translateY(-2px) scale(0.98);
}

.quote-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* ====================== ABOUT & FAQ SECTION ====================== */
.about-faq-section {
    padding: 140px 6% 120px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    position: relative;
    overflow: hidden;
}

.about-faq-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.about-circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
}

.about-circle-1 {
    width: 300px;
    height: 300px;
    top: -80px;
    left: -80px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
}

.about-circle-2 {
    width: 250px;
    height: 250px;
    bottom: -50px;
    right: -50px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
}

.about-faq-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.about-content {
    position: relative;
    z-index: 1;
}

.about-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(168, 85, 247, 0.1));
    color: #22d3ee;
    padding: 10px 22px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.about-content h2 {
    font-size: 3.2rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 20px;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.about-content h2 span {
    background: linear-gradient(135deg, #22d3ee, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.about-intro {
    margin-bottom: 40px;
}

.about-intro p {
    font-size: 1.1rem;
    color: #64748b;
    line-height: 1.8;
    max-width: 500px;
}

.faq-accordion {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.faq-item {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(168, 85, 247, 0.08);
    transition: all 0.4s ease;
}

.faq-item:hover {
    border-color: rgba(168, 85, 247, 0.15);
    box-shadow: 0 12px 30px rgba(168, 85, 247, 0.1);
}

.faq-question {
    width: 100%;
    padding: 24px 28px;
    background: none;
    border: none;
    text-align: left;
    font-size: 1.05rem;
    font-weight: 600;
    color: #0f172a;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.faq-question-text {
    flex: 1;
}

.arrow {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.05));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a855f7;
    font-size: 0.8rem;
    transition: all 0.4s ease;
    flex-shrink: 0;
}

.faq-item.active .arrow {
    background: linear-gradient(135deg, #a855f7, #ec4899);
    color: white;
    transform: rotate(180deg);
}

.faq-answer {
    padding: 0 28px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease;
}

.faq-answer.active {
    padding: 0 28px 24px;
    max-height: 200px;
}

.faq-answer p {
    color: #64748b;
    line-height: 1.8;
    font-size: 0.95rem;
    border-top: 1px solid rgba(168, 85, 247, 0.1);
    padding-top: 16px;
}

.faq-image-wrapper {
    position: relative;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 
        0 30px 60px -20px rgba(168, 85, 247, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.5) inset;
}

.faq-image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
}

.faq-image-wrapper:hover img {
    transform: scale(1.03);
}

.faq-image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
    pointer-events: none;
}

.faq-stats {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
}

.faq-stat {
    text-align: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 16px 20px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-num {
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    line-height: 1;
    margin-bottom: 4px;
}

.stat-text {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 1200px) {
    .about-faq-container {
        gap: 60px;
    }
}

@media (max-width: 1024px) {
    .about-faq-container {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .about-content {
        order: 1;
    }

    .faq-image-wrapper {
        max-width: 500px;
        margin: 0 auto;
    }

    .about-intro p {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .about-faq-section {
        padding: 80px 5% 70px;
    }

    .about-badge {
        padding: 8px 18px;
        font-size: 0.75rem;
    }

    .about-content h2 {
        font-size: 2.2rem;
    }

    .about-intro p {
        font-size: 1rem;
    }

    .faq-question {
        padding: 20px 24px;
        font-size: 0.95rem;
    }

    .arrow {
        width: 28px;
        height: 28px;
        font-size: 0.7rem;
    }

    .faq-answer.active {
        padding: 0 24px 20px;
    }

    .faq-answer p {
        font-size: 0.9rem;
    }

    .faq-stats {
        flex-wrap: wrap;
        gap: 8px;
    }

    .faq-stat {
        padding: 12px 14px;
        flex: 1;
        min-width: 80px;
    }

    .stat-num {
        font-size: 1.2rem;
    }

    .stat-text {
        font-size: 0.6rem;
    }
}

@media (max-width: 480px) {
    .about-faq-section {
        padding: 60px 4% 50px;
    }

    .about-content h2 {
        font-size: 1.8rem;
    }

    .about-intro p {
        font-size: 0.9rem;
    }

    .faq-question {
        padding: 18px 20px;
        font-size: 0.9rem;
    }

    .faq-answer p {
        font-size: 0.85rem;
    }

    .faq-image-wrapper {
        border-radius: 20px;
    }
}

/* Responsive */
@media (max-width: 992px) {
    .about-faq-container {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .close-to-you-section {
        padding: 100px 5%;
    }
    
    .close-container h2 {
        font-size: 2.6rem;
    }
    
    .quote-form {
        padding: 36px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}

@media (max-width: 768px) {
    .experts-grid {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    
    .close-to-you-section {
        padding: 80px 4%;
    }
    
    .close-container h2 {
        font-size: 2.2rem;
        margin-bottom: 15px;
    }
    
    .close-container p {
        font-size: 1rem;
        margin-bottom: 44px;
    }
    
    .quote-form {
        padding: 28px;
        border-radius: 22px;
        gap: 16px;
    }
    
    .quote-form input,
    .quote-form textarea {
        padding: 16px 16px 16px 48px;
        font-size: 0.95rem;
    }
    
    .input-icon {
        left: 16px;
        top: 18px;
        font-size: 1rem;
    }
    
    .quote-btn {
        padding: 18px 40px;
        font-size: 1rem;
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .close-to-you-section {
        padding: 70px 4%;
    }
    
    .close-container h2 {
        font-size: 1.85rem;
    }
    
    .close-container p {
        font-size: 0.95rem;
        margin-bottom: 36px;
    }
    
    .quote-form {
        padding: 22px;
        border-radius: 18px;
        gap: 14px;
    }
    
    .quote-form input,
    .quote-form textarea {
        padding: 14px 14px 14px 44px;
        font-size: 0.9rem;
        border-radius: 12px;
    }
    
    .input-icon {
        left: 14px;
        top: 16px;
        font-size: 0.9rem;
    }
    
    .quote-btn {
        padding: 16px 32px;
        font-size: 0.95rem;
        margin-top: 4px;
    }
}

@media (max-width: 360px) {
    .close-to-you-section {
        padding: 60px 3%;
    }
    
    .close-container h2 {
        font-size: 1.6rem;
    }
    
    .quote-form {
        padding: 18px;
    }
}

/* ====================== NOTIFICATION STYLES ====================== */
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

/* Textarea styles */
.textarea-group {
    width: 100%;
    max-width: 900px;
}

.quote-form textarea {
    width: 100%;
    padding: 20px 20px 20px 50px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    font-size: 1rem;
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-sizing: border-box;
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
}

.quote-form textarea::placeholder {
    color: #94a3b8;
}

.quote-form textarea:focus {
    border-color: #22d3ee;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.1);
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
    
    .textarea-group {
        min-width: 100%;
    }
    
    .quote-form textarea {
        padding: 18px 18px 18px 46px;
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .quote-form textarea {
        padding: 16px 16px 16px 42px;
        font-size: 0.9rem;
    }
}

    </style>