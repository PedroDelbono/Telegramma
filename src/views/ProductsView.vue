<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page-hero page-hero-green">
    <div class="container">
      <p class="eyebrow eyebrow-light">Soluções Telegramma</p>
      <h1>Produtos para um manejo mais equilibrado.</h1>
      <p class="page-hero-copy">
        Conheça agentes e insumos biológicos desenvolvidos para apoiar a produção agrícola e
        os sistemas de controle biológico.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container product-list">
      <article class="product-list-item">
        <div class="product-number">01</div>
        <div class="product-summary">
          <p class="eyebrow">Parasitoide de ovos</p>
          <h2><em>Trichogramma pretiosum</em></h2>
          <p>
            Pequena vespa parasitoide que atua sobre ovos de lepidópteros-praga, interrompendo
            o ciclo da praga antes da eclosão da lagarta.
          </p>
          <RouterLink class="text-link" to="/produtos/trichogramma-pretiosum">Conheça o produto <span aria-hidden="true">→</span></RouterLink>
        </div>
        <div class="product-visual visual-trichogramma" aria-hidden="true">
          <span class="visual-orbit"></span>
          <span class="visual-egg"></span>
          <span class="visual-insect">✳</span>
        </div>
      </article>

      <article class="product-list-item">
        <div class="product-number">02</div>
        <div class="product-summary">
          <p class="eyebrow">Hospedeiro alternativo</p>
          <h2>Ovos de <em>Ephestia kuehniella</em></h2>
          <p>
            Insumo utilizado como alimento e hospedeiro alternativo para criação de
            parasitoides, predadores e outros organismos benéficos.
          </p>
          <RouterLink class="text-link" to="/produtos/ovos-de-ephestia">Conheça o produto <span aria-hidden="true">→</span></RouterLink>
        </div>
        <div class="product-visual visual-ephestia" aria-hidden="true">
          <span class="visual-grain grain-one"></span>
          <span class="visual-grain grain-two"></span>
          <span class="visual-grain grain-three"></span>
          <span class="visual-grain grain-four"></span>
          <span class="visual-grain grain-five"></span>
        </div>
      </article>
    </div>
  </section>

  <section class="section section-tinted">
    <div class="container split-callout">
      <div>
        <p class="eyebrow">Tecnologia e inovação</p>
        <h2>Conhecimento aplicado em cada etapa.</h2>
      </div>
      <p>
        Aprimoramos continuamente os processos de produção de agentes biológicos, com atenção
        à eficiência operacional, ao controle de qualidade e à inovação tecnológica.
      </p>
    </div>
  </section>
</template>
