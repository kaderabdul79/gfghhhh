import App from '../js/vue/App.vue'
import router from './vue/router'
// import store from './vue/store'
// Composables
import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', 
  },
})
const app = createApp(App)
app.use(router)
// app.use(store)
app.use(vuetify)
app.mount('#app')
