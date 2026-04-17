<template>
      <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="footer-glow-2"></div>
    
    <div class="footer-main">
      <div class="footer-brand">
        <router-link to="/" class="footer-logo">
          <img width="200" src="/images/bdy2.webp" alt="Buy Dream Web">
        </router-link>
        <p>We are a full-service web development agency helping startups, SMEs, and enterprises thrive online...</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
        </div>
      </div>
      
      <!-- Quick Links, Services, Contact columns remain same -->
      <!-- (I kept them identical to original for fidelity) -->
      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><router-link to="/" class="footer-link">Home</router-link></li>
          <li><router-link to="/about" class="footer-link">About Us</router-link></li>
          <li><router-link to="/packages" class="footer-link">Packages</router-link></li>
          <li><router-link to="/faq" class="footer-link">FAQ</router-link></li>
          <li><router-link to="/contact" class="footer-link">Contact Us</router-link></li>
        </ul>
      </div>
      
      <div class="footer-column"> 
        <h4>Our Services</h4>
        <ul class="footer-links">
          <li><router-link to="/website-design" class="footer-link">Website Design</router-link></li>
          <li><router-link to="/logo-design" class="footer-link">Logo Design</router-link></li>
          <li><router-link to="/brand-identity" class="footer-link">Brand Identity</router-link></li>
          <li><router-link to="/app-development" class="footer-link">App Development</router-link></li>
          <li><router-link to="/seo" class="footer-link">SEO Services</router-link></li>
          <li><router-link to="/digital-marketing" class="footer-link">Digital Marketing</router-link></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Get In Touch</h4>
        <div class="footer-contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>123 Digital Avenue, Tech Park<br>London, UK EC1A 1BB</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-phone-alt"></i>
          <span><a href="tel:+44757822382">+44 7578 22382</a></span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-envelope"></i>
          <span><a href="mailto:hello@bdw.com">hello@bdw.com</a></span>
        </div>
        
        <div class="footer-newsletter">
          <p>Subscribe to our newsletter for updates and insights.</p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input type="email" placeholder="Enter your email" v-model="newsletterEmail" required>
            <button type="submit"><i class="fas fa-paper-plane"></i> Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="footer-copyright">© 2024 <span>Buy Dream Web</span>. All rights reserved. Crafted with ❤️</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const newsletterEmail = ref('')

const subscribeNewsletter = () => {
  alert("🎉 Successfully subscribed! Welcome to our community.")
  newsletterEmail.value = ''
}

</script>

<style scoped>
/* ==================== ADVANCED FOOTER ==================== */
.footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
    position: relative;
    overflow: hidden;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent);
}

.footer-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    top: -250px;
    right: -100px;
    pointer-events: none;
}

.footer-glow-2 {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    bottom: -200px;
    left: -100px;
    pointer-events: none;
}

.footer-main {
    max-width: 1380px;
    margin: 0 auto;
    padding: 80px 6% 60px;
    display: grid;
    grid-template-columns: 1.4fr 1fr 1.2fr 1fr;
    gap: 40px;
    position: relative;
    z-index: 1;
}

.footer-brand {
    max-width: 320px;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    margin-bottom: 24px;
}

.footer-logo .icon {
    font-size: 2.4rem;
    background: linear-gradient(135deg, #a855f7, #ec4899, #a855f7);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradientShift 3s ease infinite;
}

.footer-logo .name {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    letter-spacing: -0.5px;
}

.footer-brand p {
    color: #94a3b8;
    line-height: 1.8;
    font-size: 0.95rem;
    margin-bottom: 28px;
}

.footer-social {
    display: flex;
    gap: 14px;
}

.footer-social a {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-social a:hover {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-color: transparent;
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
}

.footer-column h4 {
    color: white;
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 24px;
    position: relative;
    padding-bottom: 12px;
}

.footer-column h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 2px;
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 14px;
}

.footer-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
}

.footer-links a::before {
    content: '›';
    color: var(--primary);
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    margin-right: 4px;
}

.footer-links a:hover {
    color: white;
    padding-left: 12px;
}

.footer-links a:hover::before {
    opacity: 1;
    transform: translateX(0);
}

.footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 20px;
}

.footer-contact-item i {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 1rem;
    flex-shrink: 0;
}

