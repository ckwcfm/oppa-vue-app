import { createApp, markRaw } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import './styles/index.css'
import { createPinia } from 'pinia'
import router from './router'

loadFonts()
const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

createApp(App).use(vuetify).use(pinia).use(router).mount('#app')
