import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import myHeader from './components/myHeader.vue'

const app = createApp(App)

app.component('myHeader',myHeader)

app.use(router)


app.mount('#app')
