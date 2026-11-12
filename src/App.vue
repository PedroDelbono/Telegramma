<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { company } from './data/site'

const route = useRoute()
const menuOpen = ref(false)
const companyName = company.legalName
const currentYear = new Date().getFullYear()

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="container header-content">
        <RouterLink class="brand" to="/" aria-label="Telegramma - página inicial">
          <img class="brand-mark" src="/assets/telegramma-mark.png" alt="" />
          <span class="brand-name">
            <img class="brand-wordmark" src="/assets/telegramma-wordmark.png" alt="" />
            <small>Agentes biológicos e consultoria</small>
          </span>
        </RouterLink>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="main-navigation"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">{{ menuOpen ? 'Fechar menu' : 'Abrir menu' }}</span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="main-navigation" class="main-navigation" :class="{ 'is-open': menuOpen }">
          <RouterLink to="/">Início</RouterLink>
          <RouterLink to="/produtos">Produtos</RouterLink>
          <RouterLink class="nav-contact" to="/contato">Contato</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-content">
        <RouterLink class="footer-brand" to="/">{{ companyName }}</RouterLink>
        <p>Ciência e tecnologia a serviço do controle biológico.</p>
        <div class="footer-links">
          <RouterLink to="/produtos">Conheça nossos produtos</RouterLink>
          <RouterLink to="/contato">Fale com a equipe</RouterLink>
        </div>
        <small>© {{ currentYear }} Telegramma. Todos os direitos reservados.</small>
      </div>
    </footer>
  </div>
</template>
