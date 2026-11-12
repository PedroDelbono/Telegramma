<script setup>
import { ref } from 'vue'
import { company } from '../data/site'

const form = ref({ name: '', email: '', subject: '', message: '' })
const notice = ref('')
const noticeType = ref('info')

function submitForm() {
  if (!company.email) {
    noticeType.value = 'error'
    notice.value =
      'O e-mail comercial ainda não foi configurado. Adicione o endereço em src/data/site.js para habilitar o envio.'
    return
  }

  const subject = encodeURIComponent(form.value.subject || 'Contato pelo site')
  const body = encodeURIComponent(
    `Nome: ${form.value.name}\nE-mail: ${form.value.email}\n\n${form.value.message}`,
  )

  window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  noticeType.value = 'info'
  notice.value = 'Abrimos seu aplicativo de e-mail para você enviar a mensagem.'
}
</script>

<template>
  <section class="page-hero page-hero-green contact-page-hero">
    <div class="container">
      <p class="eyebrow eyebrow-light">Contato</p>
      <h1>Vamos conversar sobre controle biológico?</h1>
      <p class="page-hero-copy">
        Nossa equipe pode ajudar você a conhecer os produtos, as aplicações e as possibilidades
        de parceria.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container contact-layout">
      <div class="contact-intro">
        <p class="eyebrow">Fale com a Telegramma</p>
        <h2>Conte um pouco sobre o que você precisa.</h2>
        <p>
          Preencha o formulário para preparar uma mensagem no seu aplicativo de e-mail. O site
          não armazena nem envia seus dados para um servidor.
        </p>
        <div class="contact-details">
          <div v-if="company.email">
            <span>E-mail</span>
            <a :href="`mailto:${company.email}`">{{ company.email }}</a>
          </div>
          <div v-if="company.phone">
            <span>Telefone e WhatsApp</span>
            <a :href="`tel:${company.phone.replace(/\D/g, '')}`">{{ company.phone }}</a>
          </div>
          <p v-if="!company.email && !company.phone" class="fine-print">
            Os dados comerciais ainda não foram adicionados ao site.
          </p>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <label>
          Seu nome
          <input v-model.trim="form.name" name="name" autocomplete="name" required />
        </label>
        <label>
          Seu e-mail
          <input
            v-model.trim="form.email"
            type="email"
            name="email"
            autocomplete="email"
            required
          />
        </label>
        <label>
          Assunto
          <input v-model.trim="form.subject" name="subject" />
        </label>
        <label>
          Mensagem
          <textarea v-model.trim="form.message" name="message" rows="5" required></textarea>
        </label>
        <p v-if="notice" class="form-notice" :class="`notice-${noticeType}`" role="status">
          {{ notice }}
        </p>
        <button class="button button-dark" type="submit">Preparar mensagem <span aria-hidden="true">→</span></button>
      </form>
    </div>
  </section>
</template>
