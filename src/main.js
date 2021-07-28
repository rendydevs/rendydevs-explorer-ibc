import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import messages from '@/lang'

import VueI18n from 'vue-i18n'

import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'
import '@/libs/fetch'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

Vue.use(AsyncComputed)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages,
  fallbackLocale: 'en',
})

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