.footer-contact-item span {
    color: #94a3b8;
    font-size: 0.95rem;
    line-height: 1.6;
}

.footer-contact-item a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-contact-item a:hover {
    color: var(--accent);
}

.footer-newsletter {
    margin-top: 30px;
}

.footer-newsletter p {
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 16px;
}

.newsletter-form {
    display: flex;
    gap: 10px;
}

.newsletter-form input {
    flex: 1;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 0.95rem;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
}

.newsletter-form input::placeholder {
    color: #64748b;
}

.newsletter-form input:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
}

.newsletter-form button {
    padding: 14px 24px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, var(--primary), #ec4899);
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.newsletter-form button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 24px 6%;
    position: relative;
    z-index: 1;
}

.footer-bottom-content {
    max-width: 1380px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
}

.footer-copyright {
    color: #64748b;
    font-size: 0.9rem;
}

.footer-copyright span {
    color: var(--accent);
    font-weight: 600;
}

.footer-bottom-links {
    display: flex;
    gap: 28px;
}

.footer-bottom-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
    color: var(--accent);
}

/* Footer Responsive */
@media (max-width: 1200px) {
    .footer-main {
        grid-template-columns: 1.2fr 1fr 1fr;
        gap: 30px;
        padding: 70px 5% 50px;
    }
    
    .footer-brand {
        grid-column: span 3;
        max-width: 100%;
        text-align: center;
    }
    
    .footer-logo {
        justify-content: center;
    }
    
    .footer-social {
        justify-content: center;
    }
    
    .footer-column {
        text-align: center;
    }
    
    .footer-column h4::after {
        left: 50%;
        transform: translateX(-50%);
    }
}

@media (max-width: 992px) {
    .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding: 60px 5% 50px;
    }
    
    .footer-brand {
        grid-column: span 2;
    }
    
    .footer-column:nth-child(3) {
        order: 4;
    }
    
    .footer-column:nth-child(4) {
        order: 3;
    }
    
    .footer-contact-item {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .footer-main {
        grid-template-columns: 1fr;
        gap: 35px;
        padding: 50px 5% 40px;
    }
    
    .footer-brand {
        grid-column: 1;
    }
    
    .footer-brand p {
        font-size: 0.95rem;
        line-height: 1.7;
    }
    
    .footer-column h4 {
        font-size: 1.1rem;
        margin-bottom: 20px;
        padding-bottom: 10px;
    }
    
    .footer-column h4::after {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .footer-links {
        padding: 0;
        margin: 0;
    }
    
    .footer-links li {
        margin-bottom: 12px;
    }
    
    .footer-links a {
        font-size: 0.95rem;
        padding: 8px 0;
    }
    
    .footer-contact-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 12px;
    }
    
    .footer-contact-item i {
        margin: 0 auto;
    }
    
    .footer-contact-item span {
        font-size: 0.9rem;
    }
    
    .footer-newsletter {
        margin-top: 20px;
    }
    
    .footer-newsletter p {
        font-size: 0.9rem;
    }
    
    .newsletter-form {
        flex-direction: column;
        gap: 12px;
    }
    
    .newsletter-form input {
        width: 100%;
        text-align: center;
    }
    
    .newsletter-form button {
        width: 100%;
        justify-content: center;
    }
    
    .footer-bottom {
        padding: 20px 5%;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
    
    .footer-copyright {
        font-size: 0.85rem;
    }
    
    .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
    }
    
    .footer-bottom-links a {
        font-size: 0.85rem;
    }
}

@media (max-width: 480px) {
    .footer-main {
        padding: 40px 4% 30px;
        gap: 30px;
    }
    
    .footer-brand {
        max-width: 100%;
    }
    
    .footer-brand p {
        font-size: 0.85rem;
    }
    
    .footer-logo img {
        width: 160px !important;
    }
    
    .footer-social {
        gap: 10px;
    }
    
    .footer-social a {
        width: 40px;
        height: 40px;
        font-size: 0.95rem;
    }
    
    .footer-column h4 {
        font-size: 1rem;
    }
    
    .footer-links a {
        font-size: 0.9rem;
    }
    
    .footer-contact-item i {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
    }
    
    .footer-newsletter p {
        font-size: 0.85rem;
    }
    
    .newsletter-form input,
    .newsletter-form button {
        padding: 12px 14px;
        font-size: 0.85rem;
    }
}
</style>