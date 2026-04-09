import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import AboutUsPage from '../views/pages/AboutUsPage.vue'
import PackagesPage from '../views/pages/PackagesPage.vue'
import FaqPage from '../views/pages/FaqPage.vue'
import ContactUsPage from '../views/pages/ContactUsPage.vue'
import WebsiteDesignPage from '../views/pages/WebsiteDesignPage.vue'
import LogoDesignPage from '../views/pages/LogoDesignPage.vue'
import BrandIdentityPage from '../views/pages/BrandIdentityPage.vue'
import AppDevelopmentPage from '../views/pages/AppDevelopmentPage.vue'
import SeoPage from '../views/pages/SeoPage.vue'
import DigitalMarketingPage from '../views/pages/DigitalMarketingPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'Buy Dream Web - Professional Web Design & Digital Solutions' }
  },
  {
    path: '/about',
    name: 'AboutUsPage',
    component: AboutUsPage,
    meta: { title: 'About Us - Buy Dream Web' }
  },
  {
    path: '/packages',
    name: 'PackagesPage',
    component: PackagesPage,
    meta: { title: 'Packages & Pricing - Buy Dream Web' }
  },
  {
    path: '/faq',
    name: 'FaqPage',
    component: FaqPage,
    meta: { title: 'FAQ - Buy Dream Web' }
  },
  {
    path: '/contact',
    name: 'ContactUsPage',
    component: ContactUsPage,
    meta: { title: 'Contact Us - Buy Dream Web' }
  },
  {
    path: '/website-design',
    name: 'WebsiteDesignPage',
    component: WebsiteDesignPage,
    meta: { title: 'Website Design Services - Buy Dream Web' }
  },
  {
    path: '/logo-design',
    name: 'LogoDesignPage',
    component: LogoDesignPage,
    meta: { title: 'Logo Design Services - Buy Dream Web' }
  },
  {
    path: '/brand-identity',
    name: 'BrandIdentityPage',
    component: BrandIdentityPage,
    meta: { title: 'Brand Identity Services - Buy Dream Web' }
  },
  {
    path: '/app-development',
    name: 'AppDevelopmentPage',
    component: AppDevelopmentPage,
    meta: { title: 'App Development Services - Buy Dream Web' }
  },
  {
    path: '/seo',
    name: 'SeoPage',
    component: SeoPage,
    meta: { title: 'SEO Services - Buy Dream Web' }
  },
  {
    path: '/digital-marketing',
    name: 'DigitalMarketingPage',
    component: DigitalMarketingPage,
    meta: { title: 'Digital Marketing Services - Buy Dream Web' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Buy Dream Web'
  next()
})

export default router
