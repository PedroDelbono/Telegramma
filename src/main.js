import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Monta caminhos de arquivos da pasta public respeitando o "base" do Vite
// (ex.: /Telegramma/ no GitHub Pages).
app.config.globalProperties.$asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

app.use(router).mount('#app')
