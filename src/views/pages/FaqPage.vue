<template>
    <NavbarSection />
  <div class="faq-page">
    <!-- Main Hero Section -->
    <section class="faq-hero">
      <div class="faq-hero-bg">
        <div class="hero-circle hero-circle-1"></div>
        <div class="hero-circle hero-circle-2"></div>
      </div>
      <div class="faq-hero-content">
        <span class="faq-badge">Help Center</span>
        <h1>Frequently Asked <span>Questions</span></h1>
        <p>At Buy Dream Web, we specialize in delivering comprehensive digital solutions, including ecommerce solutions services, website design, digital marketing agency expertise, and more. Below, we address some of the most common inquiries from our clients to provide clarity on our offerings.</p>
      </div>
    </section>

    <!-- Tabs Section -->
    <section class="faq-tabs-section">
      <div class="faq-tabs-container">
        <div class="tabs-header">
          <h2>Browse By <span>Category</span></h2>
        </div>
        
        <div class="tabs-wrapper">
          <div class="tabs-nav">
            <button 
              v-for="(tab, index) in tabs" 
              :key="index"
              class="tab-btn"
              :class="{ active: activeTab === index }"
              @click="activeTab = index"
            >
              <i :class="tab.icon"></i>
              {{ tab.name }}
            </button>
          </div>

          <div class="tabs-content">
            <div class="tab-panel" v-show="activeTab === 0">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in generalFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(0, index)">
                    <span class="faq-icon"><i class="fas fa-circle-question"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[0] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[0] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-panel" v-show="activeTab === 1">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in appDevFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(1, index)">
                    <span class="faq-icon"><i class="fas fa-mobile-screen-button"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[1] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[1] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-panel" v-show="activeTab === 2">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in webDesignFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(2, index)">
                    <span class="faq-icon"><i class="fas fa-laptop-code"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[2] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[2] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-panel" v-show="activeTab === 3">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in digitalMarketingFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(3, index)">
                    <span class="faq-icon"><i class="fas fa-bullhorn"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[3] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[3] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-panel" v-show="activeTab === 4">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in smmFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(4, index)">
                    <span class="faq-icon"><i class="fas fa-share-nodes"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[4] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[4] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-panel" v-show="activeTab === 5">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in seoFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(5, index)">
                    <span class="faq-icon"><i class="fas fa-magnifying-glass-chart"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[5] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[5] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-panel" v-show="activeTab === 6">
              <div class="faq-grid">
                <div class="faq-item" v-for="(faq, index) in logoDesignFaqs" :key="index">
                  <button class="faq-question" @click="toggleFaq(6, index)">
                    <span class="faq-icon"><i class="fas fa-pen-nib"></i></span>
                    <span class="faq-text">{{ faq.question }}</span>
                    <span class="faq-arrow" :class="{ active: openFaq[6] === index }">
                      <i class="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  <div class="faq-answer" :class="{ active: openFaq[6] === index }">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterSection />
</template>

<script setup>
import FooterSection from '@/components/FooterSection.vue'
import NavbarSection from '@/components/NavbarSection.vue'
import { ref } from 'vue'


const activeTab = ref(0)
const openFaq = ref({
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null
})

const tabs = [
  { name: 'General', icon: 'fas fa-circle-info' },
  { name: 'App Development', icon: 'fas fa-mobile-screen-button' },
  { name: 'Website Design', icon: 'fas fa-laptop-code' },
  { name: 'Digital Marketing', icon: 'fas fa-bullhorn' },
  { name: 'SMM', icon: 'fas fa-share-nodes' },
  { name: 'SEO', icon: 'fas fa-magnifying-glass-chart' },
  { name: 'Logo Design', icon: 'fas fa-pen-nib' }
]

const generalFaqs = [
  {
    question: 'What services does Buy Dream Web provide?',
    answer: 'We provide complete web design, custom website development, mobile app development, e-commerce solutions, UI/UX design, digital marketing, SEO services, and brand identity services.'
  },
  {
    question: 'How can I get started with your services?',
    answer: 'Simply fill out the contact form on our website or call us directly. Our team will schedule a free consultation to understand your requirements and propose the best solution.'
  },
  {
    question: 'What makes Buy Dream Web different from other agencies?',
    answer: 'We combine creativity with technical excellence, deliver fast turnaround, offer transparent pricing, and provide ongoing support even after project completion.'
  }
]

const appDevFaqs = [
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'The development timeline depends on the complexity of the app. Simple apps take 2-3 months, while complex applications can take 4-6 months or more.'
  },
  {
    question: 'Do you provide both iOS and Android development?',
    answer: 'Yes, we develop native apps for both iOS and Android platforms, as well as cross-platform solutions using frameworks like React Native and Flutter.'
  },
  {
    question: 'Do you offer app maintenance and updates?',
    answer: 'Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, OS updates compatibility, and new feature additions.'
  }
]

const webDesignFaqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard business website takes 2-4 weeks, while complex e-commerce or custom websites may take 6-8 weeks depending on requirements.'
  },
  {
    question: 'Do you provide responsive website design?',
    answer: 'Yes, all our websites are fully responsive and optimized for all devices including desktops, tablets, and mobile phones.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We specialize in website redesigns, modernizing outdated designs while preserving your existing content and SEO value.'
  }
]

const digitalMarketingFaqs = [
  {
    question: 'What digital marketing services do you offer?',
    answer: 'We offer comprehensive digital marketing including SEO, social media marketing, content marketing, email marketing, PPC advertising, and analytics.'
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'SEO typically takes 3-6 months for significant results, while PPC and social media ads can show immediate results once campaigns are launched.'
  },
  {
    question: 'Do you provide monthly marketing reports?',
    answer: 'Yes, we provide detailed monthly reports with key performance metrics, insights, and recommendations for continuous improvement.'
  }
]

