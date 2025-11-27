// Vue 앱을 생성하고, Router와 Pinia 같은 플러그인을 연결하여 index.html에 Mount(연결)하는 설정 파일
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
