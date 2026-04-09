<template>
<NavbarSection />

<div class="packages-page">
  <!-- Hero Section -->
  <section class="packages-hero">
    <div class="hero-bg">
      <div class="hero-glow"></div>
      <div class="hero-glow-2"></div>
    </div>
    <div class="hero-content">
      <span class="hero-badge">
        <i class="fas fa-tags"></i>
        Pricing Plans
      </span>
      <h1>Choose Your <span>Perfect Plan</span></h1>
      <p style="color: white;">Transparent pricing with no hidden fees. Select the package that best fits your business needs.</p>
      <div class="hero-scroll">
        <span>Explore Plans</span>
        <i class="fas fa-arrow-down"></i>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing-section">
    <div class="pricing-container">
      <!-- Category Tabs -->
      <div class="category-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tab-btn" 
          :class="{ active: activeTab === tab.id }" 
          @click="activeTab = tab.id">
          <i :class="tab.icon"></i>
          {{ tab.name }}
        </button>
      </div>

      <!-- Pricing Grid -->
      <div class="pricing-grid">
        <div 
          v-for="(pkg, index) in filteredPackages" 
          :key="index"
          class="pricing-card"
          :class="{ popular: pkg.popular }">
          <div v-if="pkg.badge" class="card-badge" :class="pkg.badgeType">
            {{ pkg.badge }}
          </div>
          <div class="card-header">
            <h3>{{ pkg.name }}</h3>
            <p class="card-description">{{ pkg.description }}</p>
          </div>
          <div class="price-section">
            <span class="currency">$</span>
            <span class="amount">{{ pkg.price }}</span>
            <span v-if="pkg.oldPrice" class="old-price">${{ pkg.oldPrice }}</span>
          </div>
          <button class="select-btn" @click="selectPlan(pkg.name)">
            <i class="fas fa-rocket"></i>
            Get Started
          </button>
          <ul class="features-list">
            <li v-for="(feature, fIndex) in pkg.features" :key="fIndex">
              <i class="fas fa-check-circle"></i>
              {{ feature }}
            </li>
          </ul>
          <a href="#" class="view-details">
            View Details <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-section">
    <div class="features-container">
      <div class="section-header">
        <span class="section-tag">Why Choose Us</span>
        <h2>What's <span>Included</span></h2>
      </div>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Fast Delivery</h3>
          <p>Quick turnaround times to get your project live faster.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-headset"></i>
          </div>
          <h3>24/7 Support</h3>
          <p>Round-the-clock assistance for all your needs.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Secure & Reliable</h3>
          <p>Enterprise-grade security for your peace of mind.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <i class="fas fa-sync"></i>
          </div>
          <h3>Free Revisions</h3>
          <p>Unlimited changes until you're completely satisfied.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq-section">
    <div class="faq-container">
      <div class="section-header">
        <span class="section-tag">FAQ</span>
        <h2>Common <span>Questions</span></h2>
      </div>
      <div class="faq-grid">
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <button class="faq-question" @click="toggleFaq(index)">
            <span class="faq-icon"><i class="fas fa-question-circle"></i></span>
            <span class="faq-text">{{ faq.question }}</span>
            <span class="faq-arrow" :class="{ active: openFaq === index }">
              <i class="fas fa-chevron-down"></i>
            </span>
          </button>
          <div class="faq-answer" :class="{ active: openFaq === index }">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<FooterSection />
</template>

<script setup>
import { ref, computed } from 'vue'
import FooterSection from '@/components/FooterSection.vue'
import NavbarSection from '@/components/NavbarSection.vue'

const activeTab = ref('all')
const openFaq = ref(null)

const tabs = [
  { id: 'all', name: 'All', icon: 'fas fa-th-large' },
  { id: 'ecommerce', name: 'Ecommerce', icon: 'fas fa-shopping-cart' },
  { id: 'website', name: 'Website', icon: 'fas fa-globe' },
  { id: 'logo', name: 'Logo', icon: 'fas fa-pen-nib' },
  { id: 'app', name: 'App', icon: 'fas fa-mobile-alt' },
  { id: 'marketing', name: 'Marketing', icon: 'fas fa-bullhorn' }
]