const smmFaqs = [
  {
    question: 'Which social media platforms do you manage?',
    answer: 'We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok, and Pinterest based on your target audience.'
  },
  {
    question: 'How often will you post on my social media?',
    answer: 'We typically post 3-5 times per week on each platform, with daily engagement and community management included in our packages.'
  },
  {
    question: 'Do you create custom social media content?',
    answer: 'Yes, we create custom graphics, videos, and written content tailored to your brand voice and audience preferences.'
  }
]

const seoFaqs = [
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a long-term strategy. Most clients see significant improvements within 3-6 months, with continued growth over 12-18 months.'
  },
  {
    question: 'What is included in your SEO services?',
    answer: 'Our SEO services include technical SEO audit, on-page optimization, off-page link building, content creation, keyword research, and monthly reporting.'
  },
  {
    question: 'Do you guarantee SEO results?',
    answer: 'No ethical SEO agency can guarantee specific rankings. We use white-hat techniques and provide realistic expectations based on your industry and competition.'
  }
]

const logoDesignFaqs = [
  {
    question: 'How many logo design concepts do you provide?',
    answer: 'We provide 3-5 initial concepts for you to review, with unlimited revisions until you are completely satisfied with the final design.'
  },
  {
    question: 'What files will I receive for my logo?',
    answer: 'You will receive all file formats including AI, EPS, PDF, PNG, JPG, and SVG, along with brand guidelines for consistent usage.'
  },
  {
    question: 'Do you offer brand identity packages?',
    answer: 'Yes, we offer comprehensive brand identity packages that include logo, color palette, typography, business cards, and brand guidelines.'
  }
]

const toggleFaq = (tabIndex, faqIndex) => {
  openFaq.value[tabIndex] = openFaq.value[tabIndex] === faqIndex ? null : faqIndex
}
</script>

<style scoped>
/* ==================== FAQ PAGE STYLES ==================== */
.faq-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

/* Hero Section */
.faq-hero {
  padding: 160px 6% 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
}

.faq-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
}

.hero-circle-1 {
  width: 400px;
  height: 400px;
  top: -150px;
  right: -100px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%);
}

.hero-circle-2 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  left: -100px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%);
}

.faq-hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.faq-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.15));
  color: #d8b4fe;
  padding: 12px 28px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.faq-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.faq-hero-content h1 span {
  background: linear-gradient(135deg, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.faq-hero-content p {
  font-size: 1.2rem;
  color: #94a3b8;
  margin: 0 auto;
  line-height: 1.7;
}

/* Tabs Section */
.faq-tabs-section {
  padding: 80px 6% 100px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.faq-tabs-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tabs-header {
  text-align: center;
  margin-bottom: 50px;
}

.tabs-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.tabs-header h2 span {
  background: linear-gradient(135deg, #a855f7, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.tabs-wrapper {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid rgba(168, 85, 247, 0.08);
}

.tabs-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 20px;
  background: linear-gradient(180deg, #f8fafc, #ffffff);
  border-bottom: 1px solid rgba(168, 85, 247, 0.1);
}

.tab-btn {
  padding: 14px 24px;
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.tab-btn i {
  font-size: 1rem;
}

.tab-btn:hover {
  background: rgba(168, 85, 247, 0.08);
  color: #a855f7;
}

.tab-btn.active {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  color: white;
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
}

.tabs-content {
  padding: 30px;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: #f8fafc;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(168, 85, 247, 0.08);
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(168, 85, 247, 0.15);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.08);
}

.faq-question {
  width: 100%;
  padding: 20px 24px;
  background: none;
  border: none;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
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
  max-height: 200px;
}

.faq-answer p {
  padding: 0 24px 20px 84px;
  color: #64748b;
  line-height: 1.8;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .faq-hero {
    padding: 140px 5% 80px;
  }

  .faq-hero-content h1 {
    font-size: 2.8rem;
  }

  .tabs-nav {
    gap: 6px;
    padding: 16px;
  }

  .tab-btn {
    padding: 12px 18px;
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .faq-hero {
    padding: 120px 5% 60px;
  }

  .faq-badge {
    padding: 10px 20px;
    font-size: 0.8rem;
  }

  .faq-hero-content h1 {
    font-size: 2.2rem;
  }

  .faq-hero-content p {
    font-size: 1rem;
  }

  .tabs-header h2 {
    font-size: 2rem;
  }

  .tabs-nav {
    justify-content: center;
  }

  .tab-btn {
    padding: 10px 16px;
    font-size: 0.8rem;
  }

  .tab-btn i {
    display: none;
  }

  .tabs-content {
    padding: 20px;
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
    padding: 0 18px 16px 66px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .faq-hero {
    padding: 100px 4% 50px;
  }

  .faq-hero-content h1 {
    font-size: 1.8rem;
  }

  .tabs-header h2 {
    font-size: 1.6rem;
  }

  .tabs-wrapper {
    border-radius: 16px;
  }

  .tabs-nav {
    padding: 12px;
    gap: 8px;
  }

  .tab-btn {
    padding: 10px 14px;
    font-size: 0.75rem;
  }

  .tabs-content {
    padding: 16px;
  }

  .faq-question {
    padding: 14px;
    flex-wrap: wrap;
  }

  .faq-icon {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }

  .faq-text {
    font-size: 0.9rem;
  }

  .faq-arrow {
    width: 28px;
    height: 28px;
  }

  .faq-answer p {
    padding: 0 14px 14px 14px;
  }
}
</style>