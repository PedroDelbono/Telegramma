import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProductsView from './views/ProductsView.vue'
import TrichogrammaView from './views/TrichogrammaView.vue'
import EphestiaView from './views/EphestiaView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/produtos', name: 'products', component: ProductsView },
    {
      path: '/produtos/trichogramma-pretiosum',
      name: 'trichogramma',
      component: TrichogrammaView,
    },
    {
      path: '/produtos/ovos-de-ephestia',
      name: 'ephestia',
      component: EphestiaView,
    },
    { path: '/contato', name: 'contact', component: ContactView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
