<template>
    <!-- NAVBAR -->
  <nav>
    <router-link to="/" class="logo">
      <div>
        <img width="150" src="/images/bdy1.webp" alt="">
      </div>
    </router-link>

    <ul class="nav-menu">
      <li><router-link to="/" class="nav-link" :class="{ active: isActive('/') }">Home</router-link></li>
      <li><router-link to="/about" class="nav-link" :class="{ active: isActive('/about') }">About Us</router-link></li>
      <li><router-link to="/packages" class="nav-link" :class="{ active: isActive('/packages') }">Packages</router-link></li>
        <li class="dropdown">
        <a href="#" class="dropdown-trigger">
          Services
          <i class="fas fa-chevron-down"></i>
        </a>
        <div class="dropdown-content">
          <router-link to="/website-design" :class="{ active: isActive('/website-design') }">
            <span class="icon-wrap"><i class="fas fa-laptop-code"></i></span>
            <span class="link-text">Website Design</span>
          </router-link>
          <router-link to="/logo-design" :class="{ active: isActive('/logo-design') }">
            <span class="icon-wrap"><i class="fas fa-pen-nib"></i></span>
            <span class="link-text">Logo Design</span>
          </router-link>
          <router-link to="/brand-identity" :class="{ active: isActive('/brand-identity') }">
            <span class="icon-wrap"><i class="fas fa-id-badge"></i></span>
            <span class="link-text">Brand Identity</span>
          </router-link>
          <router-link to="/app-development" :class="{ active: isActive('/app-development') }">
            <span class="icon-wrap"><i class="fas fa-mobile-screen-button"></i></span>
            <span class="link-text">App Development</span>
          </router-link>
          <router-link to="/seo" :class="{ active: isActive('/seo') }">
            <span class="icon-wrap"><i class="fas fa-magnifying-glass-chart"></i></span>
            <span class="link-text">SEO Services</span>
          </router-link>
          <router-link to="/digital-marketing" :class="{ active: isActive('/digital-marketing') }">
            <span class="icon-wrap"><i class="fas fa-bullhorn"></i></span>
            <span class="link-text">Digital Marketing</span>
          </router-link>
        </div>
      </li>
      <li><router-link to="/faq" :class="{ active: isActive('/faq') }">FAQ</router-link></li>
      <li><router-link to="/contact" :class="{ active: isActive('/contact') }">Contact Us</router-link></li>
    </ul>

    <button class="cta-button">
      <i class="fas fa-rocket"></i>
      Get Started
    </button>

    <i class="fas fa-bars hamburger" id="hamburger" @click="toggleMobileMenu"></i>
  </nav>
 
  <!-- Mobile Overlay -->
  <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" :class="{ active: isMobileMenuOpen }" id="mobileMenu" style="display: none;">
    <router-link to="/" class="nav-link" :class="{ active: isActive('/') }">Home</router-link>
    <router-link to="/about" class="nav-link" :class="{ active: isActive('/about') }">About Us</router-link>
    <router-link to="/packages" class="nav-link" :class="{ active: isActive('/packages') }">Packages</router-link>
    <div class="mobile-dropdown">
      <a href="#" class="mobile-dropdown-toggle" @click.prevent="toggleMobileServices">
        Services
        <i class="fas fa-chevron-down" :class="{ rotated: isMobileServicesOpen }"></i>
      </a>
      <div class="mobile-dropdown-content" :class="{ active: isMobileServicesOpen }">
        <router-link to="/website-design" :class="{ active: isActive('/website-design') }">
          <span class="icon-wrap"><i class="fas fa-laptop-code"></i></span>
          Website Design
        </router-link>
        <router-link to="/logo-design" :class="{ active: isActive('/logo-design') }">
          <span class="icon-wrap"><i class="fas fa-pen-nib"></i></span>
          Logo Design
        </router-link>
        <router-link to="/brand-identity" :class="{ active: isActive('/brand-identity') }">
          <span class="icon-wrap"><i class="fas fa-id-badge"></i></span>
          Brand Identity
        </router-link>
        <router-link to="/app-development" :class="{ active: isActive('/app-development') }">
          <span class="icon-wrap"><i class="fas fa-mobile-screen-button"></i></span>
          App Development
        </router-link>
        <router-link to="/seo" :class="{ active: isActive('/seo') }">
          <span class="icon-wrap"><i class="fas fa-magnifying-glass-chart"></i></span>
          SEO Services
        </router-link>
        <router-link to="/digital-marketing" :class="{ active: isActive('/digital-marketing') }">
          <span class="icon-wrap"><i class="fas fa-bullhorn"></i></span>
          Digital Marketing
        </router-link>
      </div>
    </div>
    <router-link to="/faq" :class="{ active: isActive('/faq') }">FAQ</router-link>
    <router-link to="/contact" :class="{ active: isActive('/contact') }">Contact Us</router-link>
    <button class="cta-button">
      <i class="fas fa-rocket"></i>
      Get Started
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavbarSection',
  data() {
    return {    
      isMobileMenuOpen: false,
      isMobileServicesOpen: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (!this.isMobileMenuOpen) {
        this.isMobileServicesOpen = false;
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      this.isMobileServicesOpen = false;
    },
    toggleMobileServices() {
      this.isMobileServicesOpen = !this.isMobileServicesOpen;
    },
    isActive(path) {
      return this.currentRoute === path;
    }
  }
}
</script>


