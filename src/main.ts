import { createApp } from 'vue'
import App from './App.vue'

import { i18n } from './plugins/i18n'
import router from './router'
import store, {key} from './store'
import "@/assets/scss/style.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .use(store, key)
    .use(i18n)
    .use(router)
    .mount('#app')
