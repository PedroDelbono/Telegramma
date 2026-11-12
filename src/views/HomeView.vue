<script setup>
import { RouterLink } from 'vue-router'

const values = [
  {
    number: '01',
    title: 'Conhecimento científico',
    text: 'Decisões fundamentadas em conhecimento técnico e pesquisa.',
  },
  {
    number: '02',
    title: 'Qualidade',
    text: 'Atenção aos processos produtivos e à qualidade dos produtos.',
  },
  {
    number: '03',
    title: 'Inovação',
    text: 'Busca contínua por melhorias e novas tecnologias.',
  },
  {
    number: '04',
    title: 'Sustentabilidade',
    text: 'Contribuição para práticas agrícolas mais sustentáveis.',
  },
]
</script>

<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-copy">
        <p class="eyebrow eyebrow-light">Telegramma Agentes Biológicos e Consultoria</p>
        <h1>Ciência e inovação a serviço do controle biológico</h1>
        <p class="hero-description">
          Soluções e tecnologias para o manejo de pragas agrícolas com conhecimento,
          qualidade e inovação.
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-light" to="/produtos">Conheça as soluções</RouterLink>
          <RouterLink class="text-link text-link-light" to="/contato">Fale com a equipe <span aria-hidden="true">→</span></RouterLink>
        </div>
      </div>
      <div class="hero-illustration" aria-hidden="true">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <span class="hero-leaf leaf-one"></span>
        <span class="hero-leaf leaf-two"></span>
        <span class="hero-leaf leaf-three"></span>
        <span class="hero-dot dot-one"></span>
        <span class="hero-dot dot-two"></span>
        <span class="hero-dot dot-three"></span>
        <div class="hero-seal"><span>VIDA</span><strong>+</strong></div>
      </div>
      <span class="hero-note">Biologia aplicada ao campo</span>
    </div>
  </section>

  <section class="section">
    <div class="container intro-grid">
      <div>
        <p class="eyebrow">Quem somos</p>
        <h2>Biologia que cultiva novas possibilidades.</h2>
      </div>
      <div class="intro-copy">
        <p>
          A Telegramma Agentes Biológicos e Consultoria é uma empresa dedicada à produção e
          comercialização de soluções biológicas e ao desenvolvimento de tecnologias voltadas
          ao manejo de pragas agrícolas.
        </p>
        <p>
          Integramos conhecimento científico, qualidade de processos e inovação para ampliar
          o acesso a alternativas sustentáveis para a agricultura.
        </p>
        <RouterLink class="text-link" to="/produtos">Explore nossas soluções <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>
  </section>

  <section class="section section-tinted">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Nossas soluções</p>
          <h2>Conhecimento transformado em ação.</h2>
        </div>
        <RouterLink class="text-link" to="/produtos">Ver todos os produtos <span aria-hidden="true">→</span></RouterLink>
      </div>

      <div class="solution-grid">
        <RouterLink class="solution-card" to="/produtos/trichogramma-pretiosum">
          <span class="card-index">01 / PARASITOIDE</span>
          <span class="solution-symbol symbol-egg" aria-hidden="true"><i></i></span>
          <h3>TeleGramma-P (Trichogramma pretiosum)</h3>
          <p>Parasitoide de ovos de lepidópteros-praga para o manejo integrado de pragas.</p>
          <span class="card-link">Saiba mais <span aria-hidden="true">↗</span></span>
        </RouterLink>
        <RouterLink class="solution-card" to="/produtos/ovos-de-ephestia">
          <span class="card-index">02 / INSUMO BIOLÓGICO</span>
          <span class="solution-symbol symbol-seed" aria-hidden="true"><i></i><i></i></span>
          <h3>Ovos de <em>Ephestia kuehniella</em></h3>
          <p>Hospedeiro alternativo para criação e multiplicação de agentes benéficos.</p>
          <span class="card-link">Saiba mais <span aria-hidden="true">↗</span></span>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-heading values-heading">
        <div>
          <p class="eyebrow">Nosso compromisso</p>
          <h2>Ciência, cuidado e propósito.</h2>
        </div>
        <p>Trabalhamos para desenvolver soluções alinhadas aos desafios reais do setor agrícola.</p>
      </div>
      <div class="values-grid">
        <article v-for="value in values" :key="value.number" class="value-item">
          <span>{{ value.number }}</span>
          <h3>{{ value.title }}</h3>
          <p>{{ value.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="contact-banner">
    <div class="container contact-banner-content">
      <div>
        <p class="eyebrow eyebrow-light">Vamos conversar?</p>
        <h2>Vamos avançar juntos no controle biológico?</h2>
        <p>Entre em contato para conhecer nossas soluções e possibilidades de parceria.</p>
      </div>
      <RouterLink class="button button-light" to="/contato">Entre em contato <span aria-hidden="true">→</span></RouterLink>
    </div>
  </section>
</template>
