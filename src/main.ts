import { createApp } from 'vue'
import App from './App.vue'

import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"

import { i18n } from './plugins/i18n'
import router from './router'
import store, {key} from './store'

import "@/assets/scss/style.scss"
import "@/assets/scss/sizing.scss"
import "@/assets/scss/position.scss"
import "@/assets/scss/color.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faPen, faClock, faUsers, faDice } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faPen, faClock, faUsers, faDice)

createApp(App)
    .use(store, key)
    .use(i18n)
    .use(router)
    .use(Toast)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