<style scoped>
  /* ==================== ADVANCED NAVBAR ==================== */
        nav {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 20px 15%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 4px 30px rgba(168, 85, 247, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-100%);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        nav.scrolled {
            padding: 12px 6%;
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 30px rgba(168, 85, 247, 0.12);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            font-weight: 700;
            animation: fadeInLeft 0.6s ease 0.2s both;
        }

        .logo .icon {
            font-size: 2.6rem;
            background: linear-gradient(135deg, #a855f7, #ec4899, #a855f7);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientShift 3s ease infinite;
            transition: transform 0.4s ease;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .logo:hover .icon {
            transform: rotateY(180deg) scale(1.1);
        }

        .logo .name {
            font-size: 1.6rem;
            letter-spacing: -1px;
            color: var(--dark);
            transition: color 0.3s ease;
        }

        .logo:hover .name {
            color: var(--primary);
        }

        .logo .tag {
            font-size: 0.85rem;
            font-weight: 600;
            color: #64748b;
            margin-top: -4px;
            letter-spacing: 1px;
            transition: color 0.3s ease;
        }

        .logo:hover .tag {
            color: var(--primary);
        }

        .nav-menu {
            display: flex;
            gap: 32px;
            list-style: none;
            align-items: center;
        }

        .nav-menu li {
            animation: fadeInUp 0.5s ease both;
        }

        .nav-menu li:nth-child(1) { animation-delay: 0.1s; }
        .nav-menu li:nth-child(2) { animation-delay: 0.15s; }
        .nav-menu li:nth-child(3) { animation-delay: 0.2s; }
        .nav-menu li:nth-child(4) { animation-delay: 0.25s; }
        .nav-menu li:nth-child(5) { animation-delay: 0.3s; }
        .nav-menu li:nth-child(6) { animation-delay: 0.35s; }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            font-size: 1rem;
            position: relative;
            transition: all 0.3s ease;
            padding: 8px 0;
        }

        .nav-menu a:after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(to right, var(--primary), var(--accent));
            border-radius: 2px;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-menu a:hover:after,
        .nav-menu a.active:after {
            width: 100%;
        }

        .nav-menu a:hover {
            color: var(--primary);
        }

        .dropdown {
            position: relative;
        }

        .dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }

        .dropdown-trigger i {
            font-size: 0.75rem;
            transition: transform 0.3s ease;
        }

        .dropdown:hover .dropdown-trigger i {
            transform: rotate(180deg);
        }

        .dropdown-content {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            border-radius: 16px;
            padding: 12px 0;
            min-width: 280px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(168, 85, 247, 0.1);
        }

        .dropdown:hover .dropdown-content {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(8px);
        }

        .dropdown-content a {
            padding: 14px 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            color: var(--dark);
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .dropdown-content a:hover {
            background: linear-gradient(90deg, rgba(168, 85, 247, 0.08), rgba(34, 211, 238, 0.08));
            color: var(--primary);
            padding-left: 28px;
        }

        .dropdown-content .icon-wrap {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(34, 211, 238, 0.08));
            color: var(--primary);
            font-size: 0.95rem;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .dropdown-content a:hover .icon-wrap {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
            transform: scale(1.1);
        }

        .dropdown-content .link-text {
            font-weight: 500;
        }

        .cta-button {
            background: linear-gradient(135deg, var(--primary), #ec4899);
            background-size: 200% 200%;
            color: white;
            border: none;
            padding: 14px 30px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 8px 25px rgba(168, 85, 247, 0.35);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeInRight 0.6s ease 0.4s both;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s ease;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            background-position: 100% 100%;
            transform: translateY(-3px) scale(1.03);
            box-shadow: 0 15px 35px rgba(168, 85, 247, 0.45);
        }

        .hamburger {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--dark);
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease 0.3s both;
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: rgba(168, 85, 247, 0.08);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .hamburger:hover {
            color: var(--primary);
            background: rgba(168, 85, 247, 0.15);
            transform: scale(1.05);
        }

        .hamburger.active {
            transform: rotate(90deg);
            background: var(--primary);
            color: white;
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
                display: flex !important;
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
                text-decoration: none;
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

        /* Mobile Dropdown Styles */
        .mobile-dropdown {
            width: 100%;
        }

        .mobile-dropdown-toggle {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 14px 16px !important;
            font-weight: 500;
            color: var(--dark) !important;
        }

        .mobile-dropdown-toggle i {
            transition: transform 0.3s ease;
        }

        .mobile-dropdown-toggle i.rotated {
            transform: rotate(180deg);
        }

        .mobile-dropdown-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
            background: linear-gradient(180deg, rgba(168, 85, 247, 0.05), rgba(34, 211, 238, 0.03));
            border-radius: 12px;
            margin-top: 4px;
        }

        .mobile-dropdown-content.active {
            max-height: 500px;
        }

        .mobile-dropdown-content a {
            padding: 14px 20px 14px 24px !important;
            font-size: 0.95rem !important;
            border-radius: 10px;
            margin: 4px 8px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 14px;
            color: var(--dark) !important;
            font-weight: 500;
        }

        .mobile-dropdown-content .icon-wrap {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(34, 211, 238, 0.08));
            color: var(--primary);
            font-size: 0.9rem;
            flex-shrink: 0;
        }

        .mobile-dropdown-content a.active {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.15));
            color: var(--primary) !important;
            font-weight: 600;
        }

        .mobile-dropdown-content a.active .icon-wrap {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
        }

        .mobile-dropdown-content a:hover {
            background: linear-gradient(90deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.08));
            padding-left: 28px !important;
        }

        /* Active state for desktop nav */
        .nav-menu a.active {
            color: var(--primary);
        }

        .nav-menu a.active:after {
            width: 100%;
        }

        /* Active state for mobile nav */
        .mobile-menu a.active {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.1));
            color: var(--primary);
            font-weight: 600;
        }
        #mobileMenu {
  margin-top: 60px;
}
</style>