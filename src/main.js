import { createApp,reactive } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import myHeader from './components/myHeader.vue'
import neumorphismButton from '@/components/neumorphism/neumorphismButton.vue'

import {loginByToken} from '@/api/users'
loginByToken()

const app = createApp(App)

app.component('myHeader',myHeader)
.component('neumorphismButton',neumorphismButton)

app.use(router)

app.mount('#app')
