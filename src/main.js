import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import TransitionRoot from '@/components/TransitionRoot.vue'
import MainLayout from '@/layouts/MainLayout.vue'

import { inject } from '@vercel/analytics';

import 'animate.css'
import 'hover.css'
import 'boxicons'

import '@/assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('TransitionRoot', TransitionRoot)
app.component('MainLayout', MainLayout)

app.mount('#app')

inject();


AOS.init()