const packages = {
  all: [
    { name: 'Starter', description: 'Perfect for small businesses', price: '210', oldPrice: '250', popular: false, badge: null, badgeType: '', features: ['3 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO'] },
    { name: 'Professional', description: 'Best for growing businesses', price: '520', oldPrice: '590', popular: true, badge: 'Most Popular', badgeType: 'popular', features: ['10 Pages', 'Custom Design', 'Speed Optimization', 'Advanced SEO'] },
    { name: 'Premium', description: 'For enterprise needs', price: '1050', oldPrice: '1150', popular: false, badge: 'Recommended', badgeType: 'recommended', features: ['Unlimited Pages', 'Full UI/UX Design', 'Blog Integration', 'Priority Support'] }
  ],
  ecommerce: [
    { name: 'Basic Store', description: 'Start selling online', price: '450', oldPrice: '520', popular: false, badge: null, badgeType: '', features: ['Up to 50 Products', 'Payment Gateway', 'Basic Inventory', 'Mobile Responsive'] },
    { name: 'Growth Store', description: 'Scale your business', price: '890', oldPrice: '990', popular: true, badge: 'Most Popular', badgeType: 'popular', features: ['Up to 500 Products', 'Advanced Analytics', 'Multi-currency', 'Email Marketing'] },
    { name: 'Enterprise', description: 'Full e-commerce solution', price: '1850', oldPrice: '2100', popular: false, badge: 'Recommended', badgeType: 'recommended', features: ['Unlimited Products', 'Custom API', 'Dedicated Support', 'Advanced Reports'] }
  ],
  website: [
    { name: 'Landing Page', description: 'Single page solution', price: '180', oldPrice: '220', popular: false, badge: null, badgeType: '', features: ['Single Page Design', 'Mobile Responsive', 'Contact Form', 'Basic SEO'] },
    { name: 'Business Website', description: 'Grow your presence', price: '480', oldPrice: '550', popular: true, badge: 'Most Popular', badgeType: 'popular', features: ['Up to 8 Pages', 'SEO Optimized', 'Social Media Integration', 'Analytics'] },
    { name: 'Corporate', description: 'Full corporate solution', price: '980', oldPrice: '1100', popular: false, badge: 'Recommended', badgeType: 'recommended', features: ['Unlimited Pages', 'Custom CMS', 'Multi-language', 'Advanced Security'] }
  ],
  logo: [
    { name: 'Basic Logo', description: 'Simple brand identity', price: '80', oldPrice: '100', popular: false, badge: null, badgeType: '', features: ['2 Concepts', '2 Revisions', 'High-Res Files', 'PNG & JPG'] },
    { name: 'Professional', description: 'Complete brand solution', price: '150', oldPrice: '180', popular: true, badge: 'Most Popular', badgeType: 'popular', features: ['5 Concepts', 'Unlimited Revisions', 'Brand Guidelines', 'Vector Files'] },
    { name: 'Complete Branding', description: 'Full brand package', price: '320', oldPrice: '380', popular: false, badge: 'Recommended', badgeType: 'recommended', features: ['8 Concepts', 'Business Cards', 'Social Media Kit', 'Letterhead'] }
  ],
  app: [
    { name: 'MVP App', description: 'Launch your idea', price: '1200', oldPrice: '1400', popular: false, badge: null, badgeType: '', features: ['Single Platform', 'Basic Features', '3 Months Support', 'App Store Submission'] },
    { name: 'Cross-Platform', description: 'Reach all users', price: '2500', oldPrice: '2900', popular: true, badge: 'Most Popular', badgeType: 'popular', features: ['iOS & Android', 'Advanced Features', '6 Months Support', 'Push Notifications'] },
    { name: 'Enterprise App', description: 'Full-scale solution', price: '4500', oldPrice: '5200', popular: false, badge: 'Recommended', badgeType: 'recommended', features: ['Custom Backend', 'API Integration', '12 Months Support', 'Dedicated Manager'] }
  ],
  marketing: [
    { name: 'Starter', description: 'Begin your journey', price: '300', oldPrice: '350', popular: false, badge: null, badgeType: '', features: ['Social Media Mgmt', 'Basic SEO', 'Monthly Report', 'Content Planning'] },
    { name: 'Growth', description: 'Accelerate results', price: '650', oldPrice: '750', popular: true, badge: 'Most Popular', badgeType: 'popular', features: ['PPC Campaigns', 'Advanced SEO', 'Content Marketing', 'Weekly Reports'] },
    { name: 'Premium', description: 'Full digital strategy', price: '1200', oldPrice: '1400', popular: false, badge: 'Recommended', badgeType: 'recommended', features: ['Full Digital Strategy', 'Email Marketing', 'Analytics Dashboard', 'Dedicated Manager'] }
  ]
}

const filteredPackages = computed(() => {
  return packages[activeTab.value] || packages.all
})

const selectPlan = (plan) => {
  alert(`You selected the ${plan} plan! Our team will contact you shortly.`)
}

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'Do you offer custom pricing for specific projects?',
    answer: 'Yes, we offer custom pricing based on your specific requirements. Contact us for a personalized quote.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, bank transfers, and offer flexible payment plans for larger projects.'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 100% refund within the first 7 days if you are not satisfied with our services.'
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Absolutely! We offer various maintenance packages to keep your website or app running smoothly.'
  }
]
</script>

<style scoped>
.packages-page {
  min-height: 100vh;
  background: #f8fafc;
}

/* Hero Section */
.packages-hero {
  padding: 200px 6% 140px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
  filter: blur(80px);
}

