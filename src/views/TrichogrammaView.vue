<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="detail-hero detail-hero-trichogramma">
    <div class="container detail-hero-content">
      <RouterLink class="back-link" to="/produtos">← Todos os produtos</RouterLink>
      <p class="eyebrow eyebrow-light">Controle biológico de pragas agrícolas</p>
      <h1><em>TeleGramma-P (Trichogramma pretiosum)</em></h1>
      <p>
        Um parasitoide que atua diretamente sobre os ovos das pragas, impedindo o
        desenvolvimento de lagartas antes que causem danos às culturas.
      </p>
    </div>
    <div class="detail-hero-art" aria-hidden="true">
      <span class="detail-ring"></span>
      <span class="detail-egg"></span>
      <span class="detail-bug">✳</span>
    </div>
  </section>

  <section class="section">
    <div class="container reading-layout">
      <div class="reading-heading">
        <p class="eyebrow">Conheça o produto</p>
        <h2>O controle começa antes da lagarta.</h2>
      </div>
      <div class="reading-copy">
        <p>
          O <em>Pretiobug (Trichogramma pretiosum)</em> (Hymenoptera: Trichogrammatidae) é uma
          pequena vespa parasitoide de ovos, amplamente estudada e utilizada em programas de
          controle biológico de pragas agrícolas.
        </p>
        <p>
          Sua atuação ocorre exclusivamente sobre ovos de insetos da ordem Lepidoptera, grupo
          que compreende mariposas e borboletas, muitas das quais apresentam importância
          econômica para a agricultura.
        </p>
        <p>
          As fêmeas localizam os ovos das pragas e realizam a oviposição em seu interior. O
          parasitoide se desenvolve utilizando o conteúdo do ovo hospedeiro, impedindo a
          formação e a eclosão da lagarta-praga.
        </p>
      </div>
    </div>
  </section>

  <section class="section section-tinted">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Como funciona</p>
          <h2>O ciclo do controle biológico.</h2>
        </div>
        <p>Uma ação precisa, na fase inicial do ciclo da praga.</p>
      </div>
      <figure class="infographic-frame">
        <img
          :src="$asset('assets/trichogramma-ciclo.png')"
          alt="Ilustração das etapas do parasitoide: oviposição no ovo da praga, desenvolvimento, pupação e emergência do adulto."
        />
      </figure>
      <div class="steps-grid">
        <article>
          <span>01</span>
          <h3>Localização dos ovos</h3>
          <p>As fêmeas adultas procuram e identificam ovos de insetos hospedeiros nas plantas.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Parasitismo</h3>
          <p>A fêmea deposita seus ovos no interior do ovo da praga.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Interrupção do ciclo</h3>
          <p>O parasitoide se desenvolve no ovo, impedindo a eclosão da lagarta-praga.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container split-callout">
      <div>
        <p class="eyebrow">Manejo integrado</p>
        <h2>Uma ferramenta para diferentes culturas.</h2>
      </div>
      <div>
        <p>
          O parasitoide pode integrar programas de Manejo Integrado de Pragas (MIP), associado
          ao monitoramento das lavouras e a outras estratégias de controle compatíveis.
        </p>
        <p class="fine-print">
          Consulte a equipe técnica para informações sobre recomendação de uso e disponibilidade.
        </p>
      </div>
    </div>
  </section>

  <section class="contact-banner">
    <div class="container contact-banner-content">
      <div>
        <p class="eyebrow eyebrow-light">Quer saber mais?</p>
        <h2>Converse com a Telegramma.</h2>
        <p>Entre em contato para conhecer as especificações técnicas e condições de fornecimento.</p>
      </div>
      <RouterLink class="button button-light" to="/contato">Fale com nossa equipe <span aria-hidden="true">→</span></RouterLink>
    </div>
  </section>
</template>
