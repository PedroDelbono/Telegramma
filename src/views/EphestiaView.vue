<script setup>
import { RouterLink } from 'vue-router'

const audiences = [
  'Biofábricas de agentes de controle biológico',
  'Empresas produtoras de parasitoides e predadores',
  'Laboratórios de criação de insetos e ácaros',
  'Universidades e instituições de pesquisa',
  'Empresas de desenvolvimento de tecnologias biológicas',
]
</script>

<template>
  <section class="detail-hero detail-hero-ephestia">
    <div class="container detail-hero-content">
      <RouterLink class="back-link" to="/produtos">← Todos os produtos</RouterLink>
      <p class="eyebrow eyebrow-light">Insumo para controle biológico</p>
      <h1>Ovos de <em>Ephestia kuehniella</em></h1>
      <p>
        Um hospedeiro alternativo versátil para a criação de agentes de controle biológico.
      </p>
    </div>
    <div class="ephestia-pattern" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </section>

  <section class="section">
    <div class="container reading-layout">
      <div class="reading-heading">
        <p class="eyebrow">Conheça o produto</p>
        <h2>Um insumo versátil para a criação de inimigos naturais.</h2>
      </div>
      <div class="reading-copy">
        <p>
          Os ovos de <em>Ephestia kuehniella</em> são utilizados como alimento e hospedeiro
          alternativo na criação de diferentes organismos benéficos, incluindo parasitoides e
          predadores empregados em programas de controle biológico de pragas agrícolas.
        </p>
        <p>
          Conhecida como traça-da-farinha, <em>Ephestia kuehniella</em> é uma espécie de
          lepidóptero cujos ovos são um insumo estratégico para biofábricas, laboratórios e
          empresas especializadas em controle biológico.
        </p>
      </div>
    </div>
  </section>

  <section class="section section-tinted">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Principais aplicações</p>
          <h2>Um recurso para diferentes criações.</h2>
        </div>
        <p>Utilizado em sistemas controlados de criação e multiplicação de organismos benéficos.</p>
      </div>
      <div class="application-gallery">
        <figure>
          <img
            :src="$asset('assets/aplicacoes-biologicas.png')"
            alt="Aplicações de ovos de Ephestia: criação de parasitoides de ovos e alimentação de insetos predadores."
          />
          <figcaption>Criação de parasitoides e insetos predadores.</figcaption>
        </figure>
        <figure>
          <img
            :src="$asset('assets/producao-ephestia.png')"
            alt="Exemplos de ácaro predador e preparação de ovos de Ephestia em laboratório."
          />
          <figcaption>Insumo para pesquisa, desenvolvimento e criação de inimigos naturais.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container split-callout">
      <div>
        <p class="eyebrow">Qualidade e produção</p>
        <h2>Processos pensados para cada aplicação.</h2>
      </div>
      <p>
        A qualidade dos ovos é importante para o sucesso dos sistemas de criação. A Telegramma
        trabalha com produção especializada, buscando padronização dos processos de criação,
        coleta e preparação.
      </p>
    </div>
  </section>

  <section class="section section-tinted">
    <div class="container audience-layout">
      <div>
        <p class="eyebrow">Para quem é indicado?</p>
        <h2>Para quem trabalha com biologia aplicada.</h2>
      </div>
      <ul class="audience-list">
        <li v-for="audience in audiences" :key="audience">{{ audience }}</li>
      </ul>
    </div>
  </section>

  <section class="contact-banner">
    <div class="container contact-banner-content">
      <div>
        <p class="eyebrow eyebrow-light">Consulte disponibilidade</p>
        <h2>Adquira ovos de <em>Ephestia kuehniella</em>.</h2>
        <p>Consulte quantidades e condições de fornecimento.</p>
      </div>
      <RouterLink class="button button-light" to="/contato">Solicitar orçamento <span aria-hidden="true">→</span></RouterLink>
    </div>
  </section>
</template>