.hero-glow-2 {
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: -150px;
  left: -100px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%);
  filter: blur(80px);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1));
  color: #d8b4fe;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 28px;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.packages-hero h1 {
  font-size: 4.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.packages-hero h1 span {
  background: linear-gradient(135deg, #22d3ee, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.packages-hero > p {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 550px;
  margin: 0 auto 40px;
  line-height: 1.8;
}

.hero-scroll {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #64748b;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-scroll:hover {
  color: #a855f7;
}

.hero-scroll i {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

/* Pricing Section */
.pricing-section {
  padding: 80px 6% 120px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.pricing-container {
  max-width: 1280px;
  margin: 0 auto;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 60px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border: 2px solid rgba(168, 85, 247, 0.15);
  background: white;
  color: #64748b;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn i {
  font-size: 0.9rem;
}

.tab-btn:hover {
  border-color: #a855f7;
  color: #a855f7;
}

.tab-btn.active {
  background: linear-gradient(135deg, #a855f7, #8b5cf6);
  border-color: transparent;
  color: white;
  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.35);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: start;
}

.pricing-card {
  background: white;
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(168, 85, 247, 0.08);
  position: relative;
}

.pricing-card.popular {
  transform: scale(1.05);
  border-color: #a855f7;
  box-shadow: 0 20px 50px rgba(168, 85, 247, 0.18);
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(168, 85, 247, 0.15);
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-8px);
}

.card-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-badge.popular {
  background: linear-gradient(135deg, #a855f7, #8b5cf6);
  color: white;
}

.card-badge.recommended {
  background: linear-gradient(135deg, #22d3ee, #14b8a6);
  color: white;
}

.card-header {
  margin-bottom: 20px;
}

.card-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.card-description {
  font-size: 0.9rem;
  color: #64748b;
}

.price-section {
  margin: 24px 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.price-section .currency {
  font-size: 1.5rem;
  color: #64748b;
  font-weight: 600;
}

.price-section .amount {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a855f7, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.price-section .old-price {
  font-size: 1.1rem;
  color: #94a3b8;
  text-decoration: line-through;
  margin-left: 8px;
}

.select-btn {
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(135deg, #a855f7, #8b5cf6);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 28px;
}

.select-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(168, 85, 247, 0.35);
}

.features-list {
  list-style: none;
  text-align: left;
  margin-bottom: 24px;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  color: #64748b;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(168, 85, 247, 0.08);
}

.features-list li:last-child {
  border-bottom: none;
}

.features-list i {
  color: #22d3ee;
  font-size: 0.9rem;
}

.view-details {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #a855f7;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-details:hover {
  gap: 14px;
}

/* Features Section */
.features-section {
  padding: 100px 6% 100px;
  background: white;
}

.features-container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.1));
  color: #a855f7;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  border: 1px solid rgba(168, 85, 247, 0.15);
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 16px;
}

.section-header h2 span {
  background: linear-gradient(135deg, #a855f7, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.feature-item {
  background: #f8fafc;
  padding: 36px 28px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid transparent;
}

.feature-item:hover {
  background: white;
  border-color: rgba(168, 85, 247, 0.15);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(168, 85, 247, 0.12);
}

.feature-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(34, 211, 238, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: #a855f7;
  font-size: 1.6rem;
}

.feature-item h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.feature-item p {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* FAQ Section */
.faq-section {
  padding: 100px 6% 120px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(168, 85, 247, 0.08);
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(168, 85, 247, 0.15);
}

.faq-question {
  width: 100%;
  padding: 22px 26px;
  background: none;
  border: none;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.faq-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(34, 211, 238, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a855f7;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.faq-text {
  flex: 1;
  font-size: 1.05rem;
  font-weight: 600;
  color: #0f172a;
}

.faq-arrow {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(168, 85, 247, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a855f7;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.faq-arrow.active {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  color: white;
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
}

.faq-answer.active {
  max-height: 150px;
}

.faq-answer p {
  padding: 0 26px 22px 86px;
  color: #64748b;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1100px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
  
  .pricing-card.popular {
    transform: none;
  }
  
  .pricing-card.popular:hover {
    transform: translateY(-8px);
  }
}

@media (max-width: 768px) {
  .packages-hero {
    padding: 160px 5% 100px;
  }
  
  .packages-hero h1 {
    font-size: 2.8rem;
  }
  
  .hero-badge {
    padding: 10px 20px;
    font-size: 0.75rem;
  }
  
  .category-tabs {
    gap: 10px;
  }
  
  .tab-btn {
    padding: 10px 18px;
    font-size: 0.85rem;
  }
  
  .pricing-section,
  .features-section,
  .faq-section {
    padding: 80px 5% 80px;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-question {
    padding: 16px 18px;
    gap: 12px;
  }
  
  .faq-icon {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
  
  .faq-text {
    font-size: 0.95rem;
  }
  
  .faq-answer p {
    padding: 0 18px 16px 64px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .packages-hero h1 {
    font-size: 2.2rem;
  }
  
  .packages-hero > p {
    font-size: 1rem;
  }
  
  .pricing-card {
    padding: 32px 24px;
  }
  
  .price-section .amount {
    font-size: 2.8rem;
  }
}
</style>